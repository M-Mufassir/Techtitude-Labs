import * as LucideIcons from "lucide-react";
import type { LucideProps } from "lucide-react";

type IconName = keyof typeof LucideIcons;

/** Resolves a lucide-react icon by name so content data can reference icons as plain strings. */
export function Icon({ name, ...props }: { name: string } & LucideProps) {
  const Component = LucideIcons[name as IconName] as React.ComponentType<LucideProps> | undefined;
  if (!Component) return null;
  return <Component {...props} />;
}
