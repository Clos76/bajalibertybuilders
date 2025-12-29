import Button from "../ui/Button";

// In FreeBuild&Cost.tsx (or whatever you named it)
export default function AssessmentCTA({
  className = "",
  showStats = true,
  title = "Get Your Free Build Cost & Timeline Report",
  subtitle = "10 quick questions · Instant results · 2,847 homeowners trust us",
  buttonText = "Start Your Free Assessment →",
  buttonHref = "/assessment",
  large = false, // NEW PROP
}: {
  className?: string;
  showStats?: boolean;
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonHref?: string;
  large?: boolean; // NEW PROP
}) {
  return (
    <div
      className={`p-6 bg-gradient-to-r from-amber-500/20 to-orange-500/20 rounded-xl border border-amber-400/30 backdrop-blur-sm ${className}`}
    >
      <p
        className={`${
          large ? "text-3xl md:text-4xl lg:text-5xl" : "text-2xl md:text-3xl"
        } font-bold text-white mb-2`}
      >
        {title}
      </p>
      <p
        className={`${
          large ? "text-xl md:text-2xl" : "text-lg"
        } text-gray-200 mb-4`}
      >
        {subtitle}
      </p>
      <Button
        className={`${large ? "text-xl py-6 px-10" : ""} mt-4`}
        href={buttonHref}
      >
        {buttonText}
      </Button>
    </div>
  );
}
