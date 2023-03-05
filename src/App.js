import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [pokemon, setPokemon] = useState([])

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=807&offset=0')
      .then(response => {
        console.log(response.data.results)
        setPokemon(response.data.results)
        // const movieArray = []
        // for (let movie in users.films){
        // movieArray.push(movie)
        // }
      })
      .catch(err => console.log(err))
  }, [])


  //         useEffect(() => {
  //   const apiCall = async () => {
  //     try {
  //       const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=807&offset=0')
  //       console.log(response.data.results)
  //       setPokemon(response.data.results)
  //     } catch (error) {
  //       console.log(error)
  //     }
  //   }
  //   apiCall()
  // }, [])

  return (

    <div className="App">
      {/* <button onClick>Fetch Pokemon</button> */}
      {/* <h1>Pokemon</h1> */}
      <ul>
        {pokemon.map((pokemon) => (
          <li>{pokemon.name}</li>
        ))}
      </ul>
    </div>

    //      return (
    //     <div className="App">
    //       { <button onClick={apiCall}> Fetch Pokemon
    //       </button>}
    //       {
    //         pokemon.map(pokemon => {
    //           return <div key={pokemon.name}>
    //           </div>
    //         })
    // }
    //         <h1>{users.name}</h1>
    //       <button onClick={apiCall}>See movies associated</button>
    //     </div>
  );
}


export default App;
