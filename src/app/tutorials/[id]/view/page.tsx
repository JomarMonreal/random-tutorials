import { Tags } from '@/components/Tags';
import ConvertSectionsToTSXElement from '@/components/cms/ConvertSectionsToTSXElement';
import { tags } from '@/data/tags';
import { tutorials } from '@/data/tutorials';
import { users } from '@/data/users';
import { Paper } from '@mui/material';
import Image from 'next/image';
import React from 'react'

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

                <ConvertSectionsToTSXElement sections={tutorial?.sections!}/>

            </article>

            <Paper component={"aside"} className='w-full md:w-64 bg-primary-100 text-white p-4'>
                <h4>Random Tutorials Alpha Release</h4>
                <p>We are thrilled to announce the official launch of the Random Tutorials website on July 1, 2024. Designed to be a hub of creativity and knowledge, Random Tutorials offers a unique platform where users can explore a wide variety of tutorials on virtually any subject. From DIY projects and tech tips to cooking recipes and art lessons, our site promises a rich array of content tailored to diverse interests.</p>
                <p>Whether you're a learner looking for new skills or an expert eager to share your knowledge, Random Tutorials provides an intuitive and engaging environment for all. Dive into the randomness, discover new passions, and join our growing community of curious minds today!</p>
            </Paper>
        </main>
    )
}

export default TutorialInfo