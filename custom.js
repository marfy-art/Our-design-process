// custom.js

document.addEventListener('DOMContentLoaded', function() {
    const clickableArea01 = document.querySelector('.our-design-process-thumbnaile-card-clickable-area-01');
    const clickableArea02 = document.querySelector('.our-design-process-thumbnaile-card-clickable-area-02');
    const clickableArea03 = document.querySelector('.our-design-process-thumbnaile-card-clickable-area-03');
  
    const hoverImg01 = document.querySelector('.hover-img-01');
    const circleImage01 = document.querySelector('.our-design-process-thumbnaile-card-circle-image-01');
    const clickableArea02Parent = document.querySelector('.our-design-process-list');
  
    clickableArea01.addEventListener('mouseover', function() {
      hoverImg01.style.display = 'block';
      circleImage01.style.top = '5px';
    });
  
    clickableArea01.addEventListener('mouseout', function() {
      hoverImg01.style.display = 'none';
      circleImage01.style.top = '0';
    });
  
    clickableArea02.addEventListener('mouseover', function() {
      clickableArea02Parent.style.height = '400px';
    });
  
    clickableArea02.addEventListener('mouseout', function() {
      clickableArea02Parent.style.height = 'auto';
    });
  
    clickableArea03.addEventListener('mouseover', function() {
      clickableArea02Parent.style.height = '400px';
    });
  
    clickableArea03.addEventListener('mouseout', function() {
      clickableArea02Parent.style.height = 'auto';
    });
  });
  