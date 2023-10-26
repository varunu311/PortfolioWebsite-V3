const mask = document.querySelector("#div-mask-back");
const tl = gsap.timeline();

window.addEventListener("mousemove", (e) => {
  const { clientX, clientY } = e;
  const x = Math.round((clientX / window.innerWidth) * 100);
  const y = Math.round((clientY / window.innerHeight) * 100);

  gsap.to(mask, {
    "--x": `${x}%`,
    "--y": `${y}%`,
    duration: 0.3,
    ease: "sine.out"
  });
});


let states = {
  SPOTLIGHT: "spotlight",
  FULL_VIEW: "fullView",
  OFF: "off"
};

let currentState = states.OFF;

window.addEventListener("click", () => {
  switch (currentState) {
    case states.OFF:
      const { clientX, clientY } = event;
      const x = Math.round((clientX / window.innerWidth) * 100);
      const y = Math.round((clientY / window.innerHeight) * 100);

      gsap.to(mask, {
        "--m1": "20%",
        "--m2": "30%",
        "--x": `${x}%`,
        "--y": `${y}%`,
        duration: 0.5,
        ease: "back.out(2)"
      });
      currentState = states.SPOTLIGHT;
      break;
      
    case states.SPOTLIGHT:
      if (currentState === states.FULL_VIEW) {
        gsap.to(mask, {
          "--m1": "0%",
          "--m2": "0%",
          duration: 0.5,
          ease: "back.out(2)"
        });
        currentState = states.OFF;
      } else {
        gsap.to(mask, {
          "--m1": "100%",
          "--m2": "100%",
          duration: 0.5,
          ease: "back.out(2)"
        });
        currentState = states.FULL_VIEW;
      }
      break;

    case states.FULL_VIEW:
      const { clientX: cX, clientY: cY } = event;
      const xSpot = Math.round((cX / window.innerWidth) * 100);
      const ySpot = Math.round((cY / window.innerHeight) * 100);

      gsap.to(mask, {
        "--m1": "20%",
        "--m2": "30%",
        "--x": `${xSpot}%`,
        "--y": `${ySpot}%`,
        duration: 0.5,
        ease: "back.out(2)"
      });
      currentState = states.SPOTLIGHT;
      break;
  }
});

const swup = new Swup();

