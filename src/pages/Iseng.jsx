import React, { useState, useEffect } from "react";
import classNames from "classnames";

const ScrollText = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="overflow-x-hidden">
      <div
        className={classNames(
          "transition-transform duration-500 ease-in-out",
          {
            "transform translate-x-0": scrollPosition < 100,
            "transform translate-x-60": scrollPosition >= 100 && scrollPosition < 400,
            "transform translate-x-100": scrollPosition >= 400 && scrollPosition < 700,
            // Tambahkan lebih banyak kondisi sesuai kebutuhan
          }
        )}
      >
        <h1 className="text-9xl">Teks yang Bergerak</h1>
      </div>
      <div className="h-200vh">Dummy content untuk scrolling</div>
    </div>
  );
};

export default ScrollText;
