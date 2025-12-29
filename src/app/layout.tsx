import "@/src/app/globals.css";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: "Custom Beachfront Homes in Rosarito & Ensenada",
  description:
    "Design and build custom California-style and Mediterranean beachfront homes in Rosarito and Ensenada for U.S & Canadian buyers.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
