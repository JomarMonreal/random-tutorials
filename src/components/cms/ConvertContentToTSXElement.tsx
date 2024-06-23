import Image from "next/image"

export type Content = {
    type: string
    data: {
        url?: string,
        caption?: string,
        text?: string,
        items?: string[]
    }
}

const ConvertContentToTSXElement = ({content}:{content: Content}) => {

    if(content.type === "paragraph"){
        return <p className=' indent-4 text-justify'>{content.data.text}</p>
      }

      if(content.type === "image"){
        return <figure className='w-full flex flex-col items-center gap-2'>
            <div className='w-full h-96 relative'>
                <Image 
                    src={content.data.url!} 
                    alt="section image" 
                    fill
                    style={{objectFit: "contain"}}
                    quality={100}
                    priority
                />
            </div>
            <figcaption className=' italic'>{content.data.caption}</figcaption>
        </figure>
      }

      if(content.type === "bulleted-list"){
        return <ul className="list-disc ml-10">
          {content.data.items?.map((item,jIndex) => 
            <li key={jIndex}>{item}</li>
          )}
        </ul>
      }

      return null
}

export default ConvertContentToTSXElement