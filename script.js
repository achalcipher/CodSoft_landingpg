document.addEventListener('DOMContentLoaded', function() {
    let lazyImages = [].slice.call(document.querySelectorAll('img.lazyload'));

    if ('IntersectionObserver' in window) {
        let lazyImageObserver = new IntersectionObserver(function(entries, observer) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    let lazyImage = entry.target;
                    lazyImage.src = lazyImage.dataset.src;
                    lazyImage.classList.remove('lazyload');
                    lazyImage.classList.add('lazyloaded');
                    lazyImageObserver.unobserve(lazyImage);
                }
            });
        });

        lazyImages.forEach(function(lazyImage) {
            lazyImageObserver.observe(lazyImage);
        });
    } else {
    
        lazyImages.forEach(function(lazyImage) {
            lazyImage.src = lazyImage.dataset.src;
            lazyImage.classList.remove('lazyload');
            lazyImage.classList.add('lazyloaded');
        });
    }
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

const form = document.querySelector('.email-signup');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert("Thank you for subscribing!");
    form.reset();
});