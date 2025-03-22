import { FaArrowLeft } from 'react-icons/fa';

interface BackButtonProps {
  onClick: () => void;
}

export function BackButton({ onClick }: BackButtonProps) {
  return (
    <button
      onClick={onClick}
      className="md:bg-transparent bg-black text-gray-200 text-sm font-semibold flex gap-2 items-center rounded-full px-3 py-2 border border-gray-700 mr-auto md:mb-3 mb-0"
    >
      <FaArrowLeft className="w-4 h-4" /> Back
    </button>
  );
}
