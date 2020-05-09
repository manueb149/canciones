import React, { Fragment } from 'react';

const Cancion = ({lyrics}) => {

    if (!lyrics) return null;

    return (
        <Fragment>
            <h2>Letra Canción</h2>
            <p className="letra">{lyrics}</p>
        </Fragment>
    );
}
 
export default Cancion;