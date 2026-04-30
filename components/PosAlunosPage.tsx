import HomeHeader from "@/components/HomeHeader";
import HomeFooter from "@/components/HomeFooter";

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------

const infoBadges = [
  { label: "INÍCIO DAS AULAS", value: "Imediato" },
  { label: "DURAÇÃO", value: "12 Meses" },
  { label: "MODALIDADE", value: "100% Online" },
  { label: "CARGA HORÁRIA", value: "480H" },
];

const bonusTiers = [
  {
    position: "10 PRIMEIRAS MATRÍCULAS",
    icon: "🎁",
    reward: "Curso TC Experience",
    value: "Valor: R$1.897,00",
    highlight: true,
  },
  {
    position: "20 PRIMEIRAS MATRÍCULAS",
    icon: "🎁",
    reward: "1 Kit Doctive Completo (Pirulito azul de metileno e mais)",
    value: "Valor médio: R$150,00",
    highlight: false,
  },
  {
    position: "MATRÍCULAS NAS PRIMEIRAS 24H",
    icon: "🏆",
    reward: "Concorra a um Laser Hand",
    value: "Valor médio: R$5.500,00",
    highlight: true,
  },
  {
    position: "MATRÍCULAS NAS PRIMEIRAS 48H",
    icon: "📚",
    reward: "Concorra ao Livro Patologia Oral",
    value: "",
    highlight: false,
  },
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

const stats = [
  { number: "25 anos", label: "Tradição em ensino superior" },
  { number: "+ 150 Cursos", label: "Estrelados no guia do estudante" },
  { number: "+360 Cursos", label: "Conceito positivo no MEC" },
];

// ---------------------------------------------------------------------------
// Main component (server component — no state needed)
// ---------------------------------------------------------------------------

export default function PosAlunosPage() {
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
            background:
              "linear-gradient(135deg, #f8f0f6 0%, #ffe7f5 50%, #f0d8ee 100%)",
            minHeight: "520px",
          }}
        >
          <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 flex flex-col md:flex-row items-center gap-10">
            {/* Left column */}
            <div className="md:w-1/2">
              {/* Anhanguera logo */}
              <div className="mb-6">
                <img
                  src="/assets/wp-content/uploads/2025/09/universidade-anhanguera-logo-horizontal.png"
                  alt="Anhanguera"
                  className="h-10 object-contain"
                />
              </div>

              {/* H1 */}
              <h1
                className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-4"
                style={{ color: "#FF0074" }}
              >
                Pós-graduação Online em Estomatologia
              </h1>

              <p className="text-gray-700 font-semibold text-lg mb-2">
                Reconhecida pelo MEC – Parceria com a Faculdade Anhanguera
              </p>

              <p className="text-gray-500 mb-8">
                Conhecimento para alcançar o nível mais elevado na Odontologia.
              </p>

              {/* Logos row */}
              <div className="flex items-center gap-4 mb-8">
                <img
                  src="/assets/wp-content/uploads/2025/09/logo-mec.webp"
                  alt="MEC"
                  className="h-14 object-contain"
                />
              </div>

              {/* CTA */}
              <a
                href="/pos-graduacao-online-em-estomatologia/"
                className="inline-block px-8 py-4 text-white font-bold uppercase rounded-lg text-sm tracking-widest hover:-translate-y-0.5 transition-all duration-300"
                style={{ backgroundColor: "#E10098" }}
              >
                CLIQUE AQUI PARA SE MATRICULAR
              </a>
            </div>

            {/* Right column — Elen photo */}
            <div className="md:w-1/2 flex justify-center md:justify-end">
              <img
                src="/assets/wp-content/uploads/2025/09/Elen-Tolentino-2.png"
                alt="Dra. Elen Tolentino"
                className="w-80 object-contain"
              />
            </div>
          </div>
        </section>

        {/* ----------------------------------------------------------------
            3. Info Badges Strip
        ---------------------------------------------------------------- */}
        <section style={{ backgroundColor: "#E10098" }}>
          <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4">
            {infoBadges.map((badge) => (
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
            4. Objective Section
        ---------------------------------------------------------------- */}
        <section className="bg-white py-16">
          <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
            <h2
              className="text-2xl font-bold uppercase mb-8 tracking-wide"
              style={{ color: "#FF0074" }}
            >
              Objetivo da Pós-Graduação
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
            5. Exclusive Bonuses for Founders
        ---------------------------------------------------------------- */}
        <section className="py-16" style={{ backgroundColor: "#FFF5FB" }}>
          <div className="max-w-5xl mx-auto px-6 md:px-12">
            <div className="text-center mb-10">
              <p className="text-sm font-semibold uppercase tracking-widest mb-2" style={{ color: "#E10098" }}>
                EXCLUSIVO
              </p>
              <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-4">
                Bônus para a Turma de Fundadores
              </h2>
              <p className="text-gray-600 max-w-xl mx-auto">
                Garanta sua matrícula e receba benefícios exclusivos de acordo
                com a sua posição na fila!
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {bonusTiers.map((tier) => (
                <div
                  key={tier.position}
                  className="rounded-2xl p-6 border-2"
                  style={{
                    backgroundColor: "#FFE7F5",
                    borderColor: tier.highlight ? "#E10098" : "#F9BEE0",
                  }}
                >
                  <div className="flex items-start gap-3 mb-3">
                    <span className="text-3xl">{tier.icon}</span>
                    <div>
                      <p
                        className="text-xs font-extrabold uppercase tracking-widest mb-1"
                        style={{ color: "#E10098" }}
                      >
                        {tier.position}
                      </p>
                      <p className="font-bold text-gray-900 text-base">
                        {tier.reward}
                      </p>
                      {tier.value && (
                        <p className="text-sm text-gray-500 mt-1">
                          {tier.value}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-10">
              <a
                href="/pos-graduacao-online-em-estomatologia/"
                className="inline-block px-8 py-4 text-white font-bold uppercase rounded-lg text-sm tracking-widest hover:-translate-y-0.5 transition-all duration-300"
                style={{ backgroundColor: "#E10098" }}
              >
                CLIQUE AQUI PARA SE MATRICULAR
              </a>
            </div>
          </div>
        </section>

        {/* ----------------------------------------------------------------
            6. What You'll Master — Modules
        ---------------------------------------------------------------- */}
        <section className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                O que você vai dominar na{" "}
                <span style={{ color: "#E10098" }}>Pós-Graduação</span>
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
                  <p
                    className="text-sm mb-3 font-medium"
                    style={{ color: "#FFE7F5", opacity: 0.85 }}
                  >
                    {mod.professor}
                  </p>
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
            7. Pricing Section (dark bg)
        ---------------------------------------------------------------- */}
        <section
          className="py-16 text-center px-6"
          style={{ backgroundColor: "#121212" }}
        >
          <p className="text-gray-400 text-sm uppercase tracking-widest mb-3">
            Escolha a melhor condição de pagamento e matricule-se agora
          </p>
          <h2 className="text-white text-3xl font-extrabold mb-4">
            Condições Especiais para a Turma de Fundadores
          </h2>
          <p className="text-gray-400 max-w-md mx-auto mb-8">
            Consulte as condições especiais no momento do checkout.
          </p>

          <a
            href="/pos-graduacao-online-em-estomatologia/"
            className="inline-block px-10 py-4 text-white font-bold uppercase rounded-lg text-sm tracking-widest hover:-translate-y-0.5 transition-all duration-300"
            style={{ backgroundColor: "#E10098" }}
          >
            CLIQUE AQUI PARA SE MATRICULAR
          </a>

          {/* MEC badge next to CTA */}
          <div className="flex justify-center mt-6">
            <img
              src="/assets/wp-content/uploads/2025/09/logo-mec.webp"
              alt="MEC"
              className="h-16 object-contain"
            />
          </div>
        </section>

        {/* ----------------------------------------------------------------
            8. Certificate Section (black bg)
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
            9. Numbers Section
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

            <img
              src="/assets/wp-content/uploads/2025/09/universidade-anhanguera-logo-horizontal.png"
              alt="Universidade Anhanguera"
              className="h-12 object-contain mx-auto"
            />
          </div>
        </section>

        {/* ----------------------------------------------------------------
            10. Marquee Strip
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
      </main>

      {/* Footer */}
      <HomeFooter />
    </div>
  );
}
