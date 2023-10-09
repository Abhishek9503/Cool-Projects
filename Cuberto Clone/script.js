// Shery.mouseFollower();
// Shery.makeMagnet(".magnet");
// Shery.hoverWithMediaCircle(".hvr", {
//   videos: ["./0.mp4", "./2.mp4", "./3.mp4"],
// });

gsap.to(".fleftelm", {
  scrollTrigger: {
    trigger: "#fimages",
    pin: true,
    start: "top top",
    end: "bottom bottom",
    endTrigger: ".last",
    scrub: 1,
  },
  y: "-300%",
  ease: Power1,
});

let sections = document.querySelectorAll(".fleftelm");
Shery.imageEffect(".images", {
  style: 4,
  config: { onMouse: { value: 1 } },
  slideStyle: (setScroll) => {
    sections.forEach(function (section, index) {
      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        scrub: 1,
        onUpdate: function (prog) {
          setScroll(prog.progress + index);
        },
      });
    });
  },
});






const cursor = new MouseFollower({
    container: 'html',
    speed: 0.3
});

// const cursor1 = new MouseFollower();
// const el = document.querySelector('#homemain');

// el.addEventListener('mouseenter', () => {
//     cursor.setVideo('https://player.vimeo.com/external/479728625.sd.mp4?s=f4f886d3d45a0312d8d47419647788178535a2c6&profile_id=165&oauth2_token_id=57447761');
// });

// el.addEventListener('mouseleave', () => {
//     cursor.removeVideo();
// });



// const cursor1 = new MouseFollower();
const el = document.querySelector('#homemain');

el.addEventListener('mouseenter', () => {
    cursor.setText('Hello!');
});

el.addEventListener('mouseleave', () => {
    cursor.removeText();
});




var Scrollbar = window.Scrollbar;

Scrollbar.init(document.querySelector('#my-scrollbar'));