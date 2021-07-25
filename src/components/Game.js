import React, { useEffect, useState } from "react"
import { useForm, useFormState } from "react-final-form"
import { Link } from "gatsby"

import Answers from "../components/Answers"
import Question from "../components/Question"
import Score from "../components/Score"
import anotherOne from "../media/AnotherShortOne.mp3"
import baka from "../media/baka.mp3"
import UwU from "../media/UwU.mp3"

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
  const [showHelp, setShowHelp] = useState(false)
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
            [puzzleId]: { score: answeredCorrectly ? 1 : 0, values },
          })
          new Audio(answeredCorrectly ? UwU : baka).play()
          setShowResult(true)
        }}
      >
        <Answers
          possibleAnswers={possibleAnswers}
          showResult={showResult}
          puzzleId={puzzleId}
        />
        {showResult ? (
          <Link
            className="button main"
            to={`?puzzle=${nextPuzzleId}`}
            onPointerDown={() => {
              const sample = new Audio(anotherOne)
              sample.play()
            }}
          >
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
        <button
          className="help-button"
          onClick={() => {
            setShowHelp(!showHelp)
          }}
          type="button"
        >
          How do I play this game?
        </button>
        {showHelp && (
          <p>
            <br />
            The anime girl is showing you a short program. Guess the value of{" "}
            <code>this</code> when passed to the <code>whats</code> function at
            execution time. There's at least one correct answer, selecting all
            the corrects answers gets you one point. Validation is shown as{" "}
            <span className="help help-error">Wrong answer</span>,{" "}
            <span className="help help-correct">Correct answer</span> and{" "}
            <span className="help help-missed">Missed answer</span>
          </p>
        )}
      </form>
    </>
  )
}

export default Game
