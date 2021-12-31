// Global variabls
const toggleButton = document.querySelector(".toggleButton");
const menu = document.getElementById("menu");
const preloaderEl = document.querySelector(".preloader");
let scrollAnimatedEl = document.querySelectorAll("section, figure");

// Set up the

toggleButton.addEventListener("click", (_) => {
   let isOpend = toggleButton.ariaExpanded === "true";
   toggleButton.ariaExpanded = isOpend ? "flase" : "true";
   document.lastElementChild.style.overflowY = isOpend ? "initial" : "hidden";
   menu.classList.toggle("openanimate");
   toggleButton.classList.toggle("closeState");
});

menu.addEventListener("click", (e) => {
   let target = e.target;
   if (target.nodeName === "A" && window.innerWidth <= 576) {
      if (!target.classList.contains("email")) toggleButton.click();
   }
});

// set upPreloader

window.scrollTo(0, 0);
window.onload = (_) => {
   preloaderEl.classList.add("closed");
   document.lastElementChild.style.overflowY = "initial";
   document.getElementById("ladingContent").classList.add("showElements");
   setTimeout((_) => {
      preloaderEl.style.display = "none";
   }, 1000);
};

// set up section animation

scrollAnimatedEl.forEach((el) => {
   el.classList.add("hideSec", "SectionTransition");
});
window.addEventListener("scroll", function () {
   scrollAnimatedEl.forEach((el) => {
      if (window.scrollY + window.innerHeight > el.offsetTop + 70) el.classList.add("showSec");
   });
});

// set our map

mapboxgl.accessToken =
   "pk.eyJ1IjoiZWxtZWhkaXZvbiIsImEiOiJja3c3czdjYWcxMnI1MnFxbG1ubTZ6bGJiIn0.KvROk3IY0YX_Km0O2zB0Ww";
const map = new mapboxgl.Map({
   container: "map", // container ID
   style: "mapbox://styles/elmehdivon/ckxrgmp9xsgym15ns5slmzpgf", // style URL
   center: [-73.95422, 40.79893], // starting position [lng, lat]
   zoom: 8, // starting zoom
});
let marker = new mapboxgl.Marker().setLngLat([-73.95422, 40.79893]).addTo(map);

// update copy right year
document.getElementById("thisYear").innerText = new Date().getFullYear()
