const fs = require("fs")
const assert = require("assert")

const puzzle = JSON.parse(fs.readFileSync(process.argv.pop()))

const whats = `function(_that) {
    ${puzzle.answers
      .map(answer =>
        answer.isCorrect
          ? `assert(_that === ${answer.value}, 'answer "${answer.value}" is not equal to "this", but was expected to be');`
          : `assert(_that !== ${answer.value}, 'answer "${answer.value}" is equal to "this", but was not expected to be');`
      )
      .join("\n")}
}`

const script = puzzle.question.replace("whats", `;(${whats});`)
eval(script)
