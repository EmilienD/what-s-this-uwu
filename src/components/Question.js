import React from "react"
import { Light as SyntaxHighlighter } from "react-syntax-highlighter"
import js from "react-syntax-highlighter/dist/esm/languages/hljs/javascript"
import { tomorrowNightEighties } from "react-syntax-highlighter/dist/esm/styles/hljs"
import Moe from "./Moe"

SyntaxHighlighter.registerLanguage("javascript", js)

const Question = ({ question, answered, answeredCorrectly }) => {
  return (
    <Moe
      blushing={answered && answeredCorrectly}
      embarrassed={answered && !answeredCorrectly}
    >
      <SyntaxHighlighter
        style={tomorrowNightEighties}
        showLineNumbers
        lineNumberStyle={{ paddingRight: "2em", paddingLeft: "2em" }}
      >
        {question}
      </SyntaxHighlighter>
    </Moe>
  )
}

export default Question
