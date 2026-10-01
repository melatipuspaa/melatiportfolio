"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto flex max-w-6xl items-center justify-center px-6 py-5">
        <ul className="flex items-center gap-1 rounded-full border border-[#C2B280]/20 bg-[#3a251a]/30 p-1.5 backdrop-blur-xl shadow-lg shadow-black/20">
          {links.map((link) => {
            const isActive = pathname === link.href;

            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`group relative inline-flex items-center rounded-full px-5 py-2 text-[11px] font-medium uppercase tracking-[0.2em] transition-all duration-300 ${
                    isActive
                      ? "bg-[#C2B280]/90 text-[#3a251a] shadow-md shadow-black/30"
                      : "text-[#E4CDAF]/70 hover:bg-[#C2B280]/10 hover:text-[#E4CDAF]"
                  }`}
                >
                  {link.label}

                  {isActive && (
                    <span className="ml-2 h-1 w-1 rounded-full bg-[#3a251a]" />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}