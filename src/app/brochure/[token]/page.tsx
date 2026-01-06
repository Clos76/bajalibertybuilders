// src/app/brochure/[token]/page.tsx
import { notFound } from "next/navigation";
import BrochureViewer from "./BrochureViewer";

type Props = {
  params: Promise<{ token: string }>;
};

export default async function BrochureViewerPage(props: Props) {
  const params = await props.params;
  const { token } = params;

  // Basic token validation (format check)
  if (!token || token.length < 10) {
    notFound();
  }

  // Use relative URL - works on any domain
  const brochureUrl = `/api/brochure?token=${token}`;

  return <BrochureViewer brochureUrl={brochureUrl} />;
}
