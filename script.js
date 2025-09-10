//скажу честно js помогал писать ии
document.addEventListener('DOMContentLoaded', () => {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
    const videoToPlay = document.getElementById('inspiration-video');
    const observerOptions = {
        root: null, 
        rootMargin: '0px',
        threshold: 0.5 
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                videoToPlay.play();
            } else {
                videoToPlay.pause();
            }
        });
    };
    const videoObserver = new IntersectionObserver(observerCallback, observerOptions);
    if (videoToPlay) {
        videoObserver.observe(videoToPlay);
    }
});