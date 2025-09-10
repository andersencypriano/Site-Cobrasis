import Link from "next/link";

export default function Menu() {
  return (
    <div className="flex items-center gap-4">
      <Link href="/">Home</Link>
      <Link href="/sobre-nos">Sobre Nós</Link>
      <Link href="/solucoes">Soluções</Link>
      <Link href="/contato">Contato</Link>
    </div>
  );
}
