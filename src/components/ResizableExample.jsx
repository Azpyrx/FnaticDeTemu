import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Masonry from '@/components/ui/masonry'
import { useState, useEffect } from 'react'

// Array de banners para fácil mantenimiento
const banners = [
  {
    id: 1,
    src: "/Ashe.jpg",
    alt: "Ashe",
    title: "Ashe",
    subtitle: "The Frost Archer"
  },
  {
    id: 2,
    src: "/Tryndamere.webp",
    alt: "Tryndamere", 
    title: "Tryndamere",
    subtitle: "The Barbarian King"
  },
  {
    id: 3,
    src: "/Jinx.jpg",
    alt: "Jinx",
    title: "Jinx", 
    subtitle: "The Loose Cannon"
  },
  {
    id: 4,
    src: "/Draven.jpg",
    alt: "Draven",
    title: "Draven",
    subtitle: "The Glorious Executioner"
  },
  {
    id: 5,
    src: "/Zilean.jpg",
    alt: "Zilean",
    title: "Zilean",
    subtitle: "The Chronokeeper"
  },
  // Agregar más banners aquí es súper fácil:
  // {
  //   id: 5,
  //   src: "/Yasuo.jpg",
  //   alt: "Yasuo",
  //   title: "Yasuo",
  //   subtitle: "The Unforgiven"
  // },
]

const items = [
  {
    id: "1",
    img: "https://preview.redd.it/vs4nqxqekxw31.png?auto=webp&s=d63485c8b4723928cae1228dc8aa33602cbd92c6",
    url: "https://www.op.gg/summoners/euw/Azpy-1337",
    height: 400,
    playerInfo: {
      name: "Azpy#1337",
      role: "ADC",
      rank: "Diamond IV",
      description: "ADC de la academia que solo juega Smolder"
    }
  },
  {
    id: "2",
    img: "/src/assets/Sinag.jpg",
    url: "https://www.twitch.tv/sinag",
    height: 400,
    playerInfo: {
      name: "Sinag",
      role: "Coach",
      rank: "Challenger",
      description: "Le pone azúcar al mate"
    }
  },
  {
    id: "3",
    img: "/src/assets/Mathi.webp",
    url: "https://example.com/three",
    height: 350,
    playerInfo: {
      name: "melon pan#7027",
      role: "Support",
      rank: "Diamond IV",
      description: "Dice que se puede flashear la ulti del Karthus"
    }
  },
  {
    id: "4",
    img: "/src/assets/Yeremi.png",
    url: "https://example.com/four",
    height: 450,
    playerInfo: {
      name: "FNT Uma Jam#TEMU",
      role: "ADC",
      rank: "Master",
      description: "Juega Draven creemos que es bueno"
    }
  },
  {
    id: "5",
    img: "/src/assets/Drakesin.webp",
    url: "https://example.com/five",
    height: 500,
    playerInfo: {
      name: "FNT Drakesin#FNT",
      role: "Jungla",
      rank: "Master",
      description: "Firstpickeamos mid va va"
    }
  },
  {
    id: "6",
    img: "/src/assets/Tryndamere.jpg",
    url: "https://example.com/five",
    height: 500,
    playerInfo: {
      name: "FNT Tryndamere#FNT",
      role: "Top",
      rank: "Diamante",
      description: "CEO, dueño, presidente y fundador de Fnatic de Temu"
    }
  },
  {
    id: "7",
    img: "/src/assets/Tryndamere.jpg",
    url: "https://example.com/five",
    height: 500,
    playerInfo: {
      name: "FNT Shehu#FNT",
      role: "Coach",
      rank: "Master",
      description: "Coach del equipo principal y fan de Merlí"
    }
  },
]

export default function Example() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Componente reutilizable para renderizar banners
  const BannerCarousel = ({ showOverlay = false, className = "" }) => (
    <Carousel className={`w-full h-full ${className}`}>
      <CarouselContent className="h-full">
        {banners.map((banner) => (
          <CarouselItem key={banner.id} className="h-full relative">
            <img
              src={banner.src}
              alt={banner.alt}
              className="w-full h-full object-cover object-center" 
            />
            {showOverlay && (
              <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 sm:opacity-0 transition-opacity duration-300 flex items-end">
                <div className="p-2 sm:p-4 text-white w-full">
                  <h3 className="text-sm sm:text-lg font-bold">{banner.title}</h3>
                  <p className="text-xs sm:text-sm">{banner.subtitle}</p>
                </div>
              </div>
            )}
          </CarouselItem>
        ))}
      </CarouselContent>
      
      {/* Controles adaptativos */}
      <CarouselPrevious className={`absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white border-none rounded-full ${
        showOverlay ? 'h-8 w-8 sm:h-10 sm:w-10' : 'h-10 w-10'
      }`} />
      <CarouselNext className={`absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white border-none rounded-full ${
        showOverlay ? 'h-8 w-8 sm:h-10 sm:w-10' : 'h-10 w-10'
      }`} />
    </Carousel>
  )

  // Layout para móviles - Todo vertical
  if (isMobile) {
    return (
      <div className="w-full min-h-screen p-2 sm:p-4 space-y-4">
        {/* Carousel de banners - Mejorado para móvil */}
        <div className="relative h-48 sm:h-64 md:h-80 bg-gradient-to-br from-green-100 to-blue-100 rounded-lg overflow-hidden">
          <BannerCarousel showOverlay={true} />
        </div>

        {/* Información del equipo - Mejorada para móvil */}
        <div className="bg-gradient-to-br from-orange-50 via-white to-orange-100 rounded-lg p-3 sm:p-4 shadow-inner">
          {/* Header principal */}
          <div className="text-center mb-4 sm:mb-6">
            <h1 className="text-xl sm:text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500 mb-2 sm:mb-3">
              ¿Quiénes somos?
            </h1>
            <div className="w-12 sm:w-16 h-1 bg-gradient-to-r from-orange-400 to-yellow-400 mx-auto rounded-full"></div>
          </div>

          {/* Intro compacta */}
          <div className="mb-4 sm:mb-6 p-3 sm:p-4 bg-white/70 backdrop-blur-sm rounded-lg border border-orange-200">
            <p className="text-xs sm:text-sm leading-relaxed text-gray-700">
              ¡Bienvenido/a a <span className="font-bold text-orange-600">Fnatic de Temu</span>!
              Somos una comunidad apasionada por los esports y especialmente por <span className="text-red-600 font-bold">League of Legends</span>.
            </p>
          </div>

          {/* Valores compactos */}
          <div className="mb-4 sm:mb-6">
            <div className="flex items-center gap-2 mb-2 sm:mb-3">
              <span className="text-lg sm:text-xl">📌</span>
              <h2 className="text-base sm:text-lg font-bold text-gray-800">Nuestros Valores</h2>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 p-2 bg-gradient-to-r from-orange-50 to-red-50 rounded-lg border-l-4 border-orange-400">
                <span className="text-sm sm:text-lg">🛡️</span>
                <div>
                  <h3 className="font-bold text-orange-700 text-xs sm:text-sm">Honor y Respeto</h3>
                </div>
              </div>

              <div className="flex items-center gap-2 p-2 bg-gradient-to-r from-red-50 to-pink-50 rounded-lg border-l-4 border-red-400">
                <span className="text-sm sm:text-lg">🔥</span>
                <div>
                  <h3 className="font-bold text-red-700 text-xs sm:text-sm">Disciplina y Constancia</h3>
                </div>
              </div>

              <div className="flex items-center gap-2 p-2 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border-l-4 border-blue-400">
                <span className="text-sm sm:text-lg">🚀</span>
                <div>
                  <h3 className="font-bold text-blue-700 text-xs sm:text-sm">Competitividad Sana</h3>
                </div>
              </div>

              <div className="flex items-center gap-2 p-2 bg-gradient-to-r from-pink-50 to-purple-50 rounded-lg border-l-4 border-pink-400">
                <span className="text-sm sm:text-lg">💖</span>
                <div>
                  <h3 className="font-bold text-pink-700 text-xs sm:text-sm">Compromiso y Pasión</h3>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action compacto */}
          <div className="relative overflow-hidden bg-gradient-to-br from-orange-600 via-red-500 to-yellow-500 rounded-xl p-3 sm:p-4 text-white">
            <div className="relative z-10 text-center">
              <div className="text-xl sm:text-2xl mb-2">🔥</div>
              <h3 className="text-sm sm:text-lg font-black mb-2 text-yellow-200">
                ¿Te identificas con nuestros valores?
              </h3>
              
              <p className="text-xs sm:text-sm mb-3">
                Entonces <span className="text-yellow-300 font-bold">Fnatic de Temu</span> es tu lugar.
              </p>

              <button className="bg-yellow-400 hover:bg-yellow-300 text-black font-bold text-xs sm:text-sm px-4 sm:px-6 py-2 rounded-full shadow-lg">
                <a href="https://discord.gg/A68XyCQVHQ" className="flex items-center justify-center">
                  ⚔️ ¡Únete! ✨
                </a>
              </button>
            </div>
          </div>
        </div>

        {/* Integrantes */}
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-3 sm:p-4">
          <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-3 sm:mb-4 text-center">Integrantes</h3>
          <Masonry
            items={items}
            scaleOnHover={true}
            hoverScale={1.02}
          />
        </div>
      </div>
    )
  }

  // Layout para desktop
  return (
    <div className="w-full h-[260vh] p-4 md:p-8 lg:p-12 mt-4 md:mt-8 rounded-lg shadow-lg">
      <ResizablePanelGroup direction="vertical" className="w-full h-full">
        
        {/* Panel superior ANCHO - Carousel de banners */}
        <ResizablePanel defaultSize={35}>
          <div className="group relative h-full bg-gradient-to-br from-green-100 to-blue-100 rounded-lg m-2 overflow-hidden cursor-pointer">
            <BannerCarousel />
          </div>
        </ResizablePanel>

        <ResizableHandle className="bg-transparent border-none" />

        {/* Panel inferior dividido horizontalmente */}
        <ResizablePanel defaultSize={65}>
          <ResizablePanelGroup direction="horizontal" className="h-full">
            
            {/* Panel izquierdo - ¿Quiénes somos? */}
            <ResizablePanel defaultSize={50}>
              <div className="h-full bg-gradient-to-br from-orange-50 via-white to-orange-100 rounded-lg m-2 p-8 overflow-y-auto shadow-inner">

                {/* Header principal animado */}
                <div className="text-center mb-8 transform hover:scale-102 transition-all duration-300">
                    <h1 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500 mb-4">
                        ¿Quiénes somos?
                    </h1>
                    <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-yellow-400 mx-auto rounded-full"></div>
                </div>

                {/* Intro compacta */}
                <div className="mb-8 p-6 bg-white/70 backdrop-blur-sm rounded-lg border border-orange-200 shadow-sm hover:shadow-lg hover:scale-101 transition-all duration-300">
                    <p className="text-lg leading-relaxed text-gray-700">
                        ¡Bienvenido/a a <span className="font-bold text-orange-600">Fnatic de Temu</span>!
                        Somos una comunidad apasionada por los esports y especialmente por <span className="text-red-600 font-bold">League of Legends</span>.
                        Nuestra misión es impulsar el desarrollo competitivo y personal de cada miembro. 🔥
                    </p>
                </div>

                {/* Sección Familia */}
                <div className="mb-6">
                    <div className="flex items-center gap-3 mb-3 hover:translate-x-1 transition-transform duration-300">
                        <span className="text-2xl">🌟</span>
                        <h2 className="text-xl font-bold text-gray-800">Una Familia Competitiva</h2>
                    </div>
                    <p className="text-gray-600 ml-8 text-sm italic">
                        En Fnatic de Temu no solo jugamos; construimos relaciones y crecemos juntos.
                    </p>
                </div>

                {/* Valores compactos con animaciones suaves */}
                <div className="mb-8">
                    <div className="flex items-center gap-3 mb-4 hover:translate-x-1 transition-transform duration-300">
                        <span className="text-2xl">📌</span>
                        <h2 className="text-xl font-bold text-gray-800">Nuestros Valores</h2>
                    </div>

                    <div className="space-y-3 ml-6">
                        {/* Valor 1 */}
                        <div className="group flex items-center gap-3 p-3 bg-gradient-to-r from-orange-50 to-red-50 rounded-lg border-l-4 border-orange-400 hover:border-orange-600 transform hover:translate-x-2 hover:scale-101 transition-all duration-300 cursor-pointer">
                            <span className="text-xl group-hover:scale-110 transition-transform">🛡️</span>
                            <div>
                                <h3 className="font-bold text-orange-700 group-hover:text-orange-900">Honor y Respeto</h3>
                                <p className="text-gray-600 text-sm">Competimos limpiamente, reconociendo el esfuerzo de todos</p>
                            </div>
                        </div>

                        {/* Valor 2 */}
                        <div className="group flex items-center gap-3 p-3 bg-gradient-to-r from-red-50 to-pink-50 rounded-lg border-l-4 border-red-400 hover:border-red-600 transform hover:translate-x-2 hover:scale-101 transition-all duration-300 cursor-pointer">
                            <span className="text-xl group-hover:scale-110 transition-transform">🔥</span>
                            <div>
                                <h3 className="font-bold text-red-700 group-hover:text-red-900">Disciplina y Constancia</h3>
                                <p className="text-gray-600 text-sm">El éxito es fruto del esfuerzo constante y la dedicación</p>
                            </div>
                        </div>

                        {/* Valor 3 */}
                        <div className="group flex items-center gap-3 p-3 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border-l-4 border-blue-400 hover:border-blue-600 transform hover:translate-x-2 hover:scale-101 transition-all duration-300 cursor-pointer">
                            <span className="text-xl group-hover:scale-110 transition-transform">🚀</span>
                            <div>
                                <h3 className="font-bold text-blue-700 group-hover:text-blue-900">Competitividad Sana</h3>
                                <p className="text-gray-600 text-sm">Buscamos la excelencia con mentalidad abierta y humilde</p>
                            </div>
                        </div>

                        {/* Valor 4 */}
                        <div className="group flex items-center gap-3 p-3 bg-gradient-to-r from-pink-50 to-purple-50 rounded-lg border-l-4 border-pink-400 hover:border-pink-600 transform hover:translate-x-2 hover:scale-101 transition-all duration-300 cursor-pointer">
                            <span className="text-xl group-hover:scale-110 transition-transform">💖</span>
                            <div>
                                <h3 className="font-bold text-pink-700 group-hover:text-pink-900">Compromiso y Pasión</h3>
                                <p className="text-gray-600 text-sm">Nos mueve el amor genuino por el juego y la comunidad</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Call to Action balanceado */}
                <div className="relative overflow-hidden bg-gradient-to-br from-orange-600 via-red-500 to-yellow-500 rounded-xl p-6 text-white shadow-xl transform hover:scale-102 transition-all duration-300 cursor-pointer group">

                    {/* Efectos de fondo sutiles */}
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all duration-300"></div>
                    <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -mr-12 -mt-12"></div>
                    <div className="absolute bottom-0 left-0 w-20 h-20 bg-white/10 rounded-full -ml-10 -mb-10"></div>

                    <div className="relative z-10">
                        {/* Header impactante pero equilibrado */}
                        <div className="text-center mb-4">
                            <div className="text-4xl mb-2">🔥</div>
                            <h3 className="text-2xl font-black mb-2 text-yellow-200 drop-shadow-lg">
                              ¿Te identificas con nuestros valores?
                            </h3>
                            <div className="w-16 h-1 bg-yellow-300 mx-auto rounded-full"></div>
                        </div>

                        {/* Mensaje equilibrado */}
                        <div className="text-center space-y-3">
                            <p className="text-lg font-semibold">
                              Entonces <span className="text-yellow-300 font-bold">Fnatic de Temu</span> es tu lugar.
                            </p>

                            <div className="bg-black/30 rounded-lg p-4 backdrop-blur-sm border border-yellow-400/30">
                                <p className="text-xl font-bold text-yellow-200 mb-1">
                                  ¡Únete a la aventura!
                                </p>
                                <p className="text-sm opacity-90">
                                  Hagamos historia juntos en la <span className="text-yellow-300 font-bold">Grieta del Invocador</span>
                                </p>
                            </div>

                            {/* Botón moderado */}
                            <div className="pt-3">
                                <button className="bg-yellow-400 hover:bg-yellow-300 text-black font-bold text-lg px-8 py-3 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 border-yellow-200">
                                    <a href="https://discord.gg/A68XyCQVHQ" className="flex items-center justify-center">⚔️ ¡Te esperamos! ✨</a>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Brillo sutil */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 opacity-50"></div>
                </div>
              </div>
            </ResizablePanel>

            <ResizableHandle className="bg-transparent border-none" />

            {/* Panel derecho - Masonry */}
            <ResizablePanel defaultSize={50}>
              <div className="h-full bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg m-2 p-4 overflow-y-auto">
                <h3 className="text-lg font-bold text-gray-800 mb-4 text-center">Integrantes</h3>
                
                <div key="masonry-container">
                  <Masonry
                    items={items}
                    scaleOnHover={true}
                    hoverScale={1.05}
                  />
                </div>
              </div>
            </ResizablePanel>

          </ResizablePanelGroup>
        </ResizablePanel>
        
      </ResizablePanelGroup>
    </div>
  )
}