document.addEventListener('DOMContentLoaded', function() {
    function handleMenuClick(e) {
        if (e.target && e.target.tagName === 'A') {
            e.preventDefault();

            document.querySelectorAll('.menu__item').forEach(function(item) {
                item.classList.remove('item_active');
            });
            e.target.classList.add('item_active');

            var tabId = e.target.getAttribute('data-tab');
            updateTabs(tabId);
        }
    }

    function handleAnchorClick(e) {
        e.preventDefault();
        var elementClick = this.getAttribute('href');
        var destination = document.querySelector(elementClick).offsetTop;
        scrollTo(document.documentElement, destination, 1300);
        scrollTo(document.body, destination, 1300);
    }

    function updateTabs(activeTabId) {
        var activeLang = document.querySelector('#polish').style.display === 'block' ? 'polish' : 'english';
        
        document.querySelectorAll('.details_tabs').forEach(function(tab) {
            tab.classList.remove('details_active');
            tab.style.opacity = 0;
        });

        var activeTab = document.getElementById(activeTabId);
        if (activeTab) {
            activeTab.classList.add('details_active');
            fadeIn(activeTab, 350);
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

    function changeLangEn() {
        // Switch language
        document.getElementById('english').style.display = 'block';
        document.getElementById('polish').style.display = 'none';

        // Update tabs for the new language
        var activeTabId = document.querySelector('.item_active').getAttribute('data-tab');
        updateTabs(activeTabId);
        preserveActiveTab();
    }

    function changeLangPl() {
        // Switch language
        document.getElementById('english').style.display = 'none';
        document.getElementById('polish').style.display = 'block';

        // Update tabs for the new language
        var activeTabId = document.querySelector('.item_active').getAttribute('data-tab');
        updateTabs(activeTabId);
        preserveActiveTab();
    }

    function preserveActiveTab() {
        var activeMenuItem = document.querySelector('.item_active');
        if (activeMenuItem) {
            var tabId = activeMenuItem.getAttribute('data-tab');
            var activeTab = document.getElementById(tabId);
            if (!activeTab) {
                document.querySelectorAll('.details_tabs').forEach(function(tab) {
                    activeTab.classList.add('details_active');
                    tab.style.opacity = 1;
                });
                tab.classList.remove('details_active');
                activeTab.style.opacity = 0;
            }
        }
    }

    document.querySelector('.details_menu').addEventListener('click', handleMenuClick);
    document.querySelectorAll('a.scrollto').forEach(function(anchor) {
        anchor.addEventListener('click', handleAnchorClick);
    });

    // Make these functions available globally
    window.changeLangEn = changeLangEn;
    window.changeLangPl = changeLangPl;
});