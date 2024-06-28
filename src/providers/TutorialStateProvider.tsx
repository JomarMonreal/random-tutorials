"use client"

import { tutorials } from '@/data/tutorials'
import { TutorialAction, TutorialState, tutorialReducer } from '@/reducers/tutorialReducer'
import React, { Dispatch, ReactNode, SetStateAction, createContext, useReducer, useState } from 'react'

export const TutorialStateContext = createContext({})

export type TutorialStateContextType = { 
    isEditable: false,
    state: TutorialState,
    dispatch: Dispatch<SetStateAction<TutorialAction>>
}

const TutorialStateProvider = ({params, children}:{params: {id:string}, children: ReactNode}) => {
    const tutorial = tutorials.find(tutorial=>tutorial.id === params.id)
    const [isEditable, setIsEditable] = useState(true)
    
    const initialTutorialState: TutorialState = {
        isEditable: isEditable,
        currentSectionIndex:- 1,
        currentContentIndex: -1,
        sections: tutorial?.sections ?? [],
        description: tutorial?.description ?? "",
        title: tutorial?.title ?? "",

        tagIds: tutorial?.tagIDs?? [],
        authorId: tutorial?.id ?? "",
        date: tutorial?.date ?? ""

    }
    const [state, dispatch] = useReducer(tutorialReducer,initialTutorialState)
    

    return (
        <TutorialStateContext.Provider value={{isEditable, state, dispatch}}>
            {children}
        </TutorialStateContext.Provider>
    )
}

export default TutorialStateProvider