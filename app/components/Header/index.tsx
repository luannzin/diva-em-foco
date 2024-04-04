import { headerLinks, type HeaderLink } from "@/app/config/nav";
import Image from "next/image";
import Link from "next/link";
import Logo from "../Logo";

const Header = () => {
  return (
    <header className="h-20 flex justify-center w-full items-center bg-rose-900 border-b border-b-rose-700">
      <div className="max-w-[1200px] flex justify-between items-center w-full">
        <Link href={"/"} className="text-xl text-black flex items-center gap-2">
          <Logo className="stroke-rose-50" width={24} height={24} />
          <strong className="uppercase text-sm text-rose-50">
            Diva em Foco
          </strong>
        </Link>
        <nav className="flex items-center gap-4 ">
          {headerLinks.map((link: HeaderLink) => (
            <Link key={link.tag} href={link.href} className="p-2 group">
              <strong className="text-pretty text-sm text-rose-50 py-2 group-hover:border-b group-hover:border-b-rose-500 transition-all duration-150 ease-in-out uppercase">
                {link.name}
              </strong>
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
