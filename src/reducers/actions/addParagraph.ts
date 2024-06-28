import { TutorialState } from "../tutorialReducer";

export function addParagraph(state: TutorialState): TutorialState {
    if (state.currentSectionIndex === -1) return state;

    const newSections = [...state.sections];
    const newContents = [...newSections[state.currentSectionIndex].contents];
    const content = { ...newContents[state.currentContentIndex],type: "paragraph", data: { text: "Write a paragraph here" } };

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
