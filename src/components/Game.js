import React, { useEffect } from "react"
import { useForm, useFormState } from "react-final-form"
import { Link } from "gatsby"

import Answers from "../components/Answers"
import Question from "../components/Question"
import Score from "../components/Score"

const Game = ({
  showResult,
  setShowResult,
  storedAnswers,
  storeAnswers,
  puzzles,
  puzzleId,
}) => {
  const form = useForm()
  const { errors, values } = useFormState()
  const answeredCorrectly = Object.keys(errors).length === 0

  const currentPuzzleIndex = puzzles.findIndex(
    node => node.parent.name === puzzleId
  )
  const nextPuzzleId =
    puzzles[(currentPuzzleIndex + 1) % puzzles.length].parent.name

  const currentPuzzle = puzzles[currentPuzzleIndex]
  const possibleAnswers = currentPuzzle.answers
  useEffect(() => {
    const hasStoredAnswer = !!storedAnswers[puzzleId]
    const storedAnswer = hasStoredAnswer ? storedAnswers[puzzleId].values : {}
    form.reset(storedAnswer)
    setShowResult(hasStoredAnswer)
  }, [form, puzzleId, setShowResult, storedAnswers])
  return (
    <>
      <Question
        question={currentPuzzle.question}
        answered={showResult}
        answeredCorrectly={answeredCorrectly}
      />
      <Score answers={storedAnswers} questions={puzzles} />
      <form
        onSubmit={e => {
          e.preventDefault()
          storeAnswers({
            ...storedAnswers,
            [puzzleId]: { score: answeredCorrectly ? 1 : -1, values },
          })
          setShowResult(true)
        }}
      >
        <Answers
          possibleAnswers={possibleAnswers}
          showResult={showResult}
          puzzleId={puzzleId}
        />
        {showResult ? (
          <Link className="button main" to={`?puzzle=${nextPuzzleId}`}>
            Another one
          </Link>
        ) : (
          <button
            disabled={errors.noSelectionYet}
            className="button main"
            type="submit"
          >
            Validate me senpaï
          </button>
        )}
      </form>
    </>
  )
}

export default Game
