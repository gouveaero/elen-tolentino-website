"use client";

import { motion } from "framer-motion";

type Module = {
  n: string;
  title: string;
  items?: string[];
  desc?: string;
  prof: string;
};

const modules: Module[] = [
  {
    n: "01",
    title: "Fundamentos do Diagnóstico",
    items: ["Introdução à Estomatologia", "Exame clínico e Anamnese", "Lesões fundamentais", "Requisição Anatomopatológica"],
    prof: "Profª. Elen Tolentino",
  },
  {
    n: "02",
    title: "Bases da Patologia Oral",
    items: ["Histologia básica", "Histotécnica"],
    prof: "Prof. Fábio Vieira de Miranda",
  },
  {
    n: "03",
    title: "Exames Complementares",
    items: ["Hemograma e Coagulograma", "Culturas e testes de sensibilidade", "Biologia molecular e Imunoistoquímica"],
    prof: "Profª. Ana Regina Casaroto",
  },
  {
    n: "04",
    title: "Exames de Imagem",
    items: ["Radiografias e Tomografia", "Ressonância Magnética", "Ultrassonografia e exames avançados"],
    prof: "Prof. Gustavo Nascimento",
  },
  {
    n: "05",
    title: "Biópsia",
    items: ["Princípios cirúrgicos", "Tipos de biópsia", "Procedimentos pós-operatórios"],
    prof: "Profª. Elen Tolentino",
  },
  {
    n: "06",
    title: "Princípios Cirúrgicos",
    items: ["Retalhos cirúrgicos", "Hands-on incisões e sutura", "Acidentes e complicações"],
    prof: "Profª. Camila Camarini",
  },
  {
    n: "07",
    title: "Estomatologia I",
    desc: "Lesões brancas, infecções, doenças de glândulas salivares, doenças autoimunes e muito mais.",
    prof: "Profª. Elen Tolentino",
  },
  {
    n: "08",
    title: "Estomatologia II",
    desc: "Neoplasias, desordens potencialmente malignas, câncer bucal, cistos, tumores e terapêutica medicamentosa.",
    prof: "Profª. Elen Tolentino",
  },
  {
    n: "09",
    title: "Laserterapia",
    items: ["Conceitos e física dos Lasers", "Fotobiomodulação e Terapia Fotodinâmica", "Lasers de alta e baixa potência"],
    prof: "Profª. Elen Tolentino",
  },
];

const CurriculumSection = () => (
  <section className="py-16 sm:py-20 px-4 bg-secondary/30">
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <span className="text-primary font-semibold uppercase tracking-widest text-xs sm:text-sm">
          Grade Curricular
        </span>
        <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mt-3">
          O que você vai dominar na Pós-Graduação
        </h2>
        <p className="text-muted-foreground mt-4 text-sm sm:text-base max-w-2xl mx-auto">
          Um programa completo, do básico ao avançado, para te dar autonomia e
          raciocínio clínico frente a qualquer desafio.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {modules.map((m, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="bg-card border border-border rounded-xl p-5 hover:shadow-md transition-shadow"
          >
            <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
              <span className="text-primary font-heading font-bold text-sm">{m.n}</span>
            </div>
            <h3 className="font-heading font-bold text-foreground text-base">{m.title}</h3>
            {m.items ? (
              <ul className="mt-2 text-muted-foreground space-y-1 text-sm">
                {m.items.map((it, j) => (
                  <li key={j}>• {it}</li>
                ))}
              </ul>
            ) : (
              <p className="mt-2 text-muted-foreground text-sm">{m.desc}</p>
            )}
            <p className="text-xs text-primary font-semibold mt-3">{m.prof}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default CurriculumSection;
