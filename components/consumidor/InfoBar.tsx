const items = [
  { label: "Início das Aulas", value: "Imediato" },
  { label: "Duração", value: "12 Meses" },
  { label: "Modalidade", value: "100% Online" },
  { label: "Carga Horária", value: "480H" },
];

const InfoBar = () => (
  <section className="section-dark-alt">
    <div className="container py-6 sm:py-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
      {items.map((item, i) => (
        <div key={i} className="py-2">
          <p className="text-[10px] sm:text-xs text-primary/80 uppercase tracking-widest mb-1 font-medium">
            {item.label}
          </p>
          <p className="text-lg sm:text-2xl font-heading font-bold text-white">
            {item.value}
          </p>
        </div>
      ))}
    </div>
  </section>
);

export default InfoBar;
