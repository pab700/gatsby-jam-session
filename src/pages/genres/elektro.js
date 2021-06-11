import * as React from "react"
import { Link } from "gatsby"
import AudioPlayer, { RHAP_UI } from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import drums from "../loops/electric/drums.wav"
import bass from "../loops/electric/bass.wav"
import melo from "../loops/electric/melo.wav"
import perc from "../loops/electric/perc.wav"

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
          src={bass}
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
          src={melo}
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

         <div className="PlayerElektro">
        <AudioPlayer
          src={perc}
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

export default ElektroPage
