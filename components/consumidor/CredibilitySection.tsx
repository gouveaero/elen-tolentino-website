"use client";

import { motion } from "framer-motion";
import { Shield, Award, GraduationCap } from "lucide-react";

const CredibilitySection = () => (
  <section className="section-dark py-16 sm:py-20 px-4">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="max-w-4xl mx-auto text-center"
    >
      <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white">
        Certificado <span className="gradient-text">Reconhecido</span>
      </h2>

      <div className="flex items-center justify-center gap-8 sm:gap-12 mt-8">
        <img src="/consumidor/selo-mec.webp" alt="Selo MEC" className="h-16 sm:h-20" />
        <img src="/consumidor/logo-anhanguera.png" alt="Anhanguera" className="h-8 sm:h-12" />
      </div>

      <div className="grid sm:grid-cols-3 gap-6 mt-12">
        {[
          { icon: Shield, text: "Certificado reconhecido pelo MEC" },
          { icon: Award, text: "Parceria oficial com a Anhanguera" },
          { icon: GraduationCap, text: "480h de carga horária certificada" },
        ].map((item, i) => (
          <div key={i} className="flex flex-col items-center gap-3">
            <item.icon className="w-8 h-8 text-primary" />
            <p className="text-white/80 text-sm font-medium">{item.text}</p>
          </div>
        ))}
      </div>
    </motion.div>
  </section>
);

export default CredibilitySection;
