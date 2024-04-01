import { headerLinks, type HeaderLink } from "@/app/config/nav";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="py-8 flex justify-between w-full items-center">
      <Link href={"/"} className="text-xl text-black flex items-center gap-2">
        <Image src="/logo.png" width={20} height={20} alt="Diva em Foco" />
        <strong className="uppercase text-sm">Diva em Foco</strong>
      </Link>
      <nav className="flex items-center gap-4">
        {headerLinks.map((link: HeaderLink) => (
          <Link key={link.tag} href={link.href} className="p-2 group">
            <strong className="text-sm text-black py-2 group-hover:border-b group-hover:border-b-rose-500 transition-all duration-150 ease-in-out uppercase">
              {link.name}
            </strong>
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Header;
