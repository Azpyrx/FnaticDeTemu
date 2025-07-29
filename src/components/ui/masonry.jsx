"use client";

import { useState, useEffect } from "react";

export default function Masonry({
  items = [],
  ease = "power3.out",
  duration = 0.6,
  stagger = 0.05,
  animateFrom = "bottom",
  scaleOnHover = true,
  hoverScale = 1.05,
  blurToFocus = false,
  colorShiftOnHover = false,
}) {
  const [hoveredId, setHoveredId] = useState(null);
  const [mounted, setMounted] = useState(false);

  // Solución para SSR
  useEffect(() => {
    setMounted(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: stagger,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: animateFrom === "bottom" ? 20 : animateFrom === "top" ? -20 : 0,
      x: animateFrom === "left" ? -20 : animateFrom === "right" ? 20 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration,
        ease,
      },
    },
  };

  // No renderizar hasta que esté montado en el cliente
  if (!mounted) {
    return (
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
        {items.map((item) => (
          <div
            key={item.id}
            className="break-inside-avoid rounded-lg overflow-hidden shadow-md"
          >
            <img
              src={item.img}
              alt={`Item ${item.id}`}
              className="w-full h-auto object-cover"
              style={{ height: `${item.height}px` }}
            />
          </div>
        ))}
      </div>
    );
  }

  if (!items || items.length === 0) {
    return <div>No hay imágenes para mostrar</div>;
  }

  return (
    <div className="columns-1 sm:columns-2 md:columns-3 gap-4">
      {items.map((item) => (
        <div
          key={item.id}
          className="break-inside-avoid rounded-lg overflow-hidden shadow-md cursor-pointer transform transition-all duration-300 hover:scale-105 mb-4"
          onMouseEnter={() => setHoveredId(item.id)}
          onMouseLeave={() => setHoveredId(null)}
        >
          <img
            src={item.img}
            alt={`Item ${item.id}`}
            className="w-full h-auto object-cover"
            loading="lazy"
            onError={(e) => {
              console.log("Error cargando imagen:", item.img);
              e.target.src = "https://via.placeholder.com/400x300?text=Error";
            }}
          />
        </div>
      ))}
    </div>
  );
}
