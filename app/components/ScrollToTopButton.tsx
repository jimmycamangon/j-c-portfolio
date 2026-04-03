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
      } fixed bottom-4 right-4 p-3 rounded-full bg-primaryColor text-whiteColor dark:bg-lightTheme dark:text-textDark shadow-md focus:outline-none transition-transform hover:translate-y-[-5px]`}
      onClick={scrollToTop}
      style={{ zIndex: 100 }}
    >
      <FaArrowUp className="text-whiteColor dark:text-textDark" />
    </button>
  );
};

export default ScrollToTopButton;
