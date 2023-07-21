const mobileMenu = document.querySelector('.mobile-menu');
const navLinks = document.querySelector('.mobile-links');

function toggleExpanded() {
    navLinks.classList.toggle('open-sesame');
    mobileMenu.classList.toggle('switched');

    // Check if the navigation links are expanded
    if (navLinks.classList.contains('open-sesame')) {
        // Disable scrolling when expanded
        document.body.style.overflow = 'hidden';
    } else {
        // Enable scrolling when not expanded
        document.body.style.overflow = '';
    }
}

if (mobileMenu) {
    mobileMenu.addEventListener('click', toggleExpanded);
}
