"use client"

import Section from '@/components/tutorial-management/Section';
import { Paper } from '@mui/material';
import { useContext } from 'react'
import { TutorialHeader } from "@/components/tutorial-management/TutorialHeader";
import { AddComponentButton } from "@/components/tutorial-management/AddComponentButton";
import { TutorialActionKind } from "@/reducers/tutorialReducer";
import { TutorialStateContext, TutorialStateContextType } from '@/providers/TutorialStateProvider';

const TutorialInfoEdit = () => {

    const {state, dispatch} = useContext(TutorialStateContext) as TutorialStateContextType

    return (
        <main className='p-8 flex flex-col md:flex-row cursor-auto gap-8'>
            <Paper component={"aside"} className='w-full md:w-72 bg-primary-100 text-white p-4'>
                <h4>Components</h4>
                <AddComponentButton 
                    label="Add Section" 
                    onClick={()=>dispatch({type: TutorialActionKind.ADD_SECTION}) }/>
                <AddComponentButton 
                    label="Add Paragraph" 
                    onClick={()=>
                        dispatch({
                            type: TutorialActionKind.ADD_CONTENT,
                            payload: {type: "paragraph", data: {text: "Write paragraph here..."}}
                        })
                    }/>
                <AddComponentButton 
                    label="Add Image" 
                    onClick={()=>
                        dispatch({
                            type: TutorialActionKind.ADD_CONTENT,
                            payload: {type: "image", data: {url: "", caption: "Figure X. Write caption here"}}
                        })
                    }/>
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



