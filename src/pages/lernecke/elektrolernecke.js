import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ElektrolerneckePage = () => (
  <Layout>
    <SEO title="Lernecke" />

    <div class="titel">

    <img></img>
    <h1>Elektro</h1>
    <h2>Lernecke</h2>

    </div>
    
    <div class="navrechts"><Link to="../genre/elektro/">zurück zur Musikauswahl</Link></div>
    <div class="navlinks"><Link to="">Musiktheorie</Link> </div>

    
    <div id="main page">

      <div id="loop1" >

        <div class="looptitel">
          <h3>Drums</h3>
          <btn></btn>
        </div>

        <div class="attribute">
          <ul>
            <li>Titel</li>
            <li>bpm</li>
            <li>key</li>
          </ul>

          <ul>
            <li>Uptempo-Drums</li>
            <li>138</li>
            <li>B minor</li>
          </ul>
        </div>

      </div>

       <div id="loop2" >

        <div class="looptitel">
          <h3>Hauptmelodie</h3>
          <btn></btn>
        </div>

        <div class="attribute">
          <ul>
            <li>Titel</li>
            <li>bpm</li>
            <li>key</li>
          </ul>

          <ul>
            <li>Vocal-Chop als Melodie</li>
            <li>138</li>
            <li>B minor</li>
          </ul>
        </div>

      </div>

      <div id="loop3" >

        <div class="looptitel">
          <h3>Bass</h3>
          <btn></btn>
        </div>

        <div class="attribute">
          <ul>
            <li>Titel</li>
            <li>bpm</li>
            <li>key</li>
          </ul>

          <ul>
            <li>Wavetable-Synth-Bass</li>
            <li>138</li>
            <li>B minor</li>
          </ul>
        </div>

      </div>

      <div id="loop4" >

        <div class="looptitel">
          <h3>Perc</h3>
          <btn></btn>
        </div>

        <div class="attribute">
          <ul>
            <li>Titel</li>
            <li>bpm</li>
            <li>key</li>
          </ul>

          <ul>
            <li>Rhythmische Electronic-Percussion</li>
            <li>138</li>
            <li>B minor</li>
          </ul>
        </div>

      </div>


    </div>

  </Layout>
)

export default ElektrolerneckePage

//