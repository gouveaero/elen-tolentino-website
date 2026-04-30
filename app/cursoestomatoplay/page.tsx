import type { Metadata } from "next";
import EstomatoPlayPage from "@/components/EstomatoPlayPage";

export const metadata: Metadata = {
  title:
    "EstomatoPlay — Lesões Bucais: Diagnóstico e Tratamento com Dra. Elen Tolentino",
  description:
    "O maior curso de Estomatologia do Brasil. Aprenda a diagnosticar e tratar qualquer lesão bucal com a Dra. Elen Tolentino.",
};

export default function CursoEstomatoPlay() {
  return <EstomatoPlayPage />;
}
