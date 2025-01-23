import Image from "next/image";
import Link from "next/link";

export default function HeaderLogo(): React.ReactElement {
  return (
    <Link id="logo" href="/" className="relative h-16 min-w-24">
      <Image
        src={"/images/logo.svg"}
        alt="logo"
        sizes="100%"
        fill
        priority
        className="object-contain"
      />
    </Link>
  );
}
