document.addEventListener('DOMContentLoaded', () => {
    // Navbar scroll effect
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // ROI Calculator logic
    const hoursInput = document.getElementById('hoursInput');
    const hoursValue = document.getElementById('hoursValue');
    const monthlySaving = document.getElementById('monthlySaving');
    const roiMultiplier = document.getElementById('roiMultiplier');

    function updateCalculator() {
        const hours = parseInt(hoursInput.value);
        hoursValue.textContent = `${hours}h`;
        
        // Calculation: 75% efficiency boost (saving 75% of manual time)
        const savedHours = Math.round(hours * 0.75 * 4.33); // Monthly
        monthlySaving.textContent = `${savedHours}h`;
        
        // ROI Multiplier (conceptual: saved time / potential implementation cost simplified)
        // For demonstration, we'll use a dynamic factor based on hours
        const multiplier = (3 + (hours / 50)).toFixed(1);
        roiMultiplier.textContent = `${multiplier}x`;
    }

    hoursInput.addEventListener('input', updateCalculator);
    updateCalculator(); // Initialize

    // Smooth scroll for anchors
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Reveal on scroll (simulated)
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.pillar-card, .dashboard-mockup, .roi-calculator').forEach(el => {
        observer.observe(el);
    });
});
