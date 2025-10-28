import { useIsScrolled } from "@/utils/IsScrolled";
import Link from "next/link";

export default function Menu() {
  const isScrolled = useIsScrolled();
  return (
    <div className="flex items-center gap-4">
      <Link href="/" className="text-white">Home</Link>
      <Link href="/sobre-nos" className="text-white">Sobre Nós</Link>
      <Link href="/solucoes" className="text-white">Soluções</Link>
      <Link href="/contato" className="text-white">Contato</Link>
    </div>
  );
}
