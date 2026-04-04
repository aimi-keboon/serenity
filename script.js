/**
 * Langkawi Serenity 2026 - Main Script
 * Consolidated & Bug-Free Version
 */

// --- 1. Carousel Logic (Global Scope so HTML buttons can see it) ---
let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-slide');
    if (slides.length === 0) return;
    
    slides.forEach((slide) => {
        slide.classList.remove('active');
    });
    
    // Ensure index stays within bounds
    currentSlide = (index + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
}

function moveSlide(step) {
    showSlide(currentSlide + step);
}

// --- 2. Main Logic Initialization ---
document.addEventListener('DOMContentLoaded', () => {
    
    // --- Mobile Menu Logic ---
    const menuToggle = document.querySelector('#mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    const body = document.querySelector('body');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            menuToggle.classList.toggle('is-active');

            // Prevent scrolling when menu is open
            if (navLinks.classList.contains('active')) {
                body.style.overflow = 'hidden';
            } else {
                body.style.overflow = 'auto';
            }
        });

        // Close mobile menu when a link is clicked
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                menuToggle.classList.remove('is-active');
                body.style.overflow = 'auto';
            });
        });
    }

    // --- Dynamic Navbar Styling on Scroll ---
    const navbar = document.getElementById('navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.style.background = 'rgba(255, 255, 255, 0.98)';
                navbar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.08)';
                navbar.style.padding = '12px 5%';
            } else {
                navbar.style.background = '#ffffff';
                navbar.style.boxShadow = 'none';
                navbar.style.padding = '20px 5%';
            }
        });
    }

    // --- Smooth Scrolling for On-Page Anchors ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return; // Ignore empty links

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                const offset = 80; // Distance to clear fixed navbar
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - offset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // --- Scroll Animations (Fade-in Images) ---
    const images = document.querySelectorAll('.card, .price-card, img');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, { threshold: 0.1 });

    images.forEach(img => {
        img.style.opacity = "0";
        img.style.transform = "translateY(30px)";
        img.style.transition = "all 0.8s ease-out";
        observer.observe(img);
    });

    // --- Initialize Carousel Auto-play ---
    if (document.querySelector('.carousel-slide')) {
        setInterval(() => moveSlide(1), 5000);
    }
});