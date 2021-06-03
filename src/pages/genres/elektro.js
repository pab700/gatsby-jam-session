import * as React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

const ElektroPage = () => (
  <body>
    <div class="yellowbg">
        <Layout>
          <SEO title="Elektro" />
          <section class="hauptseiten">
            <div class="header">
             <div class="topnav">

                <div class="dropdown">
                <button class="dropbtn">GENRE WECHSELN 
                    <i class="fa fa-caret-down"></i>
                </button>

                <div class="dropdown-content">
                    <Link to="/genres/lofi/" id="Lofidropdown">Lofi</Link>
                    <Link to="/genres/soul/" id="Souldropdown">Soul</Link>
                    <Link to="/genres/hiphop/" id="Hip-Hopdropdown">Hip-Hop</Link>
                </div>

                </div> 

            </div>

           <div class="titel">
             <h1>JAM SESSION</h1>
             <h2>Elektro</h2>
           </div> 

           <div class="lernlink">
            <Link to="/lernecke/elektrolernecke/">LERNECKE</Link>
           </div>
          </div>

          <div class="main-buttons_wrapper">
              <div class="main-button" id="drum-1">
                
              </div>
              <div class="main-button" id="drum-2">

              </div>
              <div class="main-button" id="drum-3">

              </div>
              <div class="main-button" id="drum-4">

              </div>
          </div>
        </section>
      
        </Layout>
        </div>
</body>
)

export default ElektroPage