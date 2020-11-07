import React, { useState, useEffect } from "react"
import { parse } from "query-string"
import { Form } from "react-final-form"
import { useLocation } from "@reach/router"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql, Link } from "gatsby"
import Answers from "../components/Answers"
import Question from "../components/Question"
import Score from "../components/Score"

export const query = graphql`
  query GetPuzzles {
    allPuzzlesJson {
      nodes {
        answers {
          value
          displayName
          isCorrect
        }
        question
        id
        parent {
          ... on File {
            relativePath
            name
          }
        }
      }
    }
  }
`
const IndexPage = ({ data }) => {
  const { puzzle = "001" } = parse(useLocation().search)
  const puzzles = data.allPuzzlesJson.nodes
  const currentPuzzleIndex = puzzles.findIndex(
    node => node.parent.name === puzzle
  )
  const currentPuzzle = puzzles[currentPuzzleIndex]
  const [showResult, setShowResult] = useState(false)
  const [answers, setAnswers] = useState({})
  const possibleAnswers = currentPuzzle.answers
  useEffect(() => {
    setShowResult(false)
  }, [puzzle])
  return (
    <Layout>
      <SEO title="Home" />
      <Form onSubmit={() => {}}>
        {({ errors }) => {
          const answeredCorrectly = Object.keys(errors).length === 0
          return (
            <>
              <Question
                question={currentPuzzle.question}
                answered={showResult}
                answeredCorrectly={answeredCorrectly}
              />
              <Score answers={answers} questions={puzzles} />
              <form
                onSubmit={e => {
                  e.preventDefault()
                  setAnswers({
                    ...answers,
                    [puzzle]: answeredCorrectly ? 1 : -1,
                  })
                  setShowResult(true)
                }}
              >
                <Answers
                  possibleAnswers={possibleAnswers}
                  showResult={showResult}
                  puzzle={puzzle}
                />
                {showResult ? (
                  <Link
                    className="button main"
                    to={`?puzzle=${
                      puzzles[(currentPuzzleIndex + 1) % puzzles.length].parent
                        .name
                    }`}
                  >
                    Another one
                  </Link>
                ) : (
                  <button className="button main" type="submit">
                    Validate me senpaï
                  </button>
                )}
              </form>
            </>
          )
        }}
      </Form>
      <p>
        Something wrong with this puzzle? Create an issue on{" "}
        <a
          href={`https://github.com/EmilienD/what-s-this-uwu/issues/new?title=problem%20with%20${encodeURIComponent(
            currentPuzzle.parent.relativePath
          )}`}
        >
          github
        </a>
        .
      </p>
    </Layout>
  )
}

export default IndexPage
