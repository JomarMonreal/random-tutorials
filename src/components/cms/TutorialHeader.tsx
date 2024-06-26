"use client";
import { Tags } from '@/components/Tags';
import { tags } from '@/data/tags';
import { users } from '@/data/users';
import { Tutorial } from '@/types/Tutorial';
import { Paper, TextField } from '@mui/material';
import React, { SetStateAction } from 'react';
import Editable from '../Editable';

export type TutorialHeaderProps = {
    tutorial: Tutorial; 
    isEditable?: boolean,
    description: string, 
    setDescription: React.Dispatch<SetStateAction<string>>
}

export function TutorialHeader({ tutorial, isEditable=false, description, setDescription }: TutorialHeaderProps) {
    return <Paper component={"section"} className='gap-2'>
        <h1 className='text-6xl'>{tutorial ? tutorial.title : "Title not found"}</h1>
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
                    onChange={(e)=>setDescription(e.target.value)}/>
            } 
        >
            <p>{description ? description : "No description found"}</p>
        </Editable>
    </Paper>;
}
