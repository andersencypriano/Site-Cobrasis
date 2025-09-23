import MainBanner from "@/components/layout/MainBanner";

export default function Home() {
  return (
    <>
      <MainBanner />
      <section id="beneficios" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold">Benefícios do CRM</h2>
        </div>
        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto px-6">
          {[
            "Automação de cobranças inteligentes",
            "Relatórios em tempo real",
            "Histórico completo de clientes",
            "Segurança de dados garantida",
          ].map((benefit, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl shadow-lg bg-gradient-to-br from-blue-100 to-green-100"
            >
              <h3 className="font-semibold text-lg mb-2">{benefit}</h3>
              <p className="text-sm text-gray-600">
                Simplifique processos e aumente sua eficiência.
              </p>
            </div>
          ))}
        </div>
      </section>
      <section className="py-20 bg-gradient-to-r from-purple-700 via-blue-600 to-green-500 text-white text-center">
        <h2 className="text-4xl font-bold mb-6">Transforme sua recuperação de dívidas hoje mesmo</h2>
        <p className="mb-8">Aumente sua taxa de recuperação com a tecnologia que impulsiona resultados.</p>
        <div className="flex gap-4 justify-center">
          <button className="px-6 py-3 bg-yellow-400 text-black font-semibold rounded-2xl shadow-lg hover:bg-yellow-300 transition">
          Falar com Especialista
          </button>
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="py-20 bg-gradient-to-r from-blue-100 to-green-100">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold">Entre em Contato</h2>
          <p className="text-gray-700 mt-4">Preencha o formulário abaixo e nossa equipe retornará em breve.</p>
        </div>
        <form className="max-w-3xl mx-auto grid gap-6 px-6">
          <input type="text" placeholder="Nome" className="p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400" />
          <input type="email" placeholder="E-mail" className="p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400" />
          <textarea placeholder="Mensagem" rows={4} className="p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"></textarea>
          <button type="submit" className="px-6 py-3 bg-purple-600 text-white rounded-2xl shadow-md hover:bg-purple-500 transition">
            Enviar Mensagem
          </button>
        </form>
      </section>
    </>
  );
}
