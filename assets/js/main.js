document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const menuBtn = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Active Navigation Highlighting logic
    const path = window.location.pathname;
    const page = path.split("/").pop() || "index.html";

    const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        // Check if current page matches href exactly, or if it's the home page root
        if (href === page || (page === "" && href === "index.html")) {
            link.classList.add('active');
            if (link.classList.contains('mobile-nav-link')) {
                link.classList.add('text-[#003366]', 'font-bold');
            }
        }
    });

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
});