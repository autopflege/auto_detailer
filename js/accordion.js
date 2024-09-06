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