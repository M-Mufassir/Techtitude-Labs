import { motion } from "framer-motion";

export default function Preloader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#070B14]"
    >
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-tr from-[#00AEEF]/10 to-[#7B2CBF]/10 blur-[80px] rounded-full pointer-events-none" />

      {/* Loading Element */}
      <div className="relative flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-white font-mono text-sm tracking-[0.3em] uppercase mb-8"
        >
          Initializing
        </motion.div>

        {/* Minimalist Progress Bar */}
        <div className="w-64 h-[2px] bg-white/10 rounded-full overflow-hidden relative">
          <motion.div
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#00AEEF] to-[#7B2CBF]"
          />
        </div>
      </div>
    </motion.div>
  );
}
