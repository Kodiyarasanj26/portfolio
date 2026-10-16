/**
 * Kodiyarasan Jayaraman - Portfolio Interactive Controller
 * Features: Dark/Light Mode, Project Filters, Case Study Modal, Copy-to-Clipboard, Smooth Scrollspy
 */

// Complete Project Metadata & Case Studies from Updated Resume
const projectsData = {
  efield: {
    id: "efield",
    title: "eField – Field Service & Enterprise Mobility App",
    subtitle: "Enterprise Offline-First Architecture & Real-Time Workforce Platform",
    category: "enterprise",
    categoryLabel: "Enterprise Mobility",
    image: "assets/efield.jpg",
    tags: ["Flutter", "Riverpod", "SQLCipher", "Drift", "Dio", "WorkManager", "Google ML Kit (OCR)", "Google Maps", "Firebase App Check"],
    overview: "Enterprise cross-platform mobile application (Android & iOS) built with Flutter, designed for large-scale field workforce management, real-time operational support, and mission-critical offline data capture in environments with low or zero network connectivity.",
    achievements: [
      "Integrated and maintained REST APIs using Dio for field operations, work order task workflows, timesheet management, and offline data synchronization with HMAC-SHA256 request signing.",
      "Implemented robust offline-first architecture using an encrypted local database (SQLCipher) with Drift ORM and background synchronization via WorkManager, ensuring zero data loss and uninterrupted operations.",
      "Significantly boosted app performance, reduced crash rates via Firebase Crashlytics, and enhanced code maintainability by migrating legacy state management (ChangeNotifier) to Riverpod with Clean Architecture.",
      "Delivered advanced cross-functional mobile capabilities including dynamic server-driven forms, Google Maps navigation, PDF viewing/generation, audio recording, camera capture, biometric authentication (Fingerprint & FaceID), and Google ML Kit OCR.",
      "Integrated Firebase Cloud Messaging (FCM) for push notifications and hardened production security using Firebase App Check (Google Play Integrity & Apple DeviceCheck)."
    ],
    architecture: [
      { label: "State Management", value: "Riverpod with Clean Architecture (Domain, Data, Presentation layers)" },
      { label: "Offline Storage & Encryption", value: "SQLCipher (AES-256 encrypted database), Drift ORM" },
      { label: "Background Sync Engine", value: "WorkManager with exponential backoff & HMAC-SHA256 signing" },
      { label: "Networking & Security", value: "Dio client, Firebase App Check, Play Integrity, Biometrics" }
    ]
  },
  acvmx: {
    id: "acvmx",
    title: "ACVMX – Smart Coffee Vending Machine App",
    subtitle: "Dual-Role IoT Workforce & Beverage Service Platform",
    category: "statemgmt",
    categoryLabel: "IoT & Service Dispatch",
    image: "assets/acvmx.jpg",
    tags: ["Flutter", "Provider", "RESTful APIs", "Role-Based Auth", "App Store Release", "Field Ticketing"],
    overview: "Commercial Flutter application for smart coffee vending machines combining customer ordering with enterprise field-worker dispatch, diagnostics, and ticket management.",
    achievements: [
      "Engineered dual-role authentication flows tailored specifically for Customers and On-Field Service Workers with role-based access control (RBAC).",
      "Built a seamless ticketing pipeline allowing customers to report vending malfunctions while providing administrators an intelligent task assignment dashboard for field technicians.",
      "Designed worker post-completion workflows allowing technicians to update machine diagnostics, log component fixes, and verify operational health.",
      "Established hardened backend communication channels with encrypted tokens and strict data validation protocols.",
      "Successfully led the end-to-end Apple App Store submission process, including certificate generation, provisioning profile configuration, compliance reviews, and production rollout."
    ],
    architecture: [
      { label: "State Management", value: "Provider with modular service repositories" },
      { label: "Access Control", value: "Multi-role JWT authentication (Admin, Technician, Customer)" },
      { label: "Deployment", value: "App Store Connect & Google Play Console release management" }
    ]
  },
  pepli: {
    id: "pepli",
    title: "Pepli – Social Networking & Community App",
    subtitle: "High-Engagement Creator Community & Real-Time Social Platform",
    category: "social",
    categoryLabel: "Social & Community",
    image: "assets/pepli.jpg",
    tags: ["Flutter", "RESTful APIs", "Feed Engine", "Media Optimization", "UI/UX", "Social Graph"],
    overview: "Feature-rich social networking mobile application focused on high-density user engagement, interactive media consumption, real-time messaging, and seamless social interactions.",
    achievements: [
      "Spearheaded feature development, interactive UI enhancements, and defect resolution across complex feed, stories, and profile modules.",
      "Architected and optimized user profile dashboards, multimedia post feeds, and real-time interaction modules (likes, shares, comments).",
      "Integrated RESTful APIs with intelligent pagination and caching for smooth, low-latency scrolling and dynamic content delivery.",
      "Substantially improved UI responsiveness, frame rates (60fps), and memory consumption through rigorous widget tree profiling.",
      "Collaborated closely in cross-functional Agile sprints to maintain uncompromising code quality and accelerate release velocity."
    ],
    architecture: [
      { label: "State Flow", value: "Predictable state architecture with cached repositories" },
      { label: "Networking", value: "REST APIs with pagination, asset prefetching & lazy loading" },
      { label: "UI Layer", value: "Slivers, custom viewports, and high-performance render objects" }
    ]
  },
  paysynce: {
    id: "paysynce",
    title: "PaySynce – Digital Payment & P2P App",
    subtitle: "Secure Financial Transactions & Contact-Based Group Billing",
    category: "fintech",
    categoryLabel: "FinTech & Payments",
    image: "assets/paysynce.jpg",
    tags: ["Flutter", "BLoC", "RESTful APIs", "P2P Transfers", "Razorpay / Gateways", "Transaction Logs"],
    overview: "Modern fintech mobile application engineered for secure, frictionless digital payments, split-billing among contact groups, and merchant checkouts.",
    achievements: [
      "Facilitated merchant payments, contact-based bill splitting calculations, and peer-to-peer (P2P) fund transfers.",
      "Supervised reactive state and data flow across all payment modules using BLoC pattern, ensuring strict auditability and deterministic state transitions.",
      "Constructed secure payment processing workflows equipped with detailed error handling, transaction logging, and real-time verification alerts.",
      "Designed a sleek, glanceable digital wallet interface adhering strictly to modern Material 3 design and financial security standards."
    ],
    architecture: [
      { label: "State Management", value: "BLoC (Business Logic Component) pattern" },
      { label: "Payment Security", value: "HMAC signatures, masked account data, biometric payment confirmation" },
      { label: "Networking", value: "Secure RESTful endpoints with idempotency keys" }
    ]
  },
  easymove: {
    id: "easymove",
    title: "EasyMove – Multi-Module On-Demand Platform",
    subtitle: "Comprehensive 7-Module Multi-Domain Service Ecosystem",
    category: "enterprise",
    categoryLabel: "Multi-Module Ecosystem",
    image: "assets/easymove.jpg",
    tags: ["Flutter", "Provider", "RESTful APIs", "Google Maps", "In-App Chat", "Escrow Payments"],
    overview: "All-in-one on-demand platform uniting 7 distinct commercial service verticals into a single cohesive, high-performance Flutter mobile application.",
    achievements: [
      "Engineered Provider architecture and RESTful APIs across seven distinct modules: Real Estate, Vehicle Rentals, Property Buying/Importing, Short Stays, Tours & Travels, Packers & Movers, Architecture/Interior Design, and Flight Booking.",
      "Integrated Google Maps location services for real-time tracking, geolocation search, and route calculation across delivery and logistics domains.",
      "Built real-time in-app chat for buyer-seller negotiations and integrated escrow-backed payment gateways for secure transactions.",
      "Delivered a modular, reusable UI component library that enabled rapid extension and clean separation of concerns."
    ],
    architecture: [
      { label: "Architecture", value: "Modular Feature Architecture with Provider state orchestration" },
      { label: "Location Services", value: "Google Maps Platform SDK & geofencing" },
      { label: "Transactions", value: "Escrow payment verification pipelines" }
    ]
  }
};

// Initialize Application on DOMContentLoaded
document.addEventListener("DOMContentLoaded", () => {
  initThemeToggle();
  initNavigation();
  initProjectFilters();
  initModalHandlers();
  initCopyActions();
  initContactForm();
});

/* ==========================================================================
   Theme Management (Dark / Light with LocalStorage)
   ========================================================================== */
function initThemeToggle() {
  const themeToggleBtn = document.getElementById("themeToggleBtn");
  const storedTheme = localStorage.getItem("ky_theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  const currentTheme = storedTheme || (prefersDark ? "dark" : "dark"); // Default dark
  setTheme(currentTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", () => {
      const activeTheme = document.documentElement.getAttribute("data-theme") || "dark";
      const newTheme = activeTheme === "dark" ? "light" : "dark";
      setTheme(newTheme);
    });
  }
}

function setTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("ky_theme", theme);
  const themeToggleBtn = document.getElementById("themeToggleBtn");
  if (themeToggleBtn) {
    if (theme === "light") {
      themeToggleBtn.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
        </svg>`;
      themeToggleBtn.setAttribute("title", "Switch to Dark Mode");
      themeToggleBtn.setAttribute("aria-label", "Switch to Dark Mode");
    } else {
      themeToggleBtn.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="5"></circle>
          <line x1="12" y1="1" x2="12" y2="3"></line>
          <line x1="12" y1="21" x2="12" y2="23"></line>
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
          <line x1="1" y1="12" x2="3" y2="12"></line>
          <line x1="21" y1="12" x2="23" y2="12"></line>
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
        </svg>`;
      themeToggleBtn.setAttribute("title", "Switch to Light Mode");
      themeToggleBtn.setAttribute("aria-label", "Switch to Light Mode");
    }
  }
}

/* ==========================================================================
   Navigation & Scrollspy
   ========================================================================== */
function initNavigation() {
  const header = document.querySelector(".site-header");
  const mobileToggle = document.getElementById("mobileToggle");
  const navMenu = document.getElementById("navMenu");
  const navLinks = document.querySelectorAll(".nav-link");

  // Header scroll shadow
  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
    updateActiveNav();
  });

  // Mobile menu toggle
  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener("click", () => {
      navMenu.classList.toggle("show");
    });

    // Close mobile menu on link click
    navLinks.forEach(link => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("show");
      });
    });
  }

  // Active link scrollspy
  function updateActiveNav() {
    const sections = document.querySelectorAll("section[id]");
    const scrollPos = window.scrollY + 120;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute("id");

      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach(link => {
          link.classList.remove("active");
          if (link.getAttribute("href") === `#${id}`) {
            link.classList.add("active");
          }
        });
      }
    });
  }
}

/* ==========================================================================
   Project Category Filter
   ========================================================================== */
function initProjectFilters() {
  const filterBtns = document.querySelectorAll(".filter-btn");
  const projectCards = document.querySelectorAll(".project-card");

  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const filterVal = btn.getAttribute("data-filter");

      projectCards.forEach(card => {
        const cardCat = card.getAttribute("data-category");
        if (filterVal === "all" || cardCat === filterVal) {
          card.style.display = "flex";
          setTimeout(() => {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
          }, 10);
        } else {
          card.style.opacity = "0";
          card.style.transform = "translateY(15px)";
          setTimeout(() => {
            card.style.display = "none";
          }, 200);
        }
      });
    });
  });
}

/* ==========================================================================
   Case Study Modal
   ========================================================================== */
function initModalHandlers() {
  const modalOverlay = document.getElementById("projectModal");
  const modalCloseBtn = document.getElementById("modalCloseBtn");
  const triggerBtns = document.querySelectorAll("[data-open-modal]");

  triggerBtns.forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const projectId = btn.getAttribute("data-open-modal");
      openProjectModal(projectId);
    });
  });

  if (modalCloseBtn && modalOverlay) {
    modalCloseBtn.addEventListener("click", closeModal);
    modalOverlay.addEventListener("click", (e) => {
      if (e.target === modalOverlay) {
        closeModal();
      }
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && modalOverlay.classList.contains("active")) {
        closeModal();
      }
    });
  }

  function closeModal() {
    modalOverlay.classList.remove("active");
    document.body.style.overflow = "";
  }
}

function openProjectModal(projectId) {
  const project = projectsData[projectId];
  if (!project) return;

  const modalOverlay = document.getElementById("projectModal");
  const modalTitle = document.getElementById("modalTitle");
  const modalCategory = document.getElementById("modalCategory");
  const modalImage = document.getElementById("modalImage");
  const modalOverview = document.getElementById("modalOverview");
  const modalAchievements = document.getElementById("modalAchievements");
  const modalArchitecture = document.getElementById("modalArchitecture");
  const modalTags = document.getElementById("modalTags");

  if (modalTitle) modalTitle.textContent = project.title;
  if (modalCategory) modalCategory.textContent = `${project.categoryLabel} • Cross-Platform Flutter`;
  if (modalImage) {
    modalImage.src = project.image;
    modalImage.alt = project.title;
  }
  if (modalOverview) modalOverview.textContent = project.overview;

  // Render Achievements
  if (modalAchievements) {
    modalAchievements.innerHTML = project.achievements
      .map(item => `<li>${item}</li>`)
      .join("");
  }

  // Render Architecture highlights
  if (modalArchitecture) {
    modalArchitecture.innerHTML = project.architecture
      .map(arch => `
        <div style="background: var(--bg-secondary); padding: 0.85rem 1.1rem; border-radius: 8px; border: 1px solid var(--border-subtle); margin-bottom: 0.6rem;">
          <strong style="color: var(--accent-cyan); display: block; font-size: 0.85rem; font-family: var(--font-mono);">${arch.label}</strong>
          <span style="color: var(--text-primary); font-size: 0.92rem;">${arch.value}</span>
        </div>
      `)
      .join("");
  }

  // Render Tags
  if (modalTags) {
    modalTags.innerHTML = project.tags
      .map(tag => `<span class="tag-badge" style="color: var(--accent-cyan); border-color: rgba(0, 210, 255, 0.3);">${tag}</span>`)
      .join("");
  }

  modalOverlay.classList.add("active");
  document.body.style.overflow = "hidden";
}

/* ==========================================================================
   Copy to Clipboard with Toast Notification
   ========================================================================== */
function initCopyActions() {
  const copyButtons = document.querySelectorAll("[data-copy-val]");
  copyButtons.forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const val = btn.getAttribute("data-copy-val");
      const label = btn.getAttribute("data-copy-label") || val;

      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(val).then(() => {
          showToast(`Copied ${label} to clipboard!`);
        }).catch(() => {
          fallbackCopy(val, label);
        });
      } else {
        fallbackCopy(val, label);
      }
    });
  });
}

function fallbackCopy(text, label) {
  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.style.position = "fixed";
  textarea.style.opacity = "0";
  document.body.appendChild(textarea);
  textarea.select();
  try {
    document.execCommand("copy");
    showToast(`Copied ${label} to clipboard!`);
  } catch (err) {
    showToast(`Could not copy: ${text}`);
  }
  document.body.removeChild(textarea);
}

function showToast(message) {
  let toast = document.getElementById("toastNotice");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "toastNotice";
    toast.className = "toast-notice";
    document.body.appendChild(toast);
  }

  toast.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00d2ff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
    <span>${message}</span>
  `;

  toast.classList.add("show");

  clearTimeout(window._toastTimeout);
  window._toastTimeout = setTimeout(() => {
    toast.classList.remove("show");
  }, 3200);
}

/* ==========================================================================
   Contact Form Handler
   ========================================================================== */
function initContactForm() {
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("formName").value.trim();
      const email = document.getElementById("formEmail").value.trim();
      const message = document.getElementById("formMessage").value.trim();

      if (!name || !email || !message) {
        showToast("Please fill in all fields before sending.");
        return;
      }

      // Generate mailto link for direct submission to Kodiyarasan
      const subject = encodeURIComponent(`Portfolio Inquiry from ${name}`);
      const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
      window.location.href = `mailto:kodiyarasanj26@gmail.com?subject=${subject}&body=${body}`;

      showToast("Thank you! Opening your email client to send message.");
      contactForm.reset();
    });
  }
}
