import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const GenrePage = () => (
  <Layout>
    <SEO title="Genre wählen" />
    <section class="genreseite">
    <h1>Wähle dein Genre!</h1>
    <div class="genre_auswahl">
    <ul>
    <li><Link to="randb.js">R&B</Link></li>
    <li><Link to="prohouse.js">Progressive House</Link></li>
    <li><Link to="latin.js">Latin</Link></li>
    <li><Link to="chill.js">Chill</Link></li>
    </ul>
    </div>
    </section>
  </Layout>
)

export default GenrePage