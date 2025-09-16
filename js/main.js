// Smooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', function() {
    // Add smooth scrolling to all links with href="#something"
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add intersection observer for scroll animations
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

    // Observe all sections for scroll animations
    document.querySelectorAll('.section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(section);
    });

    // Add hover effects for skill tags
    document.querySelectorAll('.skill-tag').forEach(tag => {
        tag.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
            this.style.transition = 'transform 0.2s ease';
        });
        
        tag.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });

    // Add click effect for contact items
    document.querySelectorAll('.contact-item').forEach(item => {
        item.addEventListener('click', function() {
            // Add a subtle click animation
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'translateY(-5px)';
            }, 100);
        });
    });

    // Typing effect for hero title (optional enhancement)
    const heroTitle = document.querySelector('.hero h1');
    if (heroTitle) {
        const text = heroTitle.textContent;
        heroTitle.textContent = '';
        let i = 0;
        
        function typeWriter() {
            if (i < text.length) {
                heroTitle.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        }
        
        // Start typing effect after a short delay
        setTimeout(typeWriter, 1000);
    }

    // Add loading animation for project images
    document.querySelectorAll('.project-image img').forEach(img => {
        // Set initial state first
        img.style.opacity = '0';
        img.style.transform = 'scale(1.1)';
        img.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        
        // Function to show image
        const showImage = () => {
            img.style.opacity = '1';
            img.style.transform = 'scale(1)';
        };
        
        // Check if image is already loaded
        if (img.complete && img.naturalHeight !== 0) {
            showImage();
        } else {
            // Add load event listener
            img.addEventListener('load', showImage);
            img.addEventListener('error', function() {
                // Show image even if there's an error
                this.style.opacity = '1';
                this.style.transform = 'scale(1)';
            });
        }
    });

    // Console log for portfolio
    console.log('%c👋 Hey there! Welcome to Ahmed Hesham\'s Portfolio', 'color: #7777c6; font-size: 16px; font-weight: bold;');
    console.log('%cInterested in the code? Check out the GitHub repo!', 'color: #ff77c6; font-size: 14px;');
});