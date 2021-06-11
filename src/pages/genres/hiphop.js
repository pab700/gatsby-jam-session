import * as React from "react"
import { Link } from "gatsby"
import AudioPlayer, { RHAP_UI } from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';


import Layout from "../../components/layout"
import SEO from "../../components/seo"
import drums from "../loops/hiphop/drums.wav"
import acht from "../loops/hiphop/808.wav"
import mainmelo from "../loops/hiphop/main melo.wav"
import pianochords from "../loops/hiphop/piano chords.wav"

const HiphopPage = () => (
  <body>
    <div class="yellowbg">
        <Layout>
          <SEO title="Hip-Hop" />
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
                    <Link to="/genres/elektro/" id="Elektrodropdown">Elektro</Link>
                </div>

                </div> 

            </div>

           <div class="titel">
             <h1>JAM SESSION</h1>
             <h2>Hip-Hop</h2>
           </div> 

           <div class="lernlink">
            <Link to="/lernecke/hiphoplernecke/">LERNECKE</Link>
           </div>
          </div>

          <div class="main-buttons_wrapper">
          <div className="PlayerWhite">
       
        <AudioPlayer
          src={acht}
          loop={true}
          volume={0.35}
          autoPlay={true}
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
          src={drums}
          loop={true}
          volume={0.35}
          autoPlay={true}
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
          src={pianochords}
          loop={true}
          volume={0.35}
          autoPlay={true}
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

         <div className="PlayerHipHop">
        <AudioPlayer
          src={mainmelo}
          loop={true}
          volume={0.35}
          autoPlay={true}
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

export default HiphopPage
