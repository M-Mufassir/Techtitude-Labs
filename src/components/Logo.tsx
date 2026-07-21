import headerLogo from "../assets/Icon/Header.png";
import footerLogo from "../assets/Icon/Footer.png";

type LogoProps = {
  className?: string;
  variant?: "header" | "footer";
};

export default function Logo({ className = "", variant = "header" }: LogoProps) {
  // Use footerLogo for the footer, and headerLogo for the header
  const src = variant === "footer" ? footerLogo : headerLogo; 
  
  // Increase the base size for the footer variant, and also make the header larger
  const baseSize = variant === "footer" ? "h-16 sm:h-20" : "h-12 sm:h-16 lg:h-20";

  return (
    <img 
      src={src} 
      alt="Techtitude Labs Logo" 
      className={`${baseSize} w-auto object-contain ${className}`}
    />
  );
}