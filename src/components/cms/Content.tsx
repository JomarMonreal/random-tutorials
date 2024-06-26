import { IndentedParagraph } from "./IndentedParagraph"
import { ImageFigure } from "./ImageFigure"
import { BulletedList } from "./BulletedList"
import { ContentType } from "../../types/ContentType"

const Content = ({type, data}:ContentType) => 
{
    if(type === "paragraph"){
        return <IndentedParagraph text={data.text!}/>
      }

      if(type === "image"){
        return <ImageFigure url={data.url!} caption={data.caption!}/>
      }

      if(type === "bulleted-list"){
        return <BulletedList items={data.items!}/>
      }

      return <></>
}

export default Content

