import Image from 'next/image';

export const UserBadge = () => {
  return (
    <div className="rounded-full flex items-center p-2 w-fit bg-[#17171A] flex-shrink-0">
      <Image src="/skibidai.svg" alt="skibidai logo" width={16} height={16} />
    </div>
  );
};
