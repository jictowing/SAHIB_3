document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.getElementById("menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");

  if (menuButton && mobileMenu) {
    menuButton.addEventListener("click", () => {
      const open = mobileMenu.classList.toggle("is-open");
      menuButton.setAttribute("aria-expanded", String(open));
    });

    mobileMenu.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        mobileMenu.classList.remove("is-open");
        menuButton.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Keep all same-page navigation smooth and accessible.
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", event => {
      const id = link.getAttribute("href");
      if (!id || id === "#") return;
      const target = document.querySelector(id);
      if (target) {
        event.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
        history.replaceState(null, "", id);
      }
    });
  });

  // Static-hosting friendly request form: opens the visitor's email client.
  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", event => {
      event.preventDefault();
      const data = new FormData(form);
      const subject = encodeURIComponent("Service Request - Sahib Truck & Trailer Repair");
      const body = encodeURIComponent(
        `Name: ${data.get("name") || ""}\n` +
        `Phone: ${data.get("phone") || ""}\n` +
        `Email: ${data.get("email") || ""}\n` +
        `Vehicle: ${data.get("vehicle") || ""}\n` +
        `Service: ${data.get("service") || ""}\n\n` +
        `Message:\n${data.get("message") || ""}`
      );
      window.location.href = `mailto:info.sahibtruck@gmail.com?subject=${subject}&body=${body}`;
    });
  }
});
