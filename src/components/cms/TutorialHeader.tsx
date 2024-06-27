"use client";
import { Tags } from '@/components/Tags';
import { tags } from '@/data/tags';
import { users } from '@/data/users';
import { Tutorial } from '@/types/Tutorial';
import { Paper, TextField } from '@mui/material';
import React, { ChangeEvent, SetStateAction } from 'react';
import Editable from '../Editable';

export type TutorialHeaderProps = {
    tutorial: Tutorial; 
    isEditable?: boolean,
    description: string, 
    setDescription: (e: ChangeEvent<HTMLInputElement>)=>void,
    title: string, 
    setTitle: (e: ChangeEvent<HTMLInputElement>)=>void,
    isSelected?: boolean,
    onActive?: ()=>void
}

export function TutorialHeader({ tutorial, isEditable=false, description, setDescription, title, setTitle, isSelected=false, onActive=()=>{} }: TutorialHeaderProps) {
    return <Paper component={"section"} className={`${isSelected? "border-2 border-primary-100": ""} gap-2`} onClick={onActive}>
        <Editable
            isEditable={isEditable}
            editableComponent={
                <TextField value={title} onChange={setTitle} onFocus={onActive} label="Title" variant="standard" />
            }>
            <h1 className='text-6xl'>{title ? title : "Title not found"}</h1>
        </Editable>

        <Tags tags={tags.filter(tag => tutorial?.tagIDs.includes(tag.id) ? tag.label : null).map(tag => tag.label)} />
        <p><strong>Author:&ensp;</strong>{(users.find(user => user.id === tutorial!.userID)?.username)!}</p>
        <i className='text-sm'>Last modified: {new Date(tutorial!.date).toLocaleString()}</i>

        <Editable 
            isEditable={isEditable} editableComponent={
                <TextField 
                    id="standard-basic" 
                    label="Standard" 
                    variant="standard" 
                    multiline 
                    className='w-full' 
                    value={description}
                    onChange={setDescription}
                    onFocus={onActive}
                    />
            }>
            <p>{description ? description : "No description found"}</p>
        </Editable>
    </Paper>;
}
