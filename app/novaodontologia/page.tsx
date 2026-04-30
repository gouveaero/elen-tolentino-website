import type { Metadata } from "next";
import NovaOdontologiaPage from "@/components/NovaOdontologiaPage";

export const metadata: Metadata = {
  title: "Nova Odontologia — Dra. Elen Tolentino",
  description:
    "Entenda o novo perfil do paciente moderno e as novas doenças bucais. Evento gratuito e online com a Dra. Elen Tolentino.",
};

export default function NovaOdontologia() {
  return <NovaOdontologiaPage />;
}
