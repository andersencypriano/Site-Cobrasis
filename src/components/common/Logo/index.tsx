import Image from "next/image";

interface LogoProps {
  width: number;
  height: number;
}


export default function Logo({width, height}: LogoProps) {
  return (
    <>
      <Image src="/assets/images/cobrasis-logo.png" alt="Logo" width={width} height={height} />
    </>
  );
}