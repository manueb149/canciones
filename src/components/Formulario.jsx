import React, { useState } from 'react';

const Formulario = ({ setSearch }) => {

    const [ form, setForm ] = useState({
        title: '',
        artist: ''
    })

    // eslint-disable-next-line
    const [ error, setError ] = useState(false);

    const { title, artist } = form;

    const updateForm = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (title.trim() === '' || artist.trim() === ''){
            setError(true);
            return;
        }
        setError(false);
        setSearch(form);
    }

    return (
        <div className="bg-info">
            <div className="container">
                <div className="row">
                    <form
                        onSubmit={handleSubmit}
                        className="col card text-white bg-transparent mb-5 pt-5 pb-2"
                    >
                        <fieldset>
                            <legend className="text-center">Buscador Letras Canciones</legend>
                            <div className="row">
                                <div className="col-md-6 pt-2">
                                    <div className="form-group">
                                        <label>Artista</label>
                                        <input 
                                            type="text"
                                            className="form-control"
                                            name="artist"
                                            placeholder="Nombre Artista"
                                            onChange={updateForm}
                                            value={artist}
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6 pt-2">
                                    <div className="form-group">
                                        <label>Canción</label>
                                        <input 
                                            type="text"
                                            className="form-control"
                                            name="title"
                                            placeholder="Nombre Canción"
                                            onChange={updateForm}
                                            value={title}
                                        />
                                    </div>
                                </div>
                            </div>
                            <button
                                type="submit"
                                className="btn btn-primary float-right btn-block"
                            >Buscar</button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    );
}
 
export default Formulario;