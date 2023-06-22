import React from 'react'

const TopHome = (props) => (
    <div id ='top-home' className='flex center column'>
        <p>Salon de Tatouage</p> 
        <h1>{props.nom}</h1>
    </div>
)

export default TopHome