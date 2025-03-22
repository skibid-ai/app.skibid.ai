interface ButtonShowReasoningProps {
  onClick: () => void;
}

export function ButtonShowReasoning({ onClick }: ButtonShowReasoningProps) {
  return (
    <button
      className="inline-flex gap-1 items-center bg-white text-black rounded-lg px-1 py-1 text-sm hover:bg-amber-200 hover:cursor-pointer"
      onClick={onClick}
    >
      <svg
        width="17"
        height="16"
        viewBox="0 0 17 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2.83393 5.80002C2.36726 6.13335 2.16726 6.73335 2.36726 7.26668L4.23393 13.0667C4.43393 13.6 4.9006 14 5.5006 14H11.5673C12.1673 14 12.6339 13.6 12.8339 13.0667L14.7006 7.26668C14.9006 6.73335 14.7006 6.13335 14.2339 5.80002L9.3006 2.26668C9.06585 2.10322 8.78665 2.01559 8.5006 2.01559C8.21454 2.01559 7.93535 2.10322 7.7006 2.26668L2.83393 5.80002Z"
          stroke="#797889"
          stroke-width="1.33333"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      Show reasoning
    </button>
  );
}
