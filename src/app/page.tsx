'use client'
import Quotes from "@/components/common/Quotes";
import Faq from "@/components/layout/Faq";
import MainBanner from "@/components/layout/MainBanner";
import { Building, Building2, ChartNoAxesCombined, ChartPie, Factory, FileChartColumn, GraduationCap, ShoppingCart, Stethoscope } from "lucide-react";
import Image from "next/image";
import Solucoes from "@/components/layout/Solucoes";

import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import PaymentsList from "@/components/layout/PaymentsList";

export default function Home() {
  return (
    <>
      <MainBanner />
      <section id="beneficios" className="py-20 bg-gray-50">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold">Pagamentos Integrados</h2>
          </div>
          <div className="md:flex md:items-center">
            <div className="md:w-1/2">
              <DotLottieReact
                src="/assets/images/payments.lottie"
                loop
                autoplay
              />
            </div>
            <PaymentsList />
          </div>
        </div>
      </section>

      {/* Segmentos */}
      <section id="segmentos" className="py-20 bg-white">
        <div className="px-3 md:px-0 container mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-black">ERP INTEGRADO</h2>
          <p className="text-gray-700 mt-4 max-w-2xl mx-auto">Tenha o controle total do seu negócio em um só lugar.
          </p>
        </div>
        <div className="px-3 md:px-0 container mx-auto grid md:grid-cols-2 gap-1 items-center">
          {/* Segmentos */}
          <div className="grid grid-cols-2 gap-6">
            {[
              { icon: <FileChartColumn className="w-10 h-10 text-purple-600" />, title: "Gestão de vendas, contratos e cobranças" },
              { icon: <ChartNoAxesCombined className="w-10 h-10 text-green-600" />, title: "Controle de fluxo de caixa e DRE" },
              { icon: <ChartPie className="w-10 h-10 text-blue-600" />, title: "Relatórios de inadimplência e aging de carteira." }
            ].map((seg, i) => (
              <div key={i} className="p-6 rounded-2xl shadow-lg bg-gradient-to-br from-blue-50 via-purple-50 to-green-50 hover:scale-105 transition">
                <div className="mb-4 flex justify-center">{seg.icon}</div>
                <h3 className="font-semibold text-lg text-center text-gray-800">{seg.title}</h3>
              </div>
            ))}
          </div>
          {/* Ilustração */}
          <div className="flex justify-center">
            <DotLottieReact
              src="/assets/images/dashboard.lottie"
              loop
              autoplay
            />
          </div>
        </div>
      </section>

      {/* soluções */}
      <section id="servicos" className="py-20 bg-gradient-to-r from-purple-50 via-blue-50 to-green-50">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold">Soluções</h2>
        </div>
        <Solucoes />
      </section>

      <section className="container mx-auto flex justify-center p-10">
        <Image
          src="/assets/images/Bringing-Agreements-Tagline-Logo.webp"
          width={413}
          height={109}
          alt="Picture of the author"
        />
      </section>

      <section id="faq" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold">Perguntas Frequentes</h2>
        </div>
        <Faq />
      </section>

      {/* Depoimentos */}
      <section id="depoimentos" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold">O que nossos clientes dizem</h2>
        </div>
        <Quotes />
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
