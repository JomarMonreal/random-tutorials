import { TutorialState } from "../tutorialReducer";

export function editParagraph(state: TutorialState, paragraph: string): TutorialState {
    const newSections = [...state.sections];
    const newContents = { ...newSections[state.currentSectionIndex] }.contents;

    newContents[state.currentContentIndex] = { type: "paragraph", data: { text: paragraph } };
    newSections[state.currentSectionIndex] = { ...newSections[state.currentSectionIndex], contents: newContents };

    console.log(newSections)

    return {
        ...state,
        sections: newSections,
    };
}
