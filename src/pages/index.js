import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <div class="yellowbg">
  <Layout>
    <SEO title="Home" />
    <section class="startseite">
    <h2>willkommen zur</h2>
    <h1>Jam Session</h1>
    <h3>Musiktheorie interaktiv verstehen.</h3>
    <p id="weiterbtn"><Link to="/genres/">weiter</Link></p>
    </section>
  </Layout>
  </div>
)

export default IndexPage
