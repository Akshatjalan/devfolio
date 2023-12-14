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
    duration: 0.6,
  }
);

tl.fromTo(
  ".socialEmailLink",
  { opacity: 0, x: -100 },
  {
    opacity: 1,
    x: 0,
    ease: "power2.out",
    duration: 1,
  }
);

tl.fromTo(
  ".socialLink",
  { opacity: 0, x: 100 },
  {
    opacity: 1,
    x: 0,
    ease: "power2.out",
    duration: 1,
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

// TIMELINE 3

var tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".experience",
    start: "10% 80%",
    end: "50% 70%",
  },
});

tl3.fromTo(
  ".companySection",
  { opacity: 0, x: -100 },
  {
    opacity: 1,
    x: 0,
    ease: "power.out",
    duration: 1,
  }
);

tl3.fromTo(
  ".experienceSection",
  { opacity: 0, y: 100 },
  {
    opacity: 1,
    y: 0,
    ease: "power.out",
    duration: 2,
  }
);

// TIMELINE 4

var tl4 = gsap.timeline({
  scrollTrigger: {
    trigger: ".projects",
    start: "10% 80%",
    end: "50% 70%",
  },
});

tl4.fromTo(
  ".projects",
  { opacity: 0, y: 100 },
  {
    opacity: 1,
    y: 0,
    ease: "power.out",
    duration: 2,
  }
);

// TIMELINE 5

var tl5 = gsap.timeline({
  scrollTrigger: {
    trigger: ".contact",
    start: "0% 80%",
    end: "50% 70%",
  },
});

tl5.fromTo(
  ".contact",
  { opacity: 0, y: 100 },
  {
    opacity: 1,
    y: 0,
    ease: "power.out",
    duration: 1,
  }
);
