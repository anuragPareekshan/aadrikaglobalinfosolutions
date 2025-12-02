
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const hamburger = document.querySelector('.hamburger');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});
const header = document.getElementById('mainHeader');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('header-scrolled');
    } else {
        header.classList.remove('header-scrolled');
    }
});
// Mobile dropdown functionality
const mobileDropdownTriggers = document.querySelectorAll('.mobile-dropdown-trigger');

mobileDropdownTriggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
        const content = trigger.nextElementSibling;
        const icon = trigger.querySelector('.mobile-dropdown-icon');
        const isActive = content.classList.contains('active');

        if (isActive) {
            content.classList.remove('active');
            content.classList.add('hidden');
            icon.style.transform = 'rotate(90deg)';
        } else {
            content.classList.remove('hidden');
            content.classList.add('active');
            icon.style.transform = 'rotate(-90deg)';
        }
    });
});
const industryData = {
    industries: {
        title: "Industries",
        description: "Aadrika partners with organizations across diverse industries — including technology, healthcare, finance, manufacturing, energy, and retail — to help them accelerate innovation, optimize operations, and achieve sustainable growth.",
        image: "assets/images/industries.jpg"
    },
    services: {
        title: "Services",
        description: "From capability development to cost management, new product development to post-merger integration, our comprehensive services deliver tangible results and drive sustainable business transformation.",
        image: "assets/images/services.jpg"
    },
    technology: {
        title: "Technology Solutions",
        description: "We leverage cutting-edge technology platforms including SAP, Oracle, Analytics, and Microsoft to build robust, scalable solutions that transform your operations and drive digital excellence.",
        image: "assets/images/technology-solution.jpg"
    },
    expertise: {
        title: "Expertise",
        description: "Our multidisciplinary expertise spans analytics & reporting, change management, operational strategy, process engineering, program management, systems implementation, and training — ensuring holistic transformation.",
        image: "assets/images../expertise.jpg"
    }
};
const industryTabs = document.querySelectorAll('.industry-tab');
const contentTitle = document.getElementById('contentTitle');
const contentDescription = document.getElementById('contentDescription');
const contentLink = document.getElementById('contentLink');
const contentImage = document.getElementById('contentImage');
function updateContent(industry) {
    const data = industryData[industry];
    contentTitle.textContent = data.title;
    contentDescription.textContent = data.description;
    contentLink.href = data.link;
    contentLink.textContent = data.linkText;
    contentImage.src = data.image;
    contentImage.alt = data.title;
}
industryTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        industryTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        const industry = tab.getAttribute('data-industry');
        updateContent(industry);
    });
});
const accordionTriggers = document.querySelectorAll('.accordion-trigger');
accordionTriggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
        const content = trigger.nextElementSibling;
        const icon = trigger.querySelector('.accordion-icon');
        const isActive = content.classList.contains('active');
        document.querySelectorAll('.accordion-content').forEach(c => {
            c.classList.remove('active');
        });
        document.querySelectorAll('.accordion-icon').forEach(i => {
            i.style.transform = 'rotate(90deg)';
        });
        document.querySelectorAll('.accordion-trigger h3').forEach(h => {
            h.classList.remove('text-aadrika-blue');
        });
        if (!isActive) {
            content.classList.add('active');
            icon.style.transform = 'rotate(-90deg)';
            trigger.querySelector('h3').classList.add('text-aadrika-blue');
        }
    });
});
let currentSlide = 0;
const testimonialTrack = document.querySelector('.testimonial-track');
const totalSlides = document.querySelectorAll('.testimonial-slide').length;
const indicators = document.querySelectorAll('.carousel-indicator');
const prevBtn = document.getElementById('prevTestimonial');
const nextBtn = document.getElementById('nextTestimonial');

function updateCarousel() {
    testimonialTrack.style.transform = `translateX(-${currentSlide * 100}%)`;

    indicators.forEach((indicator, index) => {
        if (index === currentSlide) {
            indicator.classList.add('active');
        } else {
            indicator.classList.remove('active');
        }
    });
}

nextBtn.addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateCarousel();
});

prevBtn.addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateCarousel();
});

indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        currentSlide = index;
        updateCarousel();
    });
});
updateCarousel();
setInterval(() => {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateCarousel();
}, 7000);

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});


const timelineProgress = document.getElementById('timelineProgress');
const timelineContainer = document.querySelector('.timeline-container');

function updateTimelineProgress() {
    if (!timelineContainer) return;

    const rect = timelineContainer.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    if (rect.top < windowHeight && rect.bottom > 0) {
        const scrollPercentage = Math.min(
            Math.max((windowHeight - rect.top) / (windowHeight + rect.height), 0),
            1
        );
        const maxHeight = 25;
        timelineProgress.style.height = `${scrollPercentage * maxHeight * 4}%`;
    }
}
updateTimelineProgress();
window.addEventListener('scroll', updateTimelineProgress);
window.addEventListener('resize', updateTimelineProgress);

const cards = document.querySelectorAll('.card-hover');
cards.forEach(card => {
    card.addEventListener('mouseenter', function () {
        this.style.transform = 'translateY(-8px)';
        this.style.boxShadow = '0 12px 24px rgba(0, 0, 0, 0.15)';
    });
    card.addEventListener('mouseleave', function () {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in-up, .card-hover').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});