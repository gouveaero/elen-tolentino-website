import HomeHeader from "@/components/HomeHeader";
import HomeFooter from "@/components/HomeFooter";

export default function ImersaoPage() {
  return (
    <div className="min-h-screen font-sans bg-white text-gray-800">
      {/* ----------------------------------------------------------------
          1. Countdown Banner
      ---------------------------------------------------------------- */}
      <div className="bg-red-600 text-white text-center py-3 px-4">
        <p className="font-bold text-sm uppercase tracking-wider">
          1° LOTE ABRE EM:{" "}
          <span className="font-black text-xl mx-2">
            00d · 06h · 40min · 10seg
          </span>
        </p>
      </div>

      {/* ----------------------------------------------------------------
          2. Header
      ---------------------------------------------------------------- */}
      <HomeHeader />

      <main>
        {/* ----------------------------------------------------------------
            3. Hero Section
        ---------------------------------------------------------------- */}
        <section
          style={{
            background:
              "white url('/assets/wp-content/uploads/2025/09/elen-tolentino-imersao-bg02.png') right center / contain no-repeat",
            minHeight: "600px",
          }}
        >
          <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
            <div className="md:w-3/5">
              {/* Logo */}
              <img
                src="/assets/wp-content/uploads/2026/04/Design-sem-nome.webp"
                alt="Imersão Diagnóstico Total"
                className="h-24 object-contain mb-6"
              />
              {/* Main headline */}
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#0C0831] leading-tight mb-6 uppercase">
                DOMINE A IDENTIFICAÇÃO DE CONDIÇÕES SILENCIOSAS DA BOCA COM
                CONFIANÇA ABSOLUTA, SABENDO EXATAMENTE COMO DIAGNOSTICAR,
                QUANDO TRATAR OU ENCAMINHAR, REALIZAR BIÓPSIAS E UTILIZAR A
                LASERTERAPIA COM SEGURANÇA.
              </h1>
              {/* Sub info */}
              <div className="space-y-1 text-gray-700 mb-6 text-sm">
                <p>📅 23 e 24/05 – das 09:00h às 17h</p>
                <p>📜 Certificado de participação.</p>
                <p>
                  ✅ Temas e casos clínicos inéditos, além de um desafio prático
                  exclusivo!
                </p>
                <p>📍 Online pelo Zoom</p>
              </div>
              {/* Price highlight */}
              <div className="mb-4">
                <p className="text-gray-500 text-sm line-through">De R$297</p>
                <p className="text-4xl font-black text-[#E10098]">R$27</p>
                <p className="text-xs text-gray-500 uppercase tracking-wider">
                  Ingressos do 1º Lote
                </p>
              </div>
              {/* Progress bar */}
              <div className="bg-gray-200 rounded-full h-3 mb-2 w-full max-w-xs">
                <div
                  className="bg-[#E10098] h-3 rounded-full"
                  style={{ width: "49%" }}
                />
              </div>
              <p className="text-xs text-gray-500 mb-6">
                49% DAS VAGAS DO PRIMEIRO LOTE PREENCHIDAS
              </p>
              {/* CTA */}
              <a
                href="#inscrever"
                className="inline-block px-8 py-4 bg-[#E10098] text-white font-bold uppercase rounded-lg text-sm tracking-widest hover:bg-[#C60086] hover:-translate-y-0.5 transition-all duration-300"
              >
                Clique e Garanta sua vaga no 1º Lote
              </a>
            </div>
          </div>
        </section>

        {/* ----------------------------------------------------------------
            4. Schedule Section (gradient dark→pink)
        ---------------------------------------------------------------- */}
        <section
          style={{
            background:
              "linear-gradient(rgb(12, 8, 49) 0%, rgb(221, 47, 119) 100%)",
            padding: "4rem 0",
          }}
        >
          <div className="max-w-7xl mx-auto px-6 md:px-12 text-white">
            <h2 className="text-3xl font-extrabold uppercase tracking-wider text-center mb-12">
              PROGRAMAÇÃO
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Aula 1 */}
              <div className="border border-white/30 rounded-xl p-8">
                <h3 className="text-xl font-bold mb-2">Aula 1</h3>
                <p className="text-white/80 mb-4">
                  📅 23/05 (Sábado), das 9:00 às 17:00h
                </p>
                <p>
                  Aprenda na prática o Método TotalCARE para diagnosticar lesões
                  bucais suspeitas, definir com segurança a conduta ideal
                  (acompanhar, biopsiar ou encaminhar) e como montar o seu
                  modelo de requisição do exame anatomopatológico.
                </p>
              </div>
              {/* Aula 2 */}
              <div className="border border-white/30 rounded-xl p-8">
                <h3 className="text-xl font-bold mb-2">Aula 2</h3>
                <p className="text-white/80 mb-4">
                  📅 24/05 (Domingo), das 9:00 à 12:00h
                </p>
                <p>
                  Destrave na Laserterapia com protocolos simples para casos
                  complexos — e conclua o seu modelo definitivo de requisição do
                  exame anatomopatológico.
                </p>
              </div>
            </div>
            <div className="text-center mt-10">
              <a
                href="#inscrever"
                className="inline-block px-8 py-4 bg-white text-[#E10098] font-bold uppercase rounded-lg text-sm tracking-widest hover:bg-gray-100 transition-all duration-300"
              >
                CLIQUE AQUI PARA PARTICIPAR
              </a>
            </div>
          </div>
        </section>

        {/* ----------------------------------------------------------------
            5. What Is It Section (light gray)
        ---------------------------------------------------------------- */}
        <section className="bg-[#F3F3F3] py-16">
          <div className="max-w-5xl mx-auto px-6 md:px-12">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#0C0831] mb-6">
              O que é a Imersão Diagnóstico Total: Da Afta ao Câncer Bucal?
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              É um treinamento clínico e prático, com foco total no diagnóstico,
              biópsia e laserterapia em tratamento de lesões bucais. Direto ao
              ponto: em 2 encontros online e ao vivo, você vai aprender a
              diagnosticar lesões bucais, realizar biópsias e aplicar a
              laserterapia com segurança.
            </p>
          </div>
        </section>

        {/* ----------------------------------------------------------------
            6. Why Choose (gradient dark→pink)
        ---------------------------------------------------------------- */}
        <section
          style={{
            background:
              "linear-gradient(rgb(12, 8, 49) 0%, rgb(221, 47, 119) 100%)",
            padding: "4rem 0",
          }}
        >
          <div className="max-w-5xl mx-auto px-6 md:px-12 text-white">
            <h2 className="text-2xl md:text-3xl font-extrabold mb-6">
              A odontologia evoluiu. O paciente também. Ficar sem um método
              diagnóstico estruturado já não é mais uma opção.
            </h2>
            <p className="text-white/90 text-lg leading-relaxed">
              Não espere o mercado te ultrapassar. Prepare-se agora para se
              tornar referência em Estomatologia — uma área de alta demanda e
              extremamente carente de dentistas qualificados.
            </p>
            <p className="mt-4 text-white/90 text-lg">
              A verdade é que você não precisa ser especialista para atender um
              paciente com uma lesão bucal suspeita. Mas você precisa saber o
              que fazer.
            </p>
          </div>
        </section>

        {/* ----------------------------------------------------------------
            7. Pain Points (light gray, 2 columns)
        ---------------------------------------------------------------- */}
        <section className="bg-[#F3F3F3] py-16">
          <div className="max-w-5xl mx-auto px-6 md:px-12">
            <h2 className="text-2xl font-extrabold text-[#0C0831] mb-8">
              Se hoje você sente que...
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3 bg-white p-4 rounded-lg">
                <span className="text-[#E10098] text-xl">•</span>
                <p>
                  Falta confiança para diferenciar lesões benignas e malignas;
                </p>
              </div>
              <div className="flex items-start gap-3 bg-white p-4 rounded-lg">
                <span className="text-[#E10098] text-xl">•</span>
                <p>
                  Já atendeu casos de lesões, mas ficou inseguro e na dúvida se
                  encaminhava;
                </p>
              </div>
              <div className="flex items-start gap-3 bg-white p-4 rounded-lg">
                <span className="text-[#E10098] text-xl">•</span>
                <p>
                  Gostaria de dominar um passo a passo claro e seguro, sem
                  complicar sua rotina clínica;
                </p>
              </div>
              <div className="flex items-start gap-3 bg-white p-4 rounded-lg">
                <span className="text-[#E10098] text-xl">•</span>
                <p>
                  Sente receio de deixar passar sinais precoces de câncer bucal;
                </p>
              </div>
              <div className="flex items-start gap-3 bg-white p-4 rounded-lg">
                <span className="text-[#E10098] text-xl">•</span>
                <p>
                  Percebe que o paciente espera segurança e clareza na sua
                  conduta;
                </p>
              </div>
              <div className="flex items-start gap-3 bg-white p-4 rounded-lg">
                <span className="text-[#E10098] text-xl">•</span>
                <p>
                  Poderia entregar mais confiança, preparo e cuidado para
                  encantar o seu paciente.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ----------------------------------------------------------------
            8. Then This Was Created For You (light gray)
        ---------------------------------------------------------------- */}
        <section className="bg-[#F3F3F3] py-12">
          <div className="max-w-5xl mx-auto px-6 md:px-12">
            <h2 className="text-2xl font-extrabold text-[#E10098] mb-4">
              Então esta imersão foi criada para você
            </h2>
            <p className="text-xl font-bold text-[#0C0831] mb-4">
              PORQUE NÃO BASTA SER BOM TECNICAMENTE.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Hoje, quem realmente se destaca é o dentista que consegue
              entregar segurança, clareza e ciência em cada diagnóstico — seja
              uma simples afta ou um caso suspeito de câncer bucal. E é
              exatamente isso que você vai aprender.
            </p>
          </div>
        </section>

        {/* ----------------------------------------------------------------
            9. For Whom (dark rose #700040)
        ---------------------------------------------------------------- */}
        <section
          style={{ background: "rgb(112, 0, 63)", padding: "4rem 0" }}
        >
          <div className="max-w-5xl mx-auto px-6 md:px-12 text-white">
            <h2 className="text-3xl font-extrabold uppercase tracking-wider mb-2">
              PRA QUEM É
            </h2>
            <h3 className="text-xl font-bold mb-8">A IMERSÃO:</h3>
            <div className="space-y-4 text-white/90 text-lg leading-relaxed">
              <p>
                • Dentistas que já atendem há anos, mas sentem que precisam
                modernizar seus diagnósticos clínicos para diferenciar lesões
                benignas das malignas e agregar mais segurança aos atendimentos.
              </p>
              <p>
                • Dentistas que desejam um método claro e objetivo para realizar
                biópsias e identificar condições orais com mais precisão.
              </p>
            </div>
            <div
              style={{
                background: "rgb(168, 0, 95)",
                marginTop: "2rem",
                padding: "1.5rem 2rem",
                borderRadius: "0.75rem",
              }}
            >
              <p className="text-white font-semibold text-lg">
                Se você quer sair do comum e oferecer a odontologia que o
                mercado valoriza hoje, esta é a sua oportunidade.
              </p>
            </div>
          </div>
        </section>

        {/* ----------------------------------------------------------------
            10. What You'll Learn (light gray)
        ---------------------------------------------------------------- */}
        <section className="bg-[#F3F3F3] py-16">
          <div className="max-w-5xl mx-auto px-6 md:px-12">
            <h2 className="text-2xl font-extrabold text-[#0C0831] mb-10">
              O que você vai aprender:
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 border-l-4 border-[#E10098]">
                <h3 className="font-bold text-lg text-[#0C0831] mb-2">
                  1. Identificação segura
                </h3>
                <p className="text-gray-600">
                  Como diferenciar, com clareza, lesões bucais benignas das
                  malignas, desde uma simples afta até um câncer bucal em
                  estágio inicial.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 border-l-4 border-[#E10098]">
                <h3 className="font-bold text-lg text-[#0C0831] mb-2">
                  2. Tratar ou Encaminhar?
                </h3>
                <p className="text-gray-600">
                  Evite decisões inseguras. Descubra como identificar com
                  clareza os casos que exigem ação imediata, e os que precisam
                  ser encaminhados.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 border-l-4 border-[#E10098]">
                <h3 className="font-bold text-lg text-[#0C0831] mb-2">
                  3. Biópsia sem Complicação
                </h3>
                <p className="text-gray-600">
                  Realize biópsias com segurança e precisão, aplicando o
                  protocolo ideal com os materiais que você já tem no
                  consultório.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 border-l-4 border-[#E10098]">
                <h3 className="font-bold text-lg text-[#0C0831] mb-2">
                  4. Protocolos de Laserterapia
                </h3>
                <p className="text-gray-600">
                  Destrave na Laserterapia com protocolos simples para casos
                  complexos na prática clínica.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ----------------------------------------------------------------
            11. What You'll Build (light gray)
        ---------------------------------------------------------------- */}
        <section className="bg-[#F3F3F3] py-12">
          <div className="max-w-5xl mx-auto px-6 md:px-12">
            <h2 className="text-2xl font-extrabold text-[#0C0831] mb-8">
              O que você vai construir:
            </h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-[#E10098] text-2xl font-bold">✓</span>
                <p className="text-gray-700 text-lg">
                  Confiança absoluta na sua tomada de decisão clínica — sabendo
                  exatamente quando tratar e quando encaminhar.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#E10098] text-2xl font-bold">✓</span>
                <p className="text-gray-700 text-lg">
                  Mais segurança, previsibilidade e respaldo científico em seus
                  atendimentos.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#E10098] text-2xl font-bold">✓</span>
                <p className="text-gray-700 text-lg">
                  Uma reputação fortalecida pela precisão diagnóstica, que
                  transmite credibilidade e atrai mais pacientes.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#E10098] text-2xl font-bold">✓</span>
                <p className="text-gray-700 text-lg">
                  Uma prática clínica diferenciada, que encanta o paciente e
                  valoriza o seu trabalho.
                </p>
              </div>
            </div>
            <div className="mt-10 text-center">
              <a
                href="#inscrever"
                className="inline-block px-8 py-4 bg-[#E10098] text-white font-bold uppercase rounded-lg text-sm tracking-widest hover:bg-[#C60086] transition-all duration-300"
              >
                QUERO ME INSCREVER
              </a>
            </div>
          </div>
        </section>

        {/* ----------------------------------------------------------------
            12. Comparison Table (light gray)
        ---------------------------------------------------------------- */}
        <section className="bg-[#F3F3F3] py-16">
          <div className="max-w-5xl mx-auto px-6 md:px-12">
            <h2 className="text-2xl font-extrabold text-[#0C0831] mb-8 text-center">
              Escolha o caminho que constrói uma Odontologia de excelência
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {/* SEM */}
              <div className="bg-gray-200 rounded-xl p-6">
                <h3 className="font-extrabold text-gray-700 text-lg mb-4">
                  SEM O DIAGNÓSTICO TOTAL:
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-red-500">✗</span> Maior risco de
                    atrasar um diagnóstico crítico, como câncer bucal.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500">✗</span> Decisões incertas,
                    baseadas apenas em tentativa e erro.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500">✗</span> Dentista visto como
                    comum, sem diferenciação no mercado.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500">✗</span> Pacientes inseguros,
                    frustrados e que não retornam.
                  </li>
                </ul>
              </div>
              {/* COM */}
              <div className="bg-[#E10098] rounded-xl p-6">
                <h3 className="font-extrabold text-white text-lg mb-4">
                  COM O DIAGNÓSTICO TOTAL:
                </h3>
                <ul className="space-y-3 text-white">
                  <li className="flex items-start gap-2">
                    <span>✓</span> Paciente encantado, dentista reconhecido e
                    valorizado.
                  </li>
                  <li className="flex items-start gap-2">
                    <span>✓</span> Segurança para realizar biópsias e
                    diferenciar lesões benignas e malignas com clareza.
                  </li>
                  <li className="flex items-start gap-2">
                    <span>✓</span> Protocolos práticos que orientam decisões com
                    confiança.
                  </li>
                  <li className="flex items-start gap-2">
                    <span>✓</span> Tranquilidade para saber quando tratar,
                    acompanhar ou encaminhar.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ----------------------------------------------------------------
            13. Testimonials Section (light gray)
        ---------------------------------------------------------------- */}
        <section className="bg-[#F3F3F3] py-16">
          <div className="max-w-5xl mx-auto px-6 md:px-12 text-center">
            <h2 className="text-2xl font-extrabold text-[#0C0831] mb-4">
              Centenas de dentistas já transformaram sua prática clínica com o
              Método TotalCare. Veja o que eles têm a dizer:
            </h2>
            <p className="text-gray-500 italic">[Depoimentos em breve]</p>
          </div>
        </section>

        {/* ----------------------------------------------------------------
            14. What Happens (light gray, with CTA)
        ---------------------------------------------------------------- */}
        <section className="bg-[#F3F3F3] py-16">
          <div className="max-w-5xl mx-auto px-6 md:px-12">
            <h2 className="text-2xl font-extrabold text-[#0C0831] mb-8">
              O que acontece quando você estrutura o seu Diagnóstico e Conduta
              do jeito certo:
            </h2>
            <div className="space-y-4 mb-8">
              <p className="text-gray-700 text-lg">
                • Pacientes percebem, imediatamente, que você não é um(a)
                dentista comum: aqui está a chave para encantar e gerar
                confiança desde a primeira consulta.
              </p>
              <p className="text-gray-700 text-lg">
                • Percepção de valor + segurança na conduta = resultados mais
                previsíveis (para a saúde do seu paciente e para o crescimento
                sustentável do seu consultório).
              </p>
            </div>
            <div className="text-center">
              <a
                href="#inscrever"
                className="inline-block px-8 py-4 bg-[#E10098] text-white font-bold uppercase rounded-lg text-sm tracking-widest hover:bg-[#C60086] transition-all duration-300"
              >
                QUERO PARTICIPAR
              </a>
            </div>
          </div>
        </section>

        {/* ----------------------------------------------------------------
            15. Enrollment / Price Box (id="inscrever")
        ---------------------------------------------------------------- */}
        <section
          id="inscrever"
          style={{ background: "rgb(112, 0, 63)", padding: "4rem 0" }}
        >
          <div className="max-w-3xl mx-auto px-6 md:px-12 text-white text-center">
            <h2 className="text-2xl font-extrabold uppercase tracking-wider mb-8">
              AO SE INSCREVER, VOCÊ AINDA GARANTE:
            </h2>
            <div className="text-left space-y-3 mb-10">
              <p className="flex items-start gap-2">
                <span className="text-yellow-300">✓</span> Acesso às 2 aulas ao
                vivo da Imersão;
              </p>
              <p className="flex items-start gap-2">
                <span className="text-yellow-300">✓</span> Certificado de
                participação (7 horas);
              </p>
              <p className="flex items-start gap-2">
                <span className="text-yellow-300">✓</span> Acesso imediato a
                conteúdos preparatórios;
              </p>
              <p className="flex items-start gap-2">
                <span className="text-yellow-300">✓</span> E-book exclusivo de
                apoio;
              </p>
              <p className="flex items-start gap-2">
                <span className="text-yellow-300">✓</span> Desafio prático:
                construa seu modelo de requisição de Biópsias;
              </p>
              <p className="flex items-start gap-2">
                <span className="text-yellow-300">✓</span> Comunidade oficial do
                evento para networking e tira-dúvidas.
              </p>
            </div>
            <div className="mb-2">
              <p className="text-white/60 text-lg line-through">De R$297</p>
              <p className="text-6xl font-black text-yellow-300">R$27</p>
            </div>
            <div className="bg-white/20 rounded-full h-4 mb-2 max-w-sm mx-auto">
              <div
                className="bg-yellow-300 h-4 rounded-full"
                style={{ width: "49%" }}
              />
            </div>
            <p className="text-white/70 text-sm mb-8">
              49% DAS VAGAS DO PRIMEIRO LOTE PREENCHIDAS
            </p>
            <a
              href="https://elentolentino.com.br/imersao-diagnostico-total/"
              target="_blank"
              rel="noopener"
              className="inline-block px-10 py-5 bg-yellow-400 text-[#700040] font-black uppercase rounded-lg text-lg tracking-wider hover:bg-yellow-300 hover:-translate-y-0.5 transition-all duration-300"
            >
              QUERO ME INSCREVER
            </a>
          </div>
        </section>

        {/* ----------------------------------------------------------------
            16. Instructor Bio (white background)
        ---------------------------------------------------------------- */}
        <section className="bg-white py-16">
          <div className="max-w-5xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-10">
            <div className="md:w-1/3">
              <img
                src="/assets/wp-content/uploads/2025/09/Elen-Tolentino-02-828x1024.png"
                alt="Dra. Elen Tolentino"
                className="w-64 rounded-2xl object-cover mx-auto"
              />
            </div>
            <div className="md:w-2/3">
              <h2 className="text-2xl font-extrabold text-[#0C0831] mb-4">
                Quem vai te guiar nesta jornada:
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Dra. Elen Tolentino é Dentista, especialista em Estomatologia e
                referência nacional e internacional no diagnóstico precoce de
                lesões bucais. Ao longo de sua carreira, já ajudou milhares de
                colegas a conduzirem diagnósticos mais seguros, assertivos e
                respaldados pela ciência. Com uma trajetória marcada pela
                prática clínica, docência e pesquisa, a Dra. Elen alia
                profundidade técnica à didática transformadora.
              </p>
            </div>
          </div>
        </section>

        {/* ----------------------------------------------------------------
            17. Support Section (white)
        ---------------------------------------------------------------- */}
        <section className="bg-white py-12 border-t border-gray-100">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="text-xl font-bold text-[#0C0831] mb-4">
              Tem dúvidas ou precisa de ajuda para concluir sua compra?
            </h2>
            <p className="text-gray-600 mb-6">
              Não se preocupe — nossa equipe de suporte está pronta para te
              ajudar. Clique no link abaixo para falar diretamente conosco e
              receber atendimento personalizado.
            </p>
            <a
              href="https://i.sendflow.pro/l/suporte-imersao-diagnostico-total"
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 text-white font-bold rounded-lg hover:bg-green-600 transition-colors"
            >
              FALAR COM O TIME DE SUPORTE
            </a>
          </div>
        </section>

        {/* ----------------------------------------------------------------
            18. Sponsor Thank You (white)
        ---------------------------------------------------------------- */}
        <section className="bg-white py-10 border-t border-gray-100">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <p className="text-gray-500 text-sm mb-4">
              Agradecimento especial ao apoiador do evento:
            </p>
            <p className="text-gray-600">
              Equipamentos especialmente pensados para ajudar a prática clínica
              do(a) Dentista que atua em Estomatologia!
            </p>
          </div>
        </section>

        {/* ----------------------------------------------------------------
            19. Legal Footer
        ---------------------------------------------------------------- */}
        <div className="bg-[#EBEBEB] py-4 text-center text-xs text-gray-500">
          DIAGNOSIS CURSOS DE ODONTOLOGIA LTDA – 52.674.464/0001-87 – Direitos
          Reservados
        </div>
      </main>

      {/* ----------------------------------------------------------------
          20. Footer
      ---------------------------------------------------------------- */}
      <HomeFooter />
    </div>
  );
}
