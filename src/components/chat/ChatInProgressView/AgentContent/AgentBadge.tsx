import Image from 'next/image';

interface AgentBadgeProps {
  name?: string;
}

export const AgentBadge = ({ name = 'King' }: AgentBadgeProps) => {
  return (
    <div className="rounded-full text-gray-200 flex items-center gap-2 pr-3">
      <div className="relative h-6 w-6 rounded-full overflow-hidden">
        <Image src="/cheems.jpg" alt="avatar" width={24} height={24} />
      </div>

      <p className="text-sm font-semibold">{name}</p>
    </div>
  );
};
