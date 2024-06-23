import Image from "next/image";

export function ImageFigure({ url, caption }: { url: string; caption: string; }) {
  return <figure className='w-full flex flex-col items-center gap-2'>
    <div className='w-full h-96 relative'>
      <Image
        src={url}
        alt="section image"
        fill
        style={{ objectFit: "contain" }}
        quality={100}
        priority />
    </div>
    <figcaption className=' italic'>{caption}</figcaption>
  </figure>;
}
