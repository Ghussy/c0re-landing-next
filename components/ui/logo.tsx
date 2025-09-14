import Link from "next/link";
import Image from "next/image";
import LogoImg from "@/public/images/c0re-logo.svg";

export default function Logo() {
  return (
    <Link className="inline-flex" href="/" aria-label="c0re">
      <Image
        className="max-w-none"
        src={LogoImg}
        width={38}
        height={38}
        priority
        alt="c0re"
      />
    </Link>
  );
}
