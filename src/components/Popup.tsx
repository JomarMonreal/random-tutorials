"use client"

import { PopupContext, PopupContextType } from "@/providers/PopupProvider";
import { ReactNode, useContext } from "react";
import { MdClose } from "react-icons/md";

export function Popup() {

  const popup = useContext(PopupContext) as PopupContextType

  return <div className={`bg-[#0009] fixed inset-0 z-40 flex flex-col justify-center ${popup.isOpen? "block": "hidden"}`}>
    <div className="w-full h-full z-50" onClick={()=>popup.setIsOpen(false)}/>
    <dialog open className="z-50 w-1/2 h-4/5 p-4 overflow-auto">
      <MdClose 
        size={"30px"} 
        color={"#000"} 
        className="fixed cursor-pointer hover:scale-105" 
        tabIndex={0}
        onClick={()=>popup.setIsOpen(false)}/>
      
      {popup.child}

    </dialog>
  </div>;
}
