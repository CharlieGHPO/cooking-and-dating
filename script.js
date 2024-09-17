document.addEventListener("DOMContentLoaded", function () {
    var carousels = document.querySelectorAll('.carousel');

    carousels.forEach(function (carousel) {
        var bootstrapCarousel = new bootstrap.Carousel(carousel, {
            interval: 2500,
            ride: 'carousel'
        });
    });
});
