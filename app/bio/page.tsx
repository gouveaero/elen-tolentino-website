import type { Metadata } from "next";
import BioPage from "@/components/BioPage";

export const metadata: Metadata = {
  title: "Pós-Graduação Online em Estomatologia — Dra. Elen Tolentino",
  description:
    "Pós-Graduação Online em Estomatologia reconhecida pelo MEC. 100% online, 12 meses, 480h. Parceria Anhanguera.",
};

export default function Bio() {
  return <BioPage />;
}
