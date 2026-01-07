document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const menuBtn = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Form Success Detection via Query Parameter
    const params = new URLSearchParams(window.location.search);
    if (params.get('submitted') === 'true') {
        const successEl = document.getElementById('success-message');
        const formEl = document.getElementById('form-container');
        if (successEl && formEl) {
            successEl.classList.remove('hidden');
            formEl.classList.add('hidden');
            successEl.scrollIntoView({ behavior: 'smooth' });
        }
    }

    // Active Navigation Highlighting
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-link').forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        }
    });
});