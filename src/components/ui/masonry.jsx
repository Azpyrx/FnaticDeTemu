"use client";

import { useState, useEffect } from "react";

export default function Masonry({
  items = [],
  ease = "power3.out",
  duration = 0.6,
  stagger = 0.05,
  animateFrom = "bottom",
  scaleOnHover = false,
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

  // Función para obtener el color del rol
  const getRoleColor = (role) => {
    const colors = {
      ADC: "bg-red-500",
      Support: "bg-green-500",
      Mid: "bg-blue-500",
      Jungle: "bg-purple-500",
      Top: "bg-orange-500",
    };
    return colors[role] || "bg-gray-500";
  };

  return (
    <div className="columns-1 sm:columns-2 lg:columns-3 gap-2 sm:gap-4 space-y-2 sm:space-y-4">
      {items.map((item) => (
        <div
          key={item.id}
          className="break-inside-avoid rounded-lg overflow-hidden shadow-md cursor-pointer transform transition-all duration-300 hover:scale-105 mb-2 sm:mb-4 relative group"
          onMouseEnter={() => setHoveredId(item.id)}
          onMouseLeave={() => setHoveredId(null)}
          style={{
            transform:
              scaleOnHover && hoveredId === item.id
                ? `scale(${hoverScale})`
                : "scale(1)",
          }}
        >
          <div className="relative">
            <img
              src={item.img}
              alt={item.playerInfo?.name || `Item ${item.id}`}
              className="w-full h-auto object-cover transition-all duration-300"
              style={{ height: `${Math.max(item.height * 0.6, 150)}px` }} // Altura mínima para móvil
            />

            {/* Overlay con información del jugador */}
            {item.playerInfo && (
              <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center p-2 sm:p-4">
                <div className="text-center text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {/* Nombre del jugador */}
                  <h3 className="text-sm sm:text-xl font-bold mb-1 sm:mb-2 text-yellow-300">
                    {item.playerInfo.name}
                  </h3>

                  {/* Rol con color */}
                  <div className="flex items-center justify-center gap-1 sm:gap-2 mb-1 sm:mb-2">
                    <span
                      className={`text-xs px-2 sm:px-3 py-1 rounded-full text-white font-semibold ${getRoleColor(
                        item.playerInfo.role
                      )}`}
                    >
                      {item.playerInfo.role}
                    </span>
                    <span className="text-xs bg-gray-600 px-1 sm:px-2 py-1 rounded text-gray-200">
                      {item.playerInfo.rank}
                    </span>
                  </div>

                  {/* Descripción */}
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                    {item.playerInfo.description}
                  </p>

                  {/* Icono decorativo */}
                  <div className="mt-2 sm:mt-3 text-lg sm:text-2xl">⚔️</div>
                </div>
              </div>
            )}

            {/* Link si existe */}
            {item.url && (
              <a
                href={item.url}
                className="absolute inset-0 z-10"
                target="_blank"
                rel="noopener noreferrer"
              />
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
