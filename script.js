let video = document.querySelector(".videocontent video");
const videoBtn = document.querySelector(".videoBtn");
let videoContainer = document.querySelector(".videocontent");
gsap.registerPlugin(ScrollTrigger);
// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("main"),
  smooth: true,
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("main", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight,
    };
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("main").style.transform
    ? "transform"
    : "fixed",
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

function loading() {
  let tl = gsap.timeline();
  tl.from(".line h1", {
    y: 200,
    duration: 0.8,
    stagger: 0.5,
  });

  tl.from(".loader p", {
    opacity: 0,
  });
  tl.from(".line span", {
    opacity: 0,
  });
  tl.from(".line1 .number", {
    opacity: 0,
    onStart: function () {
      let h6 = document.querySelector(".number h6");
      let h6Timer = 0;
      let counter = setInterval(function () {
        if (h6Timer === 100) {
          clearInterval(counter);
        } else {
          h6Timer++;
        }
        h6.innerHTML = h6Timer;
      }, 40);
    },
  });
  tl.to(".line span h1", {
    opacity: 1,
  });
  tl.to(".loader", {
    opacity: 0,
    duration: 0.4,
    delay: 4,
  });
  tl.to(".loader", {
    display: "none",
  });
  tl.from("main", {
    y: 800,
    duration: 1,
    opacity: 0,
  });
}
loading();

 

videoContainer.addEventListener("mouseenter", function () {
  videoContainer.addEventListener("mousemove", function (elem) {
    gsap.to(videoBtn, {
      left: elem.x - 600,
    });
  });
});
videoContainer.addEventListener("mouseleave", function () {
  gsap.to(videoBtn, {
    left: "80%",
  });
  gsap.to(".videocontent video", {
    display: "none",
    paused: true,
    currentTime: 0,
  });
  gsap.to(".videocontent #mainImg", {
    opacity: 1,
  });
  video.pause(), (videoPlayer.currentTime = 0), videoPlayer.play();
});

videoBtn.addEventListener("click", function () {
  video.play();
  gsap.to(".videocontent video", {
    display: "block",
  });
  gsap.to(".videocontent #mainImg", {
    opacity: 0,
  });
});
videoBtn.addEventListener("touchstart", function () {
  video.play();
  gsap.to(".videocontent video", {
    display: "block",
  });
  gsap.to(".videocontent #mainImg", {
    opacity: 0,
  });
});

document.addEventListener("mousemove", function (event) {
  gsap.to("#crsr", {
    left: event.x,
    top: event.y,
    duration: 0.5,
  });
});

Shery.makeMagnet(".navPart2 h3" /* Element to target.*/, {
  //Parameters are optional.
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});

function sheryAnimation() {
  Shery.imageEffect(".imgdiv", {
    style: 5,
    config: {
      a: { value: 2, range: [0, 30] },
      b: { value: -0.85, range: [-1, 1] },
      zindex: { value: -9996999, range: [-9999999, 9999999] },
      aspect: { value: 0.6419157979721226 },
      ignoreShapeAspect: { value: true },
      shapePosition: { value: { x: 0, y: 0 } },
      shapeScale: { value: { x: 0.5, y: 0.5 } },
      shapeEdgeSoftness: { value: 0, range: [0, 0.5] },
      shapeRadius: { value: 0, range: [0, 2] },
      currentScroll: { value: 0 },
      scrollLerp: { value: 0.07 },
      gooey: { value: true },
      infiniteGooey: { value: false },
      growSize: { value: 2.39, range: [1, 15] },
      durationOut: { value: 1, range: [0.1, 5] },
      durationIn: { value: 1.5, range: [0.1, 5] },
      displaceAmount: { value: 0.5 },
      masker: { value: true },
      maskVal: { value: 1.61, range: [1, 5] },
      scrollType: { value: 0 },
      geoVertex: { range: [1, 64], value: 1 },
      noEffectGooey: { value: true },
      onMouse: { value: 1 },
      noise_speed: { value: 0.2, range: [0, 10] },
      metaball: { value: 0.4, range: [0, 2] },
      discard_threshold: { value: 0.5, range: [0, 1] },
      antialias_threshold: { value: 0, range: [0, 0.1] },
      noise_height: { value: 0.5, range: [0, 2] },
      noise_scale: { value: 10.69, range: [0, 100] },
    },
    gooey: true,
  });
}
sheryAnimation();
let flag = document.querySelector("#flag");
document.addEventListener("mousemove", function (detail) {
  gsap.to(flag, {
    top: detail.y,
    left: detail.x,
  });
});
document.querySelector("#hero3").addEventListener("mouseenter", function () {
  flag.style.opacity = 1;
});
document.querySelector("#hero3").addEventListener("mouseleave", function () {
  flag.style.opacity = 0;
});
const i = document.querySelector("i");

let pauseplay = 0;
function change() {
  if (pauseplay === 0) {
    i.style.display = "block";
    document.querySelector(".videoBtn img").style.display = "none";
    pauseplay = 1;
  } else {
    i.style.display = "none";
    document.querySelector(".videoBtn img").style.display = "block";
    video.pause();
    pauseplay = 0;
  }
}
videoBtn.addEventListener("click", function () {
  change();
});

let isPlaying = false;
    function toggleVideo() {
      if (!isPlaying) {
        i.style.display = "none";
        document.querySelector(".videoBtn img").style.display = "block";
        video.pause();
        videoBtn.style.scale=1
        videoBtn.style.opacity="1"
        gsap.to(".videocontent #mainImg", {
          opacity: 1,
        });
      } else {
        i.style.display = "block";
        document.querySelector(".videoBtn img").style.display = "none";
        video.play();
        videoBtn.style.scale="0.5"
        videoBtn.style.opacity="0.5"
      }
      isPlaying = !isPlaying;
    }
    // Using touchstart and touchend events
    videoBtn.addEventListener('touchstart', toggleVideo);
    // videoBtn.addEventListener('touchend', toggleVideo);

   