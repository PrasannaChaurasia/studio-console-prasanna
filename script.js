const revealItems = document.querySelectorAll(".reveal, .reveal-block");
const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector(".site-nav");
const navLinks = document.querySelectorAll(".site-nav a");
const currentFile = window.location.pathname.split("/").pop() || "index.html";
const filterTabs = document.querySelectorAll("[data-filter]");
const projectSearch = document.querySelector("#project-search");
const dockCards = document.querySelectorAll(".dock-card");
const inspectorTitle = document.querySelector("#inspector-title");
const inspectorCopy = document.querySelector("#inspector-copy");
const previewFrame = document.querySelector("#source-preview");
const viewerTitle = document.querySelector("#viewer-title");
const viewerKicker = document.querySelector("#viewer-kicker");
const viewerOpen = document.querySelector("#viewer-open");
const projectOpen = document.querySelector("#project-open");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.14,
    rootMargin: "0px 0px -10% 0px"
  }
);

revealItems.forEach((item) => revealObserver.observe(item));

const closeMenu = () => {
  if (!menuToggle || !siteNav) {
    return;
  }
  menuToggle.setAttribute("aria-expanded", "false");
  siteNav.classList.remove("open");
  document.body.classList.remove("menu-open");
};

if (menuToggle && siteNav) {
  menuToggle.addEventListener("click", () => {
    const expanded = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!expanded));
    siteNav.classList.toggle("open", !expanded);
    document.body.classList.toggle("menu-open", !expanded);
  });
}

navLinks.forEach((link) => {
  link.addEventListener("click", closeMenu);
  if (link.getAttribute("href") === currentFile) {
    link.classList.add("is-active");
  }
});

const selectDockCard = (card) => {
  if (!card) {
    return;
  }

  dockCards.forEach((item) => item.classList.remove("is-selected"));
  card.classList.add("is-selected");

  const title = card.dataset.title || "Selected Project";
  const kicker = card.dataset.kicker || "Portfolio Source";
  const copy = card.dataset.copy || "";
  const pdf = card.dataset.pdf || "";
  const link = card.dataset.link || "work.html";

  if (viewerTitle) {
    viewerTitle.textContent = title;
  }
  if (viewerKicker) {
    viewerKicker.textContent = kicker;
  }
  if (inspectorTitle) {
    inspectorTitle.textContent = title;
  }
  if (inspectorCopy) {
    inspectorCopy.textContent = copy;
  }
  if (viewerOpen) {
    viewerOpen.href = pdf;
  }
  if (projectOpen) {
    projectOpen.href = link;
  }
  if (previewFrame && pdf) {
    previewFrame.src = `${pdf}#toolbar=0&navpanes=0`;
  }
};

const applyProjectFilters = () => {
  const activeFilter = document.querySelector(".console-tab.is-active")?.dataset.filter || "all";
  const query = projectSearch?.value.trim().toLowerCase() || "";

  dockCards.forEach((card) => {
    const tags = `${card.dataset.tags || ""} ${card.dataset.type || ""}`.toLowerCase();
    const matchesFilter = activeFilter === "all" || tags.includes(activeFilter);
    const matchesSearch = !query || tags.includes(query) || card.innerText.toLowerCase().includes(query);
    card.classList.toggle("is-hidden", !(matchesFilter && matchesSearch));
  });

  const selectedVisible = document.querySelector(".dock-card.is-selected:not(.is-hidden)");
  const firstVisible = document.querySelector(".dock-card:not(.is-hidden)");
  if (!selectedVisible && firstVisible) {
    selectDockCard(firstVisible);
  }
};

filterTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    filterTabs.forEach((item) => item.classList.remove("is-active"));
    tab.classList.add("is-active");
    applyProjectFilters();
  });
});

if (projectSearch) {
  projectSearch.addEventListener("input", applyProjectFilters);
}

dockCards.forEach((card) => {
  card.addEventListener("click", () => selectDockCard(card));
  card.addEventListener("focus", () => selectDockCard(card));
  card.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      selectDockCard(card);
    }
  });
});

window.addEventListener("resize", closeMenu);

applyProjectFilters();
selectDockCard(document.querySelector(".dock-card.is-selected") || document.querySelector(".dock-card"));
