import { IndentedParagraph } from "./content-types/IndentedParagraph"
import { ImageFigure } from "./content-types/ImageFigure"
import { BulletedList } from "./content-types/BulletedList"
import { ContentType } from "../../types/ContentType"

const Content = ({content, onActive}: {content: ContentType, onActive: ()=>void}) => {

  if(content.type === "paragraph"){
    return <IndentedParagraph 
      text={content.data.text!} 
      onActive={onActive}
      />
  }

  if(content.type === "image"){
    return <ImageFigure url={content.data.url!} caption={content.data.caption!} onActive={onActive}/>
  }

  if(content.type === "bulleted-list"){
    return <BulletedList items={content.data.items!}/>
  }

  return <></>
}

export default Content

