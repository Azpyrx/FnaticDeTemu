import React, { useState } from "react";

export function NavigationMenuDemo() {
  const [isEquiposOpen, setIsEquiposOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleEquipos = () => {
    setIsEquiposOpen(!isEquiposOpen);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsEquiposOpen(false);
  };

  return (
    <div className="w-full bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-14 sm:h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img src="/logoHeader.png" alt="Logo" className="h-8 sm:h-12 md:h-16" />
          </div>
          
          {/* Menú Desktop - oculto en móvil */}
          <nav className="hidden lg:flex space-x-4 xl:space-x-8">
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
              
              {/* Dropdown Desktop */}
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
                        <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <div className="text-white text-center p-4">
                            <div className="text-lg font-bold mb-2">🏆 Fnatic LoL Principal</div>
                            <div className="text-sm">Ver roster completo</div>
                            <div className="text-xs mt-1 opacity-80">Haz clic para más detalles</div>
                          </div>
                        </div>
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
                        <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <div className="text-white text-center p-4">
                            <div className="text-lg font-bold mb-2">🎮 Fnatic Academia</div>
                            <div className="text-sm">Ver roster completo</div>
                            <div className="text-xs mt-1 opacity-80">Haz clic para más detalles</div>
                          </div>
                        </div>
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

          {/* Botón hamburguesa - visible solo en móvil */}
          <div className="lg:hidden">
            <button
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-500"
              aria-expanded="false"
            >
              <span className="sr-only">Abrir menú principal</span>
              {/* Icono hamburguesa */}
              {!isMobileMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Menú móvil - Panel deslizable */}
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
            <a
              href="/"
              onClick={closeMobileMenu}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
              🏠 Inicio
            </a>
            
            {/* Equipos en móvil */}
            <div className="block">
              <button
                onClick={toggleEquipos}
                className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 flex items-center justify-between"
              >
                <span>⚔️ Equipos</span>
                <svg 
                  className={`h-5 w-5 transform transition-transform duration-200 ${isEquiposOpen ? 'rotate-180' : ''}`}
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 20 20" 
                  fill="currentColor"
                >
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              
              {/* Submenu Equipos móvil */}
              {isEquiposOpen && (
                <div className="pl-4 space-y-3 mt-2">
                  {/* Equipo Principal móvil */}
                  <a 
                    href="/equipos/lol-principal" 
                    onClick={closeMobileMenu}
                    className="block"
                  >
                    <div className="bg-gray-50 rounded-lg p-3 hover:bg-gray-100 transition-colors">
                      <div className="flex items-center space-x-3">
                        <img 
                          src="/bannerLoL1.webp" 
                          alt="LoL Principal" 
                          className="w-16 h-12 object-cover rounded-md"
                        />
                        <div>
                          <div className="text-sm font-bold text-gray-900">🏆 Fnatic LoL Principal</div>
                          <div className="text-xs text-gray-600">Roster principal</div>
                          <div className="text-xs bg-orange-100 text-orange-800 px-2 py-0.5 rounded-full inline-block mt-1">
                            ¡Nuevo!
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>

                  {/* Academia móvil */}
                  <a 
                    href="/equipos/lol-academia" 
                    onClick={closeMobileMenu}
                    className="block"
                  >
                    <div className="bg-gray-50 rounded-lg p-3 hover:bg-gray-100 transition-colors">
                      <div className="flex items-center space-x-3">
                        <img 
                          src="/bannerLoL2.jpg" 
                          alt="LoL Academia" 
                          className="w-16 h-12 object-cover rounded-md"
                        />
                        <div>
                          <div className="text-sm font-bold text-gray-900">🎮 Fnatic Academia</div>
                          <div className="text-xs text-gray-600">Roster desarrollo</div>
                          <div className="text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full inline-block mt-1">
                            Academia
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              )}
            </div>
            
            <a
              href="/ofertas"
              onClick={closeMobileMenu}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
              🎁 Ofertas
            </a>
            
            <a
              href="/contacto"
              onClick={closeMobileMenu}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
              📞 Contacto
            </a>

            {/* Discord link en móvil */}
            <div className="pt-4 border-t border-gray-200 mt-4">
              <a
                href="https://discord.gg/A68XyCQVHQ"
                onClick={closeMobileMenu}
                className="block px-3 py-2 rounded-md text-base font-medium bg-gradient-to-r from-orange-500 to-red-500 text-white hover:from-orange-600 hover:to-red-600 text-center"
              >
                🔥 ¡Únete al Discord! ✨
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/***
 * Landing page simple para video
***/

export function LandingPage() {
  return (
    <section className="min-h-screen flex items-center justify-center">
      <div className="w-full">
        {/* Contenedor del video - ahora ocupa todo el width */}
        <div className="relative w-full aspect-video overflow-hidden shadow-2xl">
          <video 
            className="w-full h-full object-cover" 
            autoPlay 
            muted 
            loop
            poster="/video-thumbnail.jpg"
          >
            <source src="/landingLoL.mp4" type="video/mp4"/>
            Tu navegador no soporta el elemento de video.
          </video>

          {/* Div pequeño sobrepuesto - COMPLETAMENTE RESPONSIVE */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-auto h-auto px-2 sm:px-4">
            <div className="bg-white/20 text-black p-2 sm:p-3 md:p-4 lg:p-6 rounded-lg opacity-70 shadow-lg backdrop-blur-md">
              {/* Texto responsive simplificado */}
              <div className="text-center whitespace-nowrap">
                <span className="font-bold text-yellow-500 text-lg sm:text-2xl md:text-4xl lg:text-6xl xl:text-8xl 2xl:text-9xl">FNATIC </span>
                <span className="font-bold text-black text-lg sm:text-2xl md:text-4xl lg:text-6xl xl:text-8xl 2xl:text-9xl">De Temu</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}