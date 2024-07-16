import React from 'react';

function Navbar({openModal}) {
    return (
        <nav className="contenar-nav">
            <div className='navbar'>
                <button className='Opne-Modal'onClick={openModal} >Opne Modal</button>
            </div>
        </nav>
    );
}
export default Navbar;