(() => {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (reduceMotion) {
    document.body.classList.add("reduce-motion");
  }

  const revealElements = [...document.querySelectorAll("[data-reveal]")];

  const showElement = (element) => {
    element.classList.add("is-visible");
  };

  const initReveal = () => {
    if (!revealElements.length) {
      return;
    }

    if (reduceMotion || !("IntersectionObserver" in window)) {
      revealElements.forEach(showElement);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }
          showElement(entry.target);
          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -10% 0px",
      }
    );

    revealElements.forEach((element) => observer.observe(element));
  };

  const initTypewriter = () => {
    const target = document.querySelector("[data-typewriter]");
    if (!target) {
      return;
    }

    const roles = (target.dataset.roles || "")
      .split("|")
      .map((item) => item.trim())
      .filter(Boolean);

    if (!roles.length) {
      return;
    }

    if (reduceMotion) {
      target.textContent = roles[0];
      return;
    }

    let roleIndex = 0;
    let charIndex = 0;
    let deleting = false;
    let timerId = null;

    const typeSpeed = 72;
    const deleteSpeed = 44;
    const holdDelay = 1320;
    const betweenDelay = 260;

    const tick = () => {
      const role = roles[roleIndex];

      if (deleting) {
        charIndex -= 1;
        target.textContent = role.slice(0, charIndex);

        if (charIndex <= 0) {
          deleting = false;
          roleIndex = (roleIndex + 1) % roles.length;
          timerId = window.setTimeout(tick, betweenDelay);
          return;
        }

        timerId = window.setTimeout(tick, deleteSpeed);
        return;
      }

      charIndex += 1;
      target.textContent = role.slice(0, charIndex);

      if (charIndex >= role.length) {
        deleting = true;
        timerId = window.setTimeout(tick, holdDelay);
        return;
      }

      timerId = window.setTimeout(tick, typeSpeed);
    };

    target.textContent = "";
    timerId = window.setTimeout(tick, 320);

    window.addEventListener("beforeunload", () => {
      if (timerId) {
        window.clearTimeout(timerId);
      }
    });
  };

  const initExternalLinks = () => {
    const links = [...document.querySelectorAll("a[data-external='true']")];
    links.forEach((link) => {
      link.setAttribute("target", "_blank");
      link.setAttribute("rel", "noopener noreferrer");

      if (reduceMotion) {
        return;
      }

      const setOpening = () => {
        link.classList.add("is-opening");
        window.setTimeout(() => link.classList.remove("is-opening"), 220);
      };

      link.addEventListener("pointerdown", setOpening);
      link.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
          setOpening();
        }
      });
    });
  };

  const initContactForm = () => {
    const form = document.querySelector("[data-contact-form]");
    if (!form) {
      return;
    }

    const fields = [...form.querySelectorAll("input, select, textarea")];
    const status = form.querySelector("[data-form-status]");

    const setStatus = (state, message) => {
      if (!status) {
        return;
      }
      status.hidden = false;
      status.dataset.state = state;
      status.textContent = message;
    };

    const validateField = (field) => {
      if (field.checkValidity()) {
        field.classList.remove("field-error");
        field.setAttribute("aria-invalid", "false");
        return true;
      }

      field.classList.add("field-error");
      field.setAttribute("aria-invalid", "true");
      return false;
    };

    fields.forEach((field) => {
      field.addEventListener("blur", () => validateField(field));
      field.addEventListener("input", () => {
        if (field.classList.contains("field-error")) {
          validateField(field);
        }
      });
    });

    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const allValid = fields.every((field) => validateField(field));
      if (!allValid) {
        setStatus("error", "Please check the highlighted fields.");
        return;
      }

      const data = new FormData(form);
      const values = Object.fromEntries(data.entries());
      const mailtoTarget = form.dataset.mailto || "mailto:ing.and.rizzo@gmail.com";
      const subject = encodeURIComponent(`New request: ${values.requestType}`);
      const body = encodeURIComponent(
        [
          `Full name: ${values.fullName}`,
          `Phone: ${values.phone}`,
          `Email: ${values.email}`,
          `Request type: ${values.requestType}`,
          "",
          "Message:",
          values.message,
        ].join("\n")
      );

      setStatus("success", "Opening your email client...");

      window.setTimeout(() => {
        window.location.href = `${mailtoTarget}?subject=${subject}&body=${body}`;
      }, reduceMotion ? 0 : 170);

      form.reset();
      fields.forEach((field) => {
        field.classList.remove("field-error");
        field.setAttribute("aria-invalid", "false");
      });
    });
  };

  const initFooterYear = () => {
    const yearNode = document.getElementById("year");
    if (yearNode) {
      yearNode.textContent = String(new Date().getFullYear());
    }
  };

  const initTrackingStub = () => {
    window.ProfileHub = window.ProfileHub || {};
    window.ProfileHub.track = window.ProfileHub.track || ((eventName, payload = {}) => {
      if (typeof window.gtag === "function") {
        window.gtag("event", eventName, payload);
      }
    });

    document.querySelectorAll("[data-track]").forEach((element) => {
      element.addEventListener("click", () => {
        const eventName = element.getAttribute("data-track");
        if (eventName) {
          window.ProfileHub.track(eventName, { location: window.location.pathname });
        }
      });
    });
  };

  const init = () => {
    initReveal();
    initTypewriter();
    initExternalLinks();
    initContactForm();
    initFooterYear();
    initTrackingStub();
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
