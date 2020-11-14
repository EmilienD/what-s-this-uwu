import React from "react"
import classNames from "classnames"
import { Field } from "react-final-form"

const Answers = ({ possibleAnswers, showResult, puzzleId }) => {
  return (
    <ul style={{ listStyleType: "none", fontFamily: "sans-serif" }}>
      {possibleAnswers.map(answer => (
        <Field
          type="checkbox"
          name={answer.value}
          validate={value => {
            if (!!value !== !!answer.isCorrect) {
              return answer.isCorrect
                ? "shouldHaveBeenSelected"
                : "shouldNotHaveBeenSelected"
            }
          }}
          key={`${puzzleId}_${answer.value}`}
        >
          {({ input, meta }) => (
            <li
              className={classNames(
                "answerContainer",
                showResult && {
                  error: meta.error,
                  correct: !meta.error,
                  isSelected: input.checked,
                }
              )}
            >
              <label
                htmlFor={`${puzzleId}_${answer.value}`}
                id={`answerLabel_${puzzleId}_${answer.value}`}
              >
                <input
                  disabled={showResult}
                  onChange={input.onChange}
                  type="checkbox"
                  checked={input.checked}
                  id={`${puzzleId}_${answer.value}`}
                />{" "}
                <span>{answer.displayName || answer.value}</span>
              </label>
            </li>
          )}
        </Field>
      ))}
    </ul>
  )
}
export default Answers
