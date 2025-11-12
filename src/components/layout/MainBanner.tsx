import { Video } from "../ui/video";

export default function MainBanner() {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-600 via-blue-500 to-green-400 text-white p-10 pt-32">
      <div className="container mx-auto md:flex md:pt-[7rem] md:items-center md:justify-between md:flex-row">
        <div className="none mb-4 md:w-1/2 drop-shadow-xl md:block">
          <Video />
        </div>
        <div className="md:w-1/2">
          <h1 className="text-2xl md:text-5xl bold text-cyan-950 mb-4">
            Simplifique sua Cobrança. Potencialize seus Resultados
          </h1>
          <p className="text-[1rem] mb:text-2xl text-cyan-950 mb-6">
            A Cobrasis é uma fintech especializada em automação de cobrança, CRM financeiro e inteligência operacional, ajudando empresas a recuperar créditos, aumentar eficiência e reduzir inadimplência com tecnologia de ponta.
          </p>
          <div className="md:flex gap-4">
            <button className="mb-5 md:mb-0 w-full px-6 py-3 bg-yellow-400 text-black font-semibold rounded-2xl shadow-lg hover:bg-yellow-300 transition cursor-pointer">
              Solicitar Demonstração
            </button>
            <button className="w-full px-6 py-3 border border-white rounded-2xl ont-semibold hover:bg-white hover:text-black transition cursor-pointer">
              Falar com um Especialista
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}