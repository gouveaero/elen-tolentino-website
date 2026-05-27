import type { Metadata } from "next";
import UrgencyBar from "@/components/consumidor/UrgencyBar";
import HeroConsumidor from "@/components/consumidor/HeroConsumidor";
import InfoBar from "@/components/consumidor/InfoBar";
import OfferSummary from "@/components/consumidor/OfferSummary";
import ObjectiveSection from "@/components/consumidor/ObjectiveSection";
import BonusSection from "@/components/consumidor/BonusSection";
import CurriculumSection from "@/components/consumidor/CurriculumSection";
import OfferSection from "@/components/consumidor/OfferSection";
import CredibilitySection from "@/components/consumidor/CredibilitySection";
import AnhangueraSection from "@/components/consumidor/AnhangueraSection";
import InstructorConsumidor from "@/components/consumidor/InstructorConsumidor";
import FAQSection from "@/components/consumidor/FAQSection";
import FinalCTA from "@/components/consumidor/FinalCTA";

export const metadata: Metadata = {
  title: "Mês do Consumidor — Pós em Estomatologia | Dra. Elen Tolentino",
  description:
    "Condição especial do Mês do Consumidor para a Pós-Graduação Online em Estomatologia. 1ª mensalidade por R$100, 64% de desconto e acesso vitalício.",
};

export default function PosEstomatoConsumidorPage() {
  return (
    <div className="consumidor-theme min-h-screen overflow-x-hidden">
      <UrgencyBar />
      <HeroConsumidor />
      <InfoBar />
      <OfferSummary />
      <ObjectiveSection />
      <BonusSection />
      <CurriculumSection />
      <OfferSection />
      <CredibilitySection />
      <AnhangueraSection />
      <InstructorConsumidor />
      <FAQSection />
      <FinalCTA />
      <footer className="bg-background border-t border-border py-6">
        <p className="text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Elen Tolentino — Todos os direitos reservados.
        </p>
      </footer>
    </div>
  );
}
