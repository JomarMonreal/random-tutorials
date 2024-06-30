"use client"

import { TextField } from "@mui/material";
import Editable from "../../Editable";
import { ChangeEvent, useContext } from "react";
import { TutorialStateContext, TutorialStateContextType } from "@/providers/TutorialStateProvider";
import { TutorialActionKind } from "@/reducers/tutorialReducer";

type IndentedParagraph = { 
  text: string, 
  onActive?: ()=>void,
}

export function IndentedParagraph({ text, onActive=()=>{} }: IndentedParagraph) {
  
  const {isEditable, dispatch} = useContext(TutorialStateContext) as TutorialStateContextType

  return (
    <Editable 
      isEditable={isEditable} 
      editableComponent={
        <TextField 
          id="standard-basic" 
          label="Paragraph" 
          variant="standard" 
          multiline 
          className='w-full' 
          value={text}
          onChange={(e: ChangeEvent<HTMLInputElement>)=>{
            dispatch({
              type: TutorialActionKind.EDIT_CONTENT, 
              payload: {type: "paragraph", data: { text: e.target.value } }
            })
          }}
          onFocus={onActive}
          />
      }>
      <p className=' indent-4 text-justify wrap'>{text}</p>
    </Editable>
  )
}
