'use client'
import MainBanner from "@/components/layout/MainBanner";
import { Banknote, BarChart3, Briefcase, Building, Building2, ChevronDown, Factory, GraduationCap, Handshake, Headphones, ShoppingCart, Stethoscope, TrendingUp } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const faqs = [
    {
      question: "Posso testar gratuitamente?",
      answer: "Sim, você pode iniciar um teste gratuito sem necessidade de cartão.",
    },
    {
      question: "O CRM é seguro?",
      answer: "Todos os dados são criptografados e seguem padrões de segurança bancária.",
    },
    {
      question: "Funciona para qualquer porte de empresa?",
      answer: "Sim, ele foi projetado para pequenas, médias e grandes empresas.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };


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
              className="p-6 rounded-2xl shadow-lg"
            >
              <h3 className="font-semibold text-lg mb-2">{benefit}</h3>
              <p className="text-sm text-gray-600">
                Simplifique processos e aumente sua eficiência.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Segmentos */}
      <section id="segmentos" className="py-20 bg-white">
        <div className="px-3 md:px-0 container mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-black">Segmentos de Atuação</h2>
          <p className="text-gray-700 mt-4 max-w-2xl mx-auto">Nosso CRM é flexível e pode ser aplicado em diferentes áreas de negócio, oferecendo soluções sob medida para cada segmento.</p>
        </div>
        <div className="px-3 md:px-0 container mx-auto grid md:grid-cols-2 gap-1 items-center">
          {/* Segmentos */}
          <div className="grid grid-cols-2 gap-6">
            {[
              { icon: <Building2 className="w-10 h-10 text-purple-600" />, title: "Instituições Financeiras" },
              { icon: <ShoppingCart className="w-10 h-10 text-green-600" />, title: "Varejo" },
              { icon: <Factory className="w-10 h-10 text-blue-600" />, title: "Indústrias" },
              { icon: <Building className="w-10 h-10 text-yellow-600" />, title: "Imobiliárias" },
              { icon: <Stethoscope className="w-10 h-10 text-pink-600" />, title: "Saúde" },
              { icon: <GraduationCap className="w-10 h-10 text-indigo-600" />, title: "Educação" },
            ].map((seg, i) => (
              <div key={i} className="p-6 rounded-2xl shadow-lg bg-gradient-to-br from-blue-50 via-purple-50 to-green-50 hover:scale-105 transition">
                <div className="mb-4 flex justify-center">{seg.icon}</div>
                <h3 className="font-semibold text-lg text-center text-gray-800">{seg.title}</h3>
              </div>
            ))}
          </div>
          {/* Ilustração */}
          <div className="flex justify-center">
            <Image
              src="/assets/images/dashboard-user-panel-template.png"
              width={600}
              height={449}
              alt="Picture of the author"
            />
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section id="servicos" className="py-20 bg-gradient-to-r from-purple-50 via-blue-50 to-green-50">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold">Serviços Oferecidos</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
          {[
            { icon: <TrendingUp className="w-10 h-10 text-purple-600" />, title: "Gestão de Cobranças", desc: "Organize e automatize todo o processo de cobrança de clientes." },
            { icon: <Handshake className="w-10 h-10 text-green-600" />, title: "Negociações Online", desc: "Facilite acordos através de propostas digitais rápidas e seguras." },
            { icon: <BarChart3 className="w-10 h-10 text-blue-600" />, title: "Relatórios Personalizados", desc: "Visualize métricas essenciais em relatórios customizados." },
            { icon: <Banknote className="w-10 h-10 text-yellow-600" />, title: "Integração Bancária", desc: "Conecte seu CRM diretamente com instituições financeiras." },
            { icon: <Headphones className="w-10 h-10 text-pink-600" />, title: "Suporte 24/7", desc: "Atendimento especializado disponível a qualquer hora." },
            { icon: <Briefcase className="w-10 h-10 text-indigo-600" />, title: "Gestão de Carteira", desc: "Controle e acompanhe de forma estratégica sua base de devedores." },
          ].map((service, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl shadow-lg bg-gradient-to-br from-purple-100 via-blue-100 to-green-100 hover:scale-105 transition transform"
            >
              <div className="mb-4 flex justify-center">{service.icon}</div>
              <h3 className="font-semibold text-lg mb-2 text-gray-800">{service.title}</h3>
              <p className="text-sm text-gray-700">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="faq" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold">Perguntas Frequentes</h2>
        </div>
        <div className="max-w-3xl mx-auto space-y-4 px-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="p-4 bg-white rounded-xl shadow-md cursor-pointer border border-gray-200 hover:shadow-lg transition "
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="font-semibold text-gray-800">{faq.question}</h3>
                <ChevronDown className={`w-5 h-5 transform transition-transform ${openFAQ === index ? "rotate-180 text-purple-600" : "text-gray-500"}`} />
              </div>
              {openFAQ === index && (
                <p className="mt-3 text-gray-700 text-sm">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Depoimentos */}
      <section id="depoimentos" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold">O que nossos clientes dizem</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
          {[
            "Aumentamos em 40% nossa taxa de recuperação em 3 meses!",
            "O sistema é prático e intuitivo. Organizou todo nosso processo.",
            "Segurança e eficiência: recuperamos dívidas sem complicações.",
          ].map((quote, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl shadow-md bg-gradient-to-br from-purple-100 to-blue-100 hover:scale-105 transition"
            >
              <p className="text-gray-800 italic mb-4">“{quote}”</p>
              <span className="font-semibold">Cliente satisfeito</span>
            </div>
          ))}
        </div>
      </section>


      <section className="py-20 bg-gradient-to-r from-purple-700 via-blue-600 to-green-500 text-white text-center">
        <h2 className="text-4xl font-bold mb-6">Transforme sua recuperação de dívidas hoje mesmo</h2>
        <p className="mb-8">Aumente sua taxa de recuperação com a tecnologia que impulsiona resultados.</p>
        <div className="flex gap-4 justify-center">
          <button className="px-6 py-3 bg-yellow-400 text-black font-semibold rounded-2xl shadow-lg hover:bg-yellow-300 transition cursor-pointer">
            Falar com Especialista
          </button>
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="py-20">
        <div className="px-3 md:px-0 max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold">Entre em Contato</h2>
          <p className="text-gray-700 mt-4">Preencha o formulário abaixo e nossa equipe retornará em breve.</p>
        </div>
        <form className="max-w-3xl mx-auto grid gap-6 px-6">
          <input type="text" placeholder="Nome" className="p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400" />
          <input type="email" placeholder="E-mail" className="p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400" />
          <textarea placeholder="Mensagem" rows={4} className="p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"></textarea>
          <button type="submit" className="px-6 py-3 bg-yellow-400 text-black font-semibold rounded-2xl shadow-lg hover:bg-yellow-300 transition cursor-pointer">
            Enviar
          </button>
        </form>
      </section>
    </>
  );
}
