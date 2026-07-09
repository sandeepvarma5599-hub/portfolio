window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.style.background = '#e2e8f0';
    } else {
        navbar.style.background = '#ffffff';
    }
});