import { TutorialState } from "../tutorialReducer";

export const editTitle = (state: TutorialState, title: string): TutorialState => ({
    ...state,
    title
});
