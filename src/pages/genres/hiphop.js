import * as React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

const HiphopPage = () => (
  <Layout>
    <SEO title="Hip-Hop | JAMsession" />
    <section class="hauptseiten">
    <h1>Hip-Hop</h1>

    <div class="topnav" id="myTopnav">
      <div class="dropdown">
        <button class="dropbtn">GENRE WECHSELN 
        <i class="fa fa-caret-down"></i>
    </button>
        <div class="dropdown-content">
          <Link to="/genres/lofi/">LoFi</Link>
          <Link to="/genres/soul/">Soul</Link>
          <Link to="/genres/elektro/">Elektro</Link>
        </div>
      </div> 
  </div>

  <div class="lernlink">
    <Link to="/lernecke/elektrolernecke/">LERNECKE</Link>
  </div>

  </section>

  </Layout>

)

export default HiphopPage
