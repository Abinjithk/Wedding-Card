import './style.css'

// Add any custom interactivity here
document.addEventListener('DOMContentLoaded', () => {
    console.log('Wedding Invitation Site Loaded');
    
    // Smooth scroll for internal links if added later
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
