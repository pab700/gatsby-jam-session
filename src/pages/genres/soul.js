import * as React from "react"
import { Link } from "gatsby"
import AudioPlayer, { RHAP_UI } from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import drums from "../loops/soul/drums.wav"
import chords from "../loops/soul/chords.wav"
import guitar from "../loops/soul/guitar.wav"
import sample from "../loops/soul/sample.wav"
import soulk from "../loops/soul_komplett.wav"

const SoulPage = () => (
  <body>
  <div class="yellowbg">
      <Layout>
        <SEO title="Soul" />
        <section class="hauptseiten">
          <div class="header">
           <div class="topnav">

              <div class="dropdown">
              <button class="dropbtn">GENRE WECHSELN 
                  <i class="fa fa-caret-down"></i>
              </button>

              <div class="dropdown-content">
                  <Link to="/genres/lofi/" id="Lofidropdown">Lofi</Link>
                  <Link to="/genres/elektro/" id="Souldropdown">Elektro</Link>
                  <Link to="/genres/hiphop/" id="Hip-Hopdropdown">Hip-Hop</Link>
              </div>

              </div> 

          </div>

         <div class="titel">
           <h1>JAM SESSION</h1>
           <div className="genreandplayer">
              <h2>Soul</h2>
              <div class="tooltipgenre">
                  <span class="tooltiptextgenre">Drücke Play um den ganzen Song zu spielen</span>
                  <AudioPlayer
                    src={soulk}
                    loop={true}
                    volume={0.8}
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
              </div>
         </div> 

         <div class="lernlink">
          <Link to="/lernecke/soullernecke/">LERNECKE</Link>
         </div>
        </div>

        
        <div class="main-buttons_wrapper">
          <div className="PlayerWhite">
       
        <AudioPlayer
          src={drums}
          loop={true}
          volume={0.35}
          showFilledVolume={true}
          progressJumpStep={
            60000
          }
          customProgressBarSection={
            [ 
              
              RHAP_UI.CURRENT_LEFT_TIME,  
            ]
          }
          customControlsSection={
            [
              RHAP_UI.LOOP, 
              RHAP_UI.MAIN_CONTROLS,
              RHAP_UI.VOLUME,   
            ]
          }

          customVolumeControls={
            []
          }
          customAdditionalControls={
            []
          }
        />
  </div>

          <div className="PlayerGray">
        
        <AudioPlayer
          src={guitar}
          loop={true}
          volume={0.35}
          showFilledVolume={true}
          progressJumpStep={
            60000
          }
          customProgressBarSection={
            [ 
              
              RHAP_UI.CURRENT_LEFT_TIME,  
            ]
          }
          customControlsSection={
            [
              RHAP_UI.LOOP, 
              RHAP_UI.MAIN_CONTROLS,
              RHAP_UI.VOLUME,   
            ]
          }
          customVolumeControls={
            []
          }
          customAdditionalControls={
            []
          }
        />
  </div>

          <div className="PlayerBlack">
        
        <AudioPlayer
          src={chords}
          loop={true}
          volume={0.35}
          showFilledVolume={true}
          progressJumpStep={
            60000
          }
          customProgressBarSection={
            [ 
              
              RHAP_UI.CURRENT_LEFT_TIME,  
            ]
          }
          customControlsSection={
            [
              RHAP_UI.LOOP, 
              RHAP_UI.MAIN_CONTROLS,
              RHAP_UI.VOLUME,   
            ]
          }
          customVolumeControls={
            []
          }
          customAdditionalControls={
            []
          }
        />
  </div>

         <div className="PlayerSoul">
        <AudioPlayer
          src={sample}
          loop={true}
          volume={0.35}
          showFilledVolume={true}
          progressJumpStep={
            60000
          }
          customProgressBarSection={
            [ 
              
              RHAP_UI.CURRENT_LEFT_TIME,  
            ]
          }
          customControlsSection={
            [
              RHAP_UI.LOOP, 
              RHAP_UI.MAIN_CONTROLS,
              RHAP_UI.VOLUME,   
            ]
          }
          customVolumeControls={
            []
          }
          customAdditionalControls={
            []
          }
        />
  </div>
        </div>
      </section>
    
      </Layout>
      </div>
</body>
)

export default SoulPage
