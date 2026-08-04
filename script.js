// ================================
// TECHVORA - Part 1
// Mobile Navigation
// ================================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// Close menu when a link is clicked

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});
// ================================
// TECHVORA - Part 2
// Navbar Scroll & Active Links
// ================================

// Navbar shadow on scroll
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.style.boxShadow = "0 10px 30px rgba(0,0,0,0.25)";
    } else {
        header.style.boxShadow = "none";
    }
});

// Active navigation link
const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight) {

            current = section.getAttribute("id");
        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});
// ================================
// TECHVORA - Part 3
// Back To Top + Scroll Reveal
// ================================

// Create Back-to-Top Button
const topButton = document.createElement("button");

topButton.innerHTML = "↑";
topButton.id = "topBtn";

document.body.appendChild(topButton);

// Show button when scrolling
window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }

});

// Scroll to top
topButton.addEventListener("click", () => {

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

});

// Scroll Reveal Animation
const revealElements = document.querySelectorAll(
".about, .services, .why, .contact, .card, .features div"
);

function revealOnScroll(){

    revealElements.forEach(element=>{

        const windowHeight = window.innerHeight;
        const revealTop = element.getBoundingClientRect().top;

        if(revealTop < windowHeight - 100){

            element.style.opacity = "1";
            element.style.transform = "translateY(0)";

        }

    });

}

revealElements.forEach(element=>{

    element.style.opacity = "0";
    element.style.transform = "translateY(40px)";
    element.style.transition = "all .7s ease";

});

window.addEventListener("scroll", revealOnScroll);

// Run once on page load
revealOnScroll();
