interface ModalProps {
  isOpen: boolean;
  type?: "success" | "error" | "info";
  title: string;
  message: string;
  onClose: () => void;
};

function Modal({
  isOpen,
  type = "info",
  title,
  message,
  onClose,
}: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/70 backdrop-blur-sm z-50">
      <div className="w-[320px] border border-neon-green bg-black/90 shadow-[0_0_20px_rgba(0,255,65,0.4)] p-6">

        {/* Title */}
        <p
          className={`text-xs font-mono mb-4 uppercase tracking-widest ${
            type === "success"
              ? "text-neon-green"
              : type === "error"
              ? "text-red-500"
              : "text-gray-300"
          }`}
        >
          {"> "}{title}
        </p>

        {/* Message */}
        <p className="text-sm text-white mb-6 leading-relaxed">
          {message}
        </p>

        {/* Button */}
        <button
          onClick={onClose}
          className="w-full p-2 border border-neon-green text-neon-green hover:bg-neon-green hover:text-black transition-all text-xs uppercase tracking-widest"
        >
          close
        </button>
      </div>
    </div>
  );
}

export default Modal;