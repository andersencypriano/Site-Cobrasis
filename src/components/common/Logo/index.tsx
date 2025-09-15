import Image from "next/image";

export default function Logo() {
  return (
    <>
      <Image src="/assets/images/logo-cobrasis.svg" alt="Logo" width={180} height={48} />
    </>
  );
}