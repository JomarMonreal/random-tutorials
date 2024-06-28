import { IndentedParagraph } from "./content-types/IndentedParagraph"
import { ImageFigure } from "./content-types/ImageFigure"
import { BulletedList } from "./content-types/BulletedList"
import { ContentType } from "../../types/ContentType"
import { ChangeEvent, Dispatch, SetStateAction, useContext } from "react"
import { TutorialAction, TutorialActionKind, TutorialState } from "@/reducers/tutorialReducer"
import { TutorialStateContext, TutorialStateContextType } from "@/providers/TutorialStateProvider"



const Content = ({content, onActive}: {content: ContentType, onActive: ()=>void}) => {

  const {state, dispatch} = useContext(TutorialStateContext) as TutorialStateContextType;

  if(content.type === "paragraph"){
    return <IndentedParagraph 
      text={content.data.text!} 
      setParagraph={(e: ChangeEvent<HTMLInputElement>)=>{
        dispatch({type: TutorialActionKind.EDIT_PARAGRAPH, payload: e.target.value})
      }}
      isEditable={state.isEditable}
      onActive={onActive}
      />
  }

  if(content.type === "image"){
    return <ImageFigure url={content.data.url!} caption={content.data.caption!}/>
  }

  if(content.type === "bulleted-list"){
    return <BulletedList items={content.data.items!}/>
  }

  return <></>
}

export default Content

