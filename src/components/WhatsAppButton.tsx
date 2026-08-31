import React from 'react';
import { MessageCircle } from 'lucide-react';

interface WhatsAppButtonProps {
  phoneNumber?: string;
  message?: string;
}

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  phoneNumber = '917263979006',
  message = 'Hello All Alive Foundation, I would like to get in touch.'
}) => {
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <aside aria-label="WhatsApp Support" className="fixed bottom-6 right-6 z-50 flex items-center group">
      {/* Tooltip / Label */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="hidden sm:flex items-center gap-2 mr-3 px-3.5 py-2 bg-white text-[#111827] text-xs font-semibold rounded-full shadow-lg border border-[#E5E7EB] hover:border-[#25D366] transition-all duration-200 transform translate-x-2 group-hover:translate-x-0 group-hover:opacity-100"
      >
        <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse"></span>
        <span>Chat on WhatsApp</span>
      </a>

      {/* Main Floating Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp +91 72639 79006"
        id="floating-whatsapp-btn"
        className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white flex items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 active:scale-95"
      >
        {/* WhatsApp Icon */}
        <svg
          className="w-7 h-7 fill-white"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.699c.971.53 1.77.813 2.796.813h.005c3.179 0 5.767-2.586 5.768-5.766 0-1.54-.6-2.988-1.689-4.078-1.09-1.089-2.539-1.689-4.084-1.689zm0-2c4.28 0 7.768 3.488 7.768 7.766 0 2.073-.807 4.023-2.274 5.49-1.467 1.467-3.417 2.274-5.49 2.274h-.006c-1.332 0-2.639-.356-3.782-1.031l-5.247 1.376 1.4-5.115c-.742-1.22-1.134-2.62-1.134-4.062 0-4.28 3.488-7.768 7.768-7.768zm-3.328 4.795c-.183-.406-.375-.414-.548-.422-.142-.006-.305-.006-.468-.006s-.427.061-.65.305c-.224.244-.854.834-.854 2.033 0 1.199.874 2.358.996 2.521.122.163 1.685 2.686 4.148 3.655 2.046.804 2.463.644 2.91.603.447-.041 1.443-.59 1.646-1.159.203-.57.203-1.058.142-1.159-.061-.102-.224-.163-.468-.285-.244-.122-1.443-.712-1.667-.793-.224-.081-.386-.122-.549.122-.163.244-.63 1.159-.773 1.159-.142 0-.285-.061-.528-.183-.244-.122-1.03-.38-1.962-1.211-.725-.647-1.215-1.446-1.357-1.69-.142-.244-.015-.376.107-.498.11-.11.244-.285.366-.427.122-.142.163-.244.244-.407.081-.163.041-.305-.02-.427-.062-.122-.549-1.362-.773-1.85z" />
        </svg>

        {/* Pulse rings */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-30 animate-ping pointer-events-none"></span>
      </a>
    </aside>
  );
};
