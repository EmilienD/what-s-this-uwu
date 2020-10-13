import React from "react"
import { Light as SyntaxHighlighter } from "react-syntax-highlighter"
import js from "react-syntax-highlighter/dist/esm/languages/hljs/javascript"
import { pojoaque } from "react-syntax-highlighter/dist/esm/styles/hljs"
import Moe from "./Moe"

const customPojoaque = {
  ...pojoaque,
  hljs: {
    ...pojoaque.hljs,
    minHeight: "160px",
    padding: "1em 2em",
  },
}

SyntaxHighlighter.registerLanguage("javascript", js)

const Question = ({ question, answered, answeredCorrectly }) => {
  return (
    <Moe
      blushing={answered && answeredCorrectly}
      embarrassed={answered && !answeredCorrectly}
    >
      <SyntaxHighlighter
        style={customPojoaque}
        showLineNumbers
        lineNumberStyle={{ paddingRight: "2em" }}
      >
        {question}
      </SyntaxHighlighter>
    </Moe>
  )
}

export default Question
