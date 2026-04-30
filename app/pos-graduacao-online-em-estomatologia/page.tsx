import type { Metadata } from "next";
import PosGraduacaoPage from "@/components/PosGraduacaoPage";

export const metadata: Metadata = {
  title: "Pós-Graduação Online em Estomatologia — Dra. Elen Tolentino",
  description:
    "Pós-Graduação Online em Estomatologia reconhecida pelo MEC, em parceria com a Faculdade Anhanguera. Capacite-se com a Dra. Elen Tolentino.",
};

export default function PosGraduacao() {
  return <PosGraduacaoPage />;
}
