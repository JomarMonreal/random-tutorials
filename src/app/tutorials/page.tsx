import { TutorialCard } from "../../components/TutorialCard"
import { tutorials } from "@/data/tutorials"
import { TutorialsTabs } from "../../components/TutorialsTabs"

const Tutorials = () => {
    return (
        <main className="flex justify-center flex-wrap">
            <TutorialsTabs/>

            <article className="flex justify-center flex-wrap">
                {
                    tutorials.map((tutorial,index)=>  
                        <TutorialCard 
                            key={index}
                            id={tutorial.id}
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



