"use client"

import React, { useContext } from 'react';
import Link from 'next/link';
import { PopupContext, PopupContextType } from '@/providers/PopupProvider';

export function AcknowledgementFooter() {
  const popup = useContext(PopupContext) as PopupContextType

  return <p className="text-center text-xs my-4">
    By continuing, you agree to Random Tutorials'
    <Link href={"/terms-of-service"}>
      &ensp;<strong className='hover:underline' onClick={()=>popup.setIsOpen(false)}>Terms of Service</strong>&ensp;
    </Link>
    and acknowledge you've read our
    <Link href={"privacy-policy"}>
      &ensp;<strong className='hover:underline' onClick={()=>popup.setIsOpen(false)}>Privacy Policy</strong>&ensp;
    </Link>.
  </p>;
}
