import Image from "next/image";

export default function MainBanner() {
  return (
    <div className="w-full h-screen bg-linear-to-r from-emerald-500 via-teal-500 to-cyan-500 flex items-center">
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
          <button
            type="button"
            className="text-white bg-gradient-to-r from-blue-800 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 cursor-pointer"
          >
            Solicite uma demonstração
          </button>
        </div>
        
      </div>
    </div>
  );
}
