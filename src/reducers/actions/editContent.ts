import { ContentType } from "@/types/ContentType";
import { TutorialState } from "../tutorialReducer";

export function editContent(state: TutorialState, content: ContentType): TutorialState {
    const newSections = [...state.sections];
    const newContents = { ...newSections[state.currentSectionIndex] }.contents;

    newContents[state.currentContentIndex] = content;
    newSections[state.currentSectionIndex] = { ...newSections[state.currentSectionIndex], contents: newContents };

    console.log(newSections)

    return {
        ...state,
        sections: newSections,
    };
}