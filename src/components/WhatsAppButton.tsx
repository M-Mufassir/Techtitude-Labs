import { motion } from "framer-motion";

export default function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/94740747677"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-24 lg:bottom-8 right-4 lg:right-8 z-[100] flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:shadow-[#25D366]/50 transition-shadow duration-300"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200, damping: 20 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-8 h-8"
      >
        <path d="M12.031 0C5.385 0 0 5.385 0 12.031c0 2.126.556 4.197 1.611 6.012L.15 23.364l5.474-1.435A11.968 11.968 0 0012.031 24c6.645 0 12.031-5.385 12.031-12.031C24.062 5.385 18.676 0 12.031 0zm6.541 17.262c-.279.791-1.614 1.488-2.222 1.545-.53.049-1.218.156-3.834-.925-3.155-1.304-5.183-4.524-5.342-4.737-.156-.211-1.272-1.691-1.272-3.228 0-1.536.8-2.296 1.082-2.585.28-.288.614-.36.818-.36.205 0 .408.001.587.008.188.008.439-.074.685.52.261.631.841 2.054.916 2.203.076.15.152.348.046.558-.106.21-.161.343-.319.529-.158.188-.337.426-.477.571-.152.158-.314.331-.137.636.176.305.786 1.3 1.688 2.105 1.161 1.037 2.138 1.356 2.443 1.506.305.15.485.127.668-.083.183-.21.785-.916 1.002-1.233.218-.317.436-.264.717-.165.283.099 1.79 .845 2.096.998.305.153.511.228.587.356.076.129.076.745-.203 1.536z" />
      </svg>
    </motion.a>
  );
}
