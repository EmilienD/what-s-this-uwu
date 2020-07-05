import React from "react"
import { Light as SyntaxHighlighter } from "react-syntax-highlighter"
import js from "react-syntax-highlighter/dist/esm/languages/hljs/javascript"
import { tomorrowNightEighties } from "react-syntax-highlighter/dist/esm/styles/hljs"

SyntaxHighlighter.registerLanguage("javascript", js)

const Question = ({ question }) => {
  return (
    <SyntaxHighlighter style={tomorrowNightEighties}>
      {question}
    </SyntaxHighlighter>
  )
}

export default Question
