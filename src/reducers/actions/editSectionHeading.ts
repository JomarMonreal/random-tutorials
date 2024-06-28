import { TutorialState } from "../tutorialReducer";

export const editSectionHeading = (state: TutorialState, heading: string): TutorialState => {
    const updatedSections = state.sections.map((section, i) => i === state.currentSectionIndex
        ? { ...section, heading }
        : section
    );

    return {
        ...state,
        sections: updatedSections
    };
};
