import React from "react"

const Score = ({ answers, questions }) => {
  const score = Object.keys(answers).reduce(
    (acc, key) => answers[key].score + acc,
    0
  )
  const max = questions.length
  return (
    <div style={{ height: 0 }}>
      <div
        style={{
          width: "4em",
          height: "4em",
          textAlign: "center",
          borderRadius: "100%",
          backgroundColor: "var(--yellow)",
          transform: "rotate(25deg)",
          color: "var(--black)",
          marginLeft: "auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span style={{ fontSize: "0.5em", lineHeight: "0.5em" }}>score:</span>
        {score} / {max}
      </div>
    </div>
  )
}

Score.propTypes = {}

export default Score
