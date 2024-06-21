"use client"

import { Dispatch, ReactNode, SetStateAction, createContext, useState } from "react"

export const PopupContext = createContext({})

export type PopupContextType = {
    isOpen: boolean
    setIsOpen: Dispatch<SetStateAction<boolean>>
    child: ReactNode
    setChild: Dispatch<SetStateAction<ReactNode>>
}

const PopupProvider = ({children}:{children: ReactNode}) => {
    const [isOpen, setIsOpen] = useState(false)
    const [child, setChild] = useState()

    return (
        <PopupContext.Provider value={{ isOpen, setIsOpen, child, setChild }}>
            {children}
        </PopupContext.Provider>
    )
}

export default PopupProvider