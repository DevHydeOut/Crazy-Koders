// Testimonial

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2.1,
    spaceBetween: 20,
    navigation: {
    nextEl: ".button-next",
    prevEl: ".button-prev",
    },
});

document.addEventListener('DOMContentLoaded', () => {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            
            // Close all other FAQ items
            faqItems.forEach(faqItem => {
                if (faqItem !== item) {
                    faqItem.classList.remove('active');
                }
            });
            
            // Toggle current item
            if (isActive) {
                item.classList.remove('active');
            } else {
                item.classList.add('active');
            }
        });
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('.navLink-link');
    const path = window.location.pathname;

    links.forEach(link => {
        const href = link.getAttribute('href');

        if (path === href) {
            link.classList.add('active');
        }
    });
});


