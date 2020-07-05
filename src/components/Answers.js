import React, { useEffect } from "react"
import classNames from "classnames"
import { Field, useForm } from "react-final-form"

const Answers = ({ possibleAnswers, showResult }) => {
  const form = useForm()
  useEffect(() => {
    form.reset({})
  }, [possibleAnswers])
  return (
    <ul style={{ listStyleType: "none", fontFamily: "sans-serif" }}>
      {possibleAnswers.map((answer, i) => (
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
          key={answer.value}
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
              <label htmlFor={`answerInput${i}`} id={`answerLabel${i}`}>
                <input
                  disabled={showResult}
                  onChange={input.onChange}
                  checked={input.checked}
                  type={input.type}
                  id={`answerInput${i}`}
                />{" "}
                {answer.displayName || answer.value}
              </label>
            </li>
          )}
        </Field>
      ))}
    </ul>
  )
}
export default Answers
