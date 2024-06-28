import { TutorialState } from "../tutorialReducer";

export const changeCurrentSection = (state: TutorialState, currentSectionIndex: number): TutorialState => ({
    ...state,
    currentSectionIndex,
});
