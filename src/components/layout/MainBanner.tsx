import Image from "next/image";

export default function MainBanner() {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-600 via-blue-500 to-green-400 text-white p-10 pt-32">
      <div className="container mx-auto pt-[10rem] md:flex md:items-center md:justify-between">
        <div className="w-1/2 drop-shadow-xl">
          <Image
            src="/assets/images/digital-tablet-screen-smart-tech.png"
            width={600}
            height={449}
            alt="Picture of the author"
          />
        </div>
        <div className="w-1/2">
          <h1 className="md:text-5xl bold text-cyan-950 mb-4">
            A solução completa para gestão de inadimplência em um só sistema
          </h1>
          <p className="text-2xl text-cyan-950 mb-6">
            Centralize tarefas, organize processos e otimize sua operação em um
            único ambiente. Mais eficiência e resultados na recuperação de
            crédito, com praticidade e segurança.
          </p>
          <div className="flex gap-4">
            <button className="px-6 py-3 bg-yellow-400 text-black font-semibold rounded-2xl shadow-lg hover:bg-yellow-300 transition cursor-pointer">
              Testar Gratuitamente
            </button>
            <button className="px-6 py-3 border border-white rounded-2xl ont-semibold hover:bg-white hover:text-black transition cursor-pointer">
              Agendar Demonstração
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
