document.addEventListener('DOMContentLoaded', function () {
    function setActive(navId) {
        document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
        document.getElementById(navId).classList.add('active');
    }

    document.querySelector('.navbar').addEventListener('click', function (e) {
        if (e.target.classList.contains('nav-link')) {
            setActive(e.target.id);
        }
    });
});
