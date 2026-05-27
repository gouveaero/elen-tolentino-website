"use client";

import { motion } from "framer-motion";

const benefits = [
  { icon: "✅", text: "Primeira mensalidade por apenas", bold: "R$ 100" },
  { icon: "🔝", text: "64% de Desconto total por", bold: "R$3.597" },
  { icon: "♾️", text: "", bold: "Acesso vitalício à Pós" },
  { icon: "📚", text: "Bônus:", bold: "Coleção exclusiva de e-books" },
];

const scrollToOffer = () => {
  document.getElementById("offer-section")?.scrollIntoView({ behavior: "smooth" });
};

const HeroConsumidor = () => (
  <section className="section-dark relative overflow-hidden">
    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -translate-y-1/4 translate-x-1/4" />

    <div className="container relative z-10 py-5 md:py-10 lg:py-12">
      {/* ——— DESKTOP / TABLET layout (≥768px) ——— */}
      <div className="hidden md:grid md:grid-cols-2 gap-6 lg:gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src="/consumidor/logo-anhanguera.png"
            alt="Anhanguera"
            className="h-7 lg:h-9 mb-3 lg:mb-4 brightness-0 invert opacity-70"
            loading="eager"
          />
          <h1 className="font-heading text-3xl lg:text-[2.75rem] font-black leading-[1.1]">
            <span className="text-white">MÊS DO CONSUMIDOR</span>
            <br />
            <span className="text-white">PÓS em </span>
            <span className="gradient-text">ESTOMATO</span>
          </h1>
          <p className="mt-2 lg:mt-3 text-xs lg:text-sm text-white/60 font-medium tracking-wide">
            Reconhecida pelo MEC • Parceria com a Faculdade Anhanguera
          </p>
          <div className="mt-4 lg:mt-5 space-y-2 lg:space-y-2.5">
            {benefits.map((b, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + i * 0.08 }}
                className="flex items-start gap-2"
              >
                <span className="text-base lg:text-lg flex-shrink-0 mt-0.5">{b.icon}</span>
                <p className="text-white/90 text-sm lg:text-base">
                  {b.text && <>{b.text} </>}
                  <span className="font-bold text-white">{b.bold}</span>
                </p>
              </motion.div>
            ))}
          </div>
          <div className="mt-5 lg:mt-6 flex flex-row items-center gap-3 lg:gap-4">
            <button onClick={scrollToOffer} className="btn-cta text-sm lg:text-base">
              CLIQUE AQUI PARA SE MATRICULAR
            </button>
            <img
              src="/consumidor/selo-mec.webp"
              alt="Reconhecido pelo MEC"
              className="h-12 lg:h-16 flex-shrink-0"
              loading="eager"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex justify-center"
        >
          <img
            src="/consumidor/elen-hero.png"
            alt="Profa. Elen Tolentino"
            className="w-[300px] lg:w-[400px] drop-shadow-2xl"
            loading="eager"
          />
        </motion.div>
      </div>

      {/* ——— MOBILE layout (<768px) ——— */}
      <div className="md:hidden">
        <div className="flex items-start gap-3">
          <div className="flex-1 min-w-0 pt-1">
            <img
              src="/consumidor/logo-anhanguera.png"
              alt="Anhanguera"
              className="h-5 mb-1.5 brightness-0 invert opacity-70"
              loading="eager"
            />
            <h1 className="font-heading text-[1.25rem] font-black leading-[1.15]">
              <span className="text-white">MÊS DO CONSUMIDOR</span>
              <br />
              <span className="text-white">PÓS em </span>
              <span className="gradient-text">ESTOMATO</span>
            </h1>
            <p className="mt-1 text-[9px] text-white/55 font-medium tracking-wide leading-tight">
              Reconhecida pelo MEC • Parceria com a Faculdade Anhanguera
            </p>
          </div>
          <img
            src="/consumidor/elen-hero.png"
            alt="Profa. Elen Tolentino"
            className="w-[120px] flex-shrink-0 drop-shadow-xl rounded-b-2xl"
            loading="eager"
          />
        </div>

        <div className="mt-3 space-y-1">
          {benefits.map((b, i) => (
            <div key={i} className="flex items-start gap-1.5">
              <span className="text-xs flex-shrink-0 mt-0.5">{b.icon}</span>
              <p className="text-white/90 text-[11px] leading-snug">
                {b.text && <>{b.text} </>}
                <span className="font-bold text-white">{b.bold}</span>
              </p>
            </div>
          ))}
        </div>

        <div className="mt-3 flex items-center gap-2">
          <button onClick={scrollToOffer} className="btn-cta text-[11px] flex-1 py-2.5">
            CLIQUE AQUI PARA SE MATRICULAR
          </button>
          <img
            src="/consumidor/selo-mec.webp"
            alt="Reconhecido pelo MEC"
            className="h-9 flex-shrink-0"
            loading="eager"
          />
        </div>
      </div>
    </div>
  </section>
);

export default HeroConsumidor;
