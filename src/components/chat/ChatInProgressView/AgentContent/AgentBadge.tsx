import Image from 'next/image';

interface AgentBadgeProps {
  name?: string;
}

export const AgentBadge = ({ name = 'Fat Nigga' }: AgentBadgeProps) => {
  return (
    <div className="rounded-full text-gray-200 flex items-center gap-2 pr-3">
      <div className="relative h-12 w-12 rounded-full overflow-hidden">
        <Image src="/fat-nigga-head.png" alt="avatar" fill />
      </div>

      <p className="text-base font-semibold">{name}</p>
    </div>
  );
};
