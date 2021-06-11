import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import AudioPlayer, { RHAP_UI } from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import '../../components/layout_lernecke.css';

import SEO from "../../components/seo"
import drums from "../loops/electric/drums.wav"
import bass from "../loops/electric/bass.wav"
import melo from "../loops/electric/melo.wav"
import perc from "../loops/electric/perc.wav"


const ElektrolerneckePage = () => (

  <body class="bluebg">
    <div >

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
              </div>
          <div className="PlayerWhiteLite">
            <AudioPlayer
              src={drums}
              loop={true}
              volume={0.8}
              showFilledVolume={true}
              showJumpControls={false}

              customProgressBarSection={
                []
              }
              customControlsSection={
                [
                  RHAP_UI.MAIN_CONTROLS,
                ]
              }
            />
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
            

            <div class="secondSample">
              <div class="title">
                <h3>Bass</h3>
                </div>
          <div className="PlayerGrayLite">
            <AudioPlayer
              src={bass}
              loop={true}
              volume={0.8}
              showFilledVolume={true}
              showJumpControls={false}
              customProgressBarSection={
                []
              }
              customControlsSection={
                [
                  RHAP_UI.MAIN_CONTROLS,
                ]
              }
            />
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
          </div>


          <div class="secondRowPlayerLerneckeWrapper">
            <div class="thirdSample">
              <div class="title">
                <h3>Hauptmelodie</h3>
                </div>
          <div className="PlayerBlackLite">
            <AudioPlayer
              src={melo}
              loop={true}
              volume={0.8}
              showFilledVolume={true}
              showJumpControls={false}
              customProgressBarSection={
                []
              }
              customControlsSection={
                [
                  RHAP_UI.MAIN_CONTROLS,
                ]
              }
            />
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
                </div>
            
          <div className="PlayerElektroLite">
            <AudioPlayer
              src={perc}
              loop={true}
              volume={0.8}
              showFilledVolume={true}
              showJumpControls={false}
              customProgressBarSection={
                []
              }
              customControlsSection={
                [
                  RHAP_UI.MAIN_CONTROLS,
                ]
              }
            />
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

    </div>
  </body>
)

export default ElektrolerneckePage
