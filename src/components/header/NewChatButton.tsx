import Link from 'next/link';

export function NewChatButton() {
  return (
    <Link
      href="/"
      className="bg-white text-sm rounded-[12px] text-black flex items-center justify-center gap-1 hover:bg-amber-200 px-4 py-2"
    >
      <svg
        width="21"
        height="20"
        viewBox="0 0 21 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14.7256 2.5C15.8307 2.5 16.8905 2.93899 17.6719 3.72039C18.4533 4.50179 18.8923 5.5616 18.8923 6.66667V13.3333C18.8923 14.4384 18.4533 15.4982 17.6719 16.2796C16.8905 17.061 15.8307 17.5 14.7256 17.5H3.05892C2.83791 17.5 2.62594 17.4122 2.46966 17.2559C2.31338 17.0996 2.22559 16.8877 2.22559 16.6667V6.66667C2.22559 5.5616 2.66457 4.50179 3.44597 3.72039C4.22738 2.93899 5.28718 2.5 6.39225 2.5H14.7256ZM14.7256 4.16667H6.39225C5.72921 4.16667 5.09333 4.43006 4.62449 4.8989C4.15564 5.36774 3.89225 6.00363 3.89225 6.66667V15.8333H14.7256C15.3886 15.8333 16.0245 15.5699 16.4934 15.1011C16.9622 14.6323 17.2256 13.9964 17.2256 13.3333V6.66667C17.2256 6.00363 16.9622 5.36774 16.4934 4.8989C16.0245 4.43006 15.3886 4.16667 14.7256 4.16667ZM8.05892 8.33333C8.27993 8.33333 8.49189 8.42113 8.64817 8.57741C8.80445 8.73369 8.89225 8.94565 8.89225 9.16667V10.8333C8.89225 11.0543 8.80445 11.2663 8.64817 11.4226C8.49189 11.5789 8.27993 11.6667 8.05892 11.6667C7.83791 11.6667 7.62594 11.5789 7.46966 11.4226C7.31338 11.2663 7.22559 11.0543 7.22559 10.8333V9.16667C7.22559 8.94565 7.31338 8.73369 7.46966 8.57741C7.62594 8.42113 7.83791 8.33333 8.05892 8.33333ZM13.0589 8.33333C13.263 8.33336 13.46 8.4083 13.6126 8.54393C13.7651 8.67956 13.8625 8.86646 13.8864 9.06917L13.8923 9.16667V10.8333C13.892 11.0457 13.8107 11.25 13.6649 11.4045C13.5191 11.5589 13.3198 11.6519 13.1078 11.6643C12.8957 11.6768 12.6869 11.6078 12.5241 11.4714C12.3612 11.3351 12.2565 11.1417 12.2314 10.9308L12.2256 10.8333V9.16667C12.2256 8.94565 12.3134 8.73369 12.4697 8.57741C12.6259 8.42113 12.8379 8.33333 13.0589 8.33333Z"
          fill="black"
        />
      </svg>
      New Chat
    </Link>
  );
}
