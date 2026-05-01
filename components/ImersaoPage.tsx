"use client";

import { useState, useEffect } from "react";
import { Calendar, MapPin, Award, CheckCircle2, Trophy, Users, BookOpen } from "lucide-react";
import { XIcon } from "@/components/icons";

// ---------------------------------------------------------------------------
// Lotes — BRT (UTC-3)
// ---------------------------------------------------------------------------
const LOTES = [
  { id: 1, inicio: new Date("2026-05-01T00:00:00-03:00"), fim: new Date("2026-05-13T23:59:59-03:00"), nome: "primeiro", preco: "R$27", precoNumerico: 27 },
  { id: 2, inicio: new Date("2026-05-14T00:00:00-03:00"), fim: new Date("2026-05-20T23:59:59-03:00"), nome: "segundo", preco: "R$47", precoNumerico: 47 },
  { id: 3, inicio: new Date("2026-05-21T00:00:00-03:00"), fim: new Date("2026-05-23T08:00:00-03:00"), nome: "terceiro", preco: "R$67", precoNumerico: 67 },
] as const;

type Lote = (typeof LOTES)[number];

function getActiveLote(now: Date): Lote {
  if (now < LOTES[0].inicio) return LOTES[0];
  if (now >= LOTES[2].fim) return LOTES[2];
  for (const l of LOTES) if (now >= l.inicio && now < l.fim) return l;
  return LOTES[2];
}

function getProgresso(lote: Lote, now: Date): number {
  const ini = lote.inicio.getTime(), fim = lote.fim.getTime(), n = now.getTime();
  if (n <= ini) return 50;
  if (n >= fim) return 98;
  return Math.min(50 + ((n - ini) / (fim - ini)) * 48, 98);
}

function getCountdownTarget(now: Date): Date | null {
  if (now < LOTES[0].inicio) return LOTES[0].inicio;
  if (now >= LOTES[2].fim) return null;
  for (const l of LOTES) if (now >= l.inicio && now < l.fim) return l.fim;
  return null;
}

function getCountdownLabel(now: Date): string {
  if (now < LOTES[0].inicio) return "1° LOTE ABRE EM";
  if (now >= LOTES[2].fim) return "INSCRIÇÕES ENCERRADAS";
  for (const l of LOTES) if (now >= l.inicio && now < l.fim) return `${l.id}° LOTE ENCERRA EM`;
  return "INSCRIÇÕES ENCERRADAS";
}

function formatCountdown(target: Date, now: Date): string {
  const diff = Math.max(0, target.getTime() - now.getTime());
  const s = Math.floor(diff / 1000);
  const d = Math.floor(s / 86400);
  const h = Math.floor((s % 86400) / 3600);
  const m = Math.floor((s % 3600) / 60);
  const sec = s % 60;
  const p = (n: number) => String(n).padStart(2, "0");
  return `${p(d)}d · ${p(h)}h · ${p(m)}min · ${p(sec)}seg`;
}

const GHL_FORM_BASE = "https://link.elentolentino.com.br/widget/form/Utx6GMFEgD5LVtcOlVdj";

const BONUSES = [
  { icon: CheckCircle2, text: "Acesso às 2 aulas ao vivo da Imersão" },
  { icon: Award, text: "Certificado de participação" },
  { icon: BookOpen, text: "Acesso imediato a conteúdos preparatórios" },
  { icon: BookOpen, text: "E-book exclusivo de apoio" },
  { icon: CheckCircle2, text: "Desafio prático: construa seu modelo de requisição de Biópsias" },
  { icon: Users, text: "Comunidade oficial do evento para networking e tira-dúvidas" },
  { icon: Trophy, text: "Sorteio: Bolsa de estudo para a Pós-Graduação em Estomatologia + presentes especiais" },
  { icon: Users, text: "2ª Cadeira por R$1 — convide um colega para participar com você" },
];

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------
export default function ImersaoPage() {
  const [now, setNow] = useState<Date>(() => new Date());
  const [popupOpen, setPopupOpen] = useState(false);
  const [iframeSrc, setIframeSrc] = useState(GHL_FORM_BASE);

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);

    // Eagerly inject GHL embed script
    const scriptId = "ghl-form-embed-script";
    if (!document.getElementById(scriptId)) {
      const s = document.createElement("script");
      s.id = scriptId;
      s.src = "https://link.elentolentino.com.br/js/form_embed.js";
      s.async = true;
      document.body.appendChild(s);
    }

    // Forward UTMs + click IDs to GHL iframe
    const search = window.location.search;
    if (search) {
      const params = new URLSearchParams(search);
      const forwarded = new URLSearchParams();
      ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content",
        "fbclid", "gclid", "ttclid", "sck", "src"].forEach((k) => {
        const v = params.get(k);
        if (v) forwarded.set(k, v);
      });
      if (forwarded.toString()) setIframeSrc(`${GHL_FORM_BASE}?${forwarded}`);
    }

    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    document.body.style.overflow = popupOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [popupOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setPopupOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const open = () => setPopupOpen(true);
  const close = () => setPopupOpen(false);

  const lote = getActiveLote(now);
  const progresso = getProgresso(lote, now);
  const countdownTarget = getCountdownTarget(now);
  const countdownLabel = getCountdownLabel(now);

  return (
    <div className="min-h-screen font-sans bg-white text-gray-800">

      {/* ── 1. COUNTDOWN BANNER ─────────────────────────────────────────── */}
      <div className="bg-red-600 text-white text-center py-2.5 px-4">
        <p className="font-semibold text-xs sm:text-sm uppercase tracking-widest leading-none">
          {countdownTarget ? (
            <>
              {countdownLabel}:{" "}
              <span className="font-black tabular-nums">
                {formatCountdown(countdownTarget, now)}
              </span>
            </>
          ) : (
            <span className="font-black">{countdownLabel}</span>
          )}
        </p>
      </div>

      <main className="pb-[72px] md:pb-0">

        {/* ── 2. HERO ─────────────────────────────────────────────────────── */}
        {/*
            Mobile layout (375px):
            - Banner ~40px
            - Logo ~48px + gap
            - Headline ~60px (3 lines, text-sm/tight)
            - Price ~72px
            - CTA ~52px
            = ~300px total → CTA well above the fold
        */}
        <section className="bg-[#0C0831] text-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
            <div className="flex flex-col md:flex-row md:items-end">

              {/* Text column */}
              <div className="flex-1 pt-7 pb-5 md:py-16 md:pr-10 order-1">

                {/* Logo */}
                <img
                  src="/assets/wp-content/uploads/2026/04/Design-sem-nome.webp"
                  alt="Imersão Diagnóstico Total"
                  className="h-11 sm:h-16 md:h-20 object-contain mb-4 md:mb-6"
                />

                {/* Headline — tight on mobile to keep CTA above fold */}
                <h1 className="text-[13px] leading-snug sm:text-xl md:text-2xl lg:text-3xl font-extrabold uppercase tracking-tight mb-4 md:mb-5 max-w-xl">
                  DOMINE A IDENTIFICAÇÃO DE CONDIÇÕES SILENCIOSAS DA BOCA COM
                  CONFIANÇA ABSOLUTA — DIAGNOSTICAR, TRATAR, REALIZAR BIÓPSIAS
                  E APLICAR LASERTERAPIA COM SEGURANÇA.
                </h1>

                {/* Price — prominent, above fold */}
                <div className="mb-4 md:mb-5">
                  <p className="text-white/40 text-xs line-through leading-none">De R$297</p>
                  <p className="text-5xl sm:text-6xl font-black text-[#E10098] leading-none tracking-tight">
                    {lote.preco}
                  </p>
                  <p className="text-white/45 text-[11px] uppercase tracking-widest mt-1">
                    Ingressos do {lote.id}º Lote · {countdownTarget ? formatCountdown(countdownTarget, now) : "Encerrado"}
                  </p>
                </div>

                {/* CTA — must appear above fold on mobile */}
                <button
                  onClick={open}
                  className="w-full sm:w-auto min-h-[48px] px-8 py-3.5 bg-[#E10098] text-white font-black uppercase rounded-xl text-sm tracking-widest hover:bg-[#c60085] active:scale-[0.98] motion-safe:transition-colors motion-safe:duration-200 shadow-lg shadow-[#E10098]/25 cursor-pointer"
                >
                  Garantir minha vaga no {lote.id}º Lote →
                </button>

                {/* Event details — below fold on mobile, visible on desktop */}
                <div className="mt-6 space-y-2 text-white/70 text-sm">
                  <div className="flex items-center gap-2.5">
                    <Calendar className="w-4 h-4 text-[#E10098] flex-shrink-0" />
                    <span>23 e 24 de Maio · 09h às 17h</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Award className="w-4 h-4 text-[#E10098] flex-shrink-0" />
                    <span>Certificado de participação</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#E10098] flex-shrink-0" />
                    <span>Temas inéditos + desafio prático exclusivo</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <MapPin className="w-4 h-4 text-[#E10098] flex-shrink-0" />
                    <span>Online ao vivo pelo Zoom</span>
                  </div>
                </div>

                {/* Progress bar */}
                <div className="mt-5 max-w-xs">
                  <div className="bg-white/15 rounded-full h-1.5 mb-1.5">
                    <div
                      className="bg-[#E10098] h-1.5 rounded-full motion-safe:transition-all motion-safe:duration-1000"
                      style={{ width: `${progresso}%` }}
                    />
                  </div>
                  <p className="text-white/35 text-[11px]">
                    {Math.floor(progresso)}% das vagas do {lote.nome} lote preenchidas
                  </p>
                </div>
              </div>

              {/* Elen photo — stacked after text on mobile, right column on desktop */}
              <div className="order-2 flex justify-center md:justify-end items-end md:w-[38%] mt-2 md:mt-0">
                <img
                  src="/assets/wp-content/uploads/2025/09/Elen-Tolentino-02-828x1024.png"
                  alt="Dra. Elen Tolentino"
                  className="object-contain object-bottom w-44 sm:w-64 md:w-full"
                  style={{ maxHeight: "clamp(200px, 45vw, 540px)" }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── 3. SCHEDULE ─────────────────────────────────────────────────── */}
        <section
          style={{ background: "linear-gradient(160deg,#0c0831 0%,#dd2f77 100%)" }}
          className="py-12 md:py-16"
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-12 text-white">
            <p className="text-[#E10098] text-xs font-bold uppercase tracking-widest text-center mb-2">
              PROGRAMAÇÃO
            </p>
            <h2 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-wider text-center mb-8 md:mb-10">
              2 ENCONTROS AO VIVO
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  aula: "Aula 1",
                  data: "23/05 (Sábado) · 9:00 às 17:00h",
                  desc: "Aprenda o Método TotalCARE para diagnosticar lesões bucais suspeitas, definir a conduta ideal e montar seu modelo de requisição do exame anatomopatológico.",
                },
                {
                  aula: "Aula 2",
                  data: "24/05 (Domingo) · 9:00 às 12:00h",
                  desc: "Destrave na Laserterapia com protocolos simples para casos complexos e conclua seu modelo definitivo de requisição do exame anatomopatológico.",
                },
              ].map(({ aula, data, desc }) => (
                <div key={aula} className="bg-white/8 border border-white/15 rounded-2xl p-5 sm:p-6">
                  <span className="text-[#E10098] text-xs font-bold uppercase tracking-widest">{aula}</span>
                  <div className="flex items-center gap-2 mt-2 mb-3 text-white/65 text-sm">
                    <Calendar className="w-4 h-4 flex-shrink-0" />
                    <span>{data}</span>
                  </div>
                  <p className="text-white/85 text-base leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <button
                onClick={open}
                className="w-full sm:w-auto min-h-[48px] px-8 py-3.5 bg-white text-[#E10098] font-bold uppercase rounded-xl text-sm tracking-widest hover:bg-gray-50 active:scale-[0.98] motion-safe:transition-colors motion-safe:duration-200 cursor-pointer"
              >
                CLIQUE AQUI PARA PARTICIPAR
              </button>
            </div>
          </div>
        </section>

        {/* ── 4. WHAT IS IT ───────────────────────────────────────────────── */}
        <section className="bg-white py-12 md:py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 md:px-12">
            <p className="text-[#E10098] text-xs font-bold uppercase tracking-widest mb-3">O QUE É</p>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0C0831] mb-4 leading-tight">
              Imersão Diagnóstico Total: Da Afta ao Câncer Bucal
            </h2>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              Um treinamento clínico e prático, com foco total no diagnóstico, biópsia e laserterapia em tratamento de lesões bucais. Em 2 encontros online e ao vivo, você vai aprender a diagnosticar lesões bucais, realizar biópsias e aplicar a laserterapia com segurança.
            </p>
          </div>
        </section>

        {/* ── 5. WHY ──────────────────────────────────────────────────────── */}
        <section className="bg-[#0C0831] text-white py-12 md:py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 md:px-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold mb-5 leading-tight">
              A odontologia evoluiu. O paciente também. Ficar sem um método diagnóstico estruturado já não é mais uma opção.
            </h2>
            <p className="text-white/75 text-base sm:text-lg leading-relaxed mb-4">
              Não espere o mercado te ultrapassar. Prepare-se agora para se tornar referência em Estomatologia — uma área de alta demanda e extremamente carente de dentistas qualificados.
            </p>
            <p className="text-white/75 text-base sm:text-lg leading-relaxed">
              A verdade é que você não precisa ser especialista para atender um paciente com uma lesão bucal suspeita. Mas você precisa saber o que fazer.
            </p>
          </div>
        </section>

        {/* ── 6. PAIN POINTS ──────────────────────────────────────────────── */}
        <section className="bg-[#F6F6F6] py-12 md:py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 md:px-12">
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#0C0831] mb-7">
              Se hoje você sente que...
            </h2>
            <div className="space-y-3">
              {[
                "Falta confiança para diferenciar lesões benignas e malignas;",
                "Já atendeu casos de lesões, mas ficou inseguro na dúvida se encaminhava;",
                "Gostaria de dominar um passo a passo claro e seguro, sem complicar sua rotina;",
                "Sente receio de deixar passar sinais precoces de câncer bucal;",
                "Percebe que o paciente espera segurança e clareza na sua conduta;",
                "Poderia entregar mais confiança, preparo e cuidado para encantar o seu paciente.",
              ].map((text, i) => (
                <div key={i} className="flex items-start gap-3 bg-white border border-gray-100 px-4 py-3.5 rounded-xl shadow-sm">
                  <div className="w-2 h-2 rounded-full bg-[#E10098] flex-shrink-0 mt-2" />
                  <p className="text-base text-gray-700 leading-relaxed">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 7. FOR YOU ──────────────────────────────────────────────────── */}
        <section className="bg-white py-10 md:py-14">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 md:px-12">
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#E10098] mb-3">
              Então esta imersão foi criada para você
            </h2>
            <p className="text-lg sm:text-xl font-bold text-[#0C0831] mb-4 uppercase">
              Porque não basta ser bom tecnicamente.
            </p>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              Hoje, quem realmente se destaca é o dentista que consegue entregar segurança, clareza e ciência em cada diagnóstico — seja uma simples afta ou um caso suspeito de câncer bucal. E é exatamente isso que você vai aprender.
            </p>
          </div>
        </section>

        {/* ── 8. FOR WHOM ─────────────────────────────────────────────────── */}
        <section style={{ background: "rgb(112,0,63)" }} className="py-12 md:py-16 text-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 md:px-12">
            <p className="text-[#E10098] text-xs font-bold uppercase tracking-widest mb-2">PARA QUEM É</p>
            <h2 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-wider mb-8">A IMERSÃO:</h2>
            <div className="space-y-4 text-base sm:text-lg leading-relaxed text-white/85">
              <p>
                Dentistas que já atendem há anos, mas sentem que precisam modernizar seus diagnósticos clínicos para diferenciar lesões benignas das malignas e agregar mais segurança aos atendimentos.
              </p>
              <p>
                Dentistas que desejam um método claro e objetivo para realizar biópsias e identificar condições orais com mais precisão.
              </p>
            </div>
            <div className="bg-white/10 border border-white/15 mt-8 px-5 py-5 rounded-2xl">
              <p className="text-white font-semibold text-base sm:text-lg leading-relaxed">
                Se você quer sair do comum e oferecer a odontologia que o mercado valoriza hoje, esta é a sua oportunidade.
              </p>
            </div>
          </div>
        </section>

        {/* ── 9. WHAT YOU'LL LEARN ────────────────────────────────────────── */}
        <section className="bg-[#F6F6F6] py-12 md:py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 md:px-12">
            <p className="text-[#E10098] text-xs font-bold uppercase tracking-widest mb-2">CONTEÚDO</p>
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#0C0831] mb-7">
              O que você vai aprender:
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { n: "01", title: "Identificação segura", desc: "Como diferenciar, com clareza, lesões bucais benignas das malignas — de uma simples afta até um câncer bucal em estágio inicial." },
                { n: "02", title: "Tratar ou Encaminhar?", desc: "Descubra como identificar com clareza os casos que exigem ação imediata e os que precisam ser encaminhados." },
                { n: "03", title: "Biópsia sem Complicação", desc: "Realize biópsias com segurança e precisão, com o protocolo ideal usando materiais que você já tem no consultório." },
                { n: "04", title: "Protocolos de Laserterapia", desc: "Destrave na Laserterapia com protocolos simples para casos complexos na prática clínica." },
              ].map(({ n, title, desc }) => (
                <div key={n} className="bg-white rounded-2xl p-5 border-l-4 border-[#E10098] shadow-sm">
                  <div className="text-[#E10098] text-2xl font-black leading-none mb-2">{n}</div>
                  <h3 className="font-bold text-[#0C0831] text-base mb-2">{title}</h3>
                  <p className="text-gray-500 text-base leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 10. WHAT YOU'LL BUILD ───────────────────────────────────────── */}
        <section className="bg-white py-12 md:py-14">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 md:px-12">
            <p className="text-[#E10098] text-xs font-bold uppercase tracking-widest mb-2">RESULTADOS</p>
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#0C0831] mb-7">
              O que você vai construir:
            </h2>
            <div className="space-y-4 mb-10">
              {[
                "Confiança absoluta na sua tomada de decisão clínica — sabendo exatamente quando tratar e quando encaminhar.",
                "Mais segurança, previsibilidade e respaldo científico em seus atendimentos.",
                "Uma reputação fortalecida pela precisão diagnóstica, que transmite credibilidade e atrai mais pacientes.",
                "Uma prática clínica diferenciada, que encanta o paciente e valoriza o seu trabalho.",
              ].map((text, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#E10098] flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700 text-base sm:text-lg leading-relaxed">{text}</p>
                </div>
              ))}
            </div>
            <button
              onClick={open}
              className="w-full sm:w-auto min-h-[48px] px-8 py-3.5 bg-[#E10098] text-white font-black uppercase rounded-xl text-sm tracking-widest hover:bg-[#c60085] active:scale-[0.98] motion-safe:transition-colors motion-safe:duration-200 cursor-pointer"
            >
              QUERO ME INSCREVER
            </button>
          </div>
        </section>

        {/* ── 11. COMPARISON ──────────────────────────────────────────────── */}
        <section className="bg-[#F6F6F6] py-12 md:py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 md:px-12">
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#0C0831] mb-7 text-center">
              Escolha o caminho que constrói uma Odontologia de excelência
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-gray-200 rounded-2xl p-5 sm:p-6">
                <h3 className="font-extrabold text-gray-500 text-xs uppercase tracking-wider mb-4">
                  SEM O DIAGNÓSTICO TOTAL
                </h3>
                <ul className="space-y-3 text-base text-gray-600">
                  {[
                    "Risco de atrasar um diagnóstico crítico, como câncer bucal.",
                    "Decisões incertas, baseadas apenas em tentativa e erro.",
                    "Dentista visto como comum, sem diferenciação.",
                    "Pacientes inseguros, frustrados e que não retornam.",
                  ].map((t, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-red-500 font-bold flex-shrink-0 mt-0.5">✗</span>
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-[#E10098] rounded-2xl p-5 sm:p-6">
                <h3 className="font-extrabold text-white text-xs uppercase tracking-wider mb-4">
                  COM O DIAGNÓSTICO TOTAL
                </h3>
                <ul className="space-y-3 text-base text-white">
                  {[
                    "Paciente encantado, dentista reconhecido e valorizado.",
                    "Segurança para realizar biópsias e diferenciar lesões com clareza.",
                    "Protocolos práticos que orientam decisões com confiança.",
                    "Tranquilidade para saber quando tratar, acompanhar ou encaminhar.",
                  ].map((t, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="font-bold flex-shrink-0 mt-0.5">✓</span>
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── 12. TESTIMONIALS ────────────────────────────────────────────── */}
        <section className="bg-white py-12 md:py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 md:px-12 text-center">
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#0C0831] mb-4">
              Centenas de dentistas já transformaram sua prática clínica com o Método TotalCare.
            </h2>
            <p className="text-gray-400 italic text-sm">[Depoimentos em breve]</p>
          </div>
        </section>

        {/* ── 13. WHAT HAPPENS ────────────────────────────────────────────── */}
        <section className="bg-[#F6F6F6] py-12 md:py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 md:px-12">
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#0C0831] mb-6 leading-tight">
              O que acontece quando você estrutura seu Diagnóstico e Conduta do jeito certo:
            </h2>
            <div className="space-y-4 mb-8">
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                Pacientes percebem, imediatamente, que você não é um(a) dentista comum: aqui está a chave para encantar e gerar confiança desde a primeira consulta.
              </p>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                Percepção de valor + segurança na conduta = resultados mais previsíveis — para a saúde do seu paciente e para o crescimento do seu consultório.
              </p>
            </div>
            <button
              onClick={open}
              className="w-full sm:w-auto min-h-[48px] px-8 py-3.5 bg-[#E10098] text-white font-black uppercase rounded-xl text-sm tracking-widest hover:bg-[#c60085] active:scale-[0.98] motion-safe:transition-colors motion-safe:duration-200 cursor-pointer"
            >
              QUERO PARTICIPAR
            </button>
          </div>
        </section>

        {/* ── 14. ENROLLMENT BOX ──────────────────────────────────────────── */}
        <section id="inscrever" style={{ background: "rgb(112,0,63)" }} className="py-14 md:py-20 text-white">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 md:px-8 text-center">
            <p className="text-yellow-300 text-xs font-bold uppercase tracking-widest mb-3">
              AO SE INSCREVER, VOCÊ GARANTE:
            </p>
            <h2 className="text-xl sm:text-2xl font-extrabold uppercase tracking-wide mb-8">
              TUDO ISSO NA SUA INSCRIÇÃO
            </h2>

            {/* Bonuses */}
            <div className="text-left space-y-2.5 mb-10">
              {BONUSES.map(({ icon: Icon, text }, i) => (
                <div key={i} className="flex items-start gap-3 bg-white/10 rounded-xl px-4 py-3">
                  <Icon className="w-5 h-5 text-yellow-300 flex-shrink-0 mt-0.5" />
                  <p className="text-white/90 text-base leading-relaxed">{text}</p>
                </div>
              ))}
            </div>

            {/* Price */}
            <div className="mb-4">
              <p className="text-white/35 text-lg line-through leading-none">De R$297</p>
              <p className="text-[5.5rem] sm:text-[7rem] font-black text-yellow-300 leading-none tracking-tight tabular-nums">
                {lote.preco}
              </p>
              <p className="text-white/40 text-xs uppercase tracking-widest mt-2">
                {lote.id}º Lote
              </p>
            </div>

            {/* Progress */}
            <div className="bg-white/15 rounded-full h-2.5 mb-1.5 max-w-xs mx-auto">
              <div
                className="bg-yellow-300 h-2.5 rounded-full motion-safe:transition-all motion-safe:duration-1000"
                style={{ width: `${progresso}%` }}
              />
            </div>
            <p className="text-white/40 text-xs mb-10">
              {Math.floor(progresso)}% das vagas do {lote.nome} lote preenchidas
            </p>

            {/* CTA */}
            <button
              onClick={open}
              className="w-full sm:w-auto min-h-[52px] px-10 py-4 bg-yellow-400 text-[#700040] font-black uppercase rounded-2xl text-base sm:text-lg tracking-wider hover:bg-yellow-300 active:scale-[0.98] motion-safe:transition-colors motion-safe:duration-200 shadow-xl shadow-yellow-400/25 cursor-pointer"
            >
              QUERO ME INSCREVER →
            </button>
          </div>
        </section>

        {/* ── 15. INSTRUCTOR BIO ──────────────────────────────────────────── */}
        <section className="bg-white py-12 md:py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 md:px-12">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-8">
              <div className="flex-shrink-0">
                <img
                  src="/assets/wp-content/uploads/2025/09/Elen-Tolentino-02-828x1024.png"
                  alt="Dra. Elen Tolentino"
                  className="w-36 sm:w-44 md:w-52 rounded-2xl object-cover object-top"
                  style={{ aspectRatio: "3/4" }}
                />
              </div>
              <div>
                <p className="text-[#E10098] text-xs font-bold uppercase tracking-widest mb-2">SUA INSTRUTORA</p>
                <h2 className="text-xl sm:text-2xl font-extrabold text-[#0C0831] mb-3">
                  Dra. Elen Tolentino
                </h2>
                <p className="text-gray-600 text-base leading-relaxed">
                  Dentista, especialista em Estomatologia e referência nacional e internacional no diagnóstico precoce de lesões bucais. Ao longo de sua carreira, ajudou milhares de colegas a conduzirem diagnósticos mais seguros, assertivos e respaldados pela ciência. Com uma trajetória marcada pela prática clínica, docência e pesquisa, a Dra. Elen alia profundidade técnica à didática transformadora.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── 16. SUPPORT ─────────────────────────────────────────────────── */}
        <section className="bg-[#F6F6F6] py-10 md:py-12">
          <div className="max-w-xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-base sm:text-lg font-bold text-[#0C0831] mb-2.5">
              Tem dúvidas ou precisa de ajuda para concluir sua inscrição?
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed mb-5">
              Nossa equipe de suporte está pronta para te atender com rapidez.
            </p>
            <a
              href="https://i.sendflow.pro/l/suporte-imersao-diagnostico-total"
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 min-h-[44px] px-6 py-2.5 bg-green-500 text-white font-bold rounded-xl text-sm hover:bg-green-600 motion-safe:transition-colors motion-safe:duration-200 cursor-pointer"
            >
              FALAR COM O TIME DE SUPORTE
            </a>
          </div>
        </section>

        {/* ── 17. SPONSOR ─────────────────────────────────────────────────── */}
        <section className="bg-white py-8 border-t border-gray-100">
          <div className="max-w-xl mx-auto px-4 text-center">
            <p className="text-gray-400 text-xs mb-2">Agradecimento especial ao apoiador do evento:</p>
            <p className="text-gray-500 text-sm leading-relaxed">
              Equipamentos especialmente pensados para ajudar a prática clínica do(a) Dentista que atua em Estomatologia!
            </p>
          </div>
        </section>

        {/* ── 18. LEGAL ───────────────────────────────────────────────────── */}
        <div className="bg-[#EBEBEB] py-4 text-center text-xs text-gray-400">
          DIAGNOSIS CURSOS DE ODONTOLOGIA LTDA – 52.674.464/0001-87 – Direitos Reservados
        </div>
      </main>

      {/* ── STICKY BOTTOM CTA (mobile only) ─────────────────────────────────
          Always visible on mobile — the #1 fix for "CTA na primeira dobra".
          Hides when modal is open. Accounts for iPhone safe area.
      ─────────────────────────────────────────────────────────────────────── */}
      <div
        className={`fixed bottom-0 left-0 right-0 z-50 md:hidden motion-safe:transition-transform motion-safe:duration-300 ${
          popupOpen ? "translate-y-full" : "translate-y-0"
        }`}
        style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      >
        <div className="bg-[#0C0831]/95 backdrop-blur-md border-t border-white/10 px-4 py-3">
          <div className="flex items-center gap-3 max-w-lg mx-auto">
            <div className="flex-shrink-0 text-left">
              <p className="text-white/35 text-[10px] line-through leading-none tabular-nums">R$297</p>
              <p className="text-yellow-300 font-black text-2xl leading-tight tabular-nums">{lote.preco}</p>
            </div>
            <button
              onClick={open}
              className="flex-1 min-h-[46px] py-3 bg-[#E10098] text-white font-black uppercase rounded-xl text-sm tracking-wider hover:bg-[#c60085] active:scale-[0.98] motion-safe:transition-colors motion-safe:duration-200 cursor-pointer shadow-lg shadow-[#E10098]/30"
            >
              GARANTIR MINHA VAGA →
            </button>
          </div>
        </div>
      </div>

      {/* ── MODAL ───────────────────────────────────────────────────────────
          Pre-rendered in DOM — opacity/pointer-events toggle = instant open.
      ─────────────────────────────────────────────────────────────────────── */}
      <div
        className={`fixed inset-0 z-[99999] flex items-end sm:items-center justify-center sm:p-4 motion-safe:transition-opacity motion-safe:duration-250 ${
          popupOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        style={{ backgroundColor: "rgba(0,0,0,0.8)" }}
        onClick={close}
      >
        <div
          className={`bg-white w-full sm:rounded-2xl sm:max-w-lg relative motion-safe:transition-transform motion-safe:duration-250 ${
            popupOpen ? "translate-y-0" : "translate-y-4 sm:scale-[0.97]"
          }`}
          style={{
            maxHeight: "92dvh",
            overflowY: "auto",
            borderRadius: "1rem 1rem 0 0",
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Drag handle (mobile sheet style) */}
          <div className="flex justify-center pt-3 pb-1 sm:hidden">
            <div className="w-10 h-1 bg-gray-300 rounded-full" />
          </div>

          {/* Close */}
          <button
            onClick={close}
            aria-label="Fechar"
            className="absolute top-3 right-3 z-10 min-w-[44px] min-h-[44px] flex items-center justify-center text-gray-400 hover:text-gray-700 hover:bg-gray-100 rounded-full motion-safe:transition-colors motion-safe:duration-150 cursor-pointer"
          >
            <XIcon className="w-5 h-5" />
          </button>

          {/* Header */}
          <div className="text-center px-5 pt-4 sm:pt-7 pb-4">
            <p className="text-[#E10098] text-xs font-bold uppercase tracking-widest">
              {lote.id}º Lote · {lote.preco}
            </p>
            <h3 className="text-xl sm:text-2xl font-black text-gray-900 mt-1 leading-tight">
              Imersão Diagnóstico Total
            </h3>
            <p className="text-gray-500 text-sm mt-1.5">
              23 e 24 de Maio · Online ao vivo pelo Zoom · Vagas limitadas
            </p>
          </div>

          <div className="h-px bg-gray-100 mx-5" />

          {/* GHL iframe — preloaded, UTMs forwarded */}
          <div className="px-3 sm:px-4 pb-4 pt-3">
            <iframe
              src={iframeSrc}
              className="w-full rounded-xl"
              style={{ height: "520px", border: "none", display: "block" }}
              id="inline-Utx6GMFEgD5LVtcOlVdj"
              data-form-id="Utx6GMFEgD5LVtcOlVdj"
              title="Inscrição Imersão Diagnóstico Total"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
