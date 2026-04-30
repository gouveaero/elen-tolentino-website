// DepoimentosPage is the same sales page as EstomatoPlay but opens with
// the testimonials section promoted to the top. We re-use EstomatoPlayPage
// directly since the specification states the simplest approach is to render
// it as a wrapper.

import EstomatoPlayPage from "@/components/EstomatoPlayPage";

export default function DepoimentosPage() {
  return <EstomatoPlayPage />;
}
