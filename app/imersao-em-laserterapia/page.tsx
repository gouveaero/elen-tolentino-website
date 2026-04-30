import type { Metadata } from "next";
import LaserterapiaPage from "@/components/LaserterapiaPage";

export const metadata: Metadata = {
  title: "Imersão em Laserterapia na Odontologia Clínica — Dra. Elen Tolentino",
  description:
    "Aula online e gratuita sobre laserterapia para dentistas com a Dra. Elen Tolentino. Aprenda protocolos terapêuticos e cirúrgicos com laser.",
};

export default function ImersaoEmLaserterapia() {
  return <LaserterapiaPage />;
}
