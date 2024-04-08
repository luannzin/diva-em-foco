import Link from "next/link";

const Category = ({ href, children }: { href: string; children: any }) => {
  return (
    <Link
      href={href}
      className="p-2 bg-rose-400 hover:bg-rose-500 transition-all duration-150 text-rose-50 rounded-sm w-max text-sm uppercase select-none"
    >
      {children}
    </Link>
  );
};

export default Category;
