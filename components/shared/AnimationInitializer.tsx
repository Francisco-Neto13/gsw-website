"use client";

import { useEffect, useLayoutEffect } from "react";
import { usePathname } from "next/navigation";

export default function AnimationInitializer() {
  const pathname = usePathname();

  useLayoutEffect(() => {
    const html = document.documentElement;
    const body = document.body;
    const previousHtmlBehavior = html.style.scrollBehavior;
    const previousBodyBehavior = body.style.scrollBehavior;

    html.style.scrollBehavior = "auto";
    body.style.scrollBehavior = "auto";
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });

    const frame = window.requestAnimationFrame(() => {
      html.style.scrollBehavior = previousHtmlBehavior;
      body.style.scrollBehavior = previousBodyBehavior;
    });

    return () => {
      window.cancelAnimationFrame(frame);
    };
  }, [pathname]);

  useEffect(() => {
    const observedElements = new WeakSet<Element>();
    const viewportRevealThreshold = 0.82;

    const collectRevealTargets = () => {
      const manualTargets = Array.from(document.querySelectorAll<HTMLElement>(".reveal-on-scroll"));
      const autoSelectors = [
        "main > section",
        "main > article",
        "main section > div",
        "main section > article",
        "main section article",
        "main section li",
        "main section .home-card-3d",
        "main section .home-panel-3d",
        "main section .leveling-panel-3d",
        "main section .leveling-card-soft",
        "main section .leveling-card-medium",
        "main section .history-sheen-card",
        "main section .history-era-card",
        "main section .history-gallery-frame",
      ].join(", ");
      const autoTargets = Array.from(document.querySelectorAll<HTMLElement>(autoSelectors)).filter(
        (element) => !element.closest("[data-reveal-ignore='true'], [data-reveal-ignore]")
      );
      const targetSet = new Set<HTMLElement>([...autoTargets, ...manualTargets]);
      return Array.from(targetSet);
    };

    const revealIfInViewport = (element: HTMLElement) => {
      const rect = element.getBoundingClientRect();
      const isInViewport = rect.top <= window.innerHeight * viewportRevealThreshold && rect.bottom >= 0;
      if (!isInViewport) {
        return false;
      }

      if (!element.classList.contains("visible")) {
        element.classList.add("visible");
      }
      return true;
    };

    const prepareTarget = (element: HTMLElement) => {
      if (!element.classList.contains("reveal-on-scroll")) {
        element.classList.add("reveal-on-scroll");
        element.setAttribute("data-auto-reveal", "true");
      }

      const delayValue = element.getAttribute("data-reveal-delay") ?? "0";
      const numericDelay = Number(delayValue);
      const delayMs = Number.isFinite(numericDelay) ? numericDelay : 0;
      element.style.setProperty("--reveal-delay", `${delayMs}ms`);
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.01,
      rootMargin: "0px 0px -8% 0px",
    });

    const registerTargets = () => {
      const targets = collectRevealTargets();
      targets.forEach((element) => {
        prepareTarget(element);

        if (observedElements.has(element)) {
          return;
        }

        observedElements.add(element);
        if (revealIfInViewport(element)) {
          return;
        }
        observer.observe(element);
      });
    };

    const syncTargetsForPath = () => {
      const targets = collectRevealTargets();
      targets.forEach((element) => {
        prepareTarget(element);
        if (element.getBoundingClientRect().top > window.innerHeight * viewportRevealThreshold) {
          element.classList.remove("visible");
        } else {
          revealIfInViewport(element);
        }

        if (!observedElements.has(element)) {
          observedElements.add(element);
          if (!revealIfInViewport(element)) {
            observer.observe(element);
          }
        }
      });
    };

    const handleScroll = () => {
      const targets = collectRevealTargets();
      targets.forEach((element) => {
        revealIfInViewport(element);
      });
    };

    const frame = window.requestAnimationFrame(() => {
      syncTargetsForPath();
      registerTargets();
    });
    const mutationObserver = new MutationObserver(registerTargets);
    mutationObserver.observe(document.body, { childList: true, subtree: true });
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.cancelAnimationFrame(frame);
      mutationObserver.disconnect();
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [pathname]);

  return null;
}
