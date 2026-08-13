/* =========================
   MOBILE MENU
========================= */

const menu = document.getElementById("menuBtn");
const drawer = document.getElementById("drawer");
const backdrop = document.getElementById("backdrop");
const closeBtn = document.getElementById("closeBtn");

function toggleMenu(open) {

  drawer.classList.toggle("open", open);
  backdrop.classList.toggle("show", open);

  menu.setAttribute(
    "aria-expanded",
    open ? "true" : "false"
  );
}

menu.addEventListener("click", () => {

  const isOpen = drawer.classList.contains("open");

  toggleMenu(!isOpen);

});

closeBtn.addEventListener("click", () => {
  toggleMenu(false);
});

backdrop.addEventListener("click", () => {
  toggleMenu(false);
});


document.querySelectorAll(".drawer a").forEach(link => {

  link.addEventListener("click", () => {
    toggleMenu(false);
  });

});


/* =========================
   SCROLL REVEAL
========================= */

const observer = new IntersectionObserver(

  entries => {

    entries.forEach(entry => {

      if (entry.isIntersecting) {

        entry.target.classList.add("visible");

        observer.unobserve(entry.target);

      }

    });

  },

  {
    threshold: 0.12,
    rootMargin: "0px 0px -40px"
  }

);


document
  .querySelectorAll(".reveal")
  .forEach(element => {

    observer.observe(element);

  });


/* =========================
   TESTIMONIAL LIGHTBOX
========================= */

const lightbox =
  document.getElementById("lightbox");

const lightboxImg =
  document.getElementById("lightboxImg");

const lightboxClose =
  document.getElementById("lightboxClose");


document
  .querySelectorAll(".testimonial-card")
  .forEach(card => {

    card.addEventListener("click", () => {

      const image =
        card.getAttribute("data-image");

      lightboxImg.src = image;

      lightbox.classList.add("open");

      document.body.style.overflow = "hidden";

    });

  });


function closeLightbox() {

  lightbox.classList.remove("open");

  document.body.style.overflow = "";

}


lightboxClose.addEventListener(
  "click",
  closeLightbox
);


lightbox.addEventListener(
  "click",
  event => {

    if (event.target === lightbox) {
      closeLightbox();
    }

  }
);


/* =========================
   ESC KEY
========================= */

document.addEventListener(
  "keydown",
  event => {

    if (event.key === "Escape") {

      toggleMenu(false);

      closeLightbox();

    }

  }
);
