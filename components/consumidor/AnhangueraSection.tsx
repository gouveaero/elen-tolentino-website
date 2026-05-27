"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "25 Anos", desc: "Tradição em ensino superior" },
  { value: "+150 Cursos", desc: "Estrelados no Guia do Estudante" },
  { value: "+360 Cursos", desc: "Com conceito positivo no MEC" },
];

const AnhangueraSection = () => (
  <section className="py-16 sm:py-20 px-4 bg-background">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="max-w-4xl mx-auto text-center"
    >
      <img
        src="/consumidor/logo-anhanguera.png"
        alt="Anhanguera"
        className="h-10 sm:h-14 mx-auto mb-6"
      />
      <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground">
        Nossos Números
      </h2>
      <p className="text-muted-foreground mt-4 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
        Há mais de 25 anos a Anhanguera faz parte do futuro de diversos
        estudantes, com cursos de graduação, pós-graduação e de extensão, em
        diversas áreas do conhecimento. São cerca de 15 mil profissionais e
        professores, entre especialistas, mestres e doutores.
      </p>

      <div className="grid sm:grid-cols-3 gap-6 mt-10">
        {stats.map((s, i) => (
          <div key={i} className="bg-card border border-border rounded-xl p-5">
            <p className="font-heading text-2xl sm:text-3xl font-black gradient-text">
              {s.value}
            </p>
            <p className="text-muted-foreground text-sm mt-1">{s.desc}</p>
          </div>
        ))}
      </div>
    </motion.div>
  </section>
);

export default AnhangueraSection;
