"use client";
import { ContentType } from "./ContentType";
import { ChangeEvent } from "react";


export type SectionType = {
  heading: string;
  contents: ContentType[];
  isEditable?: boolean;
  isSelected?: boolean;
  setHeading?: (e: ChangeEvent<HTMLInputElement>) => void;
  onActive?: () => void;
};
