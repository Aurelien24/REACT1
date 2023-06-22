import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from 'nanoid'; // A utilisé ? Est installé ????
import { addTatoo } from '../action/index.js';

const RealisationTatoo = () => {
    // Les deux ref servent a vidé les champs de texte après ajout
    const refNom = useRef()
    const refDescription = useRef()
    const [nom, setNom] = useState('');
    const [description, setDescription] = useState('');
    //const [image, setImage] = useState(''); Pour ajouté une image au tatouage (un jour)

    const dispatch = useDispatch();

    // Permet l'ajout des tatoos, reset aussi les champs de text. Les images ne sont pas supporté...
    const addTatooHandler = (e) => {
        console.log(e)
        e.preventDefault();
        // Vérification qu'il y ai au moins quelque chose a enregistrer. Il n'y as pas de vérification pour l'unicité
        if(!nom || !description) return false;
        dispatch(addTatoo({ nom, description, id: nanoid() }));
        setNom(null);
        setDescription(null);
        refNom.current.value = null;
        refDescription.current.value = null;
    };

    return (
    <form className='bg-principal'>
        <div className='flex center'>
        <input name='nom' placeholder='nom' value={nom} ref={refNom} onChange={(e) => setNom(e.target.value)} />
        <input name='description' placeholder='description' value={description} ref={refDescription} onChange={(e) => setDescription(e.target.value)} />
        </div>
        <div className='flex center'>
            <button onClick={addTatooHandler}> Ajouter </button>
        </div>
    </form>
    );
}

export default RealisationTatoo