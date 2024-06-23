import { IndentedParagraph } from "./IndentedParagraph"
import { ImageFigure } from "./ImageFigure"
import { BulletedList } from "./BulletedList"

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
        return <IndentedParagraph text={content.data.text!}/>
      }

      if(content.type === "image"){
        return <ImageFigure url={content.data.url!} caption={content.data.caption!}/>
      }

      if(content.type === "bulleted-list"){
        return <BulletedList items={content.data.items!}/>
      }

      return null
}

export default ConvertContentToTSXElement


