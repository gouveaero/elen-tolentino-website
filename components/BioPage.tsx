import HomeFooter from "@/components/HomeFooter";

// ---------------------------------------------------------------------------
// Data (same curriculum as PosGraduacaoPage — first 9 modules)
// ---------------------------------------------------------------------------

const badges = [
  { label: "INÍCIO DAS AULAS", value: "Fevereiro" },
  { label: "DURAÇÃO", value: "12 Meses" },
  { label: "MODALIDADE", value: "EAD | 100% Online" },
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
      "Requisição Anatomopatológica x Laudo histopatológico",
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
];

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export default function BioPage() {
  return (
    <div className="min-h-screen font-sans bg-white text-gray-800">
      {/* ----------------------------------------------------------------
          1. Header — Logos only (no nav for link-in-bio)
      ---------------------------------------------------------------- */}
      <header className="bg-white border-b border-gray-100 py-4 px-6">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img
              src="/assets/wp-content/uploads/2025/09/universidade-anhanguera-logo-horizontal.png"
              alt="Universidade Anhanguera"
              className="h-8 object-contain"
            />
            <img
              src="/assets/wp-content/uploads/2025/09/logo-mec.webp"
              alt="MEC"
              className="h-8 object-contain"
            />
          </div>
          <p className="text-xs font-bold uppercase tracking-widest text-[#E10098]">
            EXCLUSIVO PARA DENTISTAS
          </p>
        </div>
      </header>

      <main>
        {/* ----------------------------------------------------------------
            2. Banner — "EXCLUSIVO PARA DENTISTAS"
        ---------------------------------------------------------------- */}
        <div
          className="py-3 text-center text-white text-xs font-bold uppercase tracking-widest"
          style={{ backgroundColor: "#E10098" }}
        >
          EXCLUSIVO PARA DENTISTAS
        </div>

        {/* ----------------------------------------------------------------
            3. Hero Section
        ---------------------------------------------------------------- */}
        <section
          style={{
            background: "white",
            backgroundImage:
              "url('/assets/wp-content/uploads/2025/09/Elen-Tolentino-02-828x1024.png')",
            backgroundPosition: "right center",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            minHeight: "500px",
          }}
        >
          <div className="max-w-5xl mx-auto px-6 md:px-12 py-16">
            <div className="md:w-1/2">
              {/* Logos again inside hero */}
              <div className="flex items-center gap-4 mb-6">
                <img
                  src="/assets/wp-content/uploads/2025/09/universidade-anhanguera-logo-horizontal.png"
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
                className="text-2xl md:text-4xl font-extrabold leading-tight mb-4 uppercase"
                style={{ color: "#FF0074" }}
              >
                PÓS-GRADUAÇÃO ONLINE EM ESTOMATOLOGIA
              </h1>

              <p className="text-gray-700 font-semibold mb-2">
                Reconhecida pelo MEC – Parceria com a Faculdade Anhanguera
              </p>

              <p className="text-gray-500 mb-6">
                Conhecimento para alcançar o nível mais elevado da sua carreira.
              </p>

              {/* 4 Badges */}
              <div className="flex flex-wrap gap-2 mb-8">
                {["100% Online", "Certificado em 12 meses", "Reconhecida pelo MEC", "Não precisa de TCC"].map(
                  (badge) => (
                    <span
                      key={badge}
                      className="text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full border"
                      style={{
                        borderColor: "#E10098",
                        color: "#E10098",
                        backgroundColor: "#fff0f8",
                      }}
                    >
                      {badge}
                    </span>
                  )
                )}
              </div>

              {/* CTA */}
              <a
                href="/pre-checkout-pos-graduacao-em-estomatologia/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-4 text-white font-bold uppercase rounded-lg text-sm tracking-widest hover:-translate-y-0.5 transition-all duration-300"
                style={{ backgroundColor: "#E10098" }}
              >
                QUERO MAIS INFORMAÇÕES
              </a>
            </div>
          </div>
        </section>

        {/* ----------------------------------------------------------------
            4. Info Badges Strip
        ---------------------------------------------------------------- */}
        <section style={{ backgroundColor: "#E10098" }}>
          <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4">
            {badges.map((badge) => (
              <div
                key={badge.label}
                className="flex flex-col items-center justify-center text-center py-6 px-4"
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
            5. Scholarship Banner
        ---------------------------------------------------------------- */}
        <section
          className="py-6 text-center"
          style={{ backgroundColor: "#121212" }}
        >
          <p className="text-white font-bold text-base md:text-xl">
            Concorra a uma bolsa de 50% de desconto.{" "}
            <span style={{ color: "#E10098" }}>Últimas vagas!</span>
          </p>
          <a
            href="/pre-checkout-pos-graduacao-em-estomatologia/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block px-8 py-3 text-white font-bold uppercase rounded-lg text-sm tracking-widest hover:-translate-y-0.5 transition-all duration-300"
            style={{ backgroundColor: "#E10098" }}
          >
            QUERO MAIS INFORMAÇÕES
          </a>
        </section>

        {/* ----------------------------------------------------------------
            6. Objective Section
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
            7. Curriculum Section
        ---------------------------------------------------------------- */}
        <section className="bg-gray-50 py-16">
          <div className="max-w-5xl mx-auto px-6 md:px-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900">
                O que você vai aprender?
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {modules.map((mod) => (
                <div
                  key={mod.title}
                  className="rounded-xl p-6"
                  style={{ backgroundColor: "#4a1530" }}
                >
                  <h3 className="font-bold text-base mb-1 text-white">
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
            8. CTA Section
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
            href="/pre-checkout-pos-graduacao-em-estomatologia/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 text-white font-bold uppercase rounded-lg text-sm tracking-widest hover:-translate-y-0.5 transition-all duration-300"
            style={{ backgroundColor: "#E10098" }}
          >
            QUERO MAIS INFORMAÇÕES
          </a>
        </section>
      </main>

      {/* ----------------------------------------------------------------
          9. Footer
      ---------------------------------------------------------------- */}
      <HomeFooter />
    </div>
  );
}
