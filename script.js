document.addEventListener('DOMContentLoaded', function() {
    const mobileMenu = document.getElementById('mobileMenu');
    const menuLinks = document.querySelectorAll('.mobile-menu__list a');
    
    if (!mobileMenu) return;
    
    mobileMenu.addEventListener('close', () => {
        document.body.style.overflow = '';
    });

    const burgerButton = document.querySelector('.burger-button');
    if (burgerButton) {
        burgerButton.addEventListener('click', () => {
            document.body.style.overflow = 'hidden';
        });
    }
    
    menuLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.close();
        });
    });

    if (window.location.hash) {
        const hash = window.location.hash;
        history.replaceState(null, null, ' ');
    }
});
