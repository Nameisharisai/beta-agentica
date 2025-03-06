
import { useEffect } from 'react';

export const initScrollAnimation = () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    },
    { threshold: 0.1 }
  );
  
  const elements = document.querySelectorAll(".reveal");
  elements.forEach((el) => observer.observe(el));
  
  return () => {
    elements.forEach((el) => observer.unobserve(el));
  };
};

export const useScrollAnimation = () => {
  useEffect(() => {
    return initScrollAnimation();
  }, []);
};
