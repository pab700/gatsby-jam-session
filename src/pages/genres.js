import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const GenrePage = () => (
  <Layout>
    <SEO title="Choose genre" />
    <h1>Choose a genre.</h1>
    <p><Link to="genres/randb.js">R&B</Link></p>
    <p><Link to="genres/prohouse.js">Progressive House</Link></p>
    <p><Link to="genres/latin.js">Latin</Link></p>
    <p><Link to="genres/chill.js">Chill</Link></p>
  </Layout>
)

export default GenrePage