import Image from "next/image";
import { BASE_PATH } from "@/utils/constants";

interface LogoProps {
  width: number;
  height: number;
}


export default function Logo({width, height}: LogoProps) {
  return (
    <>
      <Image src={`${BASE_PATH}/assets/images/cobrasis-logo.png`} alt="Logo" width={width} height={height} />
    </>
  );
}