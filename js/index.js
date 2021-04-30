document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.sidenav');
    var sideNav = M.Sidenav.init(elems, {});
    debugger;

    var elems = document.querySelector('.carousel.carousel-slider');
    carousel = M.Carousel.init(elems, {
        indicators: true,
        fullWidth: true,
        duration: 500
    });

    const autoplay = () => {
        carousel.next();
        setTimeout(autoplay, 5000);
    }
    autoplay();

    var elems = document.querySelectorAll('.parallax');
    var instances = M.Parallax.init(elems, {});

    
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems, {});

});