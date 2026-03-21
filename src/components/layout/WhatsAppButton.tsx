import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5511999999999?text=Olá! Gostaria de saber mais sobre os serviços da Síndico Transparente."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[hsl(142,70%,40%)] text-white shadow-lg transition-all duration-200 hover:scale-105 hover:shadow-xl active:scale-95"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle size={28} />
    </a>
  );
}
