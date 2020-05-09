import React, { Fragment, useState, useEffect } from 'react';
import Formulario from './components/Formulario';
import Cancion from './components/Cancion';
import Info from './components/Info';
import axios from 'axios';

function App() {

  const [ search, setSearch ] = useState({});
  const [ lyrics, setLyrics ] = useState('');
  const [ information, setInformation ] = useState({});

  useEffect(() => {;
    if (Object.keys(search).length === 0) return;

    
    const consultarApi = async () => {
      // eslint-disable-next-line
      const { title, artist } = search;
      const url = `https://api.lyrics.ovh/v1/${artist}/${title}`;
      const url2 = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artist}`;
      try {
        const [ letra, info ] = await Promise.all([
          axios.get(url),
          axios.get(url2)
        ]);
        console.log(letra);
        console.log(info);
        setLyrics(letra.data.lyrics);
        setInformation(info.data.artists[0]);
      } catch (error) {}
    }
    consultarApi();

  }, [search, information])

  return(
    <Fragment>
      <Formulario
        setSearch={setSearch}
      />
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <Info
              information={information}
            />
          </div>
          <div className="col-md-6">
            <Cancion
              lyrics={lyrics}
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
