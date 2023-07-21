let isNavOnTheMove = false; // Flag to track if "onthemove" class is already added
let prevScrollY = 0; // Store the previous scroll position

function checkScrollIntersection() {
    const navElement = document.getElementById('nav');
    const topperElement = document.querySelector('.topper');

    const topperRect = topperElement.getBoundingClientRect();
    const topperBottom = topperRect.bottom;

    // Add "onthemove" class to "nav" element after "topper" has passed
    if (topperBottom < 0 && !isNavOnTheMove) {
        navElement.classList.add('onthemove');
        navElement.style.position = 'sticky';
        navElement.style.top = '0';
        isNavOnTheMove = true; // Set the flag to true when class is added
    } else if (topperBottom >= 0 && isNavOnTheMove) {
        // Check if the user is scrolling back up (current scrollY is less than or equal to previous scrollY)
        const currentScrollY = window.scrollY || window.pageYOffset;
        if (currentScrollY <= prevScrollY) {
            navElement.classList.remove('onthemove');
            navElement.style.position = 'relative';
            navElement.style.top = '';
            isNavOnTheMove = false; // Set the flag to false when class is removed
        }
        prevScrollY = currentScrollY; // Update previous scroll position
    }
}

// Example usage on scroll event
window.addEventListener('scroll', checkScrollIntersection);
