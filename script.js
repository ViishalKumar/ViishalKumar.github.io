// Loader
window.addEventListener('load', () => {
    document.getElementById('loader').style.display = 'none';
    document.getElementById('content').style.display = 'block';
});

// Cards 3D Tilt
const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    // Random float duration
    card.style.animationDuration = `${(Math.random() * 2 + 3).toFixed(2)}s`;

    card.addEventListener('mousemove', e => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * 10;
        const rotateY = ((x - centerX) / centerX) * 10;

        card.style.transform = `rotateX(${-rotateX}deg) rotateY(${rotateY}deg) translateZ(20px)`;
        card.querySelector('h3').style.transform = `translateZ(30px)`;
        card.querySelector('img').style.transform = `translateZ(20px) scale(1.05)`;
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = `rotateX(0deg) rotateY(0deg) translateZ(0)`;
        card.querySelector('h3').style.transform = `translateZ(0)`;
        card.querySelector('img').style.transform = `translateZ(0) scale(1)`;
    });
});
