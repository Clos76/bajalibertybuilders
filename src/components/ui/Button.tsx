import Link from "next/link";

export default function Button({
  children,
  href,
  variant = "primary",
  className = "",
}: {
  children: React.ReactNode;
  href: string;
  variant?: "primary" | "outline";
  className?: string;
}) {
  const base =
    "inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg";

  const variants = {
    primary:
      "bg-gradient-to-r from-amber-500 to-orange-600 text-white hover:from-amber-600 hover:to-orange-700 shadow-amber-500/50",
    outline:
      "bg-white/10 backdrop-blur-sm text-white border-2 border-white/50 hover:bg-white/20 hover:border-white shadow-white/20",
  };

  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
}
