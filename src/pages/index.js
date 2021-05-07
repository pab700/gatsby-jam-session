import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section class="startseite">
    <h2>willkommen zur</h2>
    <h1>Jam Session</h1>
    <div class="intro"><h3>Musiktheorie interaktiv verstehen.</h3></div>
    <div class="startseite_weiter"></div><p><Link to="/genres/">weiter</Link></li> </p>
    </section>
  </Layout>
)

export default IndexPage
