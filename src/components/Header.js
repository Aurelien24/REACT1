import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => (
    // N'as pas de version burger ou kebab. Pas meme bento ! Pauvre mobile...
    <header className='flex space-around bg-principal'>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/realisation">Réalisation</NavLink>
        <NavLink to="/contact">Contact</NavLink>
    </header>
)

export default Header