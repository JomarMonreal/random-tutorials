import { getRandomInt } from "@/utils/randomizer"
import { Orange } from "./ColoredText"
import { useEffect, useState } from "react"

const PartlyOrangeText = ({orangeLettersCount, text, delay}:{orangeLettersCount: number, text: string, delay: number}) => {

    const [result, setResult] = useState<React.JSX.Element[]>()

    useEffect(() => {
        changePartsToOrange()
        const changePartsToOrangeByInterval = setInterval(changePartsToOrange,delay)

        return ()=> clearInterval(changePartsToOrangeByInterval)

    }, []);

    const changePartsToOrange = () =>{
        const orangeLetterIndices = new Set()
    
        while (orangeLetterIndices.size <  orangeLettersCount) {
            const randomIndex = getRandomInt(text.length)
            orangeLetterIndices.add(randomIndex) 
        }
    
        const textArray = text.split("")
        setResult(
            textArray.map((char,index)=>{
                if(orangeLetterIndices.has(index)){
                    return (
                        <Orange key={index}>{char}</Orange>
                    )
                }
                return <span key={index}>{char}</span>
            })
        ) 
    }

    return (
        <>{result}</>
    )
}

export default PartlyOrangeText