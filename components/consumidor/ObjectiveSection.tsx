"use client";

import { motion } from "framer-motion";

const ObjectiveSection = () => (
  <section className="py-16 sm:py-20 px-4" style={{ background: "hsl(338 85% 55% / 0.06)" }}>
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="max-w-3xl mx-auto text-center"
    >
      <span className="text-primary font-semibold uppercase tracking-widest text-xs sm:text-sm">
        Sobre o programa
      </span>
      <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mt-3">
        Objetivo da Pós-Graduação
      </h2>
      <div className="w-16 h-1 bg-primary mx-auto mt-4 rounded-full" />

      <p className="text-muted-foreground mt-8 text-base sm:text-lg leading-relaxed">
        Capacitar os alunos para se destacarem na Estomatologia, uma área de
        altíssima demanda e carente de profissionais qualificados,
        desenvolvendo autonomia, habilidades clínicas e visão estratégica para
        atuar com segurança e excelência.
      </p>
      <p className="text-muted-foreground mt-4 text-base sm:text-lg leading-relaxed">
        Sempre com foco em protocolos práticos e na qualidade de vida dos
        pacientes, o dentista desenvolverá o raciocínio clínico necessário
        para oferecer diagnósticos precisos e tratamentos que elevam a
        confiança do paciente e diferenciam sua prática no mercado.
      </p>
    </motion.div>
  </section>
);

export default ObjectiveSection;
