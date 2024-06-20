"use client"

import { homeCoverImages } from "@/utils/homeCoverImages";
import Image from "next/image";
import { useState } from "react";

export function HomeCover() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  return <div className="absolute w-screen h-96 -z-10">
    <Image 
      src={homeCoverImages[currentImageIndex]} 
      alt="Cover Background Image" 
      layout="fill"
      objectFit="cover" 
      quality={100}
      />
  </div>;
}
