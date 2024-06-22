import React from 'react';
import Link from 'next/link';

export function AcknowledgementFooter() {
  return <p className="text-center text-xs my-4">
    By continuing, you agree to Random Tutorials'
    <Link href={"/terms-of-service"}>
      &ensp;<strong className='hover:underline'>Terms of Service</strong>&ensp;
    </Link>
    and acknowledge you've read our
    <Link href={"privacy-policy"}>
      &ensp;<strong className='hover:underline'>Privacy Policy</strong>&ensp;
    </Link>.
  </p>;
}
