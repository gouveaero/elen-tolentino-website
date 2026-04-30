import type { Metadata } from "next";
import PrivacidadePage from "@/components/PrivacidadePage";

export const metadata: Metadata = {
  title: "Política de Privacidade — Dra. Elen Tolentino",
  description:
    "Política de Privacidade e Proteção de Dados da Dra. Elen Tolentino conforme LGPD.",
};

export default function PoliticaDePrivacidade() {
  return <PrivacidadePage />;
}
