import type { Metadata } from "next";
import MapaLesoesPage from "@/components/MapaLesoesPage";

export const metadata: Metadata = {
  title: "Imersão Gratuita em Lesões Bucais — Dra. Elen Tolentino",
  description:
    "Imersão online e gratuita para dentistas aprenderem diagnóstico e tratamento de lesões bucais com a Dra. Elen Tolentino.",
};

export default function MapaDasLesoes() {
  return <MapaLesoesPage />;
}
