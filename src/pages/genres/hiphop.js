import * as React from "react"
import { Link } from "gatsby"
import AudioPlayer, { RHAP_UI } from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';


import Layout from "../../components/layout"
import SEO from "../../components/seo"

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
          <div className="container1">
        <h3>1</h3>
        <AudioPlayer
          src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
          loop={true}
          volume={0.35}
          showFilledVolume={true}
          showJumpControls={false}
          customProgressBarSection={
            [
              RHAP_UI.VOLUME,
              <p style={{marginRight:45}}></p>,   
              RHAP_UI.LOOP,  
              <p style={{marginRight:50}}></p>,  
              RHAP_UI.CURRENT_LEFT_TIME,  
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

          <div className="container2">
        <h3>2</h3>
        <AudioPlayer
          src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
          loop={true}
          volume={0.35}
          showFilledVolume={true}
          showJumpControls={false}
          customProgressBarSection={
            [
              RHAP_UI.VOLUME,
              <p style={{marginRight:45}}></p>,   
              RHAP_UI.LOOP,  
              <p style={{marginRight:50}}></p>,  
              RHAP_UI.CURRENT_LEFT_TIME,  
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

          <div className="container3">
        <h3>3</h3>
        <AudioPlayer
          src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
          loop={true}
          volume={0.35}
          showFilledVolume={true}
          showJumpControls={false}
          customProgressBarSection={
            [
              RHAP_UI.VOLUME,
              <p style={{marginRight:45}}></p>,   
              RHAP_UI.LOOP,  
              <p style={{marginRight:50}}></p>,  
              RHAP_UI.CURRENT_LEFT_TIME,  
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

         <div className="container4">
        <h3>4</h3>
        <AudioPlayer
          src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
          loop={true}
          volume={0.35}
          showFilledVolume={true}
          showJumpControls={false}
          customProgressBarSection={
            [
              RHAP_UI.VOLUME,
              <p style={{marginRight:45}}></p>,   
              RHAP_UI.LOOP,  
              <p style={{marginRight:50}}></p>,  
              RHAP_UI.CURRENT_LEFT_TIME,  
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
