"use client";

import { motion } from "framer-motion";

const scrollToOffer = () => {
  document.getElementById("offer-section")?.scrollIntoView({ behavior: "smooth" });
};

const OfferSummary = () => (
  <section className="py-16 sm:py-20 px-4 bg-gradient-to-b from-background to-secondary/30">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="max-w-3xl mx-auto text-center"
    >
      <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground">
        MÊS DO CONSUMIDOR{" "}
        <span className="gradient-text">PÓS em ESTOMATO</span>
      </h2>

      <p className="mt-6 text-foreground/80 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
        Atendendo a pedidos, liberamos uma condição exclusiva do Mês do
        Consumidor para quem realizar a matrícula{" "}
        <strong className="text-foreground">HOJE até às 23:59h:</strong>
      </p>

      <div className="mt-8 text-left max-w-lg mx-auto space-y-3">
        {[
          { icon: "✅", text: <>Primeira mensalidade por apenas <strong>R$ 100</strong></> },
          { icon: "🔝", text: <><strong>64% de Desconto</strong></> },
          { icon: "♾️", text: <><strong>Acesso vitalício à Pós</strong></> },
          {
            icon: "📚",
            text: (
              <>
                <strong>Coleção de e-books</strong>
                <ul className="mt-1.5 ml-5 space-y-0.5 text-muted-foreground text-sm list-disc">
                  <li>Manual Clínico de Estomatologia</li>
                  <li>Manual de Biópsia</li>
                  <li>Pack Documentos Essenciais em Estomatologia</li>
                </ul>
              </>
            ),
          },
        ].map((b, i) => (
          <div key={i} className="flex items-start gap-3">
            <span className="text-xl flex-shrink-0">{b.icon}</span>
            <p className="text-foreground/90 text-sm sm:text-base">{b.text}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 max-w-2xl mx-auto">
        <p className="text-foreground/70 text-sm sm:text-base leading-relaxed">
          Essa é uma oportunidade pensada para quem quer evoluir
          profissionalmente, mas precisava de um empurrão para começar.
        </p>
        <p className="mt-3 text-foreground/70 text-sm sm:text-base font-medium">
          Clique no botão abaixo e realize a sua matrícula antes que acabe.
        </p>
      </div>

      <button
        onClick={scrollToOffer}
        className="btn-cta inline-block mt-8 text-sm sm:text-base"
      >
        CLIQUE PARA SE MATRICULAR
      </button>
    </motion.div>
  </section>
);

export default OfferSummary;
