"use client"

import { Tabs, Tab } from "@mui/material"
import { TutorialCard } from "../../components/TutorialCard"
import { tutorials } from "@/data/tutorials"
import { useState } from "react"
import { tags } from "@/data/tags"

const Tutorials = () => {
    const [value, setValue] = useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <main className="flex justify-center flex-wrap">
            <Tabs value={value} onChange={handleChange} variant="scrollable">
                {
                    tags.map((tag,index)=>
                        <Tab label={tag.label} id={`simple-tab-${index}`}/>
                    )
                }
            </Tabs>

            <article className="flex justify-center flex-wrap">
                {
                    tutorials.map((tutorial,index)=>  
                        <TutorialCard 
                            key={index}
                            title={tutorial.title} 
                            username={tutorial.username} 
                            date={new Date(tutorial.date)} 
                            description={tutorial.description} 
                            imageUrl={tutorial.coverImageUrl}
                        />
                    )
                }
            </article>
        </main>
    )
}

export default Tutorials


