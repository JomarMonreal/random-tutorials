import { Paper } from "@mui/material"
import ConvertContentToTSXElement, { Content } from "./ConvertContentToTSXElement"

export type Section = {
  header: string,
  contents: Content[]
}

const ConvertSectionsToTSXElement = ({sections}:{sections: Section[]}) => {
  return (
    <>
        {
          sections.map((section, index) => 
            <Paper key={index} component={"section"}>
              <h2 className='text-4xl'>{section.header}</h2>
              {
                section.contents.map((content,index) => 
                  <ConvertContentToTSXElement key={index} content={content}/>
                )
              }
            </Paper>
          )
        }
    </>
  )
}

export default ConvertSectionsToTSXElement