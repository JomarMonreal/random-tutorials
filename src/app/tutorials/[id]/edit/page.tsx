"use client"

import Section from '@/components/tutorial-management/Section';
import { tutorials } from '@/data/tutorials';
import { Paper } from '@mui/material';
import { ChangeEvent, useContext, useReducer, useState } from 'react'
import { TutorialHeader } from "@/components/tutorial-management/TutorialHeader";
import { AddComponentButton } from "@/components/tutorial-management/AddComponentButton";
import { TutorialActionKind, TutorialState, tutorialReducer } from "@/reducers/tutorialReducer";
import { TutorialStateContext, TutorialStateContextType } from '@/providers/TutorialStateProvider';

const TutorialInfoEdit = ({params}:{params: {id:string}}) => {

    const {state, dispatch} = useContext(TutorialStateContext) as TutorialStateContextType

    return (
        <main className='p-8 flex flex-col md:flex-row cursor-auto gap-8'>
            <Paper component={"aside"} className='w-full md:w-72 bg-primary-100 text-white p-4'>
                <h4>Components</h4>
                <AddComponentButton 
                    label="Add Section" 
                    onClick={()=>dispatch({type: TutorialActionKind.ADD_SECTION,payload: {}}) }/>
                <AddComponentButton 
                    label="Add Paragraph" 
                    onClick={()=>dispatch({type: TutorialActionKind.ADD_PARAGRAPH,payload: {}}) }/>
            </Paper>
            
            <article className='flex-1 flex flex-col gap-8'>

                <TutorialHeader/>
                    
                {
                    state.sections.map((section,index) => 
                        <Section 
                            key={index} 
                            heading={section.heading} 
                            contents={section.contents}
                            isSelected={state.currentSectionIndex === index}
                            onActive={()=>dispatch({type:TutorialActionKind.CHANGE_CURRENT_SECTION_INDEX, payload: index})}
                        />)
                }

            </article>

        </main>
    )

}

export default TutorialInfoEdit



