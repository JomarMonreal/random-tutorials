"use client"

import { Paper, TextField } from "@mui/material"
import Content from "./Content"
import Editable from "../Editable";
import { SectionType } from "../../types/SectionType";

const Section = ({heading, contents, isEditable=false, isSelected=false, setHeading=(e)=>{},onClick}:SectionType) => {
  return (
    <Paper component={"section"} className={isSelected? ` border-2 border-primary-100`: ``} onClick={onClick}>
      <Editable isEditable={isEditable} editableComponent={<TextField value={heading} onChange={setHeading} label="Heading" variant="standard" />}>
        <h2 className='text-4xl'>{heading}</h2>
      </Editable>
      {contents.map((content,index)=><Content key={index} type={content.type} data={content.data}/>)}
    </Paper>
  )
}

export default Section
