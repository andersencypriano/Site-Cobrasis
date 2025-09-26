import Image from "next/image";

export default function MainBanner() {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-600 via-blue-500 to-green-400 text-white p-10 pt-32">
      <div className="container mx-auto md:flex md:pt-[10rem] md:items-center md:justify-between md:flex-row">
        <div className="none mb-4 md:w-1/2 drop-shadow-xl md:block">
          <Image
            src="/assets/images/digital-tablet-screen-smart-tech.png"
            width={600}
            height={449}
            alt="Picture of the author"
          />
        </div>
        <div className="md:w-1/2">
          <h1 className="text-2xl md:text-5xl bold text-cyan-950 mb-4">
            A solução completa para gestão de inadimplência em um só sistema
          </h1>
          <p className="text-[1rem] mb:text-2xl text-cyan-950 mb-6">
            Centralize tarefas, organize processos e otimize sua operação em um
            único ambiente. Mais eficiência e resultados na recuperação de
            crédito, com praticidade e segurança.
          </p>
          <div className="md:flex gap-4">
            <button className="mb-5 md:mb-0 w-full px-6 py-3 bg-yellow-400 text-black font-semibold rounded-2xl shadow-lg hover:bg-yellow-300 transition cursor-pointer">
              Testar Gratuitamente
            </button>
            <button className="w-full px-6 py-3 border border-white rounded-2xl ont-semibold hover:bg-white hover:text-black transition cursor-pointer">
              Agendar Demonstração
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
