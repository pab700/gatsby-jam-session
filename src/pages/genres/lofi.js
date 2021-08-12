import * as React from "react"
import { Link } from "gatsby"
import AudioPlayer, { RHAP_UI } from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import drums from "../loops/lofi/drums.wav"
import piano from "../loops/lofi/piano.wav"
import shaker from "../loops/lofi/shaker.wav"
import vocalsample from "../loops/lofi/vocal sample.wav"
import lofik from "../loops/lofi_komplett.wav"

const LofiPage = () => (
  <body>
  <div class="yellowbg">
      <Layout>
        <SEO title="Lofi" />
        <section class="hauptseiten">
          <div class="header">
           <div class="topnav">

              <div class="dropdown">
              <button class="dropbtn">GENRE WECHSELN 
                  <i class="fa fa-caret-down"></i>
              </button>

              <div class="dropdown-content">
                  <Link to="/genres/elektro/" id="Lofidropdown">Elektro</Link>
                  <Link to="/genres/soul/" id="Souldropdown">Soul</Link>
                  <Link to="/genres/hiphop/" id="Hip-Hopdropdown">Hip-Hop</Link>
              </div>

              </div> 

          </div>

         <div class="titel">
           <h1>JAM SESSION</h1>
           <div className="genreandplayer">
              <h2>Lo-fi</h2>
                <div class="tooltipgenre">  
                <span class="tooltiptextgenre">Drücke Play um den ganzen Song zu spielen</span>
                
                <AudioPlayer
                    src={lofik}
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
          <Link to="/lernecke/lofilernecke/">LERNECKE</Link>
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
          src={piano}
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
          src={shaker}
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

         <div className="PlayerLofi">
        <AudioPlayer
          src={vocalsample}
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

export default LofiPage
