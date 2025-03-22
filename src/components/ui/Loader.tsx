export const Loader = () => {
  return (
    <div className="absolute inset-0 flex h-full items-center justify-center bg-transparent backdrop-blur-md text-gray-200 bg-black z-100">
      <div className="flex rounded-xl shadow-2xl max-w-md gap-3">
        <div className="w-4 h-4 bg-gray-700 rounded-full animate-bounce"></div>
        <div className="w-4 h-4 bg-gray-700 rounded-full animate-bounce-delay-1"></div>
        <div className="w-4 h-4 bg-gray-700 rounded-full animate-bounce-delay-2"></div>
      </div>
    </div>
  );
};
