// RELOAD TIMELINE

var tl = gsap.timeline();

tl.fromTo(
  ".aboutSection",
  { opacity: 0, y: 100 },
  {
    opacity: 1,
    y: 0,
    ease: "power2.out",
    duration: 0.6,
  }
);

tl.fromTo(
  ".nameSection",
  { opacity: 0, y: 100 },
  {
    opacity: 1,
    y: 0,
    ease: "power2.out",
    duration: 1,
  }
);

tl.fromTo(
  ".socialEmailLink",
  { opacity: 0, x: -100 },
  {
    opacity: 1,
    x: 0,
    ease: "power2.out",
  }
);

tl.fromTo(
  ".socialLink",
  { opacity: 0, x: 100 },
  {
    opacity: 1,
    x: 0,
    ease: "power2.out",
  }
);

// TIMELINE 2

var tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".skillSection",
    start: "0% 84%",
    end: "10% 70%",
    // scrub: true,
    // markers: true,
  },
});

tl2.fromTo(
  "#front",
  { opacity: 0, y: 100 },
  {
    opacity: 1,
    y: 0,
    ease: "power.out",
    duration: 1,
  }
);

tl2.fromTo(
  "#back",
  { opacity: 0, y: 100 },
  {
    opacity: 1,
    y: 0,
    ease: "power.out",
    duration: 1,
  }
);

tl2.fromTo(
  "#lang",
  { opacity: 0, y: 100 },
  {
    opacity: 1,
    y: 0,
    ease: "power.out",
    duration: 1,
  }
);
