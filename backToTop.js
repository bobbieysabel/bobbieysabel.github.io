var scrollPos = window.pageYOffset;

        function trackScroll() {
            var scrolled = window.pageYOffset;
            var coords = 4*(document.documentElement.clientHeight);

        if ((scrolled > coords) && ((document.body.getBoundingClientRect()).top > scrollPos)) {
            goTopBtn.classList.add('back-to-top-show');
        }

        if ((scrolled < coords) || ((document.body.getBoundingClientRect()).top < scrollPos)) {
            goTopBtn.classList.remove('back-to-top-show');
        }

        scrollPos = (document.body.getBoundingClientRect()).top;
        }

        function backToTop() {
            if (window.pageYOffset > 0) {
                window.scrollBy(0, -80);
                setTimeout(backToTop, 0);
            }
        }

        var goTopBtn = document.querySelector('.back-to-top-container');

        window.addEventListener('scroll', trackScroll);
        goTopBtn.addEventListener('click', backToTop);