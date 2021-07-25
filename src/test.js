const fs = require("fs")
const assert = require("assert")

const puzzlePath = process.argv.pop()
const puzzle = JSON.parse(fs.readFileSync(puzzlePath))

const whats = `function(_that) {
    ${puzzle.answers
      .map(answer =>
        answer.isCorrect
          ? `assert(_that === ${answer.value}, 'answer "${answer.value}" in "${puzzlePath}" is marked correct but is not.');`
          : `assert(_that !== ${answer.value}, 'answer "${answer.value}" in "${puzzlePath}" is correct but is not marked as such.');`
      )
      .join("\n")}
}`

const script = puzzle.question.replace("whats", `;(${whats})`)
eval(script)
