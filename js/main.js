document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("order-modal");
  const openButtons = document.querySelectorAll("[data-modal-open]");
  const closeButtons = document.querySelectorAll("[data-modal-close]");

  openButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      if (modal) {
        modal.classList.add("modal--active");
        document.body.style.overflow = "hidden";
      }
    });
  });

  closeButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      if (modal) {
        modal.classList.remove("modal--active");
        document.body.style.overflow = "";
      }
    });
  });

  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.classList.remove("modal--active");
        document.body.style.overflow = "";
      }
    });
  }

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal && modal.classList.contains("modal--active")) {
      modal.classList.remove("modal--active");
      document.body.style.overflow = "";
    }
  });
});
