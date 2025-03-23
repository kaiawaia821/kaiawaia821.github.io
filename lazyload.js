// Example: Lazy-load images and videos
document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".responsive-image");
    const videos = document.querySelectorAll(".responsive-video");

    const lazyLoad = (elements) => {
        elements.forEach((element) => {
            if (element.getAttribute("data-src")) {
                element.src = element.getAttribute("data-src");
            }
        });
    };

    lazyLoad(images);
    lazyLoad(videos);
});