import { IMenu } from "@/interfaces/IMenu";
import scrollToSection from "@/utils/ScrollToSection";
import Link from "next/link";
import useDrawer from "../../../store/UseDrawerStore";



export default function Menu({direction = 'row'}: IMenu) {

  const menuStats = {
    column: 'flex-col',
    row: 'flex-row'
  }

  const { closeMenu } = useDrawer();

  return (
    <div className={`flex ${menuStats[direction]} gap-4 `}>
      <Link href="/" className="text-white" onClick={(e) => {scrollToSection(e); closeMenu(); }}>Home</Link>
      <Link href="#pagamentos" className="text-white colum" onClick={(e) => {scrollToSection(e); closeMenu(); }}>Pagamentos</Link>
      <Link href="#erp" className="text-white" onClick={(e) => {scrollToSection(e); closeMenu(); }}>ERP</Link>
      <Link href="#solucoes" className="text-white" onClick={(e) => {scrollToSection(e); closeMenu(); }}>Soluções</Link>
      <Link href="#seguranca" className="text-white" onClick={(e) => {scrollToSection(e); closeMenu(); }}>Segurança</Link>
      <Link href="#faq" className="text-white" onClick={(e) => {scrollToSection(e); closeMenu(); }}>FAQ</Link>
      <Link href="#contato" className="text-white" onClick={(e) => {scrollToSection(e); closeMenu(); }}>Contato</Link>
    </div>
  );
}
