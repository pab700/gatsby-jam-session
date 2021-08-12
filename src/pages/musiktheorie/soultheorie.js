import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import AudioPlayer, { RHAP_UI } from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import tonart from "../../images/Musiktheorie-Bilder/Elektro/Tonart_Elektro.png"
import taktart from "../../images/Musiktheorie-Bilder/Soul/Taktart_Soul.png"
import klaviatur from "../../images/Musiktheorie-Bilder/Soul/Klaviatur_Soul.png"





const SoultheoriePage = () => (

  <body class="bluebg">
    <div >
      <Layout>
        <SEO title="Soultheorie" />
        <section class="lernecke">
          <div class="header">
             <div class="musiktheorieLernLink">
              <Link to="../../lernecke/soullernecke/">LERNECKE</Link>
            </div>
            <div class="lerneckeTitel">
              <h1>Soul</h1>
              <h2>MUSIKTHEORIE</h2>
            </div>

           
            <div class="zurückzursession" ><Link to="/genres/soul">ZURÜCK ZUR SESSION</Link></div>
          </div>
          <div class="theorieContainer">

          <div class="theorieImages">

              <div class="tonart">
                  <h3 class="theorieTitle">Tonart/Key: <div class="titleDesc">b-Moll / B Minor</div></h3>
                  <div class="theorieImageOne">
                      <img src={tonart} />
                  </div>


              </div>


              <div class="taktart">
                  <h3 class="theorieTitle">Taktart: <div class="titleDesc">3/4 Takt</div></h3>
                  <div class="theorieImageTwo">
                      <img src={taktart} />
                    </div>

                </div>


            </div>

            <div class="klaviatur">
              <div class="klaviaturTitle"><h3>Klaviatur B Minor</h3></div>
              <div class="theorieImageTwo">
                      <img src={klaviatur} />
                    </div>
              
          </div>

          </div>




        </section>
      </Layout>
    </div>
  </body>
)

export default SoultheoriePage
