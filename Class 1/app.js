var tl = gsap.timeline();

tl.from("#nav h2", {
    y:-20,
    opacity: 0,
    duration: 1,
    delay:0.5,
})

tl.from("#nav h3", {
    y:-20,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
})