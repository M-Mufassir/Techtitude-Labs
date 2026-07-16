import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface MarqueeProps {
  children: ReactNode;
  speed?: number; // duration in seconds
  direction?: "left" | "right";
}

export default function Marquee({ children, speed = 20, direction = "left" }: MarqueeProps) {
  return (
    <div className="w-full overflow-hidden flex relative mask-edges">
      <motion.div
        className="flex whitespace-nowrap"
        animate={{
          x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"],
        }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: speed,
        }}
      >
        <div className="flex items-center gap-16 px-8">{children}</div>
        <div className="flex items-center gap-16 px-8">{children}</div>
      </motion.div>
    </div>
  );
}
