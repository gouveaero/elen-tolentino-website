"use client";

import { motion } from "framer-motion";
import PaymentCards from "./PaymentCards";

const OfferSection = () => (
  <section
    id="offer-section"
    className="py-16 sm:py-20 px-4 bg-gradient-to-b from-background to-secondary/20 relative scroll-mt-16"
  >
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center mb-10"
    >
      <span className="inline-block bg-red-500/10 text-red-500 text-xs sm:text-sm font-bold px-5 py-2 rounded-full uppercase tracking-wide mb-4">
        Oferta Exclusiva do Mês do Consumidor
      </span>
      <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground">
        Escolha a melhor condição de pagamento e matricule-se agora
      </h2>
      <p className="text-muted-foreground mt-4 text-sm sm:text-base max-w-xl mx-auto">
        Garanta sua vaga na Pós-Graduação em Estomatologia agora mesmo.
      </p>

      {/* Quick recap */}
      <div className="flex flex-wrap justify-center gap-3 mt-6 text-xs sm:text-sm">
        {["1ª parcela R$100", "64% desconto", "R$3.597 total", "Acesso vitalício", "E-books grátis"].map(
          (t, i) => (
            <span
              key={i}
              className="bg-card border border-border rounded-full px-3 py-1 text-foreground/80 font-medium"
            >
              {t}
            </span>
          ),
        )}
      </div>
    </motion.div>

    <PaymentCards />

    <p className="text-center text-muted-foreground text-xs sm:text-sm mt-6">
      Vagas limitadas. Esta oferta pode encerrar a qualquer momento.
    </p>
  </section>
);

export default OfferSection;
