export default function HomeAbout() {
  return (
    <section id="sobre" className="py-20 md:py-28 bg-[#1E1E1E]">
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 md:px-12 text-center">
        <h2 className="text-3xl md:text-4xl xl:text-5xl font-extrabold mb-4 leading-tight">
          Uma Trajetória Dedicada à{" "}
          <span className="text-[#E10098]">Excelência</span>
        </h2>
        <p className="text-base md:text-lg xl:text-xl text-gray-400 max-w-2xl mx-auto mb-12">
          Minha missão é compartilhar o conhecimento que adquiri em anos de
          estudo e prática clínica, formando profissionais mais seguros e
          capacitados.
        </p>
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 text-left">
          {/* Card 1 */}
          <div className="bg-[rgba(30,30,30,0.6)] backdrop-blur-[10px] border border-white/10 rounded-2xl p-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-8 h-8 text-[#E10098] mb-4"
            >
              <path d="M11.7 2.805a.75.75 0 01.6 0A60.65 60.65 0 0122.83 8.72a.75.75 0 01-.231 1.337 49.949 49.949 0 00-9.902 3.912l-.003.002-.34.18a.75.75 0 01-.707 0A50.009 50.009 0 007.5 12.174v-.224c0-.131.067-.248.172-.311a54.614 54.614 0 014.653-2.52.75.75 0 00-.65-1.352 56.129 56.129 0 00-4.78 2.589 1.858 1.858 0 00-.859 1.228 49.803 49.803 0 00-4.634-1.527.75.75 0 01-.231-1.337A60.653 60.653 0 0111.7 2.805z" />
              <path d="M13.06 15.473a48.45 48.45 0 017.666-3.282c.134 1.414.22 2.843.255 4.285a.75.75 0 01-.46.71 47.878 47.878 0 00-8.105 4.342.75.75 0 01-.832 0 47.877 47.877 0 00-8.104-4.342.75.75 0 01-.461-.71c.035-1.442.121-2.87.255-4.286A48.4 48.4 0 016 13.18v1.27a1.5 1.5 0 00-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.661a6.729 6.729 0 00.551-1.608 1.5 1.5 0 00.14-2.67v-.645a48.549 48.549 0 013.44 1.668 2.25 2.25 0 002.12 0z" />
            </svg>
            <h3 className="text-xl font-bold mb-2 text-white">
              Formação Sólida
            </h3>
            <p className="text-gray-400">
              Graduada pela UEM, com Mestrado, Doutorado e Pós-Doutorado pela
              renomada FOB-USP. Uma base acadêmica robusta para um ensino de
              qualidade.
            </p>
          </div>
          {/* Card 2 */}
          <div className="bg-[rgba(30,30,30,0.6)] backdrop-blur-[10px] border border-white/10 rounded-2xl p-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-8 h-8 text-[#E10098] mb-4"
            >
              <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                clipRule="evenodd"
              />
            </svg>
            <h3 className="text-xl font-bold mb-2 text-white">
              Dupla Especialidade
            </h3>
            <p className="text-gray-400">
              Especialista em Estomatologia e em Radiologia Odontológica e
              Imaginologia, oferecendo uma visão integrada e completa do
              diagnóstico.
            </p>
          </div>
          {/* Card 3 */}
          <div className="bg-[rgba(30,30,30,0.6)] backdrop-blur-[10px] border border-white/10 rounded-2xl p-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-8 h-8 text-[#E10098] mb-4"
            >
              <path d="M11.25 4.533A9.707 9.707 0 006 3a9.735 9.735 0 00-3.25.555.75.75 0 00-.5.707v14.25a.75.75 0 001 .707A8.237 8.237 0 016 18.75c1.995 0 3.823.707 5.25 1.886V4.533zM12.75 20.636A8.214 8.214 0 0118 18.75c.966 0 1.89.166 2.75.47a.75.75 0 001-.708V4.262a.75.75 0 00-.5-.707A9.735 9.735 0 0018 3a9.707 9.707 0 00-5.25 1.533v16.103z" />
            </svg>
            <h3 className="text-xl font-bold mb-2 text-white">
              Paixão por Ensinar
            </h3>
            <p className="text-gray-400">
              Professora na Graduação e Pós-Graduação da UEM, com mais de 70
              artigos publicados. Dedicada a impulsionar a carreira de meus
              alunos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
