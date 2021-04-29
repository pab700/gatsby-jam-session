import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>wilkommen zur jam session</h1>
    <h2>Musiktheorie interaktiv verstehen.</h2>
    <p>
      <Link to="/page-2/">weiter</Link> 
    </p>
  </Layout>
)

export default IndexPage
