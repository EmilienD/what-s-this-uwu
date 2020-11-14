import React, { useState } from "react"
import { parse } from "query-string"
import { Form } from "react-final-form"
import { useLocation } from "@reach/router"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import Game from "../components/Game"
const localStorageAvailable = typeof window !== "undefined" && window
const useStoredAnswers = () => {
  const storedAnswers = localStorageAvailable
    ? JSON.parse(localStorage.getItem("answers")) || {}
    : {}
  const [answers, setAnswers] = useState(storedAnswers)

  const storeAnswers = answers => {
    if (localStorageAvailable) {
      localStorage.setItem("answers", JSON.stringify(answers))
    }
    setAnswers(answers)
  }

  return [answers, storeAnswers]
}

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
  const puzzleId = parse(useLocation().search).puzzle || "001"
  const puzzles = data.allPuzzlesJson.nodes

  const [storedAnswers, storeAnswers] = useStoredAnswers()
  const [showResult, setShowResult] = useState(!!storedAnswers[puzzleId])

  const currentPuzzle = puzzles.find(node => node.parent.name === puzzleId)

  return (
    <Layout>
      <SEO title="Home" />
      <Form
        onSubmit={() => {}}
        validate={values =>
          Object.keys(values).find(key => values[key])
            ? undefined
            : {
                noSelectionYet: true,
              }
        }
      >
        {() => (
          <Game
            puzzles={puzzles}
            puzzleId={puzzleId}
            showResult={showResult}
            setShowResult={setShowResult}
            storedAnswers={storedAnswers}
            storeAnswers={storeAnswers}
          />
        )}
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
