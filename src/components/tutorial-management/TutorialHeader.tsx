"use client";
import { Tags } from '@/components/Tags';
import { tags as dummyTags } from '@/data/tags';
import { users } from '@/data/users';
import { Paper, TextField } from '@mui/material';
import React, { useContext } from 'react';
import Editable from '../Editable';
import { TutorialStateContext, TutorialStateContextType } from '@/providers/TutorialStateProvider';
import { TutorialActionKind } from '@/reducers/tutorialReducer';


export function TutorialHeader() {

    const {state, dispatch} = useContext(TutorialStateContext) as TutorialStateContextType
    

    return (
    <Paper 
        component={"section"} 
        className={`${state.currentSectionIndex === -1? "border-2 border-primary-100": ""} gap-2`} 
        onClick={() => dispatch({ type: TutorialActionKind.CHANGE_CURRENT_SECTION_INDEX, payload: -1 })}>

        <Editable
            isEditable={state.isEditable}
            editableComponent={
                <TextField 
                    value={state.title} 
                    onChange={(e) => dispatch({ type: TutorialActionKind.EDIT_TITLE, payload: e.target.value })} 
                    onFocus={() => dispatch({ type: TutorialActionKind.CHANGE_CURRENT_SECTION_INDEX, payload: -1 })} 
                    label="Title"
                    variant="standard" />
            }>
            <h1 className='text-6xl'>{state.title ? state.title : "Title not found"}</h1>
        </Editable>

        <Tags tags={(state.tagIds.map(tagId => dummyTags.find(dummyTag => dummyTag.id === tagId)).map(tag=>tag? tag.label: "")) ?? []} />

        <p><strong>Author:&ensp;</strong>{(users.find(user => user.id === state.authorId)?.username)!}</p>
        
        <i className='text-sm'>Last modified: {new Date(state.date).toLocaleString()}</i>

        <Editable 
            isEditable={state.isEditable} editableComponent={
                <TextField 
                    id="standard-basic" 
                    label="Standard" 
                    variant="standard" 
                    multiline 
                    className='w-full' 
                    value={state.description}
                    onChange={(e) => dispatch({ type: TutorialActionKind.EDIT_TITLE, payload: e.target.value })}
                    onFocus={() => dispatch({ type: TutorialActionKind.CHANGE_CURRENT_SECTION_INDEX, payload: -1 })}
                    />
            }>
            <p>{state.description ? state.description : "No description found"}</p>
        </Editable>
    </Paper>
    )
}
