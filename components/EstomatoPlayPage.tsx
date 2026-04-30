"use client";

import { useState } from "react";
import HomeHeader from "@/components/HomeHeader";
import HomeFooter from "@/components/HomeFooter";

// ─────────────────────────────────────────────
// Constants
// ─────────────────────────────────────────────

const GRADIENT_BG =
  "linear-gradient(135deg, #dd2f77 0%, #a8005f 50%, #54303a 100%)";

const HOTMART_URL =
  "https://pay.hotmart.com/E72246753L?off=ypn8bnh2&checkoutMode=10";

// ─────────────────────────────────────────────
// Sub-components
// ─────────────────────────────────────────────

function YellowCTA({
  href,
  children,
  external,
}: {
  href: string;
  children: React.ReactNode;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="inline-block px-10 py-4 bg-yellow-400 text-gray-900 font-black uppercase rounded-lg text-base tracking-wider hover:bg-yellow-300 hover:-translate-y-0.5 transition-all duration-300"
    >
      {children}
    </a>
  );
}

function SectionGradient({
  children,
  id,
}: {
  children: React.ReactNode;
  id?: string;
}) {
  return (
    <section id={id} style={{ background: GRADIENT_BG, padding: "4rem 0" }}>
      <div className="max-w-4xl mx-auto px-6 md:px-12 text-white">
        {children}
      </div>
    </section>
  );
}

function SectionLight({
  children,
  id,
  gray,
}: {
  children: React.ReactNode;
  id?: string;
  gray?: boolean;
}) {
  return (
    <section
      id={id}
      className={`${gray ? "bg-gray-50" : "bg-white"} py-16`}
    >
      <div className="max-w-4xl mx-auto px-6 md:px-12">{children}</div>
    </section>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-2xl md:text-3xl font-extrabold uppercase tracking-wide text-center mb-8">
      {children}
    </h2>
  );
}

// ─────────────────────────────────────────────
// FAQ Accordion
// ─────────────────────────────────────────────

const FAQ_ITEMS = [
  {
    q: "O que eu vou receber?",
    a: "Acesso completo ao curso com mais de 40 horas de aula, Acesso ao grupo de alunos e aulas bônus com convidados.",
  },
  {
    q: "Quais são as formas de pagamento?",
    a: "Em breve",
  },
  {
    q: "Qual o Valor do Curso?",
    a: "Em breve",
  },
  {
    q: "Qual a carga horária do curso?",
    a: "Em breve",
  },
  {
    q: "Tem suporte para tirar dúvidas?",
    a: "Você pode tirar dúvidas direto com a professora no grupo dos alunos.",
  },
  {
    q: "Quanto tempo eu tenho para assistir o curso?",
    a: "Em breve",
  },
  {
    q: "O curso fornece certificado?",
    a: "Em breve",
  },
  {
    q: "Não tenho muito tempo para estudar, serve pra mim?",
    a: "Em breve",
  },
];

function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-2">
      {FAQ_ITEMS.map((item, i) => (
        <div key={i} className="border border-gray-200 rounded-lg overflow-hidden">
          <button
            type="button"
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="w-full text-left px-6 py-4 font-semibold text-gray-800 flex justify-between items-center hover:bg-gray-50 transition-colors"
          >
            <span>{item.q}</span>
            <span className="text-[#dd2f77] text-xl leading-none">
              {openIndex === i ? "−" : "+"}
            </span>
          </button>
          {openIndex === i && (
            <div className="px-6 py-4 text-gray-600 border-t border-gray-100 bg-white">
              {item.a}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

// ─────────────────────────────────────────────
// Main Component
// ─────────────────────────────────────────────

export default function EstomatoPlayPage() {
  return (
    <div className="min-h-screen font-sans bg-white text-gray-800">
      {/* ── 1. Header ─────────────────────────────────────── */}
      <HomeHeader />

      <main>
        {/* ── 2. Hero ───────────────────────────────────────── */}
        <section style={{ background: GRADIENT_BG, padding: "5rem 0" }}>
          <div className="max-w-4xl mx-auto px-6 md:px-12 text-white text-center">
            <img
              src="/assets/wp-content/uploads/2022/02/Logo-Estomatoplay-3.001-300x156.png"
              alt="EstomatoPlay"
              className="mx-auto mb-8 h-32 object-contain"
            />
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold uppercase leading-tight mb-6">
              TODAS AS LESÕES BUCAIS EM UM SÓ LUGAR!
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-10 leading-relaxed">
              Chegou a hora de se tornar um dentista referência em lesões
              bucais! Aprenda o passo a passo para se tornar um expert em
              Estomatologia sem precisar ser especialista!
            </p>
            <YellowCTA href="#price">Quero me tornar aluno!</YellowCTA>
          </div>
        </section>

        {/* ── 3. About ──────────────────────────────────────── */}
        <SectionGradient>
          <SectionTitle>TORNE-SE UM DENTISTA REFERÊNCIA!</SectionTitle>
          <p className="text-white/90 leading-relaxed text-center max-w-3xl mx-auto">
            Após anos de estudo, pesquisa científica e muita experiência
            clínica resolvi compilar tudo em um único curso online que se
            chama &ldquo;Estomatoplay&rdquo;. A ideia do Estomatoplay é
            funcionar como um NETFLIX das lesões bucais, você terá acesso a
            aulas com todo e qualquer tipo de lesão e aprenderá tudo o que
            envolve diagnóstico, prescrição medicamentosa e tratamento. Eu
            posso afirmar que este é o nosso melhor, maior e mais completo
            curso sobre esta especialidade na internet.
          </p>
        </SectionGradient>

        {/* ── 4. For Whom ───────────────────────────────────── */}
        <SectionLight gray>
          <SectionTitle>
            <span className="text-gray-800">PARA QUEM É O CURSO?</span>
          </SectionTitle>
          <p className="text-gray-700 leading-relaxed text-center max-w-3xl mx-auto">
            Nosso curso foi criado pensando em você que tem ZERO conhecimento
            na área e deseja aprender de forma simples e prática tudo sobre o
            universo das lesões bucais. E também para você que já atua na
            área, porém deseja se atualizar e aprender ainda mais para dar um
            salto na sua carreira.
          </p>
        </SectionLight>

        {/* ── 5. What You'll Learn ─────────────────────────── */}
        <SectionGradient>
          <SectionTitle>O QUE VOCÊ VAI APRENDER?</SectionTitle>
          <p className="text-white/70 text-center italic">
            Conteúdo em breve — original utiliza carrossel de vídeos.
          </p>
        </SectionGradient>

        {/* ── 6. Testimonials ──────────────────────────────── */}
        <SectionLight>
          <SectionTitle>
            <span className="text-gray-800">
              O QUE OS ALUNOS ACHARAM DO CURSO?
            </span>
          </SectionTitle>
          <p className="text-gray-400 text-center italic">
            Depoimentos em vídeo disponíveis no curso.
          </p>
        </SectionLight>

        {/* ── 7. Bonuses ───────────────────────────────────── */}
        <SectionGradient>
          <SectionTitle>INSCREVA-SE E LEVE 3 SUPER BÔNUS</SectionTitle>
          <p className="text-center text-white font-bold text-xl mb-6">
            8 AULAS BÔNUS COM PROFESSORES CONVIDADOS
          </p>
          <p className="text-white/70 text-center italic">
            Conteúdo dos bônus em breve.
          </p>
        </SectionGradient>

        {/* ── 8. Certificate ───────────────────────────────── */}
        <SectionLight>
          <SectionTitle>
            <span className="text-gray-800">
              CERTIFICADO DE ATUALIZAÇÃO INCLUSO
            </span>
          </SectionTitle>
          <div className="flex flex-col items-center gap-6">
            <img
              src="/assets/wp-content/uploads/2022/02/Thumb-certificado.001-1024x791.png"
              alt="Certificado de Atualização em Estomatologia"
              className="max-w-md w-full rounded-lg shadow-lg"
            />
            <p className="text-gray-700 text-center max-w-xl leading-relaxed">
              Ao concluir seu curso você ainda recebe um certificado de
              atualização em Estomatologia do Curso Estomatoplay.
            </p>
          </div>
        </SectionLight>

        {/* ── 9. Guarantee ─────────────────────────────────── */}
        <SectionGradient>
          <SectionTitle>ASSISTA GRATUITAMENTE POR 7 DIAS!</SectionTitle>
          <p className="text-white/90 text-center max-w-2xl mx-auto leading-relaxed">
            Ainda não tem certeza? Não se preocupe. Se o conteúdo descrito
            acima não for o mesmo que você receber, você tem 07 dias de
            garantia e vamos devolver a quantia paga, sem burocracia!
            Lembrando que seu acesso a plataforma dura 1 ano e sempre estamos
            incluindo novas aulas.
          </p>
        </SectionGradient>

        {/* ── 10. Price ────────────────────────────────────── */}
        <SectionGradient id="price">
          <SectionTitle>APROVEITE ESSA OPORTUNIDADE!</SectionTitle>
          <p className="text-center font-bold text-xl mb-8">
            CURSO ESTOMATOPLAY + 5 BÔNUS ESPECIAIS
          </p>

          <div className="bg-white/10 border border-white/30 rounded-2xl p-8 max-w-lg mx-auto text-center">
            <p className="text-white/60 line-through text-lg mb-1">
              de R$2.497,00 por:
            </p>
            <p className="text-5xl font-black text-yellow-300 mb-1">
              12 x de 119,46*
            </p>
            <p className="text-white/80 mb-6">ou R$1.197,00 à vista</p>

            <ul className="text-left space-y-2 mb-8 text-white/90">
              {[
                "Acesso Imediato ao Curso",
                "Compre Parcelado em até 12x",
                "Acesso Completo ao Curso",
              ].map((feat) => (
                <li key={feat} className="flex items-center gap-2">
                  <span className="text-yellow-300 font-bold">✓</span>
                  {feat}
                </li>
              ))}
            </ul>

            <YellowCTA href={HOTMART_URL} external>
              Garantir minha inscrição!
            </YellowCTA>

            <div className="mt-6">
              <img
                src="/assets/wp-content/uploads/2022/02/PAGUE-COM-SEGURANCA.png"
                alt="Pague com segurança"
                className="mx-auto h-12 object-contain opacity-80"
              />
            </div>
          </div>
        </SectionGradient>

        {/* ── 11. FAQ ──────────────────────────────────────── */}
        <SectionLight>
          <SectionTitle>
            <span className="text-gray-800">PERGUNTAS FREQUENTES:</span>
          </SectionTitle>
          <FAQAccordion />
        </SectionLight>

        {/* ── 12. Legal footer text ────────────────────────── */}
        <div
          style={{ background: GRADIENT_BG }}
          className="py-8 text-center text-white/80 text-sm px-4"
        >
          <p className="mb-1">
            Este produto é destinado a profissionais da área da saúde
          </p>
          <p>© Estomatolovers — 2017 Todos os Direitos Reservados</p>
        </div>
      </main>

      {/* ── Footer ────────────────────────────────────────── */}
      <HomeFooter />
    </div>
  );
}
