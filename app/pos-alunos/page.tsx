import type { Metadata } from "next";
import PosAlunosPage from "@/components/PosAlunosPage";

export const metadata: Metadata = {
  title:
    "Pós-Graduação Online em Estomatologia — Área do Aluno | Dra. Elen Tolentino",
  description:
    "Detalhes completos sobre a Pós-Graduação Online em Estomatologia da Dra. Elen Tolentino, reconhecida pelo MEC.",
};

export default function PosAlunos() {
  return <PosAlunosPage />;
}
