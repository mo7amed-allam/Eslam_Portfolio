/* ============================================================
   PORTFOLIO – MAIN JAVASCRIPT
   Author : Islam Ahmed El-Bialy
   File   : script.js
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
    console.log('Portfolio successfully loaded.');

    // Initialize Animate On Scroll (AOS)
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true, // whether animation should happen only once - while scrolling down
            offset: 100 // offset (in px) from the original trigger point
        });
    }
});
