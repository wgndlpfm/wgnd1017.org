/* WGND 101.7 FM – dropdown menus & copyright year */
(function () {
    var dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(function (dropdown) {
        var btn = dropdown.querySelector('.dropbtn');
        if (!btn) return;

        btn.addEventListener('click', function (event) {
            event.preventDefault();
            var wasOpen = dropdown.classList.contains('open');
            dropdowns.forEach(function (other) {
                other.classList.remove('open');
            });
            if (!wasOpen) dropdown.classList.add('open');
        });
    });

    document.addEventListener('click', function (event) {
        if (!event.target.closest('.dropdown')) {
            dropdowns.forEach(function (dropdown) {
                dropdown.classList.remove('open');
            });
        }
    });

    dropdowns.forEach(function (dropdown) {
        var links = dropdown.querySelectorAll('.dropdown-content a');
        links.forEach(function (link) {
            link.addEventListener('click', function () {
                dropdown.classList.remove('open');
            });
        });
    });

    var year = document.querySelector('.copyright-year');
    if (year) year.textContent = new Date().getFullYear();
})();