import React from 'react';
import Image from '../image/Green_Skeletons.webp';

const Presentation = (props) => (
    <div id ='presentation' className='flex column-mobile bg-principal'>
        <img src={Image}/>
        <div className='flex center column '>
            <h2>Qui sommes-nous ?</h2>
            <p className='center-text'> Nous sommes une équipe de tatoueur motivé et sympa qui aime faire des têtes de mort car <strong>{props.nom}</strong></p>
        </div> 
    </div>
)

export default Presentation