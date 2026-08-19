/* Gunn Speech & Debate — site behavior */
(function () {
  "use strict";

  /* Mobile navigation */
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("nav");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(open));
      toggle.textContent = open ? "Close" : "Menu";
    });

    nav.addEventListener("click", function (e) {
      if (e.target.tagName === "A" && nav.classList.contains("is-open")) {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.textContent = "Menu";
      }
    });
  }

  /* Current year in the footer */
  Array.prototype.forEach.call(document.querySelectorAll("#year"), function (el) {
    el.textContent = new Date().getFullYear();
  });

  /* Scroll reveal — skipped entirely when reduced motion is requested */
  var reveals = document.querySelectorAll(".reveal");
  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (reduced || !("IntersectionObserver" in window)) {
    Array.prototype.forEach.call(reveals, function (el) { el.classList.add("is-in"); });
    return;
  }

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry, i) {
      if (!entry.isIntersecting) return;
      var el = entry.target;
      setTimeout(function () { el.classList.add("is-in"); }, i * 70);
      observer.unobserve(el);
    });
  }, { rootMargin: "0px 0px -60px 0px", threshold: 0.08 });

  Array.prototype.forEach.call(reveals, function (el) { observer.observe(el); });
})();
