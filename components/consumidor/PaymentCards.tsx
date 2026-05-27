"use client";

import { motion } from "framer-motion";

const LINK_BOLETO = "https://pay.tmbeducacao.com.br/EXOSMARKETIN/VAT18749138";
const LINK_AVISTA = "https://pay.voompcreators.com.br/10927/offer/44PG5Z";

interface PaymentCardsProps {
  compact?: boolean;
}

const PaymentCards = ({ compact = false }: PaymentCardsProps) => (
  <div className={`grid md:grid-cols-2 gap-5 ${compact ? "max-w-3xl" : "max-w-4xl"} mx-auto`}>
    {/* Card 1: Boleto */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-card border-2 border-border rounded-2xl p-6 sm:p-8 text-center hover:border-primary/40 transition-colors"
    >
      <span className="inline-block bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full mb-4">
        Opção 1
      </span>
      <h3 className="font-heading text-xl sm:text-2xl font-bold text-foreground">
        BOLETO PARCELADO
      </h3>
      <div className="mt-5">
        <p className="text-muted-foreground text-sm">1ª Mensalidade por</p>
        <p className="font-heading text-3xl sm:text-4xl font-black gradient-text mt-1">
          R$100,00
        </p>
        <p className="text-muted-foreground text-sm mt-2">
          + até <strong className="text-foreground">14x de R$385,09</strong>
        </p>
      </div>
      <a
        href={LINK_BOLETO}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-cta inline-block mt-6 w-full text-sm sm:text-base py-3"
      >
        Quero a Opção 1
      </a>
    </motion.div>

    {/* Card 2: À Vista */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 }}
      className="bg-card border-2 border-primary/30 rounded-2xl p-6 sm:p-8 text-center relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent" />
      <span className="inline-block bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full mb-4">
        Opção 2
      </span>
      <h3 className="font-heading text-xl sm:text-2xl font-bold text-foreground">
        VALOR À VISTA
      </h3>
      <div className="mt-5">
        <p className="text-muted-foreground text-xs uppercase tracking-wider">
          Cartão | PIX | Boleto
        </p>
        <p className="font-heading text-3xl sm:text-4xl font-black gradient-text mt-1">
          R$3.597,00
        </p>
        <div className="mt-4 pt-4 border-t border-border">
          <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">
            Parcelado
          </p>
          <p className="text-muted-foreground text-xs mt-1">Cartão | PIX</p>
          <p className="text-foreground font-bold text-sm mt-1">
            até 12x R$359,70
          </p>
          <p className="text-muted-foreground text-xs">no cartão</p>
        </div>
      </div>
      <a
        href={LINK_AVISTA}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-cta inline-block mt-6 w-full text-sm sm:text-base py-3"
      >
        Quero a Opção 2
      </a>
    </motion.div>
  </div>
);

export default PaymentCards;
