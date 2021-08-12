import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import AudioPlayer, { RHAP_UI } from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import drums from "../loops/lofi/drums.wav"
import piano from "../loops/lofi/piano.wav"
import shaker from "../loops/lofi/shaker.wav"
import vocalsample from "../loops/lofi/vocal sample.wav"


const LofilerneckePage = () => (

  <body class="bluebg">
    <div >
      <Layout>
        <SEO title="Lofilernecke" />
        <section class="lernecke">
          <div class="header">
            <div class="zurückzursession" ><Link to="/genres/lofi">ZURÜCK ZUR SESSION</Link></div>
            <div class="lerneckeTitel">
              <h1>LO-FI</h1>
              <h2>LERNECKE</h2>
            </div>

            <div class="musiktheorieLink">
              <Link to="../../musiktheorie/lofitheorie">MUSIKTHEORIE</Link>
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
                    <li><div class="tooltip">Drums mit Analog Noise<span class="tooltiptext">Analog Noise = Vinyl-Geräusche</span></div></li>                      

                      <li>84</li>
                      <li>Bb minor</li>
                    </ul>
                  </div>


                </div>


              </div>


              <div class="secondSample">
                <div class="title">
                  <h3>Shaker</h3>
                </div>
                <div className="PlayerGrayLite">
                  <AudioPlayer
                    src={shaker}
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
                    <li><div class="tooltip">Shaker (4-Step-Bounce)<span class="tooltiptext">Shaker schlägt alle vier Schläge</span></div></li>                      

                      <li>84</li>
                      <li>Bb minor</li>
                    </ul>
                  </div>


                </div>
              </div>


            </div>

            <div class="secondRowPlayerLerneckeWrapper">
              <div class="thirdSample">
                <div class="title">
                  <h3>Piano</h3>
                </div>
                <div className="PlayerBlackLite">
                  <AudioPlayer
                    src={piano}
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
                      <li>Chill Piano mit Lofi-Vibes</li>
                      <li>84</li>
                      <li>Bb minor</li>
                    </ul>
                  </div>


                </div>
              </div>

              <div class="fourthSample">
                <div class="title">
                  <h3>Vocals</h3>
                </div>

                <div className="PlayerLofiLite">
                  <AudioPlayer
                    src={vocalsample}
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
                      <li>Vocal-Sample mit Hall</li>
                      <li>84</li>
                      <li>Bb minor</li>
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

export default LofilerneckePage
