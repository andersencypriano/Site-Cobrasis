import { MapPin, Mail, Globe } from 'lucide-react'
import Logo from '../common/Logo'

export default function Footer() {
  return (
    <>
      {/* Rodapé */}
      <footer className="bg-gray-900 text-gray-300">
        <div className="pt-6 px-3 container mx-auto">
          <Logo width={100} height={111} />
          <div className="mt-4 gap-3 grid mb-4 md:justify-between md:grid-cols-2">
            <div className="">
              <div className="">
                <h2 className='text-[.9rem] md:text-[1rem] font-bold'>Cobrasis Soluções de Cobrança Ltda.</h2>
                <p className='text-[.9rem] md:text-[1rem] font-bold'>Cobrasis Sistemas da Informação e Tecnologia Ltda.</p>
                <p><span className="text-[.9rem] md:text-[1rem] font-bold">CNPJ:</span> 39.487.175/0001-00</p>
              </div>
            </div>

            <div className="">
              <ul className="grid md:justify-end">
                <li className="flex items-center text-sm">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span className='md:text-[1rem]'>São Paulo — SP</span>
                </li>
                <li className="flex items-center text-sm">
                  <Mail className="w-4 h-4 mr-2" />
                  <a href="mailto:contato@cobrasis.com.br" className="underline md:text-[1rem] hover:text-white">contato@cobrasis.com.br</a>
                </li>
                <li className="flex items-center text-sm">
                  <Globe className="w-4 h-4 mr-2" />
                  <a href="https://www.cobrasis.com.br" target="_blank" rel="noopener noreferrer" className="underline md:text-[1rem] hover:text-white">www.cobrasis.com.br</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="py-4 border-t border-white/10">
            <p className="text-xs text-center text-gray-400">© 2025 CRM Cobrasis. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </>
  )
}