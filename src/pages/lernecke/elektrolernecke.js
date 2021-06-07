import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

const ElektrolerneckePage = () => (

  <body>
    <div >
      <Layout>
        <SEO title="Elektrolernecke" />
        <section>
          <div><img></img></div>
          <h1>ELEKTRO</h1>
          <h2>LERNECKE</h2>

          <Link to="/genres/elektro">ZURÜCK ZUR SESSION</Link>
          <Link to="/genres/elektro">MUSIKTHEORIE</Link>

          <div class="allPlayerLerneckeWrapper">

            <div class="firstSample">
              <div class="title">
                <h3>Drums</h3>
                <div class="PlayerWhiteLernecke">
                </div>
              </div>



              <div class="SampleList">

                <div class="titleList">
                  <ul>
                    <li>TITEL</li>
                    <li>BPM</li>
                    <li>KEY</li>
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
                    <li>TITEL</li>
                    <li>BPM</li>
                    <li>KEY</li>
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

            <div class="thirdSample">
              <div class="title">
                <h3>Hauptmelodie</h3>
                <div class="PlayerBlackLernecke">
                </div>
              </div>



              <div class="SampleList">

                <div class="titleList">
                  <ul>
                    <li>TITEL</li>
                    <li>BPM</li>
                    <li>KEY</li>
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
                    <li>TITEL</li>
                    <li>BPM</li>
                    <li>KEY</li>
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

        </section>
      </Layout>
    </div>
  </body>
)

export default ElektrolerneckePage
