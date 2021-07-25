/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <main>{children}</main>
        <footer style={{}}>
          <a href="https://www.digitalocean.com/?refcode=eae6c8ea40ea&utm_campaign=Referral_Invite&utm_medium=Referral_Program&utm_source=badge">
            <img
              src="https://web-platforms.sfo2.digitaloceanspaces.com/WWW/Badge%203.svg"
              alt="DigitalOcean Referral Badge"
            />
          </a>
          <br />
          Original moe image by{" "}
          <a href="https://pixabay.com/users/akane-k-8075952/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=3793863">
            Akane-K
          </a>{" "}
          from{" "}
          <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=3793863">
            Pixabay
          </a>
          <br />
          <Link to="/about">About this page</Link>
          <span style={{ float: "right" }}>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </span>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
