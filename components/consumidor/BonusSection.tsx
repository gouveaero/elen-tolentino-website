"use client";

import { motion } from "framer-motion";
import { BookOpen, FileText, FolderOpen } from "lucide-react";

const ebooks = [
  {
    icon: BookOpen,
    title: "Manual Clínico de Estomatologia",
    desc: "Guia completo para diagnóstico e conduta clínica.",
  },
  {
    icon: FileText,
    title: "Manual de Biópsia",
    desc: "Protocolos e técnicas para procedimentos seguros.",
  },
  {
    icon: FolderOpen,
    title: "Pack Documentos Essenciais",
    desc: "Templates e documentos prontos para usar no consultório.",
  },
];

const BonusSection = () => (
  <section className="py-16 sm:py-20 px-4 bg-background">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="max-w-4xl mx-auto text-center"
    >
      <span className="inline-block bg-primary/10 text-primary font-bold text-xs sm:text-sm px-5 py-2 rounded-full uppercase tracking-widest mb-4">
        Exclusivo
      </span>
      <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground">
        Bônus exclusivos do{" "}
        <span className="gradient-text">Mês do Consumidor</span>
      </h2>
      <p className="text-muted-foreground mt-4 text-sm sm:text-base max-w-xl mx-auto">
        Ao realizar sua matrícula, você recebe gratuitamente a coleção
        exclusiva de e-books:
      </p>

      <div className="grid sm:grid-cols-3 gap-5 mt-10">
        {ebooks.map((eb, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-lg transition-shadow"
          >
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <eb.icon className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-heading font-bold text-foreground text-sm sm:text-base">
              {eb.title}
            </h3>
            <p className="text-muted-foreground text-xs sm:text-sm mt-2">
              {eb.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </section>
);

export default BonusSection;
