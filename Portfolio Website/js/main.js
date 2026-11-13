const portfolioItems = [
  {
    title: "Outdoor Venue",
    description: "Open-air venue and stage setup ahead of a live event.",
    tag: "Venue Stagecraft",
    image: "assets/Portfolio 1.png",
    alt: "Outdoor concert venue with a covered stage and lighting rig."
  },
  {
    title: "Live Event LED",
    description: "Event stage featuring a multi-screen LED video wall.",
    tag: "LED Video",
    image: "assets/Portfolio 2.png",
    alt: "Indoor event stage with several large LED screens."
  },
  {
    title: "Heartland Summit",
    description: "Multi-screen presentation setup for the Heartland Summit.",
    tag: "Event Production",
    image: "assets/Portfolio 3.png",
    alt: "Heartland Summit stage with a large center LED wall and two side screens."
  },
  {
    title: "Theatre Stage",
    description: "Theatre auditorium viewed from the stage during event setup.",
    tag: "Theatre",
    image: "assets/Portfolio 4.png",
    alt: "Theatre auditorium and seating viewed from the stage."
  },
  {
    title: "Outdoor Lighting Installations",
    description: "Outdoor installation illuminated with vibrant blue and magenta lighting.",
    tag: "Outdoor Lighting",
    image: "assets/Cosmic1.jpeg",
    alt: "Outdoor installation illuminated with blue and magenta lights."
  }
];

const videos = [
  { id: "TPZcdZRf-rU", caption: "Live event stagecraft and LED video wall work." },
  { id: "hmObrynIyAg", caption: "LED Warehouse." }
];

const renderPortfolio = () => {
  const grid = document.querySelector("[data-portfolio-grid]");
  if (!grid) return;

  grid.insertAdjacentHTML(
    "afterbegin",
    portfolioItems
      .map(
        ({ title, description, tag, image, alt }) => `
          <article class="project-card">
            <div class="project-media">
              <img src="${image}" alt="${alt}" loading="lazy" />
              <span class="project-tag">${tag}</span>
            </div>
            <div class="project-content">
              <h2>${title}</h2>
              <p>${description}</p>
            </div>
          </article>
        `
      )
      .join("")
  );
};

const renderVideos = () => {
  const grid = document.querySelector("[data-video-grid]");
  if (!grid) return;

  grid.innerHTML = videos
    .map(
      ({ id, caption }) => `
        <article class="video-card">
          <div class="video-frame">
            <iframe
              src="https://www.youtube-nocookie.com/embed/${id}"
              title="${caption}"
              loading="lazy"
              referrerpolicy="strict-origin-when-cross-origin"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <p>${caption}</p>
        </article>
      `
    )
    .join(""    );
};

const initMobileNavigation = () => {
  const toggle = document.querySelector(".menu-toggle");
  const menu = document.querySelector(".nav-links");
  if (!toggle || !menu) return;

  const closeMenu = () => {
    menu.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Open navigation menu");
  };

  toggle.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
    toggle.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
  });

  menu.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));
};

document.querySelectorAll("[data-year]").forEach((year) => {
  year.textContent = new Date().getFullYear();
});

renderPortfolio();
renderVideos();
initMobileNavigation();
