document.addEventListener('DOMContentLoaded', function() {
    const clickableArea = document.querySelector('.our-design-process-thumbnaile-card-clickable-area-01');
    const card02 = document.querySelector('.our-design-process-thumbnaile-card-02');

    clickableArea.addEventListener('mouseenter', function() {
        card02.style.width = '440px';
        card02.style.height = '440px'; // Reset width
        card02.style.borderRadius = '100%'; // Reset border radius
        
    });

    clickableArea.addEventListener('mouseleave', function() {
        card02.style.width = '400px';
        card02.style.height = '640px'; // Adjust width
        card02.style.borderRadius = '200px'; // Make it fully rounded
    });
});
