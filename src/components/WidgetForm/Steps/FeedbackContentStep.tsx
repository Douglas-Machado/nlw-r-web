import { ArrowLeft, Camera } from "phosphor-react";
import { FormEvent, useState } from "react";
import { FeedbackType, feedbackTypes } from "..";
import { CloseButton } from "../../CloseButton"
import { ScreenshotButton } from "../ScreenshotButton";

interface FeedbackContentStepProps {
  feedbackType: FeedbackType;
  onFeedbackRestartRequested: () => void;
  onFeedbackSent: () => void;
}

export function FeedbackContentStep({ 
  feedbackType, 
  onFeedbackRestartRequested,
  onFeedbackSent
}: FeedbackContentStepProps ) {

  const [screenshot, setScreenshot] = useState<string | null>(null)
  const [comment, setComment] = useState('')

  const FeedbackTypeInfo = feedbackTypes[feedbackType]

  function handleSubmitFeedback(e: FormEvent) {
    e.preventDefault()

    onFeedbackSent()
  }

  return(
    <>
      <header>
        <button 
          type="button"
          className="top-5 left-5 absolute text-zinc-400 hover:400"
          onClick={onFeedbackRestartRequested}
        >
          <ArrowLeft  weight="bold" className="w-4 h-4"/>
        </button>

        <span className="text-xl leading-6">
          {FeedbackTypeInfo.title}
        </span>

        <CloseButton />
      </header>
      <form className="my-4 w-full" onSubmit={e => handleSubmitFeedback(e)}>
        <textarea
          onChange={e => setComment(e.target.value)}
          className="
            min-w-[304px] w-full min-h-[112px]
            text-sm
          placeholder:text-zinc-400 border-zinc-600 bg-transparent 
            rounded-md
          focus:border-brand-500 focus:ring-brand-500 focus:ring-1 focus:outline-none
            resize-none
          scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin"
          placeholder="Conte com detalhes o que está acontecendo..."/>

          <footer className="flex gap-2 mt-2">
            <ScreenshotButton 
              onScreenshotTook={setScreenshot}
              screenshot={screenshot}
            />

            <button
              type="submit"
              disabled={comment.length === 0}
              className="
                p-2 bg-brand-500 rounded-md border-transparent
                flex-1 flex justify-center items-center text-sm hover:bg-brand-300
                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500
                transition-colors
                disabled:opacity-50 disabled:hover:bg-brand-500
            ">
              Enviar Feedback
            </button>
          </footer>
      </form>
    </>
  )
}