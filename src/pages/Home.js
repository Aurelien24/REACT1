import React from "react"
import {Helmet} from "react-helmet";
import Header from '../components/Header.js'
import TopHome from "../components/TopHome.js"
import Presentation from "../components/Presentation.js"
import Map from "../components/Map.js"
import Footer from "../components/Footer.js"

const nom = 'SoSoSoDarkIsSoGood'; // passé en props

// Utilise helmet pour le head
export default function Home() {
    return(
        <>
            <Helmet>
                <meta charset="utf-8" />
                <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="theme-color" content="#000000" />
                <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
                <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
                <title>Accueil</title>
                <meta name="description" content="Meilleur tatoueur au black des catacombes de Paris. Ayez confiance, notre équipe travaille au black pour vous faire des tatouages très SoSoSoDarkIsSoGood." />
            </Helmet>
            <Header />
            <TopHome nom= {nom} />
            <Presentation nom= {nom} />
            <Map  nom= {nom} />
            <Footer />
        </>
    )
}
