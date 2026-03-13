"use client";

import { useEffect } from "react";

export default function AnimationInitializer() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      document.querySelectorAll(".reveal-on-scroll").forEach((element) => {
        element.classList.add("visible");
      });

      return;
    }

    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observedElements = new WeakSet<Element>();

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const observeElements = () => {
      const elements = document.querySelectorAll('.reveal-on-scroll');
      elements.forEach((element) => {
        if (!observedElements.has(element)) {
          observedElements.add(element);
          observer.observe(element);
        }
      });
    };

    observeElements();

    const mutationObserver = new MutationObserver(observeElements);
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);

  return null; 
}
