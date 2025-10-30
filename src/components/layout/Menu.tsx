import { IMenu } from "@/interfaces/IMenu";
import { useIsScrolled } from "@/utils/IsScrolled";
import Link from "next/link";
import { use } from "react";
import useDrawer from "../../../store/UseDrawerStore";



export default function Menu({direction = 'row'}: IMenu) {

  const menuStats = {
    column: 'flex-col',
    row: 'flex-row'
  }

  return (
    <div className={`flex ${menuStats[direction]} gap-4 `}>
      <Link href="/" className="text-white">Home</Link>
      <Link href="/" className="text-white colum">Sobre Nós</Link>
      <Link href="/" className="text-white">Soluções</Link>
      <Link href="/" className="text-white">Contato</Link>
    </div>
  );
}
