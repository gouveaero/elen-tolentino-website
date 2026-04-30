import {
  InstagramIcon,
  YouTubeIcon,
  LinkedInIcon,
  WhatsAppIcon,
} from "./icons";

const socialLinks = [
  {
    href: "#",
    label: "Instagram",
    icon: <InstagramIcon className="w-6 h-6" />,
  },
  {
    href: "#",
    label: "YouTube",
    icon: <YouTubeIcon className="w-6 h-6" />,
  },
  {
    href: "#",
    label: "LinkedIn",
    icon: <LinkedInIcon className="w-6 h-6" />,
  },
  {
    href: "#",
    label: "WhatsApp",
    icon: <WhatsAppIcon className="w-6 h-6" />,
  },
];

export default function HomeFooter() {
  return (
    <footer id="contato" className="bg-black py-16">
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 md:px-12 text-center text-gray-400">
        {/* Logo */}
        <a
          href="#"
          className="text-3xl font-bold text-white tracking-wider mb-4 inline-block"
        >
          ELEN <span className="text-[#E10098]">TOLENTINO</span>
        </a>

        {/* Tagline */}
        <p className="max-w-md mx-auto mb-8 text-gray-400">
          Vamos juntos elevar o nível da odontologia. Siga-me nas redes sociais
          e fique por dentro de novos conteúdos e turmas.
        </p>

        {/* Social icons */}
        <div className="flex justify-center space-x-6 mb-8">
          {socialLinks.map(({ href, label, icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-gray-400 hover:text-[#E10098] transition-colors duration-150"
            >
              {icon}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-400">
          © 2025 Dra. Elen Tolentino. Todos os direitos reservados.
        </p>

        {/* Sub-copyright */}
        <p className="text-xs mt-2 text-gray-600">
          Feito com{" "}
          <span className="text-[#E10098]">♥</span>
          {" "}por Exos
        </p>
      </div>
    </footer>
  );
}
