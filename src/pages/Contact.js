import React from "react"
import {Helmet} from "react-helmet";
import Header from '../components/Header.js'
import TextContact from '../components/TextContact.js'
import FormContact from '../components/FormContact.js'
import Footer from "../components/Footer.js"

// Utilise helmet pour le head
export default function Contact() {
    return(
        <>
            <Helmet>
                <meta charset="utf-8" />
                <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="theme-color" content="#000000" />
                <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
                <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
                <title>Contact</title>
                <meta name="description" content="Contacter nous pour avoir la carte vous permettant d'accéder à notre salon. SoSoSoDarkIsSoGood décline toute responsabilité en cas de disparition." />
            </Helmet>
            <Header />
            <TextContact />
            <FormContact />
            <Footer />
        </>
    )
}