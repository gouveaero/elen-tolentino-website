export default function HomeTestimonials() {
  return (
    <section id="depoimentos" className="py-20 md:py-28 bg-[#1E1E1E]">
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 md:px-12 text-center">
        <h2 className="text-3xl md:text-4xl xl:text-5xl font-extrabold mb-4 leading-tight">
          O que meus <span className="text-[#E10098]">Alunos Dizem</span>
        </h2>
        <p className="text-base md:text-lg xl:text-xl text-gray-400 max-w-2xl mx-auto mb-12">
          O sucesso dos meus alunos é a minha maior recompensa. Veja o que eles
          têm a dizer sobre a experiência de aprendizado.
        </p>
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <div className="bg-[rgba(30,30,30,0.6)] backdrop-blur-[10px] border border-white/10 rounded-2xl p-8 text-left">
            <div className="flex items-center mb-4">
              <img
                src="https://placehold.co/60x60/E10098/FFFFFF?text=J"
                alt="Dr. João Silva"
                className="w-16 h-16 rounded-full mr-4 border-2 border-[#E10098] flex-shrink-0"
              />
              <div>
                <h4 className="font-bold text-lg text-white">Dr. João Silva</h4>
                <p className="text-sm text-gray-400">Aluno EstomatoPlay</p>
              </div>
            </div>
            <p className="text-gray-300">
              &ldquo;O curso mudou minha forma de enxergar a estomatologia. A
              didática da Dra. Elen é fantástica e o conteúdo é extremamente
              aplicável. Recomendo de olhos fechados!&rdquo;
            </p>
          </div>
          {/* Testimonial 2 */}
          <div className="bg-[rgba(30,30,30,0.6)] backdrop-blur-[10px] border border-white/10 rounded-2xl p-8 text-left">
            <div className="flex items-center mb-4">
              <img
                src="https://placehold.co/60x60/E10098/FFFFFF?text=M"
                alt="Dra. Maria Oliveira"
                className="w-16 h-16 rounded-full mr-4 border-2 border-[#E10098] flex-shrink-0"
              />
              <div>
                <h4 className="font-bold text-lg text-white">
                  Dra. Maria Oliveira
                </h4>
                <p className="text-sm text-gray-400">Aluna Imersão</p>
              </div>
            </div>
            <p className="text-gray-300">
              &ldquo;A imersão foi um divisor de águas. Saí do curso aplicando
              os conhecimentos no dia seguinte com total segurança. A Dra. Elen
              é uma mestre no que faz.&rdquo;
            </p>
          </div>
          {/* Testimonial 3 */}
          <div className="bg-[rgba(30,30,30,0.6)] backdrop-blur-[10px] border border-white/10 rounded-2xl p-8 text-left">
            <div className="flex items-center mb-4">
              <img
                src="https://placehold.co/60x60/E10098/FFFFFF?text=C"
                alt="Dr. Carlos Pereira"
                className="w-16 h-16 rounded-full mr-4 border-2 border-[#E10098] flex-shrink-0"
              />
              <div>
                <h4 className="font-bold text-lg text-white">
                  Dr. Carlos Pereira
                </h4>
                <p className="text-sm text-gray-400">Aluno EstomatoPlay</p>
              </div>
            </div>
            <p className="text-gray-300">
              &ldquo;A melhor plataforma de estomatologia do Brasil. O suporte e
              a comunidade fazem toda a diferença. Sinto-me muito mais confiante
              nos meus diagnósticos.&rdquo;
            </p>
          </div>
        </div>
        <div className="mt-12">
          <a
            href="/depoimentoseplay/"
            className="inline-block px-8 py-4 bg-[#E10098] text-white font-bold uppercase rounded-lg text-sm tracking-widest hover:bg-[#C60086] hover:-translate-y-0.5 transition-all duration-300"
          >
            Ver mais depoimentos
          </a>
        </div>
      </div>
    </section>
  );
}
