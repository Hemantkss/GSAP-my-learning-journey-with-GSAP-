// Break the text into individual alphabet letters
function breakTheText() {
  var h1 = document.querySelector("h1");
  var h1Text = h1.textContent;
  var splittedText = h1Text.split("");

  var clutter = "";

  var halfValue = Math.floor(splittedText.length / 2);

  // Create cluttered text by alternating between 'a' and 'b' classes
  splittedText.forEach(function (el, idx) {
    if (idx < halfValue) {
      clutter = clutter + `<span class="a">${el}</span>`;
    } else {
      clutter = clutter + `<span class="b">${el}</span>`;
    }
  });

  h1.innerHTML = clutter;
}
breakTheText();

// Animate the text with gsap
gsap.from("h1 .a", {
  y: 80,
  duration: 0.6,
  delay: 0.5,
  opacity: 0,
  stagger: 0.15,
});

gsap.from("h1 .b", {
  y: 80,
  duration: 0.6,
  delay: 0.5,
  opacity: 0,
  stagger: -0.15,
});
