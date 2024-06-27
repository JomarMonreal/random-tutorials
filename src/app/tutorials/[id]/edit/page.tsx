"use client"

import Section from '@/components/cms/Section';
import { tutorials } from '@/data/tutorials';
import { Paper } from '@mui/material';
import { ChangeEvent, useReducer, useState } from 'react'
import { TutorialHeader } from "@/components/cms/TutorialHeader";
import { AddComponentButton } from "@/components/cms/AddComponentButton";
import { TutorialActionKind, tutorialReducer } from "@/reducers/tutorialReducer";

const TutorialInfoEdit = ({params}:{params: {id:string}}) => {
    
    const tutorial = tutorials.find(tutorial=>tutorial.id === params.id)

    const [tutorialState, dispatch] = useReducer(tutorialReducer,{
        currentSectionIndex:- 1,
        sections: tutorial?.sections ?? [],
        description: tutorial?.description ?? "",
        title: tutorial?.title ?? ""
    })

    return (
        <main className='p-8 flex flex-col md:flex-row cursor-auto gap-8'>
            <Paper component={"aside"} className='w-full md:w-72 bg-primary-100 text-white p-4'>
                <h4>Components</h4>
                <AddComponentButton 
                    label="Add Section" 
                    onClick={()=>
                        dispatch({
                            type: TutorialActionKind.ADD_SECTION,
                            payload: {}
                        }) 
                    }/>
            </Paper>
            
            <article className='flex-1 flex flex-col gap-8'>

                <TutorialHeader 
                    tutorial={tutorial!} 
                    isEditable={true} 
                    description={tutorialState.description} 
                    setDescription={(e)=>dispatch({type: TutorialActionKind.EDIT_DESCRIPTION, payload: e.target.value})}
                    title={tutorialState.title}
                    setTitle={(e)=>dispatch({type: TutorialActionKind.EDIT_TITLE, payload: e.target.value})}
                    isSelected={tutorialState.currentSectionIndex === -1}
                    onActive={()=>dispatch({type:TutorialActionKind.CHANGE_CURRENT_SECTION, payload: -1})}
                    />
                    
                {
                    tutorialState.sections.map((section,index) => 
                        <Section 
                            key={index} 
                            isEditable={true}
                            isSelected={tutorialState.currentSectionIndex === index}
                            heading={section.heading} 
                            setHeading={(e: ChangeEvent<HTMLInputElement>) => {
                                dispatch({
                                    type: TutorialActionKind.EDIT_SECTION_HEADING,
                                    payload: e.target.value
                                });
                            }}
                            contents={section.contents}
                            onActive={()=>dispatch({type:TutorialActionKind.CHANGE_CURRENT_SECTION, payload: index})}
                        />)
                }

            </article>

        </main>
    )

}

export default TutorialInfoEdit



