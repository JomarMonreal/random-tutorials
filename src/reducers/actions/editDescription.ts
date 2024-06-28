import { TutorialState } from "../tutorialReducer";

export const editDescription = (state: TutorialState, description: string): TutorialState => ({
    ...state,
    description
});
