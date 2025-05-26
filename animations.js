document.addEventListener("DOMContentLoaded", () => {
  const link = document.querySelector(".link-more");

  if (link) {
    gsap.fromTo(
      link,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power2.out",
        delay: 1,
      }
    );
  }

  const footerIcons = document.querySelectorAll(".footer i");

  if (footerIcons.length > 0) {
    gsap.fromTo(
      footerIcons,
      { opacity: 0, y: 10 },
      {
        opacity: 1,
        y: 0,
        duration: 2.5,
        stagger: 0.2,
        ease: "power2.out",
        delay: 1.5,
      }
    );
  }
});
