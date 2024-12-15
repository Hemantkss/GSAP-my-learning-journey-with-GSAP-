gsap.from("#page1 #box", {
  scale: 0,
  opacity: 0,
  duration: 1.5,
  delay: 1,
  rotate: 720,
});

gsap.from("#page2 #box", {
  scale: 0,
  opacity: 0,
  rotate: 720,
  duration: 1,
  scrollTrigger: {
    trigger: "#page2 #box ",
    scroller: "body",
    markers: true,
    start: "top 50%",
    end: "top 30%",
    scrub: 2,
  },
});

gsap.to("#page3 h1", {
    transform : "translateX(-100%)",
    scrollTrigger: {
        trigger: "#page3",
        scroller: "body",
        start: "top 0%",
        end: "top -150%",
        scrub: 2,
        pin:true,
        markers: true,
        
    }
})
