"use client"

import { Paper, TextField } from "@mui/material"
import Content from "./Content"
import Editable from "../Editable";
import { SectionType } from "../../types/SectionType";
import { TutorialStateContext, TutorialStateContextType } from "@/providers/TutorialStateProvider";
import { ChangeEvent, useContext } from "react";
import { TutorialActionKind } from "@/reducers/tutorialReducer";
import { ContentType } from "@/types/ContentType";

type SectionProps = {
  heading: string, 
  contents: ContentType[], 
  isSelected: boolean,
  onActive: ()=>void
}

const Section = ({heading, contents, isSelected, onActive}: SectionProps) => {

  const {state, dispatch} = useContext(TutorialStateContext) as TutorialStateContextType;

  return (
    <Paper 
      component={"section"} className={isSelected? ` border-2 border-primary-100`: ``} 
      onClick={onActive}>

      <Editable 
        isEditable={state.isEditable} 
        editableComponent={
          <TextField 
            value={heading} 
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
                dispatch({
                    type: TutorialActionKind.EDIT_SECTION_HEADING,
                    payload: e.target.value
                });
            }}
            onFocus={onActive}
            label="Heading" 
            variant="standard" />
        }>
        <h2 className='text-4xl'>{heading}</h2>
      </Editable>

      {
        contents.map((content,index)=>
          <Content 
            key={index}  
            content={{type: content.type, data: content.data}}
            onActive={()=>dispatch({type: TutorialActionKind.CHANGE_CURRENT_CONTENT_INDEX, payload: index})}
            />
        )
      }
      
    </Paper>
  )
}

export default Section
