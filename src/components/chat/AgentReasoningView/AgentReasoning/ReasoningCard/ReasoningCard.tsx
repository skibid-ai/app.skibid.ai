import { ReactNode } from 'react';

interface ReasoningCardProps {
  title: string;
  children: ReactNode;
}

export function ReasoningCard({ title, children }: ReasoningCardProps) {
  return (
    <div className="flex gap-[8px] p-[16px] text-white text-[14px] outline-dashed rounded-[16px] w-full outline-ds_gray-400">
      <div className="h-full">
        <div className="flex items-center justify-center rounded-full size-[50px] bg-gradient-to-b from-[#321e44] to-[#120919]">
          <svg
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21.1672 21.7069L16.8242 17.3639M16.8242 17.3639C17.5671 16.621 18.1564 15.739 18.5584 14.7684C18.9605 13.7978 19.1674 12.7575 19.1674 11.7069C19.1674 10.6563 18.9605 9.61595 18.5584 8.64532C18.1564 7.67469 17.5671 6.79276 16.8242 6.04987C16.0813 5.30698 15.1994 4.71769 14.2287 4.31564C13.2581 3.9136 12.2178 3.70667 11.1672 3.70667C10.1166 3.70667 9.07628 3.9136 8.10565 4.31564C7.13502 4.71769 6.25309 5.30698 5.5102 6.04987C4.00987 7.5502 3.16699 9.58508 3.16699 11.7069C3.16699 13.8287 4.00987 15.8635 5.5102 17.3639C7.01053 18.8642 9.04541 19.7071 11.1672 19.7071C13.289 19.7071 15.3239 18.8642 16.8242 17.3639Z"
              stroke="#656376"
              stroke-width="2.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
      <div className="flex flex-col gap-[8px] overflow-hidden w-full">
        <div className="text-[16px]">{title}</div>
        <div>{children}</div>
      </div>
    </div>
  );
}
