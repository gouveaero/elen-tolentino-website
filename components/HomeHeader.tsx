"use client";

import { useState, useEffect } from "react";
import { XIcon } from "./icons";

const navLinks = [
  { href: "#sobre", label: "Sobre Mim" },
  { href: "#cursos", label: "Cursos" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#contato", label: "Contato" },
];

export default function HomeHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header
      className={`sticky top-0 z-50 border-b border-gray-800 transition-all duration-300 ${
        isScrolled ? "bg-black/80 backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      {/* Main bar */}
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 md:px-12 py-4 flex justify-between items-center">
        {/* Logo */}
        <a
          href="/#"
          className="text-2xl font-bold text-white tracking-wider"
        >
          ELEN{" "}
          <span className="text-[#E10098]">TOLENTINO</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="text-sm font-medium text-gray-200 hover:text-white transition-colors duration-150"
            >
              {label}
            </a>
          ))}
          <a
            href="#cursos"
            className="py-2 px-5 bg-[#E10098] text-white font-bold uppercase rounded-lg text-sm tracking-wider hover:bg-[#C60086] hover:-translate-y-0.5 transition-all duration-150"
          >
            QUERO TE AJUDAR
          </a>
        </nav>

        {/* Hamburger button (mobile) */}
        <button
          type="button"
          onClick={() => setIsMenuOpen(true)}
          className="md:hidden text-white text-2xl leading-none focus:outline-none"
          aria-label="Abrir menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-[#121212] flex flex-col items-center justify-center">
          {/* Close button */}
          <button
            type="button"
            onClick={closeMenu}
            className="absolute top-6 right-6 text-white focus:outline-none"
            aria-label="Fechar menu"
          >
            <XIcon className="h-8 w-8" />
          </button>

          {/* Mobile nav links */}
          <nav className="flex flex-col items-center space-y-8">
            {navLinks.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                onClick={closeMenu}
                className="text-xl font-medium text-gray-200 hover:text-white transition-colors duration-150"
              >
                {label}
              </a>
            ))}
            <a
              href="#cursos"
              onClick={closeMenu}
              className="py-2 px-5 bg-[#E10098] text-white font-bold uppercase rounded-lg text-sm tracking-wider hover:bg-[#C60086] transition-all duration-150"
            >
              QUERO TE AJUDAR
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
