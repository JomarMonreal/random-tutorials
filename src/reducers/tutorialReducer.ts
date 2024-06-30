import { SectionType } from "@/types/SectionType";
import { editTitle } from "./actions/editTitle";
import { editDescription } from "./actions/editDescription";
import { changeCurrentSection } from "./actions/changeCurrentSection";
import { addSection } from "./actions/addSection";
import { editSectionHeading } from "./actions/editSectionHeading";
import { addParagraph } from "./actions/addParagraph";
import { changeCurrentContent } from "./actions/changeCurrentContent";
import { editParagraph } from "./actions/editParagraph";
import { addContent } from "./actions/addContent";
import { ContentType } from "@/types/ContentType";
import { editContent } from "./actions/editContent";

export enum TutorialActionKind {
    EDIT_TITLE = "EDIT_TITLE",
    EDIT_DESCRIPTION = "EDIT_DESCRIPTION",

    CHANGE_CURRENT_SECTION_INDEX = "CHANGE_CURRENT_SECTION_INDEX",
    CHANGE_CURRENT_CONTENT_INDEX = "CHANGE_CURRENT_CONTENT_INDEX",

    ADD_SECTION = "ADD_SECTION",
    EDIT_SECTION_HEADING = "EDIT_SECTION_HEADING",

    ADD_CONTENT = "ADD_CONTENT",
    EDIT_CONTENT = "EDIT_CONTENT"
}

export interface TutorialAction {
    type: TutorialActionKind;
    payload?: string | number | ContentType;
}

export interface TutorialState {
    isEditable: boolean,
    currentSectionIndex: number,
    currentContentIndex: number,
    sections: SectionType[];
    title: string;
    description: string;

    tagIds: string[],
    authorId: string,
    date: string,
}

export const tutorialReducer = (state: TutorialState, action: TutorialAction): TutorialState => {
    const { type, payload } = action;

    switch (type) {
        case TutorialActionKind.EDIT_TITLE:
            return editTitle(state, payload as string);
        case TutorialActionKind.EDIT_DESCRIPTION:
            return editDescription(state, payload as string);
        case TutorialActionKind.CHANGE_CURRENT_SECTION_INDEX:
            return changeCurrentSection(state, payload as number);
        case TutorialActionKind.CHANGE_CURRENT_CONTENT_INDEX:
            return changeCurrentContent(state, payload as number);
        case TutorialActionKind.ADD_SECTION:
            return addSection(state);
        case TutorialActionKind.EDIT_SECTION_HEADING:
            return editSectionHeading(state, payload as string);
        case TutorialActionKind.ADD_CONTENT:
            return addContent(state, payload as ContentType);
        case TutorialActionKind.EDIT_CONTENT:
            return editContent(state, payload as ContentType);
        default:
            return state;
    }
};



