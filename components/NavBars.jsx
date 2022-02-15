import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import {FaBars, FaTimes} from 'react-icons/fa';

const NavBars = ({navOpen, handleOpen}) => {
    return (
        // <FontAwesomeIcon icon={`${navOpen ? faTimes : faBars}`} />
        <button className='md:hidden flex' onClick={handleOpen}>
            {
                navOpen 
                ? <FaTimes size={35} /> 
                : <FaBars size={35} />  
            }
            
        </button>
    )
};

export default NavBars;
