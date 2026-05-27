"use client";

import { motion } from "framer-motion";

const InstructorConsumidor = () => (
  <section className="section-dark-alt py-16 sm:py-20 px-4">
    <div className="max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="grid md:grid-cols-2 gap-8 items-center"
      >
        <div className="flex justify-center">
          <img
            src="/consumidor/elen-mentora.jpg"
            alt="Profa. Elen Tolentino"
            className="w-[260px] sm:w-[320px] rounded-2xl shadow-2xl object-cover aspect-[3/4]"
            loading="lazy"
          />
        </div>

        <div>
          <span className="text-primary/70 uppercase tracking-widest text-xs font-semibold">
            Coordenadora
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white mt-2">
            Conheça sua Mentora
          </h2>
          <h3 className="font-heading text-xl gradient-text font-bold mt-1">
            Profa. Elen Tolentino
          </h3>
          <p className="text-white/70 text-sm sm:text-base leading-relaxed mt-4">
            Com vasta experiência clínica e acadêmica, a Profa. Elen Tolentino
            é uma das maiores referências em Estomatologia e Laserterapia do
            Brasil. Sua didática única transforma temas complexos em
            conhecimento aplicável, guiando centenas de alunos a se tornarem
            profissionais mais seguros e bem-sucedidos.
          </p>
        </div>
      </motion.div>
    </div>
  </section>
);

export default InstructorConsumidor;
