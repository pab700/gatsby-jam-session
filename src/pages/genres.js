import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const GenrePage = () => (
  <Layout>
    <SEO title="Choose genre" />
    <h1>Choose a genre.</h1>
    <p><Link to="randb.js">R&B</Link></p>
    <p><Link to="prohouse.js">Progressive House</Link></p>
    <p><Link to="latin.js">Latin</Link></p>
    <p><Link to="chill.js">Chill</Link></p>
  </Layout>
)

export default GenrePage