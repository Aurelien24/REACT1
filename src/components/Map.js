import React from 'react'

const Map = (props) => (
    <div id ='map-div' className='flex column center bg-principal'>
        <div>
            <h2>Où somme nous ?</h2>
            <p>{props.nom} étant une structure avec quelque problème administratif, nous nous somme installer dans les catacombes de Paris.</p>
            <p>Veuillez nous contacter pour avoir une cartes des catacombes qui vous permettra - avec un peu de chance - d'arrivé sans vous perdre.</p>
            <p>Ne vous en faites pas, c'est promis, nous n'avons jamais retrouvé de client perdu ! Les catacombes sont trop grands.</p>
        </div>
        <iframe id='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d637.8780800382156!2d2.331978833999876!3d48.83385081571897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e671b6c1d0b675%3A0xc8d7f073e62eb4b3!2sLes%20Catacombes%20de%20Paris!5e0!3m2!1sfr!2sfr!4v1687352377896!5m2!1sfr!2sfr"></iframe>
    </div>
)

export default Map