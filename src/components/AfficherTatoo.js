import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTatoo } from '../action/index.js'
import initialData from '../initialData.js';
//import image from '../image'

const AfficherTatoo = () => {
  const tatooList = useSelector((state) => state.rootReducer.tatoos);

  const dispatch = useDispatch();

  // Permet de retirer un tatoo qui as été ajouté sur le site
  const deleteTatooHandler = (id) => {
    dispatch(deleteTatoo(id));

  };

  // Liste les tatoo Ajouté via le site uniquement
  const tatoos = tatooList.map((tatoo) => (
    <div className='flex center column'>
        <h2>{tatoo.nom}</h2>
        <p>{tatoo.description}</p>
        <button onClick={() => deleteTatooHandler({ id: tatoo.id })}>x</button>
    </div>
  ));

  // Liste de tatoo d'origine. Ne parvenant pas a les ammené directement avec getTatoo
  // L'image dynamic bug et comme ils sont "triché" le bouton ne fonctionne pas non plus <button onClick={() => deleteTatooHandler({ id: tatoo.id })}>x</button>
  const tatoosTricheList = initialData;

  const tatoosTriche = tatoosTricheList.map((tatoo) => (
    <div  className='flex center column'>
        <h2>{tatoo.nom}</h2>
        <img alt='Super image de tatoo!' src={"../image/" + tatoo.src}/>
        <p>{tatoo.description}</p>
    </div>
  ));

  // Ex classe : flex column-mobile space-around wrap
  // Elles ont d'une manière ou d'une autre fait bugé l'ajout... ???
  return (
    <div className='bg-principal margin-top-bottom-0 '>
        {tatoos}
        {tatoosTriche}
    </div>
  );
};

export default AfficherTatoo;