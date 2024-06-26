import { SectionType } from "@/types/SectionType";

export type Tutorial = {
    id: string; 
    title: string; 
    userID: string; 
    date: string; 
    description: string; 
    coverImageUrl: string; 
    tagIDs: string[]; 
    sections: SectionType[]
}