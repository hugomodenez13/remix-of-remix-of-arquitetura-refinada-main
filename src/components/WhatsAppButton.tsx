import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const whatsappNumber = "5511999999999";
const whatsappMessage = encodeURIComponent(
  "Olá! Gostaria de saber mais sobre os serviços de arquitetura."
);

export function WhatsAppButton() {
  return (
    <motion.a
      href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, duration: 0.3, ease: "easeOut" }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-strong hover:shadow-strong transition-shadow"
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle className="w-6 h-6 text-white" fill="white" />
      
      {/* Pulse animation */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
    </motion.a>
  );
}
