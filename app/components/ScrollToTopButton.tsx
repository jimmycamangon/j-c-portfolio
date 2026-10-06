import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 50) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <button
      className={`${
        isVisible ? "block" : "hidden"
      } fixed bottom-4 right-4 p-2.5 rounded-full bg-surface text-muted border border-line hover:text-accent hover:border-accent/60 focus:outline-none transition-colors`}
      onClick={scrollToTop}
      style={{ zIndex: 100 }}
    >
      <FaArrowUp className="text-xs" />
    </button>
  );
};

export default ScrollToTopButton;
