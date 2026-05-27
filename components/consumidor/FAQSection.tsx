"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Consigo assistir às aulas pelo celular?",
    a: "Sim, você consegue assistir às aulas de qualquer dispositivo com acesso à internet, 24h por dia.",
  },
  {
    q: "Essa pós-graduação serve para qualquer profissional da área da saúde?",
    a: "A Pós-Graduação em Estomatologia é exclusiva para Cirurgiões-Dentistas formados.",
  },
  {
    q: "Como minhas dúvidas serão respondidas?",
    a: "As dúvidas são respondidas em 24h úteis, via central do aluno. Além disso, teremos aulas ao vivo para discussão de casos clínicos, tira-dúvidas e interações. Teremos, ainda, um grupo de WhatsApp onde você poderá trocar experiências e fazer networking.",
  },
  {
    q: "A pós-graduação tem certificado reconhecido pelo MEC?",
    a: "Sim! Somos a pós-graduação online com a maior carga horária do mercado. O certificado é de 480 horas, reconhecido pelo MEC, chancelado pela maior universidade do Brasil – A Anhanguera, e você não paga nada a mais para ter o seu certificado.",
  },
  {
    q: "Quando começa a pós-graduação?",
    a: "Ao realizar o pagamento, você receberá a confirmação da compra. Após isso, nossa equipe irá te chamar para um grupo VIP de WhatsApp, onde passaremos todas as informações.",
  },
  {
    q: "Qual o formato da pós-graduação?",
    a: "A pós-graduação em Estomatologia é 100% online, com aulas gravadas e aulas ao vivo, para seu melhor aproveitamento.",
  },
  {
    q: "Quantas aulas vou ter acesso na pós-graduação?",
    a: "Serão 12 módulos + 1 encontro ao vivo por mês (a gravação do encontro será disponibilizada na plataforma).",
  },
  {
    q: "As vagas são limitadas? Por quê?",
    a: "Sim, as vagas são limitadas. Apesar de ser um método 100% online, decidimos limitar a quantidade de vagas para poder moderar com mais qualidade as interações dos alunos na nossa comunidade exclusiva no WhatsApp, na nossa plataforma de aulas e nas mentorias ao vivo.",
  },
];

const FAQSection = () => (
  <section className="py-16 sm:py-20 px-4 bg-secondary/20">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="max-w-3xl mx-auto"
    >
      <div className="text-center mb-10">
        <span className="text-primary font-semibold uppercase tracking-widest text-xs sm:text-sm">
          Tire suas dúvidas
        </span>
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mt-2">
          Perguntas Frequentes
        </h2>
      </div>

      <Accordion type="single" collapsible className="space-y-2">
        {faqs.map((faq, i) => (
          <AccordionItem
            key={i}
            value={`faq-${i}`}
            className="bg-card border border-border rounded-xl px-5 data-[state=open]:border-primary/30"
          >
            <AccordionTrigger className="text-foreground text-sm sm:text-base text-left font-medium hover:no-underline">
              {faq.q}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-sm leading-relaxed">
              {faq.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </motion.div>
  </section>
);

export default FAQSection;
