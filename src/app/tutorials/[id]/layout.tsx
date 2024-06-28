import TutorialStateProvider from '@/providers/TutorialStateProvider';
import React from 'react'

const TutorialLayout = ({children, params}: {children: React.ReactNode, params: {id:string}}) => {
  return (
    <TutorialStateProvider params={params}>
        {children}
    </TutorialStateProvider>
  )
}

export default TutorialLayout