import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>wilkommen zur <br/><em>jam session</em></h1>
    <h2>Musiktheorie interaktiv verstehen.</h2>
    <p>
      <Link to="genres.js">weiter</Link> 
    </p>
  </Layout>
)

export default IndexPage
