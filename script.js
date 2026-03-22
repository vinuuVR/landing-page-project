const navbar = document.getElementById("navbar");
const mobileMenuToggle = document.getElementById("mobileMenuToggle");
const navLinks = document.getElementById("navLinks");
const navItems = navLinks ? navLinks.querySelectorAll("a") : [];

const syncNavbarShadow = () => {
    if (!navbar) {
        return;
    }

    navbar.classList.toggle("scrolled", window.scrollY > 12);
};

const closeMobileMenu = () => {
    if (!navbar || !mobileMenuToggle) {
        return;
    }

    navbar.classList.remove("menu-open");
    mobileMenuToggle.setAttribute("aria-expanded", "false");
};

if (mobileMenuToggle && navbar) {
    mobileMenuToggle.addEventListener("click", () => {
        const isOpen = navbar.classList.toggle("menu-open");
        mobileMenuToggle.setAttribute("aria-expanded", String(isOpen));
    });
}

navItems.forEach((item) => {
    item.addEventListener("click", closeMobileMenu);
});

window.addEventListener("scroll", syncNavbarShadow);
window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
        closeMobileMenu();
    }
});

syncNavbarShadow();
