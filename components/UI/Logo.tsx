import Image from "next/image";
import Link from "next/link";

export const Logo = () => {
  return (
    <Link href="/">
      <Image src="/images/logo.svg" alt="Logo" width={180} height={80} />
    </Link>
  );
};
