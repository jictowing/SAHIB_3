/* Sahib Truck & Trailer Repair — interactions */
(function () {
  "use strict";

  // Current year in footer
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Mobile nav toggle
  var toggle = document.getElementById("navToggle");
  var nav = document.getElementById("nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    // Close menu when a link is clicked
    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Contact form -> opens a pre-filled email
  var form = document.getElementById("serviceForm");
  var note = document.getElementById("formNote");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      var name = (document.getElementById("name") || {}).value || "";
      var phone = (document.getElementById("phone") || {}).value || "";
      var email = (document.getElementById("email") || {}).value || "";
      var service = (document.getElementById("service") || {}).value || "";
      var message = (document.getElementById("message") || {}).value || "";

      if (!name.trim() || !phone.trim()) {
        if (note) note.textContent = "Please enter your name and phone number.";
        return;
      }

      var subject = "Service Request: " + service + " — " + name;
      var body =
        "Name: " + name + "\n" +
        "Phone: " + phone + "\n" +
        "Email: " + email + "\n" +
        "Service Needed: " + service + "\n\n" +
        "Details:\n" + message + "\n";

      var mailto =
        "mailto:info.sahibtruck@gmail.com" +
        "?subject=" + encodeURIComponent(subject) +
        "&body=" + encodeURIComponent(body);

      window.location.href = mailto;

      if (note) {
        note.style.color = "#7bd88f";
        note.textContent = "Opening your email app… If nothing happens, call us at 204.996.7611.";
      }
      form.reset();
    });
  }
})();
