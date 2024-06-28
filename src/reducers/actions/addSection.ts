import { SectionType } from "@/types/SectionType";
import { TutorialState } from "../tutorialReducer";

export const addSection = (state: TutorialState): TutorialState => {
    const section: SectionType = {
        heading: "Heading",
        contents: []
    };

    const targetIndex = state.currentSectionIndex+1

    const newSections = [...state.sections]
    if(state.currentSectionIndex < 0){
        newSections.splice(0, 0, section)
    } else{
        newSections.splice(targetIndex, 0, section)
    }

    return {
        ...state,
        sections: newSections,
        currentSectionIndex: targetIndex
    };
};
