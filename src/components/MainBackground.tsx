import Image from "next/image";
import background from "../../public/images/background.webp";

export function MainBackground() {
  return <div className="main-background">
    <Image
      src={background}
      alt={"Background"}
      fill
      style={{ objectFit: "cover" }}
      quality={100}
       />
  </div>;
}
