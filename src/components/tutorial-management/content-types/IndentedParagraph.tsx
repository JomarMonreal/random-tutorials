import { TextField } from "@mui/material";
import Editable from "../../Editable";
import { ChangeEvent } from "react";

type IndentedParagraph = { 
  text: string, 
  setParagraph: (e: ChangeEvent<HTMLInputElement>)=>void,
  isEditable?: boolean, 
  onActive?: ()=>void,
}

export function IndentedParagraph({ text, setParagraph, isEditable=false, onActive=()=>{} }: IndentedParagraph) {
  return (
    <Editable 
      isEditable={isEditable} 
      editableComponent={
        <TextField 
          id="standard-basic" 
          label="Standard" 
          variant="standard" 
          multiline 
          className='w-full' 
          value={text}
          onChange={setParagraph}
          onFocus={onActive}
          />
      }>
      <p className=' indent-4 text-justify'>{text}</p>
    </Editable>
  )
}
