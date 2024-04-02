import { headerLinks, type HeaderLink } from "@/app/config/nav";
import Image from "next/image";
import Link from "next/link";
import Logo from "../Logo";

const Header = () => {
  return (
    <header className="py-8 flex justify-between w-full items-center ">
      <Link href={"/"} className="text-xl text-black flex items-center gap-2">
        <Logo width={20} height={20} />
        <strong className="uppercase text-sm text-rose-950">
          Diva em Foco
        </strong>
      </Link>
      <nav className="flex items-center gap-4 ">
        {headerLinks.map((link: HeaderLink) => (
          <Link key={link.tag} href={link.href} className="p-2 group">
            <strong className="text-pretty text-sm text-rose-950 py-2 group-hover:border-b group-hover:border-b-rose-500 transition-all duration-150 ease-in-out uppercase">
              {link.name}
            </strong>
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Header;
