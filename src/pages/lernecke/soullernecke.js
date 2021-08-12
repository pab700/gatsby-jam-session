import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import AudioPlayer, { RHAP_UI } from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import drums from "../loops/soul/drums.wav"
import chords from "../loops/soul/chords.wav"
import guitar from "../loops/soul/guitar.wav"
import sample from "../loops/soul/sample.wav"


const SoullerneckePage = () => (

  <body class="bluebg">
    <div >
      <Layout>
        <SEO title="Soullernecke" />
        <section class="lernecke">
          <div class="header">
            <div class="zurückzursession" ><Link to="/genres/soul">ZURÜCK ZUR SESSION</Link></div>
            <div class="lerneckeTitel">
              <h1>SOUL</h1>
              <h2>LERNECKE</h2>
            </div>

            <div class="musiktheorieLink">
              <Link to="../../musiktheorie/soultheorie/">MUSIKTHEORIE</Link>
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
                      <li>Drums im 3/4 Takt</li>
                      <li>138</li>
                      <li>B minor</li>
                    </ul>
                  </div>


                </div>


              </div>


              <div class="secondSample">
                <div class="title">
                  <h3>Gitarre</h3>
                </div>
                <div className="PlayerGrayLite">
                  <AudioPlayer
                    src={guitar}
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
                    <li><div class="tooltip">Spanish Guitar mit FX<span class="tooltiptext">FX = Effekte</span></div></li>                      

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
                  <h3>Chords</h3>
                </div>
                <div className="PlayerBlackLite">
                  <AudioPlayer
                    src={chords}
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
                      <li>Begleitakkorde mit Echo</li>
                      <li>138</li>
                      <li>B minor</li>
                    </ul>
                  </div>


                </div>
              </div>

              <div class="fourthSample">
                <div class="title">
                  <h3>Bass</h3>
                </div>

                <div className="PlayerSoulLite">
                  <AudioPlayer
                    src={sample}
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
                    <li><div class="tooltip">Bass-Sample<span class="tooltiptext">Bass-Sample von George Benson</span></div></li>                      

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

export default SoullerneckePage
