"use client"

import Image from "next/image";
import logo from "../../public/images/trt_logo_outlined.webp";
import { links } from "@/utils/links";
import PartlyOrangeText from "./PartlyOrangeText";
import { Button } from "@mui/material";
import Link from "next/link";

export function NavBar() {

  return <nav className="nav-bar">
    <div className="flex select-none">
      <Image src={logo} alt="Website logo" width={70} className="p-4"/>
      <div className="flex flex-col justify-center font-rubik font-semibold">
        <div className="text-2xl"><PartlyOrangeText orangeLettersCount={1} text={"RANDOM"} delay={6000}/></div>
        <div className="text-1xl"><PartlyOrangeText orangeLettersCount={2} text={"TUTORIALS"} delay={6000}/></div>
      </div>
    </div>

    <menu className="nav-buttons">
      {links.map((link,index)=>{
        if(!link.visibleInNavBar){
          return null
        }
        return(
          <Link key={index} href={link.path} >
            <li className="nav-button">{link.label}</li>
          </Link>
        )
      })}
    </menu>

    <menu className="flex justify-evenly w-1/5">
      <Button className="text-white font-rubik">Sign Up</Button>
      <Button variant="contained" className="font-rubik bg-secondary-700 hover:bg-secondary-500">Log In</Button>
    </menu>
  </nav>;
}
