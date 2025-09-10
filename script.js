document.addEventListener('DOMContentLoaded', () => {
    // Theme Toggle Script
    const toggleBtn = document.getElementById('theme-toggle');
    const body = document.body;

    function setTheme(theme) {
        if (theme === 'light') {
            body.classList.add('light-mode');
            toggleBtn.innerHTML = '<i class="fas fa-moon"></i>';
            localStorage.setItem('theme', 'light');
        } else {
            body.classList.remove('light-mode');
            toggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
            localStorage.setItem('theme', 'dark');
        }
    }

    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);

    toggleBtn.addEventListener('click', () => {
        if (body.classList.contains('light-mode')) {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    });

    // Particle background script
    particlesJS('particles-js', {
        "particles": {
            "number": { "value": 80, "density": { "enable": true, "value_area": 800 } },
            "color": { "value": "#ffffff" },
            "shape": { "type": "circle" },
            "opacity": { "value": 0.5, "random": false },
            "size": { "value": 3, "random": true },
            "line_linked": { "enable": true, "distance": 150, "color": "#ffffff", "opacity": 0.4, "width": 1 },
            "move": { "enable": true, "speed": 6, "direction": "none", "random": false, "straight": false, "out_mode": "out" }
        },
        "interactivity": {
            "detect_on": "canvas", "events": { "onhover": { "enable": true, "mode": "repulse" }, "onclick": { "enable": true, "mode": "push" }, "resize": true }
        }, "retina_detect": true
    });

    // Fade-in-on-scroll script
    const sections = document.querySelectorAll('.section');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.2 });
    sections.forEach(section => { observer.observe(section); });

    // Modal script for certifications
    const modal = document.getElementById('certModal');
    const modalBody = document.querySelector('.modal-body');
    const closeBtn = document.querySelector('.close-btn');
    const certLinks = document.querySelectorAll('.card-link');

    const certs = {
        cert1: 'foundations-of-cybersecurity.pdf',
        cert2: 'manage-security-risks.pdf'
    };

    certLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const certTarget = link.getAttribute('data-cert-target');
            const certUrl = certs[certTarget];

            if (certUrl) {
                modalBody.innerHTML = `<embed src="${certUrl}" type="application/pdf" width="100%" height="600px" />`;
                modal.style.display = 'block';
            }
        });
    });

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
        modalBody.innerHTML = '';
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
            modalBody.innerHTML = '';
        }
    });
});