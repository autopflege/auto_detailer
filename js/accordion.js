$(document).ready(function(){
    $('.paragraph_info').hide();
    $('.title_accord').click(function (){
        var paragraph = $(this).next('.paragraph_info');
        var title = $(this).closest('.accord_tabs');
        if(paragraph.is(':visible')){
            paragraph.slideUp();
        } else {
            title.find('.paragraph_info').slideUp();
            paragraph.slideDown();
        }
    });
});

// Event listener for accordion titles on mobile
document.querySelectorAll('.title_accord').forEach(function(accordionTitle) {
    accordionTitle.addEventListener('click', handleAccordionClick);
    accordionTitle.addEventListener('touchstart', handleAccordionClick);
});

function handleAccordionClick(e) {
    var accordionSection = e.target.closest('section');

    if (accordionSection && accordionSection.classList.contains('languages')) {
        triggerBarAnimations();
    }
}

function fadeIn(element, duration) {
    element.style.opacity = 0;
    var last = +new Date();
    var tick = function() {
        element.style.opacity = +element.style.opacity + (new Date() - last) / duration;
        last = +new Date();
        if (+element.style.opacity < 1) {
            (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
        }
    };
    tick();
}

function triggerBarAnimations() {
    const bars = document.querySelectorAll('.bar');

    setTimeout(() => {
        bars.forEach(bar => {
            bar.style.display = 'none';  // Force repaint
            bar.offsetHeight;  // Force repaint
            bar.style.display = '';  // Reset display
            
            if (bar.classList.contains('learning')) {
                bar.style.width = '35%';
            } else if (bar.classList.contains('basic')) {
                bar.style.width = '60%';
            } else if (bar.classList.contains('intermediate')) {
                bar.style.width = '80%';
            } else if (bar.classList.contains('expert')) {
                bar.style.width = '100%';
            }
        });
    }, 100);  // Delay of 100ms
}