type LogoProps = {
  className?: string;
};

/**
 * Wordmark placeholder built to match the supplied brand guide
 * (Space Grotesk bold "TECHTITUDE" + spaced "LABS" in accent blue).
 *
 * To swap in the real logo file: drop it at /public/logo.png and replace
 * the JSX below with: <img src="/logo.png" alt="Techtitude Labs" className={className} />
 */
export default function Logo({ className = "" }: LogoProps) {
  return (
    <div className={`flex flex-col leading-none select-none ${className}`}>
      <span className="font-display font-bold tracking-tight text-ink text-lg sm:text-xl">
        TECHTITUDE
      </span>
      <span className="font-display font-medium text-accent text-[0.65rem] sm:text-xs tracking-[0.45em] pl-[2px]">
        LABS
      </span>
    </div>
  );
}