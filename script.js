// Testimonial

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 2.1,
  spaceBetween: 20,
  navigation: {
    nextEl: ".button-next",
    prevEl: ".button-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 15,
    },
    480: {
      slidesPerView: 1.1,
      spaceBetween: 15,
    },
    620: {
      slidesPerView: 1.5,
      spaceBetween: 20,
    },
    975: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1000: {
      slidesPerView: 2.2,
      spaceBetween: 20,
    },
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


//Dropdown Toggle
document.addEventListener('DOMContentLoaded', () => {
    const dropDownItems = document.querySelectorAll('.dropDown-item');
    
    dropDownItems.forEach(item => {
        const dropDownQuestion = item.querySelector('.dropDown-question');
        
        dropDownQuestion.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            
            dropDownItems.forEach(dropDownItem => {
                if (dropDownItem !== item) {
                    dropDownItem.classList.remove('active');
                }
            });
            
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


const stickySection = document.getElementById('stickySection');
const imageItems = document.querySelectorAll('.aboutImage-item');
const contentItems = document.querySelectorAll('.aboutContent-item content-item');
const scrollProgress = document.getElementById('scrollProgress');

function updateActiveImage() {
    const rect = stickySection.getBoundingClientRect();
    const sectionTop = rect.top;
    const sectionHeight = rect.height;
    const windowHeight = window.innerHeight;

    let progress = 0;
    if (sectionTop <= 0 && sectionTop > -(sectionHeight - windowHeight)) {
        progress = Math.abs(sectionTop) / (sectionHeight - windowHeight);
    } else if (sectionTop <= -(sectionHeight - windowHeight)) {
        progress = 1;
    }

    scrollProgress.style.height = (progress * 100) + '%';

    const totalImages = imageItems.length;
    const imageIndex = Math.min(Math.floor(progress * totalImages), totalImages - 1);

    imageItems.forEach((item, index) => {
        item.classList.toggle('active', index === imageIndex);
    });
}

let ticking = false;
function onScroll() {
    if (!ticking) {
        requestAnimationFrame(() => {
            updateActiveImage();
            ticking = false;
        });
        ticking = true;
    }
}

window.addEventListener('scroll', onScroll);

updateActiveImage();