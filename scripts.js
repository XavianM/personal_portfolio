document.addEventListener('DOMContentLoaded', () => {
    // Select all sections (or section:not(#home) if you want hero to stay visible)
    const sections = document.querySelectorAll('section');

    const observerOptions = {
        root: null,
        // Trigger slightly earlier (10% visibility) for smoother scroll-up re-entry
        threshold: 0.1, 
        rootMargin: '-20px 0px -20px 0px' // Padding prevents edges from flickering
    };

    const revealOnScroll = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal');
            } else {
                entry.target.classList.remove('reveal');
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        revealOnScroll.observe(section);
    });
});