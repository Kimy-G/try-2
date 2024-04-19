gsap.registerPlugin(ScrollTrigger);




gsap.from ('.menu-img', {
    xPercent: 100,
    duration: 2.5,
    ease: "bounce.out",
    scrollTrigger: {
        trigger: ".menu-img",
        markers: true,
    }


})

gsap.from ('.content', {
    xPercent: -100,
    duration: 2.5,
    ease: "bounce.out",
    scrollTrigger: {
        trigger: ".content",
        markers: true,
    }


})

