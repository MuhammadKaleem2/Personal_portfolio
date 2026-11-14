const typed = new Typed(".text", {
    strings: [
        "Software Developer",
        "Graphic Designer",
        "Video Editor",
        "Freelancer"
    ],
    typeSpeed: 80,
    backSpeed: 50,
    backDelay: 1500,
    loop: true
});

const menuBtn = document.getElementById("menu-btn");
const navbar = document.getElementById("navbar");
const menuIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", () => {

    navbar.classList.toggle("show");

    if (navbar.classList.contains("show")) {
        menuIcon.classList.replace("bx-menu", "bx-x");
    } else {
        menuIcon.classList.replace("bx-x", "bx-menu");
    }

});

document.querySelectorAll(".navbar a").forEach(link => {

    link.addEventListener("click", () => {

        navbar.classList.remove("show");

        if (menuIcon.classList.contains("bx-x")) {
            menuIcon.classList.replace("bx-x", "bx-menu");
        }

    });

});

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".navbar a");


window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
        }

    });

});

const topButton = document.getElementById("top-btn");


window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {
        topButton.classList.add("show");
    } else {
        topButton.classList.remove("show");
    }

});

const contactForm = document.getElementById("contact-form");


contactForm.addEventListener("submit", (event) => {

    event.preventDefault();

    alert(
        "Thank you for your message! The contact form design is ready. " +
        "To receive messages, connect this form with Formspree, EmailJS, or a backend service."
    );

});
