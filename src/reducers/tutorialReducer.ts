import { SectionType } from "@/types/SectionType";

export enum TutorialActionKind {
    EDIT_TITLE = "EDIT_TITLE",
    EDIT_DESCRIPTION = "EDIT_DESCRIPTION",
    CHANGE_CURRENT_SECTION = "CHANGE_CURRENT_SECTION",

    ADD_SECTION = "ADD_SECTION",
    EDIT_SECTION_HEADING = "EDIT_SECTION_HEADING",
}

// An interface for our actions
export interface TutorialAction {
    type: TutorialActionKind;
    payload: any;
}

// An interface for our state
export interface TutorialState {
    currentSectionIndex: number,
    sections: SectionType[];
    description: string;
    title: string;
}

export const tutorialReducer = (state: TutorialState, action: TutorialAction) => {
    const { type, payload } = action
    let newState = state

    switch(type){
        // payload string
        case TutorialActionKind.EDIT_TITLE:
            newState = {
                ...state,
                title: payload as string
            }
            return newState

        // payload string
        case TutorialActionKind.EDIT_DESCRIPTION:
            newState = {
                ...state,
                description: payload as string
            }
            return newState
        
        // payload number
        case TutorialActionKind.CHANGE_CURRENT_SECTION:
            newState = {
                ...state,
                currentSectionIndex: payload as number
            }
            return newState

        // payload SectionType
        case TutorialActionKind.ADD_SECTION:
            const section: SectionType = {
                heading: "Heading",
                contents: []
            }
            
            const index = state.currentSectionIndex + 1
            const startPartition = index < 0?
                [] : [...state.sections.slice(0, index)]
            const endPartition = index >= state.sections.length ? 
                [] : [...state.sections.slice(index, state.sections.length)]

            newState = {
                ...state,
                sections: [
                    ...startPartition,
                    section,
                    ...endPartition
                ],
                currentSectionIndex: index
            }

            return newState
        
        // payload string
        case TutorialActionKind.EDIT_SECTION_HEADING:
            const newSections = [... state.sections]
            console.log(state.currentSectionIndex)
            newSections[state.currentSectionIndex] = {
                ...newSections[state.currentSectionIndex], 
                heading: payload as string
            }

            newState = {
                ...state,
                sections: newSections,
            }

            return newState

        default:
            return newState
    }
}

