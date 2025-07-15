import Image from "next/image";
import Link from "next/link";

export const Logo = () => {
  return (
    <Link href="/">
      <Image src="/images/logo-footer.svg" alt="Logo" width={180} height={38} />
    </Link>
  );
};
