import { TutorialCard } from "../../components/TutorialCard"
import { tutorials } from "@/data/tutorials"
import { TutorialsTabs } from "../../components/TutorialsTabs"
import { tags } from "@/data/tags"
import { users } from "@/data/users"

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
                            username={users.find(user => user.id === tutorial.userID)?.username!} 
                            date={new Date(tutorial.date)} 
                            description={tutorial.description} 
                            imageUrl={tutorial.coverImageUrl}
                            tags={tutorial.tagIDs.map(tagID => tags.find(tag=>tag.id === tagID)?.label!)}
                        />
                    )
                }
            </article>
        </main>
    )
}

export default Tutorials



