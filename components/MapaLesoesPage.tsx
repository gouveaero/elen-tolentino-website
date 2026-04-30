"use client";

export default function MapaLesoesPage() {
  return (
    <div className="min-h-screen font-sans bg-gradient-leadmagnet text-white">
      {/* ----------------------------------------------------------------
          1. Hero Section — Logo + Headline + Form
      ---------------------------------------------------------------- */}
      <section className="relative overflow-hidden">
        {/* Elen photo — absolute right, desktop only */}
        <div className="absolute right-0 top-0 h-full w-1/2 hidden md:block">
          <img
            src="/assets/wp-content/uploads/2023/05/Elen-tst3.001-745x1024.png"
            alt="Dra. Elen Tolentino"
            className="h-full w-full object-cover object-top opacity-80"
            style={{ objectPosition: "top right" }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to right, #3d1a2e 0%, rgba(61,26,46,0.3) 60%, transparent 100%)",
            }}
          />
        </div>

        <div className="relative max-w-6xl mx-auto px-6 md:px-12 pt-12 pb-16">
          <div className="md:w-1/2">
            {/* Logo */}
            <img
              src="/assets/wp-content/uploads/2023/05/logotest2.001.png"
              alt="O Mapa das Lesões Bucais"
              className="h-20 object-contain mb-8"
            />

            {/* Headline */}
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold leading-tight mb-4">
              Torne-se um Expert em Lesões Bucais aprendendo os pilares de
              diagnóstico e tratamento.
            </h1>

            {/* Sub-headline */}
            <p className="text-base md:text-lg text-white/80 mb-6">
              Descubra uma{" "}
              <strong className="text-white">janela de mercado única na Odontologia</strong>{" "}
              para faturar mais{" "}
              <strong className="text-white">sem precisar ser especialista!</strong>
            </p>

            {/* Date badges */}
            <div className="flex flex-wrap items-center gap-3 mb-8">
              <span className="bg-white/20 rounded-full px-4 py-1 text-sm font-bold">
                De 20 a 25 de Junho
              </span>
              <span className="text-sm font-semibold tracking-wider text-white/80 uppercase">
                ONLINE | GRATUITO | AO VIVO
              </span>
            </div>

            {/* Registration form */}
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col gap-3 max-w-md"
            >
              <input
                type="text"
                placeholder="Nome"
                required
                className="w-full px-4 py-3 rounded-lg text-gray-800 bg-white placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#E10098]"
              />
              <input
                type="email"
                placeholder="E-mail"
                required
                className="w-full px-4 py-3 rounded-lg text-gray-800 bg-white placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#E10098]"
              />
              <button
                type="submit"
                className="w-full py-4 bg-[#E10098] text-white font-black uppercase text-sm tracking-widest rounded-lg hover:bg-[#C60086] hover:-translate-y-0.5 transition-all duration-300"
              >
                INSCREVER GRÁTIS AGORA
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------------
          2. "Como vai ser a Imersão?" Section
      ---------------------------------------------------------------- */}
      <section
        style={{ backgroundColor: "#f5eef8" }}
        className="py-16 text-center"
      >
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-800 mb-10">
            Como vai ser a Imersão?
          </h2>
          <div className="grid md:grid-cols-3 gap-6 text-left">
            {[
              {
                day: "Dia 1 — 20/06",
                title: "Fundamentos das Lesões Bucais",
                desc: "Introdução às principais lesões, categorias e como identificá-las no exame clínico.",
              },
              {
                day: "Dia 2 — 21/06",
                title: "Diagnóstico Diferencial",
                desc: "Aprenda a diferenciar lesões benignas e malignas com segurança e embasamento científico.",
              },
              {
                day: "Dia 3 — 22/06",
                title: "Conduta Clínica",
                desc: "Como decidir entre tratar, acompanhar ou encaminhar o paciente com lesão bucal.",
              },
            ].map((item) => (
              <div
                key={item.day}
                className="bg-white rounded-xl p-6 shadow-sm border border-pink-100"
              >
                <p className="text-xs font-bold uppercase tracking-widest text-[#E10098] mb-2">
                  {item.day}
                </p>
                <h3 className="font-bold text-gray-800 text-base mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------------
          3. Instructor Bio Section
      ---------------------------------------------------------------- */}
      <section
        style={{
          background:
            "linear-gradient(135deg, #6b2850 0%, #9b3570 50%, #c44d8a 100%)",
        }}
        className="py-16"
      >
        <div className="max-w-4xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-10">
          {/* Circular photo */}
          <div className="flex-shrink-0">
            <img
              src="/assets/wp-content/uploads/2023/05/Elen-tst3.001-745x1024.png"
              alt="Dra. Elen Tolentino"
              className="w-44 h-44 rounded-full object-cover object-top border-4 border-white/30"
            />
          </div>
          {/* Bio text */}
          <div>
            <p className="text-white/90 leading-relaxed text-sm md:text-base">
              Elen Tolentino é Especialista em Radiologia e Estomatologia, possui
              Mestrado, Doutorado e Pós-Doutorado em Estomatologia pela Universidade
              de São Paulo — FOB / USP. É professora na Universidade Estadual de
              Maringá — UEM / PR e criadora do maior Instagram de Estomatologia do
              mundo: @estomatolovers.
            </p>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------------
          4. Legal + Footer
      ---------------------------------------------------------------- */}
      <div
        style={{ backgroundColor: "#f0e4ea" }}
        className="py-8 text-center px-6"
      >
        <p className="text-gray-600 text-xs max-w-xl mx-auto mb-2">
          <strong>AVISO LEGAL:</strong> Este conteúdo é destinado exclusivamente a
          profissionais da área da saúde.
        </p>
        <p className="text-gray-500 text-xs">
          Estomatolovers - 2017 - Todos os direitos reservados
        </p>
      </div>
    </div>
  );
}
