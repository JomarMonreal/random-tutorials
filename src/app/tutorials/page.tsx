import { theme } from "@/themes/themes"
import { ThemeProvider } from "@mui/material"
import { ProjectCard } from "../../components/ProjectCard"

const Tutorials = () => {
    return (
        <ThemeProvider theme={theme}>
            <main className="flex justify-center flex-wrap">
                <ProjectCard 
                    title={"How to Open a Door?"} 
                    username={"DummyUser"} 
                    date={"March 19, 2024"} 
                    description={"This is a comprehensive step-by-step tutorial on how to open a door."} 
                    imageUrl={"https://i.ytimg.com/vi/xx8NZa4ptJA/maxresdefault.jpg"}
                />
                <ProjectCard 
                    title={"How to Open a Door?"} 
                    username={"DummyUser"} 
                    date={"March 19, 2024"} 
                    description={"This is a comprehensive step-by-step tutorial on how to open a door."} 
                    imageUrl={"https://i.ytimg.com/vi/xx8NZa4ptJA/maxresdefault.jpg"}
                />
                <ProjectCard 
                    title={"How to Open a Door?"} 
                    username={"DummyUser"} 
                    date={"March 19, 2024"} 
                    description={"This is a comprehensive step-by-step tutorial on how to open a door."} 
                    imageUrl={"https://i.ytimg.com/vi/xx8NZa4ptJA/maxresdefault.jpg"}
                />
                <ProjectCard 
                    title={"How to Open a Door?"} 
                    username={"DummyUser"} 
                    date={"March 19, 2024"} 
                    description={"This is a comprehensive step-by-step tutorial on how to open a door."} 
                    imageUrl={"https://i.ytimg.com/vi/xx8NZa4ptJA/maxresdefault.jpg"}
                />
                <ProjectCard 
                    title={"How to Open a Door?"} 
                    username={"DummyUser"} 
                    date={"March 19, 2024"} 
                    description={"This is a comprehensive step-by-step tutorial on how to open a door."} 
                    imageUrl={"https://i.ytimg.com/vi/xx8NZa4ptJA/maxresdefault.jpg"}
                />
                <ProjectCard 
                    title={"How to Open a Door?"} 
                    username={"DummyUser"} 
                    date={"March 19, 2024"} 
                    description={"This is a comprehensive step-by-step tutorial on how to open a door."} 
                    imageUrl={"https://i.ytimg.com/vi/xx8NZa4ptJA/maxresdefault.jpg"}
                />
            </main>
        </ThemeProvider>
    )
}

export default Tutorials


