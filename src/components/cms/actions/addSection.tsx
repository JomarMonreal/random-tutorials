"use client";
import { SectionType } from "@/types/SectionType";
import React from 'react';

export const addSection = (
    heading: string,
    sections: SectionType[],
    setSections: React.Dispatch<React.SetStateAction<SectionType[]>>,
    setCurrentSectionIndex: React.Dispatch<React.SetStateAction<number>>
) => {

    const setHeading = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {

        setSections((prevSectionsProps) => {
            const newSectionsProps = [...prevSectionsProps];

            newSectionsProps[index] = {
                ...newSectionsProps[index],
                heading: e.target.value
            };

            return newSectionsProps;
        });
    };

    const index = sections.length;
    const section: SectionType = {
        index: index,
        heading: heading,
        setHeading: (e) => { setHeading(e, index); },
        contents: []
    };

    setCurrentSectionIndex(index);
    setSections((sections) => [...sections, section]);
};
