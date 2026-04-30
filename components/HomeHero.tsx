export default function HomeHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-center overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
      <img
        src="/assets/images/hero-bg.jpg"
        alt="Profissional da área da saúde em um ambiente moderno"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute top-0 left-0 w-full md:w-1/2 h-full bg-gradient-to-r from-black via-black/70 to-transparent z-10"></div>
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 sm:px-8 md:px-12 flex flex-col md:flex-row items-center text-center md:text-left">
        <div className="md:w-1/2">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl 2xl:text-7xl font-extrabold text-white leading-tight mb-4">
            Transformando a Odontologia com Conhecimento de{" "}
            <span className="text-[#E10098]">Vanguarda</span>.
          </h1>
          <p className="text-lg md:text-xl 2xl:text-2xl text-gray-300 mb-8 max-w-xl mx-auto md:mx-0">
            Capacitando cirurgiões-dentistas a diagnosticar com precisão e a
            tratar com excelência através da Estomatologia e Laserterapia.
          </p>
          <a
            href="#cursos"
            className="inline-block px-8 py-4 bg-[#E10098] text-white font-bold uppercase rounded-lg text-sm tracking-widest hover:bg-[#C60086] hover:-translate-y-0.5 transition-all duration-300"
          >
            Conheça os Cursos
          </a>
        </div>
        <div className="w-full md:w-1/2 mt-12 md:mt-0 flex justify-center">
          <div className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-[#E10098] shadow-2xl flex-shrink-0">
            <img
              src="/assets/wp-content/uploads/2022/02/Igc-89-1-scaled-e1644545094436.jpg"
              alt="Foto da Dra. Elen Tolentino"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
