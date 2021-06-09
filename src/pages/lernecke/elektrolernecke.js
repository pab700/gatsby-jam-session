import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

const ElektrolerneckePage = () => (

  <body class="bluebg">
    <div >
      <Layout>
        <SEO title="Elektrolernecke" />
        <section class="lerneckeMain">
          <div class="headerLernecke">

            <div class="sessionLink" ><Link to="/genres/elektro">ZURÜCK ZUR SESSION</Link></div>

            <div class="lerneckeTitel">
              <div><img></img></div>
              <h1>ELEKTRO</h1>
              <h2>LERNECKE</h2>
            </div>


            <div class="theorieLink"><Link to="/genres/elektro">MUSIKTHEORIE</Link></div>

          </div>


          <div class="allPlayerWrapper">

          <div class="firstRowPlayerLerneckeWrapper">

            <div class="firstSample">
              <div class="title">
                <h3>Drums</h3>
                <div class="PlayerWhiteLernecke">
                </div>
              </div>



              <div class="SampleList">

                <div class="titleList">
                  <ul>
                    <li><h4>TITEL</h4></li>
                    <li><h4>BPM</h4></li>
                    <li><h4>KEY</h4></li>
                  </ul>
                </div>

                <div class="attributeList">
                  <ul>
                    <li>Uptempo-Drums</li>
                    <li>138</li>
                    <li>B minor</li>
                  </ul>
                </div>


              </div>
            </div>

            <div class="secondSample">
              <div class="title">
                <h3>Bass</h3>
                <div class="PlayerGrayLernecke">
                </div>
              </div>



              <div class="SampleList">

                <div class="titleList">
                  <ul>
                    <li><h4>TITEL</h4></li>
                    <li><h4>BPM</h4></li>
                    <li><h4>KEY</h4></li>
                  </ul>
                </div>

                <div class="attributeList">
                  <ul>
                    <li>Wavetable-Synth-Bass</li>
                    <li>138</li>
                    <li>B minor</li>
                  </ul>
                </div>


              </div>
            </div>

          </div>


          <div class="secondRowPlayerLerneckeWrapper">
            <div class="thirdSample">
              <div class="title">
                <h3>Hauptmelodie</h3>
                <div class="PlayerBlackLernecke">
                </div>
              </div>



              <div class="SampleList">

                <div class="titleList">
                  <ul>
                    <li><h4>TITEL</h4></li>
                    <li><h4>BPM</h4></li>
                    <li><h4>KEY</h4></li>
                  </ul>
                </div>

                <div class="attributeList">
                  <ul>
                    <li>Vocal-Chop als Melodie</li>
                    <li>138</li>
                    <li>B minor</li>
                  </ul>
                </div>


              </div>
            </div>

            <div class="fourthSample">
              <div class="title">
                <h3>Perc</h3>
                <div class="PlayerElektroLernecke">
                </div>
              </div>



              <div class="SampleList">

                <div class="titleList">
                  <ul>
                    <li><h4>TITEL</h4></li>
                    <li><h4>BPM</h4></li>
                    <li><h4>KEY</h4></li>
                  </ul>
                </div>

                <div class="attributeList">
                  <ul>
                    <li>Rhythmische Electronic-Percussion</li>
                    <li>138</li>
                    <li>B minor</li>
                  </ul>
                </div>


              </div>
            </div>

            </div>


            </div>











        </section>
      </Layout>
    </div>
  </body>
)

export default ElektrolerneckePage
