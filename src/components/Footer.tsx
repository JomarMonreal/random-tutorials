import Image from "next/image";
import logo from "../../public/images/trt_logo_outlined.webp";
import { links } from "@/utils/links";
import Link from "next/link";

export function Footer() {
  return <footer className="bg-primary-100 flex flex-col items-center p-10">
    <Image src={logo} alt="Website logo" width={150} className="p-4" />
    <div className="container mx-auto text-center">
      <p className="mb-4 text-gray-400">© 2024 Your Website. All rights reserved.</p>
      <div className="flex justify-center space-x-4">
        {links.map((link,index)=>{
          if(!link.visibleInFooter){
            return null
          }
          return(
            <Link href={link.path} key={index} className="text-gray-400 hover:text-white hover:underline cursor-pointer">{link.label}</Link>
          )
        })}
      </div>
    </div>
  </footer>;
}
