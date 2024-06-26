"use client"

import { SectionType } from "@/types/SectionType";
import Section from '@/components/cms/Section';
import { tutorials } from '@/data/tutorials';
import { Paper } from '@mui/material';
import { useState } from 'react'
import { TutorialHeader } from "@/components/cms/TutorialHeader";
import { addSection } from "@/components/cms/actions/addSection";
import { AddComponentButton } from "@/components/cms/AddComponentButton";

const TutorialInfoEdit = ({params}:{params: {id:string}}) => {
    
    const tutorial = tutorials.find(tutorial=>tutorial.id === params.id)
    const [currentSectionIndex, setCurrentSectionIndex] = useState(0)
    const [description, setDescription] = useState(tutorial?.description!)
    const [sections, setSections] = useState<SectionType[]>([])

    
    return (
        <main className='p-8 flex flex-col md:flex-row cursor-auto gap-8'>
            <Paper component={"aside"} className='w-full md:w-72 bg-primary-100 text-white p-4'>
                <h4>Components</h4>
                <AddComponentButton label="Add Section" onClick={()=>addSection("Heading",sections,setSections,setCurrentSectionIndex)}/>
            </Paper>
            
            <article className='flex-1 flex flex-col gap-8'>

                <TutorialHeader tutorial={tutorial!} isEditable={true} description={description} setDescription={setDescription}/>

                {
                    sections.map((section,index) => 
                        <Section 
                            key={index} 
                            isEditable={true}
                            isSelected={currentSectionIndex === section.index}
                            index={section.index}
                            heading={section.heading} 
                            setHeading={section.setHeading}
                            contents={section.contents}
                            onClick={()=>setCurrentSectionIndex(section.index)}
                            />)
                }

            </article>

        </main>
    )

}

export default TutorialInfoEdit


