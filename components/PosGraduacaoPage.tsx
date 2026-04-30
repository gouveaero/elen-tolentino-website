"use client";

import { useState } from "react";
import HomeHeader from "@/components/HomeHeader";
import HomeFooter from "@/components/HomeFooter";

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------

const badges = [
  { label: "INÍCIO DAS AULAS DA 1ª TURMA", value: "Fevereiro" },
  { label: "DURAÇÃO DO PROGRAMA", value: "12 Meses" },
  { label: "COMO VAI FUNCIONAR", value: "EAD | 100% Online" },
  { label: "CARGA HORÁRIA", value: "480H" },
];

const modules = [
  {
    title: "Módulo 1 — Fundamentos do Diagnóstico",
    professor: "Profª. Elen Tolentino",
    items: [
      "Introdução à Estomatologia",
      "Exame clínico",
      "Anamnese",
      "Exame físico",
      "Lesões fundamentais",
      "Requisição Anatomopatológica x Laudo histopatológico (Ana Regina Casaroto)",
    ],
  },
  {
    title: "Módulo 2 — Bases da Patologia Oral e Maxilofacial",
    professor: "Prof. Fábio Vieira de Miranda",
    items: ["Histologia básica", "Histotécnica"],
  },
  {
    title: "Módulo 3 — Exames Complementares",
    professor: "Profª. Ana Regina Casaroto",
    items: [
      "Hemagrama, coagulograma, exames bioquímicos",
      "Culturas e testes de sensibilidade",
      "Biologia molecular (PCR para HPV, EBV, etc.)",
      "Citologia esfoliativa",
      "Imunoistoquímica",
    ],
  },
  {
    title: "Módulo 4 — Exames de Imagem",
    professor: "Prof. Gustavo Nascimento",
    items: [
      "Radiografias",
      "Tomografia computadorizada",
      "Ressonância Magnética",
      "Ultrassonografia",
      "Exames avançados: PET-Scan, Cintilografia",
    ],
  },
  {
    title: "Módulo 5 — Biópsia",
    professor: "Profª. Elen Tolentino",
    items: [
      "Princípios cirúrgicos",
      "Tipos de biópsia",
      "Outros instrumentais",
      "Procedimentos pós-operatórios",
    ],
  },
  {
    title: "Módulo 6 — Princípios Cirúrgicos",
    professor: "Profª. Camila Camarini",
    items: [
      "Princípios de cirurgia",
      "Retalhos cirúrgicos",
      "Hands-on incisões e sutura",
      "Cuidados pré e pós-operatórios",
      "Acidentes e complicações",
    ],
  },
  {
    title: "Módulo 7 — Estomatologia I",
    professor: "Profª. Elen Tolentino",
    items: [
      "Doenças próprias da língua",
      "Processos proliferativos não neoplásticos e lesões reacionais",
      "Lesões traumáticas e físicas",
      "Lesões brancas",
      "Infecções fúngicas, bacterianas, virais",
    ],
  },
  {
    title: "Módulo 8 — Estomatologia II",
    professor: "Profª. Elen Tolentino",
    items: [
      "Neoplasias mesenquimais",
      "Desordens potencialmente malignas",
      "Câncer bucal",
      "Sequelas do tratamento antineoplástico",
      "Periapicopatias",
      "Cistos dos maxilares",
    ],
  },
  {
    title: "Módulo 9 — Laserterapia",
    professor: "Profª. Elen Tolentino",
    items: [
      "Conceitos e física dos Lasers",
      "Equipamentos",
      "Fotobiomodulação",
      "Terapia fotodinâmica",
      "Lasers de alta potência",
    ],
  },
  {
    title: "eBooks — Bônus",
    professor: "",
    items: [
      "Manual clínico de estomatologia — 276 páginas",
      "Princípios de biópsia — 9 páginas",
      "Guia básico posologias — 7 páginas",
      "Laser",
    ],
  },
];

const stats = [
  { number: "25 anos", label: "Tradição em ensino superior" },
  { number: "+ 150 Cursos", label: "Estrelados no guia do estudante" },
  { number: "+360 Cursos", label: "Conceito positivo no MEC" },
];

const faqs = [
  {
    question: "Consigo assistir as aulas pelo celular?",
    answer:
      "Sim, você consegue assistir às aulas de qualquer dispositivo com acesso a internet, 24h por dia.",
  },
  {
    question:
      "Essa pós-graduação serve para qualquer profissional da área da saúde?",
    answer: "Em breve",
  },
  {
    question: "Como suas dúvidas serão respondidas?",
    answer: "Em breve",
  },
  {
    question: "A pós-graduação tem certificado?",
    answer: "Em breve",
  },
  {
    question: "Quando começa a pós-graduação?",
    answer: "Em breve",
  },
  {
    question: "Qual formato da pós-graduação?",
    answer: "Em breve",
  },
  {
    question: "Quantas aulas vou ter acesso na pós-graduação?",
    answer: "Em breve",
  },
  {
    question: "As vagas são limitadas? Por quê?",
    answer: "Em breve",
  },
];

// ---------------------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------------------

function FAQItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <button
        type="button"
        onClick={onToggle}
        className="w-full flex justify-between items-center px-6 py-4 text-left bg-white hover:bg-gray-50 transition-colors duration-150 focus:outline-none"
      >
        <span className="font-semibold text-gray-800 pr-4">{question}</span>
        <span
          className="text-[#E10098] text-xl font-bold flex-shrink-0 transition-transform duration-300"
          style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0deg)" }}
        >
          +
        </span>
      </button>
      <div
        className="faq-content px-6"
        style={{
          maxHeight: isOpen ? "500px" : "0",
          overflow: "hidden",
          transition: "max-height 0.3s ease-out",
        }}
      >
        <p className="py-4 text-gray-600">{answer}</p>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Main component
// ---------------------------------------------------------------------------

export default function PosGraduacaoPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen font-sans bg-white text-gray-800">
      {/* 1. Header */}
      <HomeHeader />

      <main>
        {/* ----------------------------------------------------------------
            2. Hero Section
        ---------------------------------------------------------------- */}
        <section
          style={{
            background: "white",
            backgroundImage:
              "url('/assets/wp-content/uploads/2025/09/Elen-Tolentino-bg.png')",
            backgroundPosition: "right center",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            minHeight: "500px",
          }}
        >
          <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 flex flex-col md:flex-row items-center">
            {/* Left column */}
            <div className="md:w-1/2">
              {/* Logos */}
              <div className="flex items-center gap-4 mb-6">
                <img
                  src="/assets/wp-content/uploads/2025/09/universidade-anhanguera-logo-horizontal-p.png"
                  alt="Anhanguera"
                  className="h-10 object-contain"
                />
                <img
                  src="/assets/wp-content/uploads/2025/09/logo-mec.webp"
                  alt="MEC"
                  className="h-10 object-contain"
                />
              </div>

              {/* H1 */}
              <h1
                style={{
                  color: "#FF0074",
                  fontSize: "2.5rem",
                  fontWeight: 800,
                  lineHeight: 1.1,
                  marginBottom: "1rem",
                }}
              >
                PÓS-GRADUAÇÃO ONLINE EM ESTOMATOLOGIA
              </h1>

              <p
                style={{
                  color: "#2a2a2a",
                  fontSize: "1.1rem",
                  fontWeight: 600,
                  marginBottom: "0.5rem",
                }}
              >
                Reconhecida pelo MEC – Parceria com a Faculdade Anhanguera
              </p>

              <p style={{ color: "#555", marginBottom: "2rem" }}>
                Conhecimento para alcançar o nível mais elevado na Odontologia
              </p>

              <a
                href="https://elentolentino.com.br/pre-checkout-pos-graduacao-em-estomatologia/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-4 bg-[#E10098] text-white font-bold uppercase rounded-lg text-sm tracking-widest hover:bg-[#C60086] hover:-translate-y-0.5 transition-all duration-300"
              >
                QUERO MAIS INFORMAÇÕES
              </a>
            </div>

            {/* Right column — photo via background image on section */}
            <div className="md:w-1/2" />
          </div>
        </section>

        {/* ----------------------------------------------------------------
            3. Info Badges Strip
        ---------------------------------------------------------------- */}
        <section style={{ backgroundColor: "#E10098" }}>
          <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-px">
            {badges.map((badge) => (
              <div
                key={badge.label}
                className="flex flex-col items-center justify-center text-center py-6 px-4"
                style={{ backgroundColor: "#E10098" }}
              >
                <span className="text-white text-xs font-semibold uppercase tracking-wider mb-1 opacity-80">
                  {badge.label}
                </span>
                <span className="text-white text-lg font-bold">
                  {badge.value}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* ----------------------------------------------------------------
            4. Objective Section
        ---------------------------------------------------------------- */}
        <section className="bg-white py-16">
          <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
            <h2
              className="text-2xl font-bold uppercase mb-8 tracking-wide"
              style={{ color: "#FF0074" }}
            >
              OBJETIVO DA PÓS-GRADUAÇÃO
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Capacitar os alunos para se destacarem na Estomatologia, uma área
              de altíssima demanda e carente de profissionais qualificados,
              desenvolvendo autonomia, habilidades clínicas e visão estratégica
              para atuar com segurança e excelência.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Sempre com foco em protocolos práticos e na qualidade de vida dos
              pacientes, o dentista desenvolverá o raciocínio clínico necessário
              para oferecer diagnósticos precisos e tratamentos verdadeiramente
              encantadores, que elevam a confiança do paciente e a reputação do
              profissional.
            </p>
          </div>
        </section>

        {/* ----------------------------------------------------------------
            5. Curriculum / Ementa Section
        ---------------------------------------------------------------- */}
        <section className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            {/* Section header */}
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900">
                Conheça a EMENTA da
                <br />
                <span className="text-gray-900">Pós-graduação </span>
                <span style={{ color: "#E10098" }}>em Estomatologia</span>
              </h2>
            </div>

            {/* 2-column grid of module cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {modules.map((mod) => (
                <div
                  key={mod.title}
                  className="rounded-xl p-6"
                  style={{ backgroundColor: "#4a1530" }}
                >
                  <h3
                    className="font-bold text-base mb-1"
                    style={{ color: "#ffffff" }}
                  >
                    {mod.title}
                  </h3>
                  {mod.professor && (
                    <p
                      className="text-sm mb-3 font-medium"
                      style={{ color: "#FFE7F5", opacity: 0.85 }}
                    >
                      {mod.professor}
                    </p>
                  )}
                  <ul className="space-y-1">
                    {mod.items.map((item) => (
                      <li
                        key={item}
                        className="text-sm flex items-start gap-2"
                        style={{ color: "#FFE7F5" }}
                      >
                        <span
                          className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                          style={{ backgroundColor: "#E10098" }}
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ----------------------------------------------------------------
            6. Certificate Section
        ---------------------------------------------------------------- */}
        <section className="bg-black py-16 text-center">
          <h2 className="text-white text-3xl font-bold mb-8">
            Certificado Reconhecido
          </h2>
          <div className="flex justify-center items-center gap-12 flex-wrap px-6">
            <img
              src="/assets/wp-content/uploads/2025/09/universidade-anhanguera-logo-horizontal.png"
              alt="Anhanguera"
              className="h-16 object-contain brightness-0 invert"
            />
            <img
              src="/assets/wp-content/uploads/2025/09/logo-mec.webp"
              alt="MEC"
              className="h-20 object-contain"
            />
          </div>
        </section>

        {/* ----------------------------------------------------------------
            7. Numbers Section
        ---------------------------------------------------------------- */}
        <section className="bg-white py-16">
          <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Nossos Números
            </h2>
            <p className="text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              Há mais de 25 anos a Anhanguera faz parte do futuro de diversos
              estudantes, com cursos de graduação, pós-graduação e de extensão,
              em diversas áreas do conhecimento.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
              {stats.map((stat) => (
                <div key={stat.number} className="text-center">
                  <p
                    className="text-3xl font-extrabold mb-1"
                    style={{ color: "#E10098" }}
                  >
                    {stat.number}
                  </p>
                  <p className="text-gray-600 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Anhanguera logo */}
            <img
              src="/assets/wp-content/uploads/2025/09/universidade-anhanguera-logo-horizontal.png"
              alt="Universidade Anhanguera"
              className="h-12 object-contain mx-auto"
            />
          </div>
        </section>

        {/* ----------------------------------------------------------------
            8. Marquee Strip
        ---------------------------------------------------------------- */}
        <section
          className="overflow-hidden py-4"
          style={{ backgroundColor: "#E10098" }}
        >
          <div className="animate-marquee">
            {[...Array(8)].map((_, i) => (
              <span
                key={i}
                className="text-white font-bold uppercase tracking-widest text-sm mx-8"
              >
                VAGAS LIMITADAS •
              </span>
            ))}
          </div>
        </section>

        {/* ----------------------------------------------------------------
            9. FAQ Section
        ---------------------------------------------------------------- */}
        <section className="bg-white py-16">
          <div className="max-w-3xl mx-auto px-6 md:px-12">
            <h2
              className="text-3xl font-bold text-center mb-10 uppercase tracking-wide"
              style={{ color: "#FF0074" }}
            >
              PERGUNTAS FREQUENTES
            </h2>

            <div className="space-y-3">
              {faqs.map((faq, index) => (
                <FAQItem
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openFaq === index}
                  onToggle={() => toggleFaq(index)}
                />
              ))}
            </div>
          </div>
        </section>

        {/* ----------------------------------------------------------------
            10. Footer CTA Section
        ---------------------------------------------------------------- */}
        <section
          className="py-16 text-center px-6"
          style={{ backgroundColor: "#121212" }}
        >
          <p className="text-gray-400 text-sm uppercase tracking-widest mb-3">
            Condições Especiais para a
          </p>
          <h2 className="text-white text-3xl font-extrabold mb-8">
            TURMA DE FUNDADORES
          </h2>
          <a
            href="https://elentolentino.com.br/pre-checkout-pos-graduacao-em-estomatologia/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 bg-[#E10098] text-white font-bold uppercase rounded-lg text-sm tracking-widest hover:bg-[#C60086] hover:-translate-y-0.5 transition-all duration-300"
          >
            QUERO MAIS INFORMAÇÕES
          </a>
        </section>
      </main>

      {/* 11. Footer */}
      <HomeFooter />
    </div>
  );
}
