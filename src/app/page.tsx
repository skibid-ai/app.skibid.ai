import Chat from '@/components/chat/Chat';

export default function Home() {
  return (
    <div className="w-full min-h-[calc(100vh-var(--headerHeight))] h-full">
      <Chat />
    </div>
  );
}
