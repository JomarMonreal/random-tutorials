import { Button } from "@mui/material";
import { ReactNode } from "react";

interface PageOverviewProps{
  isContentStart: boolean
  title: string
  description: string
  buttonLabel: string
  bgStyleClassses?: string
  buttonStyleClasses?: string
  children?: ReactNode
}

export function PageOverview (
  {isContentStart,title,description,buttonLabel,bgStyleClassses="", buttonStyleClasses="button-default", children}: PageOverviewProps) {

  return (
    <article className={`page-overview ${isContentStart? "flex-row": "flex-row-reverse"} ${bgStyleClassses}`}>

      <div className="w-1/2 h-full">
        {children}
      </div>

      <section className="w-96 flex flex-col items-center text-center">
        <h2>{title}</h2>
        <p className="my-10">
          {description}
        </p>
        <Button variant="outlined" className={`${buttonStyleClasses} ${isContentStart? "button-default": "button-white"}`}>
          {buttonLabel}
          </Button>
      </section>

    </article>
  )
}
