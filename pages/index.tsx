import Link from 'next/link';
import { Analytics } from '@vercel/analytics/react';
import va from '@vercel/analytics';

export default function IndexPage() {
  return (
    <div>
      Hello World. <Link href="/about">About1</Link>
    </div>
  )
}
