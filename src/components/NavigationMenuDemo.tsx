import React, { useState } from "react";

export function NavigationMenuDemo() {
  const [isEquiposOpen, setIsEquiposOpen] = useState(false);

  const toggleEquipos = () => {
    setIsEquiposOpen(!isEquiposOpen);
  };

  return (
    <div className="w-full bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <img src="/logoHeader.png" alt="Logo" className="h-16" />
          </div>
          
          {/* Menú personalizado sin shadcn/ui */}
          <nav className="flex space-x-8">
            <a
              href="/"
              className="inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium text-black transition-colors hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none"
            >
              Inicio
            </a>
            
            {/* Menú Equipos clickeable */}
            <div className="relative">
              <button
                onClick={toggleEquipos}
                className="inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium text-black transition-colors hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none"
                style={{ border: 'none', outline: 'none' }}
              >
                Equipos
              </button>
              
              {/* Dropdown - aumenté el mt-1 a mt-4 */}
              {isEquiposOpen && (
                <div className="absolute top-full left-0.5 mt-4 w-96 bg-white shadow-lg rounded-lg p-6 z-50">
                  <div className="grid grid-cols-1 gap-4">
                    {/* Primer equipo de LoL */}
                    <a href="/equipos/lol-principal" className="block">
                      <div className="overflow-hidden rounded-lg relative group cursor-pointer">
                        <img 
                          src="/bannerLoL1.webp" 
                          alt="League of Legends Roster Principal" 
                          className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300" 
                        />
                        {/* Overlay con hover */}
                        <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <div className="text-white text-center p-4">
                            <div className="text-lg font-bold mb-2">🏆 Fnatic LoL Principal</div>
                            <div className="text-sm">Ver roster completo</div>
                            <div className="text-xs mt-1 opacity-80">Haz clic para más detalles</div>
                          </div>
                        </div>
                        
                        {/* Badge "Nuevo" */}
                        <div className="absolute top-2 right-2 bg-orange-500 text-white text-xs px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          ¡Nuevo!
                        </div>
                      </div>
                    </a>

                    {/* Segundo equipo - Academia */}
                    <a href="/equipos/lol-academia" className="block">
                      <div className="overflow-hidden rounded-lg relative group cursor-pointer">
                        <img 
                          src="/bannerLoL2.jpg" 
                          alt="League of Legends Roster Academia" 
                          className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300" 
                        />
                        {/* Overlay con hover */}
                        <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <div className="text-white text-center p-4">
                            <div className="text-lg font-bold mb-2">🎮 Fnatic Academia</div>
                            <div className="text-sm">Ver roster completo</div>
                            <div className="text-xs mt-1 opacity-80">Haz clic para más detalles</div>
                          </div>
                        </div>
                        
                        {/* Badge "Academia" */}
                        <div className="absolute top-2 right-2 bg-blue-500 text-white text-xs px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          Academia
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              )}
            </div>
            
            <a
              href="/ofertas"
              className="inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium text-black transition-colors hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none"
            >
              Ofertas
            </a>
            
            <a
              href="/contacto"
              className="inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium text-black transition-colors hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none"
            >
              Contacto
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
}