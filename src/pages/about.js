import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const About = () => {
  return (
    <Layout>
      <SEO title="About" />
      <ul style={{ listStyleType: "none" }} className="about-list">
        <li>
          <details>
            <summary>Why is DJ Khaled yelling at me?</summary>
            ¯\_(ツ)_/¯
          </details>
        </li>
        <li>
          <details>
            <summary>But more generally, why?</summary>
            If you've ever found yourself contibuting to an old Javascript
            codebase, or simply struggled as a beginner trying to do object
            oriented Javascript, chances are that you've been in a situation
            prompting the question{" "}
            <q>
              What is the value of <code>this</code> at that point during
              execution?
            </q>
            , or to put it more succintly,{" "}
            <q>
              What's <code>this</code>? UωU
            </q>
            .
            <br />I thought it would be funny to bring the meme and the
            sometimes harrowing experience together into a small game.
          </details>
        </li>
        <li>
          <details>
            <summary>Can I add a puzzle?</summary>
            For sure, simply make{" "}
            <a href="https://github.com/EmilienD/what-s-this-uwu/">
              a pull request on Github
            </a>
            .
          </details>
        </li>
        <li>
          <details>
            <summary>How do I get in touch?</summary>
            You can reach me at{" "}
            <a href="mailto://contact@whatisthisuwu.xyz">
              contact@whatisthisuwu.xyz
            </a>
            .
          </details>
        </li>
        <li>
          <details>
            <summary>How is it built?</summary>
            It's a simple React app built with{" "}
            <a href="https://www.gatsbyjs.org">Gatsby</a>, hosted on{" "}
            <a href="https://m.do.co/c/eae6c8ea40ea">DigitalOcean's</a> app
            platform (this is a referral link, you get 100$ free credit for 60
            days and I get 25$ free credit if you spend 25$ with them) .
          </details>
        </li>
        <li>
          <details>
            <summary>Can I reset?</summary>
            Sure,{" "}
            <button
              onClick={() => {
                localStorage.setItem("answers", JSON.stringify({}))
              }}
              type="button"
            >
              click here
            </button>
          </details>
        </li>
        <li>
          <details>
            <summary>Is it cheating to actually execute the script?</summary>
            It is, but nobody's watching ;)
          </details>
        </li>
      </ul>
    </Layout>
  )
}

export default About
