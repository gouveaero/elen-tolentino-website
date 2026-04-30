import HomeFooter from "@/components/HomeFooter";

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------

const learnItems = [
  "Quando e como aplicar o laser terapêutico com segurança",
  "Tipos de lesões mais comuns e protocolos indicados",
  "Laser como aliado no controle da dor e da inflamação",
  "Aplicações clínicas em lesões autoimunes e psicossomáticas",
  "Uso do laser em biópsias e intervenções cirúrgicas",
  "Protocolos em doenças como mucosite, herpes, aftas, entre outras",
  "Como fazer da laserterapia um diferencial competitivo na sua clínica",
  "Casos clínicos reais e aplicabilidade imediata",
  "Equipamentos, modos de aplicação e parâmetros ideais",
  "O que poucos dentistas sabem — e você vai dominar",
];

const posBadges = [
  "Reconhecida pelo MEC",
  "Desenvolvida com base no método TotalCare",
  "Em parceria com a Faculdade Anhanguera",
];

// ---------------------------------------------------------------------------
// Main component (server component — no state needed)
// ---------------------------------------------------------------------------

export default function LaserterapiaPage() {
  return (
    <div className="min-h-screen font-sans bg-white text-gray-800">
      {/* ----------------------------------------------------------------
          1. Countdown Banner
      ---------------------------------------------------------------- */}
      <div className="bg-red-600 text-white text-center py-3 px-4">
        <p className="font-bold text-sm uppercase tracking-wider">
          Evento começa em:{" "}
          <span className="font-black text-xl mx-2">00H 00M 00S</span>
        </p>
      </div>

      {/* ----------------------------------------------------------------
          2. Yellow Strip — Exclusivity Badge
      ---------------------------------------------------------------- */}
      <div className="bg-yellow-400 text-gray-900 text-center py-2 px-4">
        <p className="font-bold text-sm uppercase tracking-widest">
          Exclusiva para Dentistas Formados
        </p>
      </div>

      <main>
        {/* ----------------------------------------------------------------
            3. Hero Section (dark bg)
        ---------------------------------------------------------------- */}
        <section style={{ backgroundColor: "#121212", padding: "4rem 0" }}>
          <div className="max-w-6xl mx-auto px-6 md:px-12">
            <div className="md:w-3/5">
              {/* Logo */}
              <img
                src="/assets/wp-content/uploads/2025/09/Fundo-Escuro-Logo-Imersao-em-Laserterapia-na-Odontologia-Clinica-LBPOSSET25-e1757453707323.png"
                alt="Imersão em Laserterapia na Odontologia Clínica"
                className="h-28 object-contain mb-8"
              />

              {/* H1 */}
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white leading-tight mb-4 uppercase">
                LESÕES, DOR, INFLAMAÇÃO E CIRURGIAS
              </h1>

              {/* Subheadline */}
              <p className="text-white/80 text-lg leading-relaxed mb-8">
                Domine o manejo do laser na sua clínica: dos protocolos
                terapêuticos aos lasers cirúrgicos – o que todo dentista deveria
                saber.
              </p>

              {/* Event info */}
              <div className="space-y-2 mb-8">
                <p className="text-white font-semibold text-base">
                  📅 Dia 23 de setembro, às 20h, ao vivo pelo ZOOM
                </p>
                <p className="text-white/60 text-sm italic">
                  A aula não ficará gravada.
                </p>
              </div>

              {/* CTA */}
              <a
                href="#"
                className="inline-block px-8 py-4 font-bold uppercase rounded-lg text-sm tracking-widest text-white hover:-translate-y-0.5 transition-all duration-300"
                style={{ backgroundColor: "#E10098" }}
              >
                Clique aqui e cadastre-se para participar
              </a>

              {/* Note */}
              <p className="text-white/50 text-xs mt-4">
                *Evento Exclusivo para Dentistas Formados
              </p>
            </div>
          </div>
        </section>

        {/* ----------------------------------------------------------------
            4. Pós-Graduação Cross-sell (gradient dark→pink)
        ---------------------------------------------------------------- */}
        <section
          style={{
            background:
              "linear-gradient(rgb(12, 8, 49) 0%, rgb(221, 47, 119) 100%)",
            padding: "4rem 0",
          }}
        >
          <div className="max-w-4xl mx-auto px-6 md:px-12 text-white text-center">
            {/* MEC + Anhanguera logos */}
            <div className="flex justify-center items-center gap-6 mb-8">
              <img
                src="/assets/wp-content/uploads/2025/09/logo-mec.webp"
                alt="MEC"
                className="h-16 object-contain"
              />
              <img
                src="/assets/wp-content/uploads/2025/09/universidade-anhanguera-logo-horizontal.png"
                alt="Anhanguera"
                className="h-10 object-contain brightness-0 invert"
              />
            </div>

            <p className="text-white/70 text-sm uppercase tracking-widest mb-4">
              APÓS A AULA: LANÇAMENTO OFICIAL DA NOSSA
            </p>

            <h2 className="text-2xl md:text-3xl font-extrabold uppercase leading-tight mb-4">
              PÓS-GRADUAÇÃO ONLINE EM ESTOMATOLOGIA
            </h2>

            <p className="text-xl font-bold mb-6">
              Você será um{" "}
              <span className="underline decoration-white/60">
                MEMBRO FUNDADOR
              </span>{" "}
              da nossa Pós!
            </p>

            {/* Badges */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {posBadges.map((badge) => (
                <span
                  key={badge}
                  className="flex items-center gap-2 text-sm font-semibold"
                >
                  <span className="text-green-400 text-base">✓</span>
                  {badge}
                </span>
              ))}
            </div>

            {/* Body text */}
            <p className="text-white/85 text-base leading-relaxed mb-8 max-w-2xl mx-auto">
              Tenha acesso ao que há de mais atual no uso do{" "}
              <strong>LASER</strong> no tratamento de lesões, dor, inflamação e
              procedimentos cirúrgicos. Será uma aula{" "}
              <strong>DIRETA AO PONTO</strong>, em que você vai sair dela{" "}
              <strong>ATUALIZADA</strong> e com mais <strong>SEGURANÇA</strong>{" "}
              para aplicar protocolos terapêuticos e cirúrgicos com laser na
              prática clínica.
            </p>

            {/* CTA */}
            <a
              href="#"
              className="inline-block px-8 py-4 bg-white font-bold uppercase rounded-lg text-sm tracking-widest hover:bg-gray-100 hover:-translate-y-0.5 transition-all duration-300"
              style={{ color: "#E10098" }}
            >
              Clique aqui e entre no grupo VIP!
            </a>
          </div>
        </section>

        {/* ----------------------------------------------------------------
            5. Yellow Strip — Exclusivity Badge (repeated before What You'll Learn)
        ---------------------------------------------------------------- */}
        <div className="bg-yellow-400 text-gray-900 text-center py-2 px-4">
          <p className="font-bold text-sm uppercase tracking-widest">
            Exclusiva para Dentistas Formados
          </p>
        </div>

        {/* ----------------------------------------------------------------
            6. What You'll Learn (dark bg)
        ---------------------------------------------------------------- */}
        <section style={{ backgroundColor: "#1a1a1a", padding: "4rem 0" }}>
          <div className="max-w-4xl mx-auto px-6 md:px-12">
            <h2 className="text-2xl md:text-3xl font-extrabold text-white uppercase tracking-wider mb-10 text-center">
              VOCÊ VAI APRENDER:
            </h2>

            <ul className="space-y-4">
              {learnItems.map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span
                    className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold mt-0.5"
                    style={{ backgroundColor: "#E10098" }}
                  >
                    {i + 1}
                  </span>
                  <p className="text-white/85 text-base leading-relaxed">
                    {item}
                  </p>
                </li>
              ))}
            </ul>

            <div className="text-center mt-12">
              <a
                href="#"
                className="inline-block px-8 py-4 font-bold uppercase rounded-lg text-sm tracking-widest text-white hover:-translate-y-0.5 transition-all duration-300"
                style={{ backgroundColor: "#E10098" }}
              >
                Clique aqui e cadastre-se para participar
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <HomeFooter />
    </div>
  );
}
