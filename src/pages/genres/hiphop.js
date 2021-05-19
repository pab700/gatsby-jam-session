import * as React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

const HiphopPage = () => (
  <Layout>
    <SEO title="Hip-Hop | JAMsession" />
    <section class="hauptseiten">
    <h1>Hip-Hop</h1>
    <div class="genre_dropdown">
    <label for="genres">Genre wechseln</label>

      <select name="genres" id="genres">
        <option value="hiphop">Hip-Hop</option>
        <option value="lofi">LoFi</option>
        <option value="soul">Soul</option>
        <option value="elektro">Elektro</option>
      </select> 
    </div> 
    </section>
  </Layout>
)

export default HiphopPage