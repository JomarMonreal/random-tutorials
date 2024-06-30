import { ContentType } from "@/types/ContentType";
import { TutorialState } from "../tutorialReducer";

export function addContent(state: TutorialState, content: ContentType): TutorialState {
    if (state.currentSectionIndex === -1) return state;

    const newSections = [...state.sections];
    const newContents = [...newSections[state.currentSectionIndex].contents];

    const targetIndex = state.currentContentIndex+1
    if (state.currentContentIndex < 0) {
        newContents.splice(0, 0, content);
    } else{
        newContents.splice(targetIndex, 0, content);
    }

    newSections[state.currentSectionIndex] = { ...newSections[state.currentSectionIndex], contents: newContents };

    return {
        ...state,
        sections: newSections,
        currentContentIndex: targetIndex
    };
}