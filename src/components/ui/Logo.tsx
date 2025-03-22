import Image from 'next/image';
import Link from 'next/link';

export function Logo() {
  return (
    <Link href="/">
      <Image src="/skibidai.svg" alt="skibidai" width={32} height={32} />
    </Link>
  );
}
