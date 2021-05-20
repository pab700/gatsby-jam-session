import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const GenrePage = () => (
  <div class="genre">
  <Layout>
    <SEO title="Genre wählen" />
    <section class="genreseite">
    <h1>Wähle dein Genre!</h1>
    <div class="genre_auswahl">
    <ul>
    <li><Link to="/genres/hiphop/">Hip&#8209;Hop</Link></li>
    <li><Link to="/genres/lofi/">Lofi</Link></li>
    <li><Link to="/genres/soul/">Soul</Link></li>
    <li><Link to="/genres/elektro/">Elektro</Link></li>
    </ul>
    </div>
    </section>
  </Layout>
  </div>
)

export default GenrePage
