// Scroll Animation
document.addEventListener('DOMContentLoaded', () => {
    // 3D Tilt Effect for Header
    const header = document.querySelector('.header');
    header.addEventListener('mousemove', (e) => {
        const rect = header.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const xRotation = ((y - rect.height / 2) / rect.height) * 10;
        const yRotation = ((x - rect.width / 2) / rect.width) * 10;
        
        header.style.transform = `perspective(1000px) rotateX(${-xRotation}deg) rotateY(${yRotation}deg) scale3d(1.02, 1.02, 1.02)`;
    });

    header.addEventListener('mouseleave', () => {
        header.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
    });

    // Particle Background Effect
    const createParticles = () => {
        const container = document.querySelector('.container');
        for(let i = 0; i < 50; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.cssText = `
                position: fixed;
                width: ${Math.random() * 5}px;
                height: ${Math.random() * 5}px;
                background: rgba(37, 99, 235, ${Math.random() * 0.3});
                left: ${Math.random() * 100}vw;
                top: ${Math.random() * 100}vh;
                pointer-events: none;
                border-radius: 50%;
                animation: float ${5 + Math.random() * 10}s linear infinite;
            `;
            container.appendChild(particle);
        }
    };
    createParticles();

    // Enhanced Scroll Animation
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0) scale(1)';
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '-50px'
    });

    document.querySelectorAll('.section').forEach((section) => {
        section.style.transform = 'translateY(50px) scale(0.95)';
        observer.observe(section);
    });

    // Skill Items Animation
    const skillItems = document.querySelectorAll('.skill-item');
    skillItems.forEach(item => {
        item.addEventListener('mouseover', () => {
            item.style.transform = 'translateY(-5px) scale(1.05) rotate(2deg)';
            item.style.boxShadow = '0 8px 16px rgba(37, 99, 235, 0.3)';
        });

        item.addEventListener('mouseout', () => {
            item.style.transform = 'translateY(0) scale(1) rotate(0)';
            item.style.boxShadow = '0 4px 8px rgba(37, 99, 235, 0.2)';
        });
    });

    // Enhanced Typing Effect
    const nameElement = document.querySelector('.profile-info h1');
    const originalText = nameElement.textContent;
    nameElement.textContent = '';
    let charIndex = 0;

    function typeText() {
        if (charIndex < originalText.length) {
            const char = originalText.charAt(charIndex);
            const span = document.createElement('span');
            span.textContent = char;
            span.style.opacity = '0';
            span.style.animation = 'fadeIn 0.5s forwards';
            nameElement.appendChild(span);
            charIndex++;
            setTimeout(typeText, 100);
        }
    }

    setTimeout(typeText, 500);

    // Project Cards Hover Effect
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const xRotation = ((y - rect.height / 2) / rect.height) * 5;
            const yRotation = ((x - rect.width / 2) / rect.width) * 5;
            
            card.style.transform = `perspective(1000px) rotateX(${-xRotation}deg) rotateY(${yRotation}deg) scale3d(1.02, 1.02, 1.02)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
        });
    });

    // Smooth Scroll with Progress Indicator
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 4px;
        background: linear-gradient(to right, #2563eb, #1e40af);
        z-index: 1000;
        transition: width 0.2s ease;
    `;
    document.body.appendChild(progressBar);

    window.addEventListener('scroll', () => {
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (window.scrollY / windowHeight) * 100;
        progressBar.style.width = `${scrolled}%`;
    });

    // Add smooth scroll for better navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Add parallax effect to header
    window.addEventListener('scroll', () => {
        const header = document.querySelector('.header');
        const scrolled = window.pageYOffset;
        header.style.transform = `translateY(${scrolled * 0.1}px)`;
    });

    // Add progress bars animation for skills
    const skillBars = document.querySelectorAll('.skill-item');
    skillBars.forEach(bar => {
        bar.addEventListener('mouseenter', () => {
            bar.style.animation = 'pulse 1s infinite';
        });

        bar.addEventListener('mouseleave', () => {
            bar.style.animation = 'none';
        });
    });
}); 