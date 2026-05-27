"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const scrollToOffer = () => {
  document.getElementById("offer-section")?.scrollIntoView({ behavior: "smooth" });
};

const WHATSAPP_LINK =
  "https://api.whatsapp.com/send/?phone=5511958216675&text=Oi+gostaria+de+mais+informações+sobre+a+pós&type=phone_number&app_absent=0";

const FinalCTA = () => (
  <section className="section-dark py-16 sm:py-20 px-4 relative overflow-hidden">
    <div className="absolute inset-0 bg-primary/5" />
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="max-w-2xl mx-auto text-center relative z-10"
    >
      <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight">
        Garanta sua condição especial do{" "}
        <span className="gradient-text">Mês do Consumidor</span> antes que ela
        acabe.
      </h2>

      <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
        <button
          onClick={scrollToOffer}
          className="btn-cta text-center text-sm sm:text-base w-full sm:w-auto"
        >
          QUERO FAZER MINHA MATRÍCULA
        </button>
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 border border-white/20 text-white/80 hover:text-white hover:border-white/40 font-semibold text-sm px-6 py-3 rounded-xl transition-colors w-full sm:w-auto justify-center"
        >
          <MessageCircle className="w-4 h-4" />
          FALAR COM O SUPORTE
        </a>
      </div>
    </motion.div>
  </section>
);

export default FinalCTA;
