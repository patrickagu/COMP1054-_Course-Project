document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const menuToggle = document.querySelector('.navbar__toggle');
    const navbarMenu = document.querySelector('.navbar__menu');
    
    menuToggle.addEventListener('click', function() {
        navbarMenu.classList.toggle('active');
    });
    
    // Close menu when clicking on a link
    const navLinks = document.querySelectorAll('.navbar__menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navbarMenu.classList.remove('active');
        });
    });
    
    // Scroll reveal animations
    const sections = document.querySelectorAll('.section');
    
    const scrollReveal = function() {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (sectionTop < windowHeight - 100) {
                section.style.opacity = '1';
                section.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Initial check
    scrollReveal();
    
    // Check on scroll
    window.addEventListener('scroll', scrollReveal);
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Sticky navbar on scroll
    const navbar = document.querySelector('.navbar');
    let lastScroll = 0;
    
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll <= 0) {
            navbar.classList.remove('scroll-up');
            return;
        }
        
        if (currentScroll > lastScroll && !navbar.classList.contains('scroll-down')) {
            navbar.classList.remove('scroll-up');
            navbar.classList.add('scroll-down');
        } else if (currentScroll < lastScroll && navbar.classList.contains('scroll-down')) {
            navbar.classList.remove('scroll-down');
            navbar.classList.add('scroll-up');
        }
        
        lastScroll = currentScroll;
    });
    
    // Section fade in/out on scroll
    const serviceSection = document.getElementById('services');
    const workSection = document.getElementById('work');
    
    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;
        const servicePosition = serviceSection.offsetTop;
        const workPosition = workSection.offsetTop;
        const windowHeight = window.innerHeight;
        
        // Service section animation
        if (scrollPosition > servicePosition - windowHeight / 2) {
            serviceSection.style.opacity = '1';
            serviceSection.style.transform = 'translateY(0)';
        } else {
            serviceSection.style.opacity = '0';
            serviceSection.style.transform = 'translateY(50px)';
        }
        
        // Work section animation
        if (scrollPosition > workPosition - windowHeight / 2) {
            workSection.style.opacity = '1';
            workSection.style.transform = 'translateY(0)';
        } else {
            workSection.style.opacity = '0';
            workSection.style.transform = 'translateY(50px)';
        }
    });
});
