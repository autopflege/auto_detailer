document.querySelector('.details_menu').addEventListener('click', function(e) {
    if (e.target && e.target.tagName === 'A') {
        e.preventDefault();

        document.querySelectorAll('.menu__item').forEach(function(item) {
            item.classList.remove('item_active');
        });
        e.target.classList.add('item_active');

        var tabId = e.target.getAttribute('data-tab');
        document.querySelectorAll('.details_tabs').forEach(function(tab) {
            tab.classList.remove('details_active');
            tab.style.opacity = 0;
        });
        document.querySelector('.details_tabs').style.opacity = 1;
        var activeTab = document.getElementById(tabId);
        activeTab.classList.add('details_active');
        fadeIn(activeTab, 350);

        // Trigger animations only if the 'languages' tab is activated
        if (tabId === 'languages') {
            triggerBarAnimations();  // Adjust 'languages' to match your tab's data-tab value
        }
    }
});

document.querySelectorAll('a.scrollto').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        var elementClick = anchor.getAttribute('href');
        var destination = document.querySelector(elementClick).offsetTop;
        scrollTo(document.documentElement, destination, 1300);
        scrollTo(document.body, destination, 1300);
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

function scrollTo(element, to, duration) {
    var start = element.scrollTop,
        change = to - start,
        currentTime = 0,
        increment = 20;

    var animateScroll = function() {
        currentTime += increment;
        var val = Math.easeInOutQuad(currentTime, start, change, duration);
        element.scrollTop = val;
        if (currentTime < duration) {
            setTimeout(animateScroll, increment);
        }
    };
    animateScroll();
}

Math.easeInOutQuad = function(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
};

// Function to trigger bar animations
function triggerBarAnimations() {
    const bars = document.querySelectorAll('.bar');

    setTimeout(() => {
        bars.forEach(bar => {
            if (bar.classList.contains('learning')) {
                bar.style.width = '35%';
            } else if (bar.classList.contains('basic')) {
                bar.style.width = '50%';
            } else if (bar.classList.contains('intermediate')) {
                bar.style.width = '65%';
            } else if (bar.classList.contains('expert')) {
                bar.style.width = '100%';
            }
        });
    }, 100);  // Delay of 100ms
}
