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

const items = [
  {
    id: "1",
    img: "https://preview.redd.it/vs4nqxqekxw31.png?auto=webp&s=d63485c8b4723928cae1228dc8aa33602cbd92c6",
    height: 250,
    playerInfo: {
      name: "Azpy#1337",
      role: "ADC",
      rank: "Diamond IV",
      description: "ADC de la academia que solo juega Smolder"
    }
  },
  {
    id: "2",
    img: "https://picsum.photos/id/1011/600/750?grayscale",
    url: "https://example.com/two",
    height: 250,
    playerInfo: {
      name: "ShadowJungle",
      role: "Jungle",
      rank: "Platinum I",
      description: "Especialista en objetivos y ganks"
    }
  },
  {
    id: "3",
    img: "https://picsum.photos/id/1020/600/800?grayscale",
    url: "https://example.com/three",
    height: 600,
    playerInfo: {
      name: "MidLaneKing",
      role: "Mid",
      rank: "Diamond III",
      description: "Carry del equipo y roamer"
    }
  },
  {
    id: "4",
    img: "https://picsum.photos/id/1018/600/400?grayscale",
    url: "https://example.com/four",
    height: 300,
    playerInfo: {
      name: "TopTank",
      role: "Top",
      rank: "Platinum II",
      description: "Tanque principal y engager"
    }
  },
  {
    id: "5",
    img: "https://picsum.photos/id/1025/600/700?grayscale",
    url: "https://example.com/five",
    height: 500,
    playerInfo: {
      name: "SupportGod",
      role: "Support",
      rank: "Diamond I",
      description: "Visionado y protección del equipo"
    }
  }
]

export default function Example() {
  return (
    <div className="w-full h-[260vh] p-4 md:p-8 lg:p-12 mt-4 md:mt-8 rounded-lg shadow-lg">
      <ResizablePanelGroup direction="vertical" className="w-full h-full">
        
        {/* Panel superior ANCHO - Carousel de los 3 banners */}
        <ResizablePanel defaultSize={35}>
          <div className="group relative h-full bg-gradient-to-br from-green-100 to-blue-100 rounded-lg m-2 overflow-hidden cursor-pointer">
            <Carousel className="w-full h-full">
              <CarouselContent className="h-full">
                <CarouselItem className="h-full">
                  <img
                    src="public/Ashe.jpg"
                    alt="Ashe"
                    className="w-full h-full object-cover" />
                </CarouselItem>
                <CarouselItem className="h-full">
                  <div className="h-full">
                    <img
                      src="public/Tryndamere.webp"
                      alt="Tryndamere"
                      className="w-full h-full object-cover" />
                  </div>
                </CarouselItem>
                <CarouselItem className="h-full">
                  <div className="h-full">
                    <img
                      src="public/jinx.jpg"
                      alt="Jinx"
                      className="w-full h-full object-cover" />
                  </div>
                </CarouselItem>
              </CarouselContent>

              {/* Flechas centradas verticalmente */}
              <CarouselPrevious className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white border-none h-10 w-10 rounded-full" />
              <CarouselNext className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white border-none h-10 w-10 rounded-full" />
            </Carousel>
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