function marqueAnimation() {
  window.addEventListener("wheel", function (e) {
    if (e.deltaY > 0) {
      // Scroll down
      gsap.to(".marque", {
        transform: "translateX(-200%)",
        repeat: -1,
        duration: 3,
        ease: "none",
      });

      // Arrow image direction change
      gsap.to(".marque img", {
        rotate: 180,
      });
    } else {
      // Scroll up
      gsap.to(".marque", {
        transform: "translateX(0%)",
        duration: 3,
        repeat: -1,
        ease: "none",
      });

      // Arrow image direction change
      gsap.to(".marque img", {
        rotate: 0,
      });
    }
  });
}

marqueAnimation();
