// =========================
// MENU MOBILE
// =========================

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", function () {
    navMenu.classList.toggle("active");

    if (navMenu.classList.contains("active")) {
        menuToggle.innerHTML = "✕";
    } else {
        menuToggle.innerHTML = "☰";
    }
});


// =========================
// TUTUP MENU SETELAH LINK DIKLIK
// =========================

const navLinks = document.querySelectorAll("#navMenu a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navMenu.classList.remove("active");

        menuToggle.innerHTML = "☰";

    });

});


// =========================
// BACK TO TOP
// =========================

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", function () {

    if (window.scrollY > 400) {

        backToTop.classList.add("show");

    } else {

        backToTop.classList.remove("show");

    }

});

backToTop.addEventListener("click", function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


// =========================
// TOMBOL PRODUK
// =========================

const productButtons =
    document.querySelectorAll(".product-button");

productButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        alert(
            "Terima kasih! Silakan hubungi Snack Berkah Jaya untuk informasi produk."
        );

    });

});


// =========================
// ANIMASI SAAT SCROLL
// =========================

const cards =
    document.querySelectorAll(
        ".about-card, .product-card, .contact-item"
    );

const observer = new IntersectionObserver(

    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

            }

        });

    },

    {
        threshold: 0.15
    }

);


cards.forEach(function (card) {

    card.style.opacity = "0";
    card.style.transform = "translateY(30px)";
    card.style.transition = "0.6s ease";

    observer.observe(card);

});
