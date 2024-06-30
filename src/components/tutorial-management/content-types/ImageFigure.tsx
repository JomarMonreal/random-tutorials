import Editable from "@/components/Editable";
import { TutorialStateContext, TutorialStateContextType } from "@/providers/TutorialStateProvider";
import { TutorialActionKind } from "@/reducers/tutorialReducer";
import { TextField } from "@mui/material";
import Image from "next/image";
import { ChangeEvent, useContext, useState } from "react";

export function ImageFigure({ url, caption, onActive=()=>{} }: { url: string; caption: string; onActive: ()=>void }) {

  const {isEditable, state, dispatch} = useContext(TutorialStateContext) as TutorialStateContextType
  const [imageUrl, setImageUrl] = useState(url)

  return (
    <figure className='w-full flex flex-col items-center gap-2'>
      <Editable 
        isEditable = {isEditable}
        editableComponent={
            <TextField 
              value={imageUrl} 
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                setImageUrl(e.target.value)
              }}
              onBlur={() => {
                const content = state.sections[state.currentSectionIndex].contents[state.currentContentIndex];
                dispatch({
                  type: TutorialActionKind.EDIT_CONTENT,
                  payload: { type: "image", data: { url: imageUrl, caption: content.data.caption } }
                });
              }}
              onFocus={onActive}
              label="Image url" 
              variant="standard" />
        }>

        <div className='w-full h-96 relative'>
          <Image
            src={url}
            alt="section image"
            fill
            style={{ objectFit: "contain" }}
            quality={100}
            priority />
        </div>

      </Editable>

      <Editable
        isEditable={isEditable}
        editableComponent={
          <TextField 
              value={caption} 
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  const content = state.sections[state.currentSectionIndex].contents[state.currentContentIndex]
                  dispatch({
                      type: TutorialActionKind.EDIT_CONTENT,
                      payload: {type: "image", data: { url: content.data.url, caption: e.target.value}}
                  });
              }}
              onFocus={onActive}
              label="Image caption" 
              variant="standard" />
        }
      >
        <figcaption className='text-center italic'>{caption}</figcaption>
      </Editable>
    </figure>
  )
}
