import HomeHeader from "@/components/HomeHeader";
import HomeFooter from "@/components/HomeFooter";

export default function PrivacidadePage() {
  return (
    <div className="min-h-screen font-sans bg-white text-gray-800">
      {/* Header */}
      <HomeHeader />

      <main className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Tag */}
          <p className="text-xs font-bold uppercase tracking-widest text-[#E10098] mb-3">
            JURÍDICO
          </p>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2">
            Política de Privacidade
          </h1>
          <p className="text-sm text-gray-500 mb-10">
            Última atualização: Janeiro de 2024
          </p>

          {/* Intro */}
          <p className="text-gray-700 leading-relaxed mb-4">
            A Diagnosis Cursos de Odontologia Ltda., pessoa jurídica de direito
            privado inscrita no CNPJ sob o nº{" "}
            <strong>52.674.464/0001-87</strong>, preza pela importância de
            proteger os seus dados pessoais. Esta Política de Privacidade descreve
            como coletamos, utilizamos, armazenamos e compartilhamos suas
            informações ao usar os nossos serviços e site.
          </p>
          <p className="text-gray-700 leading-relaxed mb-10">
            Esta política foi elaborada em conformidade com a{" "}
            <strong>Lei Geral de Proteção de Dados Pessoais (Lei nº 13.709/2018 — LGPD)</strong>.
          </p>

          {/* Section 1 */}
          <section className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              1. Informações que Coletamos
            </h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              Para a prestação de serviços educacionais na área de odontologia,
              podemos coletar os seguintes dados:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>
                <strong>Dados de Identificação:</strong> Nome completo, CPF, RG e número
                de registro no CRO (Conselho Regional de Odontologia).
              </li>
              <li>
                <strong>Dados de Contato:</strong> E-mail, número de telefone/WhatsApp e
                endereço residencial.
              </li>
              <li>
                <strong>Dados Financeiros:</strong> Informações para processamento de
                pagamentos de matrículas e cursos (processados de forma segura por
                gateways de pagamento).
              </li>
              <li>
                <strong>Dados de Navegação:</strong> Endereço IP, tipo de navegador e
                páginas acessadas em nosso site.
              </li>
            </ul>
          </section>

          {/* Section 2 */}
          <section className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              2. Como Usamos Suas Informações
            </h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              Os dados coletados têm as seguintes finalidades principais:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>
                Efetuar sua matrícula e gerenciar a certificação dos cursos
                realizados.
              </li>
              <li>Enviar comunicados sobre aulas, materiais e cronogramas.</li>
              <li>Emitir notas fiscais e processar pagamentos.</li>
              <li>Enviar comunicações legais e regulatórias.</li>
              <li>
                Melhorar a experiência do usuário em nossa plataforma.
              </li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              3. Compartilhamento de Informações
            </h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              A Diagnosis Cursos não vende suas informações pessoais. Seus dados
              podem ser compartilhados apenas com:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Parceiros educacionais (como a Faculdade Anhanguera) para emissão de certificados.</li>
              <li>Processadores de pagamento para a conclusão de transações financeiras.</li>
              <li>
                Órgãos governamentais, quando exigido por lei ou regulação.
              </li>
              <li>
                Ferramentas tecnológicas somente para a operação do sistema de aulas
                (quando aplicável).
              </li>
            </ul>
          </section>

          {/* Section 4 */}
          <section className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              4. Cookies e Tecnologias de Rastreamento
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Nosso site utiliza cookies para melhorar a experiência de navegação,
              analisar o tráfego e personalizar conteúdos. Você pode configurar seu
              navegador para recusar cookies, mas isso pode afetar algumas
              funcionalidades do site. Utilizamos ferramentas como o Google Analytics
              para compreender como nossos visitantes interagem com o conteúdo.
            </p>
          </section>

          {/* Section 5 */}
          <section className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              5. Segurança dos Dados
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Adotamos medidas técnicas e administrativas aptas a proteger seus dados
              pessoais de acessos não autorizados e de situações acidentais ou ilícitas
              de destruição, perda, alteração, comunicação ou difusão. Apesar disso,
              nenhum sistema de segurança é absolutamente infalível.
            </p>
          </section>

          {/* Section 6 */}
          <section className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              6. Seus Direitos (LGPD)
            </h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              Você tem o direito de solicitar à Diagnosis Cursos, a qualquer momento:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>A confirmação da existência de tratamento dos seus dados.</li>
              <li>O acesso aos seus dados.</li>
              <li>A correção de dados incompletos, inexatos ou desatualizados.</li>
              <li>A eliminação dos dados pessoais tratados com o seu consentimento, exceto nas hipóteses previstas em lei.</li>
            </ul>
          </section>

          {/* Section 7 */}
          <section className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              7. Retenção de Dados
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Mantemos seus dados pessoais pelo tempo necessário para cumprir as
              finalidades descritas nesta política, incluindo obrigações legais e
              fiscais. Dados de matrícula e certificação podem ser retidos por até 5
              anos após o encerramento do relacionamento contratual, conforme exigido
              pela legislação brasileira.
            </p>
          </section>

          {/* Section 8 */}
          <section className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              8. Alterações a Esta Política
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Podemos atualizar esta Política de Privacidade periodicamente. Quando
              fizermos alterações relevantes, notificaremos você por e-mail ou por
              aviso em destaque em nosso site. Recomendamos revisar esta página
              periodicamente para se manter informado sobre como protegemos suas
              informações.
            </p>
          </section>

          {/* Section 9 */}
          <section className="mb-12">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              9. Contato
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Para exercer seus direitos ou tirar dúvidas sobre esta Política de
              Privacidade, entre em contato conosco através dos canais oficiais:
            </p>
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <p className="font-bold text-gray-800 mb-1">
                Encarregado de Dados (DPO)
              </p>
              <p className="text-gray-600 text-sm">
                E-mail:{" "}
                <a
                  href="mailto:contato@elentolentino.com.br"
                  className="text-[#E10098] hover:underline"
                >
                  contato@elentolentino.com.br
                </a>
              </p>
              <p className="text-gray-600 text-sm mt-1">
                Diagnosis Cursos de Odontologia Ltda.
              </p>
              <p className="text-gray-600 text-sm">CNPJ: 52.674.464/0001-87</p>
            </div>
          </section>

          {/* Bottom legal note */}
          <p className="text-xs text-gray-400 border-t border-gray-100 pt-6">
            © 2024 Diagnosis Cursos de Odontologia Ltda. — Todos os direitos
            reservados.
          </p>
        </div>
      </main>

      {/* Footer */}
      <HomeFooter />
    </div>
  );
}
