"use client";
import { ContentType } from "./ContentType";
import { ChangeEvent } from "react";


export type SectionType = {
  index: number;
  heading: string;
  contents: ContentType[];
  isEditable?: boolean;
  isSelected?: boolean;
  setHeading?: (e: ChangeEvent<HTMLInputElement>) => void;
  onClick?: () => void;
};
