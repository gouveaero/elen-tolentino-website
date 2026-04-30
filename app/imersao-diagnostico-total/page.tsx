import type { Metadata } from "next";
import ImersaoPage from "@/components/ImersaoPage";

export const metadata: Metadata = {
  title:
    "Imersão Diagnóstico Total: Da Afta ao Câncer Bucal — Dra. Elen Tolentino",
  description:
    "Treinamento clínico online com Dra. Elen Tolentino. Aprenda a diagnosticar lesões bucais com segurança em 2 dias. Certificado incluso. R$27.",
};

export default function ImersaoDiagnosticoTotal() {
  return <ImersaoPage />;
}
