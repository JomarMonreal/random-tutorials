import { tutorials } from '@/data/tutorials';
import React from 'react'

type Tutorial = {
    id: string;
    title: string;
    username: string;
    date: string;
    description: string;
    coverImageUrl: string;
}

const TutorialInfo = async ({params}:{params: {id:string}}) => {
    
    const tutorial = await tutorials.find(tutorial=>tutorial.id === params.id)

    return (
        <main className='p-10'>
            <h1 className='text-6xl'>{tutorial? tutorial.title: "Title not found"}</h1>
            <p>{tutorial? tutorial.description: "No description found"}</p>
        </main>
    )
}

export default TutorialInfo