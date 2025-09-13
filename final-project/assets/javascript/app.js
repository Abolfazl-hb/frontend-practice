let c = 8;
function handleResponsive(e) {
    if (e.matches) {
        c = 4;
    }
}
const mediaQuery = window.matchMedia("(max-width: 1400px)");
handleResponsive(mediaQuery);
mediaQuery.addEventListener("change", handleResponsive);

const swiper = new Swiper(".swiper", {
    loop: true,
    slidesPerView: c,
    spaceBetween: 20,
    autoplay: {
        delay: 3000,
    },
    rtl: true,
    navigation: {
        nextEl: ".btn-prev",
        prevEl: ".btn-next",
    },
});
