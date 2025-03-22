import { UserBadge } from './UserBadge';

export const UserContent = ({ content }: { content: string }) => {
  return (
    <div className="text-ds_gray-200 py-2 px-4 rounded-lg flex items-center gap-2 max-w-[85%]">
      <UserBadge />

      {content.split('\n').map((line, i) => (
        <p key={i}>{line}</p>
      ))}
    </div>
  );
};
