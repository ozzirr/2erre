(() => {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const i18n = window.ProfileI18n || null;

  const t = (key, fallback, variables = {}) => {
    if (!i18n || typeof i18n.t !== "function") {
      return fallback !== undefined ? fallback : key;
    }
    const value = i18n.t(key, variables);
    if (typeof value !== "string") {
      return fallback !== undefined ? fallback : key;
    }
    return value;
  };

  const getValue = (key, fallback = undefined) => {
    if (!i18n || typeof i18n.getValue !== "function") {
      return fallback;
    }
    const value = i18n.getValue(key);
    return value === undefined ? fallback : value;
  };

  const getCurrentLanguage = () => {
    if (!i18n || typeof i18n.getLanguage !== "function") {
      return "en";
    }
    return i18n.getLanguage();
  };

  if (reduceMotion) {
    document.body.classList.add("reduce-motion");
  }

  const revealElements = [...document.querySelectorAll("[data-reveal]")];

  const roleKeyFromLabel = (label = "") => {
    const normalized = label.trim().toLowerCase();
    const map = {
      "ai integration": "ai-integration",
      "integrazione ai": "ai-integration",
      "digital advisory": "digital-advisory",
      "consulenza digitale": "digital-advisory",
      "project management": "project-management",
      "gestione progetti": "project-management"
    };
    if (map[normalized]) {
      return map[normalized];
    }
    return normalized.replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
  };

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
        rootMargin: "0px 0px -10% 0px"
      }
    );

    revealElements.forEach((element) => observer.observe(element));
  };

  const initRoleRotator = () => {
    const rotator = document.querySelector("[data-role-rotator]");
    if (!rotator) {
      return;
    }

    const textNode = rotator.querySelector(".role-rotator-text");
    if (!textNode) {
      return;
    }

    const roleKeys = (rotator.dataset.roleKeys || "")
      .split("|")
      .map((item) => item.trim())
      .filter(Boolean);

    let roles = [];
    let roleIndex = 0;
    let timerId = null;

    const clearTimer = () => {
      if (timerId !== null) {
        window.clearTimeout(timerId);
        timerId = null;
      }
    };

    const resolveRoles = () => {
      const translated = getValue("hero.roles");
      if (Array.isArray(translated) && translated.length) {
        return translated.map((role) => String(role));
      }

      if (roleKeys.length) {
        return roleKeys.map((key) => key.replace(/-/g, " "));
      }

      const rawRoles = (rotator.dataset.roles || "")
        .split("|")
        .map((item) => item.trim())
        .filter(Boolean);
      return rawRoles;
    };

    const updateCurrentRole = () => {
      const key = roleKeys[roleIndex] || roleKeyFromLabel(roles[roleIndex]);
      rotator.dataset.currentRoleKey = key;
      textNode.textContent = roles[roleIndex] || "";
    };

    const startRotation = () => {
      clearTimer();
      roles = resolveRoles();
      roleIndex = 0;

      if (!roles.length) {
        return;
      }

      const maxLength = roles.reduce((max, role) => Math.max(max, role.length), 0);
      rotator.style.setProperty("--role-width", `${maxLength + 2}ch`);
      updateCurrentRole();

      if (reduceMotion) {
        return;
      }

      const outDuration = 260;
      const holdDuration = 1800;

      const swapRole = () => {
        textNode.classList.add("is-out");

        timerId = window.setTimeout(() => {
          roleIndex = (roleIndex + 1) % roles.length;
          updateCurrentRole();
          textNode.classList.remove("is-out");
          textNode.classList.add("is-in");

          window.setTimeout(() => {
            textNode.classList.remove("is-in");
          }, 220);

          timerId = window.setTimeout(swapRole, holdDuration);
        }, outDuration);
      };

      timerId = window.setTimeout(swapRole, holdDuration);
    };

    startRotation();
    window.addEventListener("i18n:change", startRotation);
    window.addEventListener("beforeunload", clearTimer);
  };

  const initHeroParallax = () => {
    const heroMedia = document.querySelector(".hero-media");
    const heroImage = document.querySelector(".hero-image");
    if (!heroMedia || !heroImage || reduceMotion) {
      return;
    }

    let frameId = null;

    const updateShift = () => {
      frameId = null;
      const mediaTop = heroMedia.getBoundingClientRect().top;
      const scrolled = Math.max(0, -mediaTop);
      const shift = -Math.min(11, scrolled * 0.1);
      heroImage.style.setProperty("--hero-shift", `${shift.toFixed(2)}px`);
    };

    const requestShiftUpdate = () => {
      if (frameId !== null) {
        return;
      }
      frameId = window.requestAnimationFrame(updateShift);
    };

    updateShift();
    window.addEventListener("scroll", requestShiftUpdate, { passive: true });
    window.addEventListener("resize", requestShiftUpdate);
  };

  const initProjectCube = () => {
    const scene = document.querySelector("[data-cube-scene]");
    const cube = document.querySelector("[data-project-cube]");
    const loading = document.querySelector("[data-cube-loading]");
    if (!scene || !cube) return;

    // Cube State
    let targetX = -18;
    let targetY = 0;
    let currentX = -18;
    let currentY = 0;
    let velocityX = 0;
    let velocityY = 0;
    
    let dragging = false;
    let lastMouseX = 0;
    let lastMouseY = 0;
    let pointerId = null;
    let moved = false;
    let pauseUntil = 0;
    let ready = false;

    const lerp = (start, end, factor) => start + (end - start) * factor;
    const wrapAngle = (value) => ((((value + 180) % 360) + 360) % 360) - 180;

    const faceTargets = {
      connect: { x: -18, y: 0 },
      odora: { x: -18, y: -90 },
      balance: { x: -18, y: 180 },
      generale: { x: -18, y: 90 },
      game: { x: -90, y: 0 },
      bottom: { x: 90, y: 0 }
    };

    // Project Overlay Logic
    const overlay = document.getElementById("project-detail-overlay");
    const overlayBody = document.getElementById("project-detail-body");
    const closeOverlay = overlay.querySelector(".project-overlay-close");

    const openProjectDetail = (id) => {
      const data = getValue(`cube.projectDetails.${id}`);
      if (!data) return;

      const visitText = t("cube.viewProject", "Visit Project");
      const url = id === "odora" ? "https://odora.it/?utm_source=mylinks" : 
                  id === "balance" ? "https://ctrlbalance.com/?utm_source=mylinks" :
                  "https://generale-elettrica.com/?utm_source=mylinks";

      overlayBody.innerHTML = `
        <div class="project-detail">
            <p class="project-detail-kicker">${data.kicker}</p>
            <h2 class="project-detail-title">${data.title || id.charAt(0).toUpperCase() + id.slice(1)}</h2>
            <div class="project-detail-tags">
                ${(data.tags || []).map(t => `<span class="project-detail-tag">${t}</span>`).join("")}
            </div>
            <p class="project-detail-copy">${data.description}</p>
            <div class="project-detail-actions">
                <a href="${url}" class="project-detail-cta" target="_blank">${visitText}</a>
            </div>
        </div>
      `;

      overlay.classList.add("is-active");
      overlay.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";
    };

    const closeProjectDetail = () => {
      overlay.classList.remove("is-active");
      overlay.setAttribute("aria-hidden", "true");
      document.body.style.overflow = "";
    };

    document.querySelectorAll("[data-project-trigger]").forEach(btn => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        openProjectDetail(btn.dataset.projectTrigger);
      });
    });

    closeOverlay.addEventListener("click", closeProjectDetail);
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) closeProjectDetail();
    });

    // Retro Runner Game Engine
    const runnerContainer = document.querySelector("[data-runner-game]");
    const canvas = document.querySelector("[data-runner-canvas]");
    const startBtn = document.querySelector("[data-runner-start]");
    const ctx = canvas.getContext("2d");

    let gameState = "ready"; // ready, running, gameover
    let score = 0;
    let player = { x: 50, y: 150, w: 20, h: 30, dy: 0, jumpPower: -8, gravity: 0.4, isGrounded: false };
    let obstacles = [];
    let frame = 0;

    const resetGame = () => {
      score = 0;
      player.y = canvas.height - player.h - 10;
      player.dy = 0;
      obstacles = [];
      gameState = "running";
      startBtn.style.display = "none";
    };

    const spawnObstacle = () => {
      obstacles.push({ x: canvas.width, y: canvas.height - 30, w: 15, h: 20, speed: 3 + score * 0.1 });
    };

    const updateGame = () => {
      if (gameState !== "running") return;

      frame++;
      if (frame % 80 === 0) spawnObstacle();

      // Player physics
      player.dy += player.gravity;
      player.y += player.dy;

      if (player.y > canvas.height - player.h - 10) {
        player.y = canvas.height - player.h - 10;
        player.dy = 0;
        player.isGrounded = true;
      }

      // Obstacles
      obstacles.forEach((obs, index) => {
        obs.x -= obs.speed;
        
        // Collision
        if (player.x < obs.x + obs.w && player.x + player.w > obs.x &&
            player.y < obs.y + obs.h && player.y + player.h > obs.y) {
          gameState = "gameover";
          startBtn.textContent = "Restart";
          startBtn.style.display = "block";
        }

        if (obs.x + obs.w < 0) {
          obstacles.splice(index, 1);
          score++;
        }
      });
    };

    const drawGame = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Floor
      ctx.strokeStyle = "rgba(255,255,255,0.1)";
      ctx.beginPath();
      ctx.moveTo(0, canvas.height - 10);
      ctx.lineTo(canvas.width, canvas.height - 10);
      ctx.stroke();

      // Player (Retro Block)
      ctx.fillStyle = "#d3a289";
      ctx.fillRect(player.x, player.y, player.w, player.h);
      ctx.strokeStyle = "#fff";
      ctx.strokeRect(player.x, player.y, player.w, player.h);

      // Obstacles
      ctx.fillStyle = "#ff4444";
      obstacles.forEach(obs => {
        ctx.fillRect(obs.x, obs.y, obs.w, obs.h);
      });

      // UI
      ctx.fillStyle = "#fff";
      ctx.font = "10px Arial";
      ctx.fillText(`SCORE: ${score}`, 10, 20);

      if (gameState === "gameover") {
        ctx.fillStyle = "rgba(0,0,0,0.5)";
        ctx.fillRect(0,0, canvas.width, canvas.height);
        ctx.fillStyle = "#fff";
        ctx.font = "14px Arial";
        ctx.textAlign = "center";
        ctx.fillText("CRASHED", canvas.width/2, canvas.height/2);
      }
    };

    const gameLoop = () => {
      updateGame();
      drawGame();
      requestAnimationFrame(gameLoop);
    };

    const handleJump = (e) => {
      if (gameState === "running" && player.isGrounded) {
        player.dy = player.jumpPower;
        player.isGrounded = false;
        if (e.cancelable) e.preventDefault();
      }
    };

    startBtn.addEventListener("click", resetGame);
    canvas.addEventListener("pointerdown", handleJump);

    // Scaling canvas
    const resizeCanvas = () => {
      canvas.width = runnerContainer.clientWidth;
      canvas.height = canvas.width * 0.6;
    };
    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();
    gameLoop();

    // Rotation & Interaction
    const applyRotation = () => {
      cube.style.setProperty("--cube-rx", `${currentX.toFixed(2)}deg`);
      cube.style.setProperty("--cube-ry", `${currentY.toFixed(2)}deg`);
      
      const faces = cube.querySelectorAll(".cube-face");
      faces.forEach(face => {
        const gx = ((currentY % 90) / 90) * 100;
        const gy = ((currentX % 90) / 90) * 100;
        face.style.setProperty("--gloss-x", `${gx}%`);
        face.style.setProperty("--gloss-y", `${gy}%`);
      });
    };

    const onFrame = (timestamp) => {
      const isOpening = document.body.classList.contains("is-cube-stage-opening");

      if (dragging) {
        currentX = lerp(currentX, targetX, 0.15);
        currentY = lerp(currentY, targetY, 0.15);
      } else {
        const shouldAutoRotate = !reduceMotion && timestamp > pauseUntil && !isOpening;
        if (shouldAutoRotate) {
          targetY = wrapAngle(targetY + 0.1);
        }
        
        velocityX *= 0.95;
        velocityY *= 0.95;
        targetX += velocityY;
        targetY += velocityX;

        currentX = lerp(currentX, targetX, 0.1);
        currentY = lerp(currentY, targetY, 0.1);
      }

      applyRotation();
      requestAnimationFrame(onFrame);
    };

    scene.addEventListener("pointerdown", (e) => {
      if (isInteractiveTarget(e.target)) return;
      dragging = true;
      moved = false;
      pointerId = e.pointerId;
      lastMouseX = e.clientX;
      lastMouseY = e.clientY;
      velocityX = 0;
      velocityY = 0;
      cube.classList.add("is-dragging");
      scene.setPointerCapture(e.pointerId);
    });

    scene.addEventListener("pointermove", (e) => {
      if (!dragging || e.pointerId !== pointerId) return;
      const dx = e.clientX - lastMouseX;
      const dy = e.clientY - lastMouseY;
      if (Math.abs(dx) > 3 || Math.abs(dy) > 3) moved = true;
      velocityX = dx * 0.15;
      velocityY = -dy * 0.15;
      targetY += dx * 0.4;
      targetX -= dy * 0.4;
      lastMouseX = e.clientX;
      lastMouseY = e.clientY;
    });

    scene.addEventListener("pointerup", (e) => {
      if (e.pointerId !== pointerId) return;
      dragging = false;
      cube.classList.remove("is-dragging");
      scene.releasePointerCapture(e.pointerId);
      pauseUntil = performance.now() + 1500;
    });

    const isInteractiveTarget = (target) =>
      target instanceof Element &&
      Boolean(target.closest("a, button, input, [data-cube-interactive]"));

    const rotateToFace = (faceName) => {
      const t = faceTargets[faceName];
      if (!t) return;
      targetX = t.x;
      targetY = t.y;
      pauseUntil = performance.now() + 3000;
    };

    // Init Logic
    requestAnimationFrame(onFrame);
    
    // Remove loading state with a professional transition
    setTimeout(() => {
        scene.classList.remove("is-loading");
        setTimeout(() => {
            if (loading) loading.style.display = "none";
        }, 600);
    }, 1500);

    window.ProfileHub = window.ProfileHub || {};
    window.ProfileHub.cube = { rotateToFace };
  };

  const initCubeStage = () => {
    const body = document.body;
    const closeBtn = document.querySelector("[data-cube-stage-close]");
    const cubeSection = document.getElementById("project-cube");
    const cubeScene = document.querySelector("[data-cube-scene]");

    if (!body || !cubeSection) return;

    const openCubeStage = ({ scroll = true, face = null } = {}) => {
      body.classList.remove("is-cube-stage-closed");
      body.classList.add("is-cube-stage-open");
      body.classList.add("is-cube-stage-opening");

      setTimeout(() => {
        body.classList.remove("is-cube-stage-opening");
      }, 1000);

      if (face && window.ProfileHub && window.ProfileHub.cube) {
        window.ProfileHub.cube.rotateToFace(face);
      }

      if (scroll) {
        cubeSection.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    };

    const closeCubeStage = () => {
      body.classList.remove("is-cube-stage-open");
      body.classList.add("is-cube-stage-closed");
    };

    if (cubeScene) {
      cubeScene.addEventListener("click", () => {
        if (!body.classList.contains("is-cube-stage-closed")) return;
        openCubeStage({ scroll: true, face: "balance" });
      });
    }

    if (closeBtn) {
      closeBtn.addEventListener("click", closeCubeStage);
    }

    window.ProfileHub = window.ProfileHub || {};
    window.ProfileHub.showCube = openCubeStage;
  };

  const initHeroCubeLinks = () => {
    const links = [...document.querySelectorAll("[data-cube-target]")];
    if (!links.length) {
      return;
    }

    links.forEach((link) => {
      link.addEventListener("click", (event) => {
        event.preventDefault();
        const face = link.getAttribute("data-cube-target");
        const cubeApi = window.ProfileHub?.cube;
        if (!face || !cubeApi || typeof cubeApi.rotateToFace !== "function") {
          return;
        }
        cubeApi.rotateToFace(face);
      });
    });
  };

  const enhanceExternalLink = (link) => {
    if (link.dataset.externalReady === "true") {
      return;
    }

    link.dataset.externalReady = "true";
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
  };

  const initExternalLinks = (scope = document) => {
    const links = [...scope.querySelectorAll("a[data-external='true']")];
    links.forEach((link) => {
      enhanceExternalLink(link);
    });
  };

  const initCarousels = () => {
    const carousels = [...document.querySelectorAll("[data-carousel]")];
    if (!carousels.length) {
      return;
    }

    carousels.forEach((carousel) => {
      const track = carousel.querySelector("[data-carousel-track]");
      const prevButton = carousel.querySelector("[data-carousel-prev]");
      const nextButton = carousel.querySelector("[data-carousel-next]");
      if (!track) {
        return;
      }

      const hasManualControls = Boolean(prevButton && nextButton);
      const autoMode = carousel.dataset.carouselAuto === "true";
      let autoplayFrame = null;
      let resumeTimer = null;

      const getStep = () => {
        const firstCard = track.querySelector(".link-card");
        if (!firstCard) {
          return Math.max(240, track.clientWidth * 0.8);
        }

        const styles = window.getComputedStyle(track);
        const gapValue = Number.parseFloat(styles.columnGap || styles.gap || "0") || 0;
        return firstCard.getBoundingClientRect().width + gapValue;
      };

      const updateButtons = () => {
        if (!hasManualControls) {
          return;
        }
        const maxScroll = track.scrollWidth - track.clientWidth - 2;
        prevButton.disabled = track.scrollLeft <= 2;
        nextButton.disabled = track.scrollLeft >= maxScroll;
      };

      const scrollByStep = (direction) => {
        track.scrollBy({
          left: getStep() * direction,
          behavior: reduceMotion ? "auto" : "smooth"
        });
      };

      const stopAutoplay = () => {
        if (autoplayFrame !== null) {
          window.cancelAnimationFrame(autoplayFrame);
          autoplayFrame = null;
        }
      };

      const startAutoplay = () => {
        if (!autoMode || reduceMotion || autoplayFrame !== null) {
          return;
        }

        if (track.dataset.loopReady !== "true") {
          const cards = [...track.children];
          if (cards.length > 1) {
            const fragment = document.createDocumentFragment();
            cards.forEach((card) => {
              const clone = card.cloneNode(true);
              clone.setAttribute("aria-hidden", "true");
              fragment.appendChild(clone);
            });
            track.appendChild(fragment);
            track.dataset.loopReady = "true";
            track.classList.add("is-looping");
            initExternalLinks(track);
          }
        }

        let previousTimestamp = 0;
        const speedPxPerSecond = 26;

        const tick = (timestamp) => {
          if (!autoMode) {
            autoplayFrame = null;
            return;
          }

          if (!previousTimestamp) {
            previousTimestamp = timestamp;
          }

          const deltaSeconds = (timestamp - previousTimestamp) / 1000;
          previousTimestamp = timestamp;
          track.scrollLeft += speedPxPerSecond * deltaSeconds;

          const loopWidth = track.scrollWidth / 2;
          if (loopWidth > 0 && track.scrollLeft >= loopWidth) {
            track.scrollLeft -= loopWidth;
          }

          autoplayFrame = window.requestAnimationFrame(tick);
        };

        autoplayFrame = window.requestAnimationFrame(tick);
      };

      const scheduleResume = () => {
        if (!autoMode || reduceMotion) {
          return;
        }
        if (resumeTimer !== null) {
          window.clearTimeout(resumeTimer);
        }
        resumeTimer = window.setTimeout(() => {
          startAutoplay();
        }, 2600);
      };

      if (hasManualControls) {
        prevButton.addEventListener("click", () => {
          stopAutoplay();
          scrollByStep(-1);
          scheduleResume();
        });
        nextButton.addEventListener("click", () => {
          stopAutoplay();
          scrollByStep(1);
          scheduleResume();
        });
      }

      track.addEventListener("mouseenter", stopAutoplay);
      track.addEventListener("mouseleave", scheduleResume);
      track.addEventListener("pointerdown", () => {
        stopAutoplay();
        scheduleResume();
      });
      track.addEventListener("touchstart", stopAutoplay, { passive: true });
      track.addEventListener("wheel", () => {
        stopAutoplay();
        scheduleResume();
      }, { passive: true });
      track.addEventListener("focusin", stopAutoplay);
      track.addEventListener("focusout", scheduleResume);

      if (autoMode) {
        track.addEventListener(
          "scroll",
          () => {
            const loopWidth = track.scrollWidth / 2;
            if (loopWidth > 0 && track.scrollLeft >= loopWidth) {
              track.scrollLeft -= loopWidth;
            }
          },
          { passive: true }
        );
      }

      track.addEventListener("scroll", updateButtons, { passive: true });
      window.addEventListener("resize", updateButtons);
      updateButtons();
      startAutoplay();
    });
  };

  const initFocusModal = () => {
    const modal = document.querySelector("[data-focus-modal]");
    if (!modal) {
      return;
    }

    const titleNode = modal.querySelector("[data-focus-title]");
    const descriptionNode = modal.querySelector("[data-focus-description]");
    const cta = modal.querySelector("[data-focus-cta]");
    const closeTriggers = [...modal.querySelectorAll("[data-focus-close]")];
    const focusItems = [...document.querySelectorAll("[data-focus-key]")];
    const roleTrigger = document.querySelector("[data-role-modal-trigger]");

    if (!titleNode || !descriptionNode || !cta || (!focusItems.length && !roleTrigger)) {
      return;
    }

    let lastTrigger = null;

    const getRoleDetails = (key) => {
      const safeKey = key || "ai-integration";
      const fallbackTitle = safeKey.replace(/-/g, " ");
      return {
        title: t(`focusModal.roles.${safeKey}.title`, fallbackTitle),
        description: t(`focusModal.roles.${safeKey}.description`, "")
      };
    };

    const closeModal = ({ restoreFocus = true } = {}) => {
      modal.classList.remove("is-open");
      document.body.style.overflow = "";

      const completeClose = () => {
        modal.hidden = true;
        if (restoreFocus && lastTrigger) {
          lastTrigger.focus();
        }
      };

      if (reduceMotion) {
        completeClose();
        return;
      }

      window.setTimeout(completeClose, 220);
    };

    const openModal = (key, trigger) => {
      const payload = getRoleDetails(key);
      titleNode.textContent = payload.title;
      descriptionNode.textContent = payload.description;
      lastTrigger = trigger;
      modal.hidden = false;
      document.body.style.overflow = "hidden";

      if (reduceMotion) {
        modal.classList.add("is-open");
        return;
      }

      window.requestAnimationFrame(() => {
        modal.classList.add("is-open");
      });
    };

    focusItems.forEach((item) => {
      item.addEventListener("click", () => {
        item.classList.add("is-opening");
        window.setTimeout(() => item.classList.remove("is-opening"), 180);
        openModal(item.dataset.focusKey, item);
      });
    });

    if (roleTrigger) {
      roleTrigger.addEventListener("click", () => {
        roleTrigger.classList.add("is-opening");
        window.setTimeout(() => roleTrigger.classList.remove("is-opening"), 180);
        const currentKey = roleTrigger.dataset.currentRoleKey || "ai-integration";
        openModal(currentKey, roleTrigger);
      });
    }

    closeTriggers.forEach((node) => {
      node.addEventListener("click", closeModal);
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && !modal.hidden) {
        closeModal();
      }
    });

    cta.addEventListener("click", (event) => {
      event.preventDefault();
      closeModal({ restoreFocus: false });
      const target = document.getElementById("contact");
      if (target) {
        target.scrollIntoView({
          behavior: reduceMotion ? "auto" : "smooth",
          block: "start"
        });
      }
    });
  };

  const initContactForm = () => {
    const form = document.querySelector("[data-contact-form]");
    if (!form) {
      return;
    }

    const fields = [...form.querySelectorAll("input, select, textarea")];
    const status = form.querySelector("[data-form-status]");
    const requestTypeField = form.querySelector("#requestType");

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
        setStatus("error", t("status.invalidContact", "Please check the highlighted fields."));
        return;
      }

      const data = new FormData(form);
      const values = Object.fromEntries(data.entries());
      const mailtoTarget = form.dataset.mailto || "mailto:andre@example.com";
      const fullName = String(values.fullName || "").trim();
      const requestType = requestTypeField?.selectedOptions?.[0]?.textContent?.trim() || String(values.requestType || "").trim();
      const message = String(values.message || "").trim();

      const subjectPrefix = t("email.contact.subjectPrefix", "Website Inquiry");
      const subject = encodeURIComponent(`[${subjectPrefix}] ${requestType} - ${fullName}`);
      const body = encodeURIComponent(
        [
          `${t("email.contact.labelName", "Name")}: ${fullName}`,
          `${t("email.contact.labelRequestType", "Request type")}: ${requestType}`,
          "",
          `${t("email.contact.labelMessage", "Message")}:`,
          message
        ].join("\n")
      );

      setStatus("success", t("status.openingContact", "Opening your email draft..."));

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

  const initStayPage = () => {
    const root = document.querySelector("[data-stay-page]");
    if (!root) {
      return null;
    }

    const stays = window.ProfileStays;
    if (!stays || typeof stays !== "object") {
      return null;
    }

    const stayKeys = Object.keys(stays);
    if (!stayKeys.length) {
      return null;
    }

    const params = new URLSearchParams(window.location.search);
    const requestedPlace = String(params.get("place") || "").trim().toLowerCase();
    const activePlace = Object.prototype.hasOwnProperty.call(stays, requestedPlace) ? requestedPlace : stayKeys[0];
    const stay = stays[activePlace];
    if (!stay) {
      return null;
    }

    const titleNode = root.querySelector("[data-stay-title]");
    const subtitleNode = root.querySelector("[data-stay-subtitle]");
    const coverNode = root.querySelector("[data-stay-cover]");
    const shortDescriptionNode = root.querySelector("[data-stay-short-description]");
    const longDescriptionNode = root.querySelector("[data-stay-long-description]");
    const locationBadge = root.querySelector("[data-stay-badge-location]");
    const guestsBadge = root.querySelector("[data-stay-badge-guests]");
    const airbnbLinks = [...root.querySelectorAll("[data-stay-airbnb], [data-stay-airbnb-inline], [data-stay-airbnb-sticky]")];
    const amenitiesList = root.querySelector("[data-stay-amenities]");
    const factsList = root.querySelector("[data-stay-facts]");
    const idealList = root.querySelector("[data-stay-ideal]");
    const gallerySection = root.querySelector("[data-stay-gallery-section]");
    const notesSection = root.querySelector("[data-stay-notes-section]");
    const notesList = root.querySelector("[data-stay-notes]");
    const gallery = root.querySelector("[data-stay-gallery]");
    const form = root.querySelector("[data-stay-booking-form]");
    const formStatus = root.querySelector("[data-stay-form-status]");
    const lightbox = document.querySelector("[data-stay-lightbox]");
    const lightboxImage = lightbox ? lightbox.querySelector("[data-stay-lightbox-image]") : null;
    const lightboxCaption = lightbox ? lightbox.querySelector("[data-stay-lightbox-caption]") : null;
    const lightboxClose = lightbox ? [...lightbox.querySelectorAll("[data-stay-lightbox-close]")] : [];

    const bookingEmail = stay.bookingEmail || "andre@example.com";
    const airbnbUrl = stay.airbnbUrl || "https://www.airbnb.com/";
    const detailData = stay.details || {};

    const resolveStayLocale = () => {
      const language = getCurrentLanguage();
      const localized = stay.i18n?.[language] || stay.i18n?.en || {};
      return localized;
    };

    const hasAmenity = (key) => Array.isArray(stay.amenities) && stay.amenities.includes(key);

    const renderStay = () => {
      const localized = resolveStayLocale();
      const displayTitle = localized.title || "";
      const displaySubtitle = localized.subtitle || "";
      const displayShortDescription = localized.shortDescription || "";
      const displayLongDescription = localized.longDescription || "";
      const displayLocation = localized.location || "";
      const displayNotes = Array.isArray(localized.houseNotes) ? localized.houseNotes : [];

      if (titleNode) {
        titleNode.textContent = displayTitle;
      }
      if (subtitleNode) {
        subtitleNode.textContent = displaySubtitle;
      }
      if (coverNode) {
        coverNode.src = stay.cover || "";
        coverNode.alt = displayTitle || t("stay.defaults.stayImage", "Stay image");
      }
      if (shortDescriptionNode) {
        shortDescriptionNode.textContent = displayShortDescription;
      }
      if (longDescriptionNode) {
        longDescriptionNode.textContent = displayLongDescription;
      }
      if (locationBadge) {
        locationBadge.textContent = displayLocation || t("stay.facts.location", "Location");
      }
      if (guestsBadge) {
        guestsBadge.textContent = t("stay.badges.guests", "{count} guests", { count: detailData.guests || 1 });
      }
      airbnbLinks.forEach((link) => {
        link.href = airbnbUrl;
      });

      const facts = [
        ["propertyType", t(`stay.propertyTypes.${detailData.propertyType}`, detailData.propertyType || "-")],
        ["maxGuests", detailData.guests || "-"],
        ["bedrooms", detailData.bedrooms || "-"],
        ["beds", detailData.beds || "-"],
        ["bathrooms", detailData.bathrooms || "-"],
        ["wifi", hasAmenity("fastWifi") ? t("stay.factsValues.included", "Included") : t("stay.factsValues.onRequest", "On request")],
        [
          "workspace",
          hasAmenity("dedicatedWorkspace")
            ? t("stay.factsValues.included", "Included")
            : t("stay.factsValues.optional", "Optional")
        ],
        ["parking", hasAmenity("privateParking") ? t("stay.factsValues.available", "Available") : t("stay.factsValues.nearby", "Nearby options")],
        [
          "airConditioning",
          hasAmenity("airConditioning") ? t("stay.factsValues.included", "Included") : t("stay.factsValues.onRequest", "On request")
        ],
        ["beachDistance", detailData.beachDistance || "-"],
        ["location", displayLocation || "-"],
        ["registrationId", detailData.registrationCode || "-"]
      ];

      if (amenitiesList) {
        amenitiesList.innerHTML = (stay.amenities || [])
          .map((key) => `<li class="stay-amenity">${t(`stay.amenities.${key}`, key)}</li>`)
          .join("");
      }

      if (factsList) {
        factsList.innerHTML = facts
          .map(([labelKey, value]) => `<div class="stay-fact"><dt>${t(`stay.facts.${labelKey}`, labelKey)}</dt><dd>${value}</dd></div>`)
          .join("");
      }

      if (idealList) {
        idealList.innerHTML = (stay.idealFor || [])
          .map((key) => `<li class="stay-ideal-item">${t(`stay.ideal.${key}`, key)}</li>`)
          .join("");
        idealList.parentElement?.toggleAttribute("hidden", !idealList.innerHTML.trim());
      }

      if (notesSection && notesList) {
        if (!displayNotes.length) {
          notesSection.hidden = true;
        } else {
          notesSection.hidden = false;
          notesList.innerHTML = displayNotes.map((item) => `<li>${item}</li>`).join("");
        }
      }

      if (gallery) {
        const images = (stay.gallery || []).filter(Boolean);
        if (gallerySection) {
          gallerySection.hidden = images.length === 0;
        }
        gallery.innerHTML = images
          .map((imageSrc, index) => {
            const sequence = index + 1;
            return `
              <button
                type="button"
                class="stay-gallery-item${index === 0 ? " is-featured" : ""}"
                data-stay-gallery-open
                data-image-src="${imageSrc}"
                data-image-caption="${displayTitle} · ${sequence}"
              >
                <img src="${imageSrc}" alt="${displayTitle} ${sequence}" loading="lazy" />
              </button>
            `;
          })
          .join("");
      }

      if (i18n && typeof i18n.applyTranslations === "function") {
        i18n.applyTranslations(root);
      }

      const pageTitle = t("meta.stayPageTitle", "{stayTitle} | Andre Rizzo", { stayTitle: displayTitle || "Stay" });
      const pageDescription = t("meta.stayPageDescription", "{subtitle} {shortDescription}", {
        subtitle: displaySubtitle,
        shortDescription: displayShortDescription
      });

      document.title = pageTitle;
      const descMeta = document.querySelector('meta[data-meta="description"]');
      const ogTitle = document.querySelector('meta[data-meta="og:title"]');
      const ogDescription = document.querySelector('meta[data-meta="og:description"]');
      const ogImage = document.querySelector('meta[property="og:image"]');
      const twitterTitle = document.querySelector('meta[data-meta="twitter:title"]');
      const twitterDescription = document.querySelector('meta[data-meta="twitter:description"]');

      if (descMeta) {
        descMeta.setAttribute("content", pageDescription);
      }
      if (ogTitle) {
        ogTitle.setAttribute("content", pageTitle);
      }
      if (ogDescription) {
        ogDescription.setAttribute("content", pageDescription);
      }
      if (ogImage) {
        ogImage.setAttribute("content", stay.cover || "");
      }
      if (twitterTitle) {
        twitterTitle.setAttribute("content", pageTitle);
      }
      if (twitterDescription) {
        twitterDescription.setAttribute("content", pageDescription);
      }
    };

    if (gallery && lightbox && lightboxImage && lightboxCaption) {
      const openImage = (source, caption) => {
        lightboxImage.src = source;
        lightboxImage.alt = caption;
        lightboxCaption.textContent = caption;
        lightbox.hidden = false;
        document.body.style.overflow = "hidden";

        if (reduceMotion) {
          lightbox.classList.add("is-open");
          return;
        }
        window.requestAnimationFrame(() => {
          lightbox.classList.add("is-open");
        });
      };

      const closeImage = () => {
        lightbox.classList.remove("is-open");
        document.body.style.overflow = "";

        const completeClose = () => {
          lightbox.hidden = true;
          lightboxImage.src = "";
          lightboxImage.alt = "";
        };

        if (reduceMotion) {
          completeClose();
          return;
        }
        window.setTimeout(completeClose, 180);
      };

      gallery.addEventListener("click", (event) => {
        if (!(event.target instanceof Element)) {
          return;
        }
        const trigger = event.target.closest("[data-stay-gallery-open]");
        if (!trigger) {
          return;
        }
        openImage(
          trigger.getAttribute("data-image-src") || "",
          trigger.getAttribute("data-image-caption") || t("stay.defaults.stayImage", "Stay image")
        );
      });

      lightboxClose.forEach((node) => {
        node.addEventListener("click", closeImage);
      });

      document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && !lightbox.hidden) {
          closeImage();
        }
      });
    }

    if (form && formStatus) {
      const checkInField = form.querySelector("#stayCheckIn");
      const checkOutField = form.querySelector("#stayCheckOut");
      const guestsField = form.querySelector("#stayGuests");
      const fullNameField = form.querySelector("#stayFullName");
      const emailField = form.querySelector("#stayEmail");
      const messageField = form.querySelector("#stayMessage");
      const fields = [checkInField, checkOutField, guestsField, fullNameField, emailField, messageField].filter(Boolean);

      const setFormStatus = (state, message) => {
        formStatus.hidden = false;
        formStatus.dataset.state = state;
        formStatus.textContent = message;
      };

      const markField = (field, isValid) => {
        if (!field) {
          return;
        }
        field.classList.toggle("field-error", !isValid);
        field.setAttribute("aria-invalid", String(!isValid));
      };

      const validateDateOrder = () => {
        if (!checkInField || !checkOutField || !checkInField.value || !checkOutField.value) {
          return true;
        }

        const isValid = checkOutField.value > checkInField.value;
        markField(checkInField, isValid);
        markField(checkOutField, isValid);
        return isValid;
      };

      const validateField = (field) => {
        if (!field) {
          return true;
        }
        const isValid = field.checkValidity();
        markField(field, isValid);
        return isValid;
      };

      if (guestsField) {
        const maxGuests = Math.max(1, Number(detailData.guests) || 1);
        const singular = t("stay.form.guestSingular", "guest");
        const plural = t("stay.form.guestPlural", "guests");
        guestsField.innerHTML = [
          `<option value="" selected disabled>${t("stay.form.guestsPlaceholder", "Select guests")}</option>`,
          ...Array.from({ length: maxGuests }, (_, idx) => {
            const value = idx + 1;
            return `<option value="${value}">${value} ${value > 1 ? plural : singular}</option>`;
          })
        ].join("");
      }

      if (checkInField) {
        const today = new Date().toISOString().split("T")[0];
        checkInField.min = today;
        checkInField.addEventListener("change", () => {
          if (checkOutField) {
            checkOutField.min = checkInField.value || today;
          }
          validateDateOrder();
        });
      }

      if (checkOutField) {
        checkOutField.addEventListener("change", validateDateOrder);
      }

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

        const validFields = fields.every((field) => validateField(field));
        const validDates = validateDateOrder();

        if (!validFields || !validDates) {
          setFormStatus("error", t("status.invalidBooking", "Please check your booking details."));
          return;
        }

        const localized = resolveStayLocale();
        const values = Object.fromEntries(new FormData(form).entries());
        const subject = encodeURIComponent(`${t("email.stay.subjectPrefix", "Booking request")} - ${localized.title}`);
        const body = encodeURIComponent(
          [
            t("email.stay.greeting", "Hello,"),
            t("email.stay.intro", "I would like to request availability for the following stay:"),
            "",
            `${t("email.stay.lineProperty", "Property")}: ${localized.title}`,
            `${t("email.stay.lineCheckIn", "Check-in")}: ${values.checkIn}`,
            `${t("email.stay.lineCheckOut", "Check-out")}: ${values.checkOut}`,
            `${t("email.stay.lineGuests", "Guests")}: ${values.guests}`,
            `${t("email.stay.lineName", "Name")}: ${values.fullName}`,
            `${t("email.stay.lineEmail", "Email")}: ${values.email}`,
            "",
            `${t("email.stay.lineMessage", "Message")}:`,
            String(values.message || "").trim() || "-",
            "",
            t("email.stay.closing", "Please let me know availability and next steps.")
          ].join("\n")
        );

        setFormStatus("success", t("status.openingBooking", "Opening your booking email draft..."));
        window.setTimeout(() => {
          window.location.href = `mailto:${bookingEmail}?subject=${subject}&body=${body}`;
        }, reduceMotion ? 0 : 150);
      });
    }

    renderStay();
    initExternalLinks(root);

    const rerenderOnLanguageChange = () => {
      renderStay();
    };
    window.addEventListener("i18n:change", rerenderOnLanguageChange);

    return renderStay;
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

    if (window.ProfileHub.boundTracking) {
      return;
    }

    window.ProfileHub.boundTracking = true;
    document.addEventListener("click", (event) => {
      if (!(event.target instanceof Element)) {
        return;
      }
      const element = event.target.closest("[data-track]");
      if (!element) {
        return;
      }
      const eventName = element.getAttribute("data-track");
      if (eventName) {
        window.ProfileHub.track(eventName, { location: window.location.pathname });
      }
    });
  };

  const initCubeContactForm = () => {
    const form = document.querySelector("[data-cube-contact-form]");
    if (!form) {
      return;
    }

    const mailtoTarget = form.dataset.mailto || "mailto:andre@example.com";
    const fields = [...form.querySelectorAll("input, textarea")];
    const status = form.querySelector("[data-cube-contact-status]");
    const submitBtn = form.querySelector("[type=submit]");

    const setStatus = (state, message) => {
      if (!status) {
        return;
      }
      status.hidden = false;
      status.dataset.state = state;
      status.textContent = message;
    };

    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      event.stopPropagation();

      const allValid = fields.every((f) => f.checkValidity());
      if (!allValid) {
        fields.forEach((f) => {
          if (!f.checkValidity()) {
            f.classList.add("field-error");
          }
        });
        setStatus("error", t("cube.contactError", "Compila tutti i campi richiesti."));
        return;
      }

      const data = Object.fromEntries(new FormData(form).entries());
      const fullName = String(data.fullName || "").trim();
      const email = String(data.email || "").trim();
      const phone = String(data.phone || "").trim();
      const message = String(data.message || "").trim();
      const subject = encodeURIComponent(`[mylinks] ${fullName || "New message"}`);
      const body = encodeURIComponent(
        [
          `Name: ${fullName}`,
          `Email: ${email}`,
          `Phone: ${phone || "-"}`,
          "",
          "Message:",
          message
        ].join("\n")
      );

      submitBtn.disabled = true;
      setStatus("success", t("cube.contactSending", "Opening email draft..."));
      form.reset();
      fields.forEach((f) => f.classList.remove("field-error"));

      try {
        window.setTimeout(() => {
          window.location.href = `${mailtoTarget}?subject=${subject}&body=${body}`;
        }, reduceMotion ? 0 : 170);

        window.setTimeout(() => {
          setStatus("success", t("cube.contactSuccess", "Opening your email app..."));
          submitBtn.disabled = false;
        }, reduceMotion ? 0 : 190);
      } catch (_err) {
        submitBtn.disabled = false;
        setStatus("error", t("cube.contactFail", "Couldn't open the email draft. Please try again."));
      }
    });

    fields.forEach((field) => {
      field.addEventListener("input", () => {
        field.classList.remove("field-error");
      });
    });
  };

  const init = async () => {
    if (i18n && typeof i18n.initializeI18n === "function") {
      await i18n.initializeI18n();
      i18n.applyTranslations();
    }

    initReveal();
    initRoleRotator();
    initHeroParallax();
    initProjectCube();
    initCubeStage();
    initHeroCubeLinks();
    initExternalLinks();
    initCarousels();
    initFocusModal();
    initContactForm();
    initCubeContactForm();
    initStayPage();
    initFooterYear();
    initTrackingStub();
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => {
      void init();
    });
  } else {
    void init();
  }
})();
