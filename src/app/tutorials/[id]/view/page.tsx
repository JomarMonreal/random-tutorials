import { Tags } from '@/components/Tags';
import Section from '@/components/tutorial-management/Section';
import { tags } from '@/data/tags';
import { tutorials } from '@/data/tutorials';
import { users } from '@/data/users';
import { Paper } from '@mui/material';
import React from 'react'
import { NewsAside } from '@/components/NewsAside';

const TutorialInfo = async ({params}:{params: {id:string}}) => {
    
    const tutorial = await tutorials.find(tutorial=>tutorial.id === params.id)

    return (
        <main className='p-8 flex flex-col md:flex-row cursor-auto gap-8'>
            <article className='flex-1 flex flex-col gap-8'>

                <Paper component={"section"} className='gap-2'>
                    <h1 className='text-6xl'>{tutorial? tutorial.title: "Title not found"}</h1>
                    <Tags tags={ tags.filter(tag=>tutorial?.tagIDs.includes(tag.id)? tag.label: null).map(tag=>tag.label) }/>
                    <p><strong>Author:&ensp;</strong>{users.find(user => user.id === tutorial!.userID)?.username!}</p>
                    <i className='text-sm'>Last modified: {new Date(tutorial!.date).toLocaleString()}</i>
                    <p>{tutorial? tutorial.description: "No description found"}</p>
                </Paper>

                {
                    tutorial?.sections.map((section,index) => <Section key={index} index={section.index} heading={section.heading} contents={section.contents}/>)
                }

            </article>

            <NewsAside/>
        </main>
    )
}

export default TutorialInfo


