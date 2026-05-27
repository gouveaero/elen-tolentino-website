"use client";

import { motion } from "framer-motion";
import { MessageCircle, Shield, Award, Lock } from "lucide-react";
import PaymentCards from "@/components/consumidor/PaymentCards";

const WHATSAPP_LINK =
  "https://api.whatsapp.com/send/?phone=5511958216675&text=Oi+gostaria+de+mais+informações+sobre+a+pós&type=phone_number&app_absent=0";

export default function PreCheckoutConsumidorPage() {
  return (
    <div className="consumidor-theme min-h-screen flex flex-col">
      {/* Mini urgency */}
      <div className="w-full py-2 bg-red-600 text-center">
        <span className="text-white text-xs sm:text-sm font-semibold tracking-wide">
          Condição especial válida por tempo limitado
        </span>
      </div>

      {/* Header */}
      <header className="py-6 sm:py-8 px-4 text-center border-b border-border">
        <h2 className="font-heading text-lg sm:text-xl font-bold text-foreground">
          Pós-Graduação em Estomatologia
        </h2>
        <p className="text-primary text-xs sm:text-sm font-semibold mt-1">
          Condição especial do Mês do Consumidor
        </p>
      </header>

      <main className="flex-1 py-8 sm:py-12 px-4">
        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-heading text-2xl sm:text-3xl lg:text-4xl font-black text-foreground text-center max-w-3xl mx-auto leading-tight"
        >
          ESCOLHA A MELHOR OPÇÃO DE PAGAMENTO PARA A SUA MATRÍCULA
        </motion.h1>

        {/* Offer summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="max-w-xl mx-auto mt-8 bg-card border border-border rounded-xl p-5 sm:p-6"
        >
          <p className="text-sm text-muted-foreground text-center mb-4 font-medium">
            O que você está garantindo:
          </p>
          <div className="space-y-2 text-sm">
            {[
              {
                icon: "✅",
                text: (
                  <>
                    Opção de 1ª parcela por{" "}
                    <strong className="text-foreground">R$100,00</strong>
                  </>
                ),
              },
              {
                icon: "🔝",
                text: <strong className="text-foreground">64% de Desconto</strong>,
              },
              {
                icon: "♾️",
                text: <strong className="text-foreground">Acesso vitalício</strong>,
              },
              {
                icon: "📚",
                text: (
                  <>
                    <strong className="text-foreground">Coleção de e-books:</strong>
                    <span className="text-muted-foreground block mt-0.5 text-xs">
                      Manual Clínico de Estomatologia • Manual de Biópsia • Pack
                      Documentos Essenciais
                    </span>
                  </>
                ),
              },
            ].map((b, i) => (
              <div key={i} className="flex items-start gap-2.5">
                <span className="text-base flex-shrink-0">{b.icon}</span>
                <p className="text-foreground/80">{b.text}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Payment cards */}
        <div className="mt-10">
          <PaymentCards compact />
        </div>

        {/* Support block */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="max-w-md mx-auto mt-10 text-center"
        >
          <p className="text-muted-foreground text-sm">
            Para formas alternativas de pagamento, fale com o nosso time de
            suporte:
          </p>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-3 border border-primary/30 text-primary hover:bg-primary/5 font-semibold text-sm px-6 py-2.5 rounded-xl transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            FALAR COM O SUPORTE
          </a>
        </motion.div>

        {/* Trust signals */}
        <div className="max-w-md mx-auto mt-12 text-center">
          <div className="flex items-center justify-center gap-6 mb-4">
            <img src="/consumidor/selo-mec.webp" alt="Selo MEC" className="h-12" />
            <img
              src="/consumidor/logo-anhanguera.png"
              alt="Anhanguera"
              className="h-7"
            />
          </div>
          <div className="flex items-center justify-center gap-4 text-muted-foreground text-xs">
            {[
              { icon: Shield, text: "Pagamento seguro" },
              { icon: Lock, text: "Ambiente protegido" },
              { icon: Award, text: "Compra segura" },
            ].map((t, i) => (
              <div key={i} className="flex items-center gap-1">
                <t.icon className="w-3.5 h-3.5" />
                <span>{t.text}</span>
              </div>
            ))}
          </div>
        </div>
      </main>

      <footer className="py-4 border-t border-border">
        <p className="text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Elen Tolentino — Todos os direitos reservados.
        </p>
      </footer>
    </div>
  );
}
