document.addEventListener('DOMContentLoaded', () => {

    // 1. Hero Text Reveal on Load
    const heroReveals = document.querySelectorAll('.reveal-text, .hero-subtitle, .hero-actions');

    setTimeout(() => {
        heroReveals.forEach((el, index) => {
            setTimeout(() => {
                el.classList.add('visible');
                // Note: We need to define .visible for subtitle/actions in CSS if not reused
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            }, index * 150);
        });
    }, 200);

    // 2. Scroll Observer for Bento Cards
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const bentoCards = document.querySelectorAll('.bento-card');
    bentoCards.forEach((card, index) => {
        // Set initial state for scroll reveal
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `opacity 0.6s ease, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.1}s`;

        observer.observe(card);
    });

    // 3. Marquee enhancement (optional clone for smooth loop)
    const track = document.querySelector('.marquee-track');
    if (track) {
        const content = track.innerHTML;
        track.innerHTML = content + content; // Duplicate for seamless infinite scroll
    }
});
