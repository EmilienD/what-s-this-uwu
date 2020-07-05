import React, { useState, useEffect } from "react"
import { parse } from "query-string"
import { Form } from "react-final-form"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql, Link } from "gatsby"
import Answers from "../components/Answers"
import Question from "../components/Question"
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
const IndexPage = ({ data, location }) => {
  const { puzzle = "001" } = parse(location.search)
  const puzzles = data.allPuzzlesJson.nodes
  const currentPuzzleIndex = puzzles.findIndex(
    node => node.parent.name === puzzle
  )
  const currentPuzzle = puzzles[currentPuzzleIndex]
  const [showResult, setShowResult] = useState(false)
  const possibleAnswers = currentPuzzle.answers
  useEffect(() => {
    setShowResult(false)
  }, [puzzle])
  return (
    <Layout>
      <SEO title="Home" />
      <Question question={currentPuzzle.question} />
      <Form onSubmit={() => {}}>
        {({ errors }) =>
          console.log(errors) || (
            <form
              onSubmit={e => {
                e.preventDefault()
                setShowResult(true)
              }}
            >
              <Answers
                possibleAnswers={possibleAnswers}
                showResult={showResult}
                puzzle={puzzle}
              />
              <button type="submit">Validate me senpaï</button>
            </form>
          )
        }
      </Form>
      <Link
        to={`?puzzle=${
          puzzles[
            currentPuzzleIndex === 0
              ? puzzles.length - 1
              : currentPuzzleIndex - 1
          ].parent.name
        }`}
      >
        Previous
      </Link>
      <Link
        to={`?puzzle=${
          puzzles[(currentPuzzleIndex + 1) % puzzles.length].parent.name
        }`}
      >
        {" "}
        Next
      </Link>
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
