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

// Array de banners
const banners = [
  { id: 1, src: "/Ashe.jpg", alt: "Ashe" },
  { id: 2, src: "/Tryndamere.webp", alt: "Tryndamere" },
  { id: 3, src: "/Jinx.jpg", alt: "Jinx" },
  { id: 4, src: "/Draven.jpg", alt: "Draven" },
  { id: 5, src: "/Zilean.jpg", alt: "Zilean" }
]

// Array de integrantes
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
    img: "/Sinag.jpg",
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
    img: "/Mathi.webp",
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
    img: "/Yeremi.png",
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
    img: "/Drakesin.webp",
    url: "https://example.com/five",
    height: 500,
    playerInfo: {
      name: "FNT Drakesin#FNT",
      role: "Jungle",
      rank: "Master",
      description: "Firstpickeamos mid va va"
    }
  },
  {
    id: "6",
    img: "/Tryndamere.jpg",
    url: "https://example.com/six",
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
    img: "/Shehu.jpg", // ✅ CORREGIDO - quitar /src/assets/
    url: "https://example.com/seven",
    height: 500,
    playerInfo: {
      name: "FNT Shehu#FNT",
      role: "Coach",
      rank: "Master",
      description: "Coach del equipo principal y fan de Merlí"
    }
  }
]

// Datos de valores del equipo
const valores = [
  {
    icon: "🛡️",
    title: "Honor y Respeto",
    description: "Competimos limpiamente, reconociendo el esfuerzo de todos",
    gradient: "from-orange-50 to-red-50",
    border: "border-orange-400"
  },
  {
    icon: "🔥",
    title: "Disciplina y Constancia", 
    description: "El éxito es fruto del esfuerzo constante y la dedicación",
    gradient: "from-red-50 to-pink-50",
    border: "border-red-400"
  },
  {
    icon: "🚀",
    title: "Competitividad Sana",
    description: "Buscamos la excelencia con mentalidad abierta y humilde",
    gradient: "from-blue-50 to-purple-50", 
    border: "border-blue-400"
  },
  {
    icon: "💖",
    title: "Compromiso y Pasión",
    description: "Nos mueve el amor genuino por el juego y la comunidad",
    gradient: "from-pink-50 to-purple-50",
    border: "border-pink-400"
  }
]

export default function Example() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Componente Carousel simplificado
  const BannerCarousel = () => (
    <Carousel className="w-full h-full">
      <CarouselContent className="h-full">
        {banners.map((banner) => (
          <CarouselItem key={banner.id} className="h-full">
            <img
              src={banner.src}
              alt={banner.alt}
              className="w-full h-full object-cover" 
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white border-none rounded-full h-10 w-10" />
      <CarouselNext className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white border-none rounded-full h-10 w-10" />
    </Carousel>
  )

  // Componente de Información del Equipo
  const TeamInfo = ({ isMobile = false }) => (
    <div className={`bg-gradient-to-br from-orange-50 via-white to-orange-100 rounded-lg ${isMobile ? 'p-3 sm:p-4' : 'p-8'} shadow-inner overflow-y-auto`}>
      {/* Header */}
      <div className="text-center mb-6">
        <h1 className={`font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500 mb-3 ${isMobile ? 'text-xl sm:text-2xl' : 'text-4xl'}`}>
          ¿Quiénes somos?
        </h1>
        <div className={`bg-gradient-to-r from-orange-400 to-yellow-400 mx-auto rounded-full h-1 ${isMobile ? 'w-12 sm:w-16' : 'w-24'}`}></div>
      </div>

      {/* Intro */}
      <div className={`mb-6 p-4 bg-white/70 backdrop-blur-sm rounded-lg border border-orange-200 ${!isMobile && 'hover:shadow-lg hover:scale-101 transition-all duration-300'}`}>
        <p className={`leading-relaxed text-gray-700 ${isMobile ? 'text-xs sm:text-sm' : 'text-lg'}`}>
          ¡Bienvenido/a a <span className="font-bold text-orange-600">Fnatic de Temu</span>!
          Somos una comunidad apasionada por los esports y especialmente por <span className="text-red-600 font-bold">League of Legends</span>.
          {!isMobile && " Nuestra misión es impulsar el desarrollo competitivo y personal de cada miembro. 🔥"}
        </p>
      </div>

      {/* Valores */}
      <div className="mb-6">
        <div className={`flex items-center gap-2 mb-3 ${!isMobile && 'hover:translate-x-1 transition-transform duration-300'}`}>
          <span className={isMobile ? 'text-lg sm:text-xl' : 'text-2xl'}>📌</span>
          <h2 className={`font-bold text-gray-800 ${isMobile ? 'text-base sm:text-lg' : 'text-xl'}`}>Nuestros Valores</h2>
        </div>

        <div className={`space-y-2 ${!isMobile && 'ml-6'}`}>
          {valores.map((valor, index) => (
            <div key={index} className={`group flex items-center gap-2 p-2 bg-gradient-to-r ${valor.gradient} rounded-lg border-l-4 ${valor.border} ${!isMobile && 'hover:translate-x-2 hover:scale-101 transition-all duration-300 cursor-pointer'}`}>
              <span className={`${!isMobile && 'group-hover:scale-110 transition-transform'} ${isMobile ? 'text-sm sm:text-lg' : 'text-xl'}`}>{valor.icon}</span>
              <div>
                <h3 className={`font-bold ${isMobile ? 'text-xs sm:text-sm' : 'text-base'}`}>{valor.title}</h3>
                {!isMobile && <p className="text-gray-600 text-sm">{valor.description}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className={`relative overflow-hidden bg-gradient-to-br from-orange-600 via-red-500 to-yellow-500 rounded-xl text-white shadow-xl ${isMobile ? 'p-3 sm:p-4' : 'p-6 hover:scale-102 transition-all duration-300 cursor-pointer'}`}>
        <div className="relative z-10 text-center">
          <div className={`mb-2 ${isMobile ? 'text-xl sm:text-2xl' : 'text-4xl'}`}>🔥</div>
          <h3 className={`font-black mb-2 text-yellow-200 ${isMobile ? 'text-sm sm:text-lg' : 'text-2xl'}`}>
            ¿Te identificas con nuestros valores?
          </h3>
          <p className={`font-semibold mb-3 ${isMobile ? 'text-xs sm:text-sm' : 'text-lg'}`}>
            Entonces <span className="text-yellow-300 font-bold">Fnatic de Temu</span> es tu lugar.
          </p>
          <button className={`bg-yellow-400 hover:bg-yellow-300 text-black font-bold rounded-full shadow-lg transition-all duration-300 ${isMobile ? 'text-xs sm:text-sm px-4 sm:px-6 py-2' : 'text-lg px-8 py-3 hover:scale-105'}`}>
            <a href="https://discord.gg/A68XyCQVHQ" className="flex items-center justify-center">
              ⚔️ ¡{isMobile ? 'Únete' : 'Te esperamos'}! ✨
            </a>
          </button>
        </div>
      </div>
    </div>
  )

  // Layout móvil
  if (isMobile) {
    return (
      <div className="w-full min-h-screen p-2 sm:p-4 space-y-4">
        {/* Carousel */}
        <div className="relative h-48 sm:h-64 md:h-80 bg-gradient-to-br from-green-100 to-blue-100 rounded-lg overflow-hidden">
          <BannerCarousel />
        </div>
        
        {/* Info del equipo */}
        <TeamInfo isMobile={true} />
        
        {/* Integrantes */}
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-3 sm:p-4">
          <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-3 sm:mb-4 text-center">Integrantes</h3>
          <Masonry items={items} scaleOnHover={true} hoverScale={1.02} />
        </div>
      </div>
    )
  }

  // Layout desktop
  return (
    <div className="w-full h-[260vh] p-4 md:p-8 lg:p-12 mt-4 md:mt-8 rounded-lg shadow-lg">
      <ResizablePanelGroup direction="vertical" className="w-full h-full">
        
        {/* Panel superior - Carousel */}
        <ResizablePanel defaultSize={35}>
          <div className="h-full bg-gradient-to-br from-green-100 to-blue-100 rounded-lg m-2 overflow-hidden">
            <BannerCarousel />
          </div>
        </ResizablePanel>

        <ResizableHandle className="bg-transparent border-none" />

        {/* Panel inferior */}
        <ResizablePanel defaultSize={65}>
          <ResizablePanelGroup direction="horizontal" className="h-full">
            
            {/* Panel izquierdo - Info del equipo */}
            <ResizablePanel defaultSize={50}>
              <div className="h-full m-2">
                <TeamInfo />
              </div>
            </ResizablePanel>

            <ResizableHandle className="bg-transparent border-none" />

            {/* Panel derecho - Integrantes */}
            <ResizablePanel defaultSize={50}>
              <div className="h-full bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg m-2 p-4 overflow-y-auto">
                <h3 className="text-lg font-bold text-gray-800 mb-4 text-center">Integrantes</h3>
                <Masonry items={items} scaleOnHover={true} hoverScale={1.05} />
              </div>
            </ResizablePanel>

          </ResizablePanelGroup>
        </ResizablePanel>
        
      </ResizablePanelGroup>
    </div>
  )
}