import type { Metadata } from "next";
import DepoimentosPage from "@/components/DepoimentosPage";

export const metadata: Metadata = {
  title: "Depoimentos — EstomatoPlay com Dra. Elen Tolentino",
  description:
    "Veja o que os alunos dizem sobre o EstomatoPlay, o curso de Estomatologia da Dra. Elen Tolentino.",
};

export default function DepoimentosEPlay() {
  return <DepoimentosPage />;
}
