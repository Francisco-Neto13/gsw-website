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

    const collectRevealTargets = () => {
      const manualTargets = Array.from(document.querySelectorAll<HTMLElement>(".reveal-on-scroll"));
      const autoTargets = Array.from(document.querySelectorAll<HTMLElement>("main section, main article"));
      const targetSet = new Set<HTMLElement>([...autoTargets, ...manualTargets]);
      return Array.from(targetSet).filter((element) => !element.closest("[data-reveal-ignore='true']"));
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
        if (!element.classList.contains("visible")) {
          element.classList.remove("visible");
        }
        observer.observe(element);
      });
    };

    const syncTargetsForPath = () => {
      const targets = collectRevealTargets();
      targets.forEach((element) => {
        prepareTarget(element);
        if (element.getBoundingClientRect().top > window.innerHeight * 0.88) {
          element.classList.remove("visible");
        } else if (!element.classList.contains("visible")) {
          observedElements.add(element);
          element.classList.add("visible");
        }

        if (!observedElements.has(element)) {
          observer.observe(element);
        }
      });
    };

    const frame = window.requestAnimationFrame(() => {
      syncTargetsForPath();
      registerTargets();
    });
    const mutationObserver = new MutationObserver(registerTargets);
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.cancelAnimationFrame(frame);
      mutationObserver.disconnect();
      observer.disconnect();
    };
  }, [pathname]);

  return null;
}
