import Image from "next/image";
import logo from "../../public/images/trt_logo_outlined.webp";
import { Orange } from "./Colors";
import { links } from "@/constants/links";

export function NavBar() {

  return <nav className=" bg-primary-100 flex justify-between items-center text-white">
    <div className="flex">
      <Image src={logo} alt="Website logo" width={70} className="p-4"/>
      <div className="flex flex-col justify-center font-rubik font-semibold">
        <div className="text-2xl">R<Orange>A</Orange>NDOM</div>
        <div className="text-1xl">TUT<Orange>O</Orange>RIA<Orange>L</Orange>S</div>
      </div>
    </div>

    <menu className="flex justify-evenly w-1/2">
      {links.map((link,index)=>{
        if(!link.visibleInNavBar){
          return null
        }
        return(
          <li key={index} className="w-full text-center cursor-pointer hover:underline hover:scale-110">{link.label}</li>
        )
      })}
    </menu>
  </nav>;
}
