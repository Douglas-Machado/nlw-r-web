import { Heart } from "phosphor-react"
import { CloseButton } from '../CloseButton'

import bugImageUrl from '../../assets/bug.svg'
import ideaImageUrl from '../../assets/idea.svg'
import thoughtImageUrl from '../../assets/thought.svg'
import { useState } from "react"
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep"
import { FeedbackContentStep } from "./Steps/FeedbackContentStep"


export const feedbackTypes = {
  BUG: {
    title: 'Problema',
    image: {
      source: bugImageUrl,
      alt: 'Imagem de um inseto'
    }
  },
  IDEA: {
    title: 'Ideia',
    image: {
      source: ideaImageUrl,
      alt: 'Imagem de uma lâmpada'
    }
  },
  OTHER: {
    title: 'Outro',
    image: {
      source: thoughtImageUrl,
      alt: 'Imagem de uma nuvem de pensamento'
    }
  }
}

export type feedbackType = keyof typeof feedbackTypes

export function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<feedbackType | null>(null)

  return (
    <div className="bg-zinc-900 pt-4 pl-4 pr-4 pb-3 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">

      {!feedbackType ? (
        <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType}/>
      ) : (
        <FeedbackContentStep feedbackType={feedbackType} />
      )}


      <footer className="text-[#f7b18b] flex">
        Feito com 
        <Heart weight="fill" />  
        <a className="underline underline-offset-2" href="https://github.com/Douglas-Machado">Douglas C. Machado</a>
      </footer>
    </div>
  )
}