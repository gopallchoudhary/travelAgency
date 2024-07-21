const preloader = document.querySelector(".preloader");

window.addEventListener("load", () => {
    preloader.classList.add("remove")
})

/* add even on multiple elements */
const addEventOnElements = function (elements, eventType, callback) {
    for (let i = 0, len = elements.length; i < len; i++) {
        elements[i].addEventListener(eventType, callback);
    }
}

/*
*Navbar toggler for the mobile
*/

const Navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]")
const overlay = document.querySelector("[data-overlay]")

const toggleNav = function () {
    Navbar.classList.toggle("active")
    overlay.classList.toggle("active")
    document.body.classList.toggle("nav-active")

}

addEventOnElements(navTogglers, "click", toggleNav)


// HEADER

const header = document.querySelector("[data-header]")

window.addEventListener("scroll", function () {
    header.classList[window.scrollY > 100 ? "add" : "remove"]("active")
})

// CUSTOM - CURSOR 

let crsr = document.querySelector(".cursor")

window.addEventListener("mousemove", (moves) => {
    crsr.style.transform = `translate(${moves.clientX}px, ${moves.clientY}px)`


})


// SCROLLTRIGGER




// GSAP

var tl = gsap.timeline();



tl.from(" .navbar ul li", {
    y: -80,
    opacity: 0,
    duration: 0.8,
    delay: 0.8,
    stagger: 0.2,
});

tl.from(".hero-content .h1", {
    x: -500,
    opacity: 0,
    duration: 0.5,
    stagger: 0.4,
});

tl.from(".hero-banner img", {
    opacity: 0,
    scale: 0.5,
});

tl.from(".hero-content .hero-text", {
    opacity: 0,
    scale: 0.5,
});


gsap.from(".container .service-card", {
    opacity: 0,
    scale: 0,
    duration: 1,
    stagger: 0.7,
    scrollTrigger: {
        trigger: ".container .service-card",
        scroller: "body",
        markers: false,
        start: "top 105%",
        end: "top 60%",
        scrub: 2,
    },
});

tl.from(".section .container ul li", {
    opacity: 2,
    scale: 0,
    duration: 3,
    stagger: 0.4,
    scrollTrigger: {
        trigger: ".section .container ul li",
        scroller: "body",
        markers: false,
        start: "top 170%",
        end: "top -110%",
        scrub: 3,
    },
});


gsap.from(".exp-content p, .exp-content h2, .exp-content h3", {
    opacity: 0,
    x: 500,

    duration: 2,
    stagger: 0.2,
    scrollTrigger: {
        trigger: ".container .exp-content",
        scroller: "body",
        markers: false,
        start: "top 70%",
        end: "top 20%",
        scrub: 3,
    },
});

tl.from(".exp-banner img", {
    opacity: 0,
    scale: 0.5,
    x: -500,
    scrollTrigger: {
        trigger: ".container .exp-content",
        scroller: "body",
        markers: false,
        start: "top 95%",
        end: "top 25%",
        scrub: 3,
    },
});


tl.from(".container .gallery-list", {
    opacity: 0,
    scale: 0,
    stagger: 0.7,
    duration: 1,
    scrollTrigger: {
        trigger: ".container .gallery-list",
        scroller: "body",
        markers: false,
        start: "top 100%",
        end: "top 60%",
        scrub: 2,
    },
});


tl.from(".container .cta-card h2, .container .cta-card p ", {
    y: -280,
    opacity: 0,
    duration: 1,
    stagger: 0.3,
    scrollTrigger: {
        trigger: ".container .cta-card",
        scroller: "body",
        markers: false,
        start: "top 85%",
        end: "top 40%",
        scrub: 3,
    },
});

// tl.from(".container .cta-card .btn ", {
//     y: 280,
//     opacity: 0,
//     duration: 1,
//     stagger: 0.3,
//     scrollTrigger: {
//         trigger: ".container .cta-card .btn",
//         scroller: "body",
//         markers: true,
//         start: "top 150%",
//         end: "top 60%",
//         scrub: 3,
//     },
// });


tl.from(".container .footer-top, .container .footer-bottom", {
    y: 420,
    opacity: 0,
    duration: 3,
    stagger: 0.4,
    scrollTrigger: {
        trigger: ".footer .container",
        scroller: "body",
        markers: false,
        start: "top 90%",
        end: "top 20%",
        scrub: 4,
    },
});






