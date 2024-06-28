import { TutorialState } from "../tutorialReducer";

export function changeCurrentContent(state: TutorialState, index: number): TutorialState {
    return {
        ...state,
        currentContentIndex: index
    };
}
