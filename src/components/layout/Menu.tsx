import { useIsScrolled } from "@/utils/IsScrolled";
import Link from "next/link";

export default function Menu() {
  const isScrolled = useIsScrolled();
  return (
    <div className="flex items-center gap-4">
      <Link href="/" className={`${isScrolled ? 'md:text-neutral-50' : 'md:text-neutral-800'}`}>Home</Link>
      <Link href="/sobre-nos" className={`${isScrolled ? 'md:text-neutral-50' : 'md:text-neutral-800'}`}>Sobre Nós</Link>
      <Link href="/solucoes" className={`${isScrolled ? 'md:text-neutral-50' : 'md:text-neutral-800'}`}>Soluções</Link>
      <Link href="/contato" className={`${isScrolled ? 'md:text-neutral-50' : 'md:text-neutral-800'}`}>Contato</Link>
    </div>
  );
}
