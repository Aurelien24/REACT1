import React, { useRef } from 'react'
import { useState } from 'react'

function FormContact() {
    // Le ref permet de vidé le champs de text
    const ref = useRef()
    const [textarea, setTextarea] = useState(null)
    const [retour, setRetour] = useState(null)

    // le e représente l'envent
    const onChange = e => setTextarea(e.target.value) // Peut etre mis sur une seul ligne
    const onSubmit = e => {
        //Empéche l'event de recharge la page
        e.preventDefault(); 
        // Teste si l'input est vide et le message se met pas a jour dans le dom. Normalement, le return ne se déclanche pas puisque c'est aussi vérifié part le dom
        if (!textarea) { return setRetour("Remplissez le formulaire au lieu de joué avec le required.") } 
        setTextarea(null)
        ref.current.value = null;
        setRetour("Ce message n'ira nulle part faute de backend.")         
    }
    return (
    <form className='flex column center bg-principal' id='form' onSubmit={onSubmit}>
        <div>
            <textarea placeholder="Votre message" name="message" required="true" id="message" rows="5" cols="33" ref={ref} onChange={onChange}></textarea>
        </div>
        <div>
            <input type='submit'></input>
        </div>
        <p id='message'>{retour}</p>
    </form>
    )
}

//const FormContact = () => ()



export default FormContact