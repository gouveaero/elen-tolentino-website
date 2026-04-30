export default function HomeCourses() {
  return (
    <section id="cursos" className="py-20 md:py-28 bg-[#121212]">
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 md:px-12 text-center">
        <h2 className="text-3xl md:text-4xl xl:text-5xl font-extrabold mb-4 leading-tight">
          Capacitação de <span className="text-[#E10098]">Alto Nível</span>
        </h2>
        <p className="text-base md:text-lg xl:text-xl text-gray-400 max-w-2xl mx-auto mb-12">
          Cursos desenvolvidos com base em evidências científicas e ampla
          experiência clínica para transformar sua prática diária.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1: EstomatoPlay */}
          <div className="bg-[#1E1E1E] rounded-xl overflow-hidden shadow-lg group transition-all duration-300">
            <div className="relative h-56 flex items-center justify-center bg-black">
              <img
                src="/assets/wp-content/uploads/2022/02/Logo-Estomatoplay-3.001-768x400.png"
                alt="Logo EstomatoPlay"
                className="w-auto h-auto object-contain max-h-full max-w-full p-4"
              />
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-all duration-300"></div>
              <span className="absolute top-4 left-4 bg-[#E10098] text-white text-xs font-bold uppercase px-3 py-1 rounded-full">
                Online
              </span>
            </div>
            <div className="p-6 text-left">
              <h3 className="text-2xl font-bold mb-3 text-white">
                EstomatoPlay
              </h3>
              <p className="text-gray-400 mb-6">
                A plataforma completa para dominar o diagnóstico e tratamento
                das doenças bucais. Aulas, casos clínicos e comunidade
                interativa.
              </p>
              <a
                href="/cursoestomatoplay/"
                className="font-bold text-[#E10098] hover:text-white transition-colors"
              >
                Ver Curso <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
          {/* Card 2: Imersão */}
          <div className="bg-[#1E1E1E] rounded-xl overflow-hidden shadow-lg group transition-all duration-300">
            <div className="relative h-56 flex items-center justify-center bg-white">
              <img
                src="/assets/wp-content/uploads/2025/09/Fundo-Claro-1-Logo-Imersao-Diagnostico-Total_-da-Afta-ao-Cancer-Bucal-RSEPOUT25-2.png"
                alt="Logo Imersão Diagnóstico Total"
                className="w-auto h-auto object-contain max-h-full max-w-full p-4"
              />
              <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-all duration-300"></div>
              <span className="absolute top-4 left-4 bg-[#E10098] text-white text-xs font-bold uppercase px-3 py-1 rounded-full">
                Online
              </span>
            </div>
            <div className="p-6 text-left">
              <h3 className="text-2xl font-bold mb-3 text-white">
                Imersão Diagnóstico Total
              </h3>
              <p className="text-gray-400 mb-6">
                Aprenda a diagnosticar com segurança as principais lesões
                bucais, da afta ao câncer, e transforme sua prática clínica.
              </p>
              <a
                href="/imersao-diagnostico-total/"
                className="font-bold text-[#E10098] hover:text-white transition-colors"
              >
                Ver Curso <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
          {/* Card 3: Pós-Grad (coming soon) */}
          <div className="bg-[#1E1E1E] rounded-xl overflow-hidden shadow-lg transition-all duration-300">
            <div className="relative h-56 flex items-center justify-center bg-gray-900">
              <img
                src="/assets/wp-content/uploads/2025/10/Design-sem-nome-2.png"
                alt="Logo Pós-Graduação"
                className="w-auto h-auto object-contain max-h-full max-w-full p-4"
              />
              <div className="absolute inset-0 bg-black/50 transition-all duration-300"></div>
              <span className="absolute top-4 left-4 bg-gray-700 text-white text-xs font-bold uppercase px-3 py-1 rounded-full">
                Em Breve
              </span>
            </div>
            <div className="p-6 text-left">
              <h3 className="text-2xl font-bold mb-3 text-white">
                Pós-Graduação Online
              </h3>
              <p className="text-gray-400 mb-6">
                Eleve sua carreira a um novo patamar. Aprofunde seus
                conhecimentos em Estomatologia com nossa pós-graduação
                completa.
              </p>
              <span className="font-bold text-gray-500 cursor-not-allowed">
                Aguarde Novidades
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
