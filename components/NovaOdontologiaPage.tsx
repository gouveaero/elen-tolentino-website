"use client";

export default function NovaOdontologiaPage() {
  return (
    <div
      className="min-h-screen font-sans text-white"
      style={{ backgroundColor: "#3d1a2e" }}
    >
      {/* ----------------------------------------------------------------
          1. Hero Section — Logo + Headline + Form (BG image)
      ---------------------------------------------------------------- */}
      <section
        style={{
          background: `url('/assets/wp-content/uploads/2024/08/000-fundonov.001.png') center top / cover no-repeat`,
          position: "relative",
        }}
      >
        {/* Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(61,26,46,0.80) 0%, rgba(61,26,46,0.60) 60%, rgba(61,26,46,0.95) 100%)",
          }}
        />

        <div className="relative max-w-6xl mx-auto px-6 md:px-12 pt-12 pb-20">
          <div className="md:w-1/2">
            {/* Logo / Title lockup */}
            <div className="mb-6">
              <p className="text-xs font-bold uppercase tracking-widest text-white/60 mb-1">
                A NOVA
              </p>
              <h2 className="text-3xl md:text-5xl font-black uppercase leading-none tracking-tight">
                ODONTOLOGIA
              </h2>
              <div className="flex items-center gap-3 mt-2 text-xs text-white/70 uppercase tracking-wider">
                <span>11 a 12 de Setembro</span>
                <span>•</span>
                <span>Ao Vivo</span>
              </div>
            </div>

            {/* Tags */}
            <p className="text-sm font-semibold uppercase tracking-widest text-white/70 mb-6">
              ONLINE | GRATUITO | AO VIVO
            </p>

            {/* Headline */}
            <h1 className="text-xl md:text-2xl lg:text-3xl font-extrabold leading-tight mb-4">
              Entenda o novo Perfil do Paciente Moderno, aprenda a tratar as{" "}
              <span className="text-[#E10098]">Novas Doenças Bucais</span> e
              torne-se um dentista referência.
            </h1>

            {/* Sub */}
            <p className="text-sm md:text-base text-white/80 mb-8">
              Descubra uma{" "}
              <strong className="text-white">janela de mercado única na Odontologia</strong>{" "}
              para faturar mais{" "}
              <strong className="text-white">sem precisar ser especialista!</strong>
            </p>

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
          2. "O que você vai aprender?" Section
      ---------------------------------------------------------------- */}
      <section
        style={{ backgroundColor: "#f5eef8" }}
        className="py-16 text-center"
      >
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-800 mb-10">
            O que você vai aprender?
          </h2>
          <div className="grid md:grid-cols-3 gap-6 text-left">
            {[
              {
                num: "01",
                title: "Paciente Moderno",
                desc: "Entenda as novas expectativas e comportamentos do paciente contemporâneo e como se adaptar.",
              },
              {
                num: "02",
                title: "Novas Doenças Bucais",
                desc: "Conheça as condições emergentes ligadas a estilo de vida, medicamentos e novas tecnologias.",
              },
              {
                num: "03",
                title: "Dentista Referência",
                desc: "Construa autoridade clínica e aprenda a se posicionar como especialista no mercado.",
              },
            ].map((item) => (
              <div
                key={item.num}
                className="bg-white rounded-xl p-6 shadow-sm border border-pink-100"
              >
                <p className="text-3xl font-black text-[#E10098]/20 mb-2">
                  {item.num}
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
              Maringá — UEM / PR e proprietária do Instituto Diagnosis, centro de
              referência em tratamento de lesões bucais no estado do Paraná e
              criadora do maior Instagram de Estomatologia do mundo: @estomatolovers.
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
