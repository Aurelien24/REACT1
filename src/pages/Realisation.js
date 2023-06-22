import React from "react"
import {Helmet} from "react-helmet";
import Header from '../components/Header.js'
import TextRealisation from "../components/TextRealisation.js"
import AjoutTatoo from '../components/AjoutTatoo.js'
import AfficherTatoo from '../components/AfficherTatoo.js'
import Footer from "../components/Footer.js"

// Utilise helmet pour le head
export default function Realisation() {
    return(
        <>
            <Helmet>
                <meta charset="utf-8" />
                <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="theme-color" content="#000000" />
                <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
                <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
                <title>Réalisation</title>
                <meta name="description" content="Contacter nous pour avoir la carte vous permettant d'accéder à notre salon. Voici nos réalisations, tout en os inspirer des célèbres catacombes de Paris. Ils sont aussi uniques que notre personnalité et notre nom : SoSoSoDarkIsSoGood." />
            </Helmet>
            <Header />
            <TextRealisation />
            <AjoutTatoo />
            <AfficherTatoo />
            <Footer />
        </>
    )
}