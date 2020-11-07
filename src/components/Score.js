import React from "react"

const Score = ({ answers, questions }) => {
  const score = Object.keys(answers).reduce((acc, key) => answers[key] + acc, 0)
  const max = questions.length
  return (
    <div style={{ height: 0 }}>
      <div
        style={{
          width: "4em",
          height: "4em",
          textAlign: "center",
          lineHeight: "4em",
          borderRadius: "100%",
          backgroundColor: "var(--yellow)",
          transform: "rotate(25deg)",
          color: "var(--black)",
          marginLeft: "auto",
        }}
      >
        {score} / {max}
      </div>
    </div>
  )
}

Score.propTypes = {}

export default Score
