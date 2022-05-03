import { feedbackType, feedbackTypes } from "..";
import { CloseButton } from "../../CloseButton"

interface FeedbackContentStepProps {
  feedbackType: feedbackType;
}

export function FeedbackContentStep({ feedbackType}: FeedbackContentStepProps ) {
  const FeedbackTypeInfo = feedbackTypes[feedbackType]

  return(
    <>
      <header>
        <span className="text-xl leading-6">
          {FeedbackTypeInfo.title}
        </span>

        <CloseButton />
      </header>
      <div className="flex py-8 gap-2 w-full">
      </div>
    </>
  )
}