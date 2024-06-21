"use client"

import { homeCoverImages } from "@/utils/homeCoverImages";
import { WEBSITE_DESCRIPTION, WEBSITE_NAME } from "../constants/about";
import Image from "next/image";
import { useEffect, useState } from "react";
import PartlyOrangeText from "./PartlyOrangeText";
import { Button } from "@mui/material";

export function HomeCover() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const changeHomeCoverImage = setInterval(()=>{
      setCurrentImageIndex(currentImageIndex => (currentImageIndex+1) % homeCoverImages.length)
    },5000)

    return () => clearInterval(changeHomeCoverImage)
  }, []);

  return (
    <article className="relative">
      <div className="absolute w-full -z-10 h-full">
        
          <Image 
            src={homeCoverImages[currentImageIndex]} 
            alt="Cover Background Image" 
            fill
            style={{objectFit: "cover"}}
            quality={100}
            priority
            />

      </div>

      <section className="home-cover-content">

        <hgroup className="flex flex-col items-center select-none">
          <h1 className="text-7xl sm:text-9xl"><PartlyOrangeText orangeLettersCount={1} text={"RANDOM"} delay={4000}/></h1>
          <h1 className="text-6xl sm:text-8xl"><PartlyOrangeText orangeLettersCount={2} text={"TUTORIALS"} delay={4000}/></h1>
        </hgroup>

        <section className="home-cover-content_description">
          <p className="mb-7">{WEBSITE_DESCRIPTION}</p>
          <Button 
            variant="contained" 
            className="button-contained-default"
            >
              Find Random Tutorial
          </Button>
        </section>

      </section>

    </article>
  )
}
