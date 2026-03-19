const tl = gsap.timeline();

tl.from("h1", { y: -50, opacity: 0, duration: 1 })
  .from(".team-member", { x: 1000, stagger: 0.2, duration: 1 })
  .from(".lorem", { y: 100, duration: 1 });
