import * as LucideIcons from "lucide-react";
import type { LucideProps } from "lucide-react";
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaXTwitter, FaGithub, FaYoutube } from "react-icons/fa6";

type IconName = keyof typeof LucideIcons;

const BRAND_ICONS: Record<string, React.ComponentType<{ className?: string; size?: number | string }>> = {
  Instagram: FaInstagram,
  Facebook: FaFacebookF,
  Linkedin: FaLinkedinIn,
  Twitter: FaXTwitter,
  Github: FaGithub,
  Youtube: FaYoutube,
};

/** Resolves a lucide-react icon or fallback brand icon by name so content data can reference icons as plain strings. */
export function Icon({ name, ...props }: { name: string } & LucideProps) {
  if (BRAND_ICONS[name]) {
    const BrandComponent = BRAND_ICONS[name];
    return <BrandComponent size={props.size} className={props.className} />;
  }
  const Component = LucideIcons[name as IconName] as React.ComponentType<LucideProps> | undefined;
  if (!Component) return null;
  return <Component {...props} />;
}

