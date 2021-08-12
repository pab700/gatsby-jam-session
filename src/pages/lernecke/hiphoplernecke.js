import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import AudioPlayer, { RHAP_UI } from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import drums from "../loops/hiphop/drums.wav"
import acht from "../loops/hiphop/808.wav"
import mainmelo from "../loops/hiphop/main melo.wav"
import pianochords from "../loops/hiphop/piano chords.wav"



const HipHoplerneckePage = () => (

  <body class="bluebg">
    <div >
      <Layout>
        <SEO title="HipHoplernecke" />
        <section class="lernecke">
          <div class="header">
            <div class="zurückzursession" ><Link to="/genres/hiphop">ZURÜCK ZUR SESSION</Link></div>
            <div class="lerneckeTitel">
              <h1>HIP-HOP</h1>
              <h2>LERNECKE</h2>
            </div>

            <div class="musiktheorieLink">
              <Link to="../../musiktheorie/hiphoptheorie/">MUSIKTHEORIE</Link>
            </div>
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
                      <li><div class="tooltip"><h4>BPM</h4><span class="tooltiptext">BPM = Beats Per Minute und bestimmt das Tempo des Songs</span></div></li>                      
                      <li><div class="tooltipkey"><h4>KEY</h4><span class="tooltiptextkey">= Tonart: Bestimmung des Tongeschlechts als Dur und Moll auf einer bestimmten Tonstufe</span></div></li>                      

                    </ul>
                  </div>

                  <div class="attributeList">
                    <ul>
                    <li><div class="tooltip">Classic Trap Drums<span class="tooltiptext">Klassische HipHop-Trap Drums</span></div></li>                      

                      <li>124</li>
                      <li>Ab minor</li>
                    </ul>
                  </div>


                </div>


              </div>


              <div class="secondSample">
                <div class="title">
                  <h3>Piano Chords</h3>
                </div>
                <div className="PlayerGrayLite">
                  <AudioPlayer
                    src={pianochords}
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
                      <li><div class="tooltip"><h4>BPM</h4><span class="tooltiptext">BPM = Beats Per Minute und bestimmt das Tempo des Songs</span></div></li>                      
                      <li><div class="tooltipkey"><h4>KEY</h4><span class="tooltiptextkey">= Tonart: Bestimmung des Tongeschlechts als Dur und Moll auf einer bestimmten Tonstufe</span></div></li>                      

                    </ul>
                  </div>

                  <div class="attributeList">
                    <ul>
                    <li><div class="tooltip">Akkorde mit Vibrato<span class="tooltiptext">Vibrato: periodisch wiederkehrende, geringfügige Veränderung der Frequenz eines gehaltenen Tons</span></div></li>
                      <li>124</li>
                      <li>Ab minor</li>
                    </ul>
                  </div>


                </div>
              </div>


            </div>

            <div class="secondRowPlayerLerneckeWrapper">
              <div class="thirdSample">
                <div class="title">
                  <h3>808</h3>
                </div>
                <div className="PlayerBlackLite">
                  <AudioPlayer
                    src={acht}
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
                      <li><div class="tooltip"><h4>BPM</h4><span class="tooltiptext">BPM = Beats Per Minute und bestimmt das Tempo des Songs</span></div></li>                      
                      <li><div class="tooltip"><h4>KEY</h4><span class="tooltiptext">= Tonart: Bestimmung des Tongeschlechts als Dur und Moll auf einer bestimmten Tonstufe</span></div></li>                      

                    </ul>
                  </div>

                  <div class="attributeList">
                    <ul>
                    <li><div class="tooltip">Deep Water Sound<span class="tooltiptext">Metaphorische Bezeichnung für die Klangcharakteristik der 808</span></div></li>                      

                      <li>124</li>
                      <li>Ab minor</li>
                    </ul>
                  </div>


                </div>
              </div>

              <div class="fourthSample">
                <div class="title">
                  <h3>Hauptmelodie</h3>
                </div>

                <div className="PlayerHipHopLite">
                  <AudioPlayer
                    src={mainmelo}
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
                      <li><div class="tooltip"><h4>BPM</h4><span class="tooltiptext">BPM = Beats Per Minute und bestimmt das Tempo des Songs</span></div></li>                      
                      <li><div class="tooltip"><h4>KEY</h4><span class="tooltiptext">= Tonart: Bestimmung des Tongeschlechts als Dur und Moll auf einer bestimmten Tonstufe</span></div></li>                      

                    </ul>
                  </div>

                  <div class="attributeList">
                    <ul>
                      <li>Bell mit Hall-Effekt</li>
                      <li>124</li>
                      <li>Ab minor</li>
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

export default HipHoplerneckePage
