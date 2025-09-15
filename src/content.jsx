
import React, { useState} from "react";





  


function Poke() {

    const [ data, setData] = useState(0);
    const [value, setvalue] = useState('pikachu');
    const url = `https://pokeapi.co/api/v2/pokemon/${value.toLowerCase()}`


    async function pokefetch() {

        try {

            const response = await fetch(url)

            if (!response.ok) {
                throw new Error("no pokemon by that name")
                
            }
            const json = await response.json();
            setData(json);
            console.log(json);

            const name = json.name.toLowerCase()
            const cryUrl = `https://play.pokemonshowdown.com/audio/cries/${name}.mp3`;

            const cryAudio = new Audio(cryUrl);
      cryAudio.play().catch((err) => {
        console.error("Cry failed to play:", err);
      });
        } 
              catch (err) {
    console.error('Error fetching data:', err); 
  
         setData(null);
        }
    }

    




    

    function handlechange(e) {

        setvalue(e.target.value)
}


const typeColors = {
  normal: "#A8A77A",
  fire: "#EE8130",
  water: "#6390F0",
  electric: "#F7D02C",
  grass: "#7AC74C",
  ice: "#96D9D6",
  fighting: "#C22E28",
  poison: "#A33EA1",
  ground: "#E2BF65",
  flying: "#A98FF3",
  psychic: "#F95587",
  bug: "#A6B91A",
  rock: "#B6A136",
  ghost: "#735797",
  dragon: "#6F35FC",
  dark: "#705746",
  steel: "#B7B7CE",
  fairy: "#D685AD",
};




return (

    <>
   
      <div className="grid">
    <input type="text"
    value={value}
    onChange={handlechange}
    placeholder="Enter pokemon name" />

    <button onClick={pokefetch}>fetch pokemon</button>
    
    {data ? (
        <>
          <ul>

            <li>Name: {data.name}</li>
            <li>Pokedex: #{data.id}</li>
            
            <li>Type: <ul> {data.types.map((type, index) => (
            <li key={index}
            style={{
                display: 'inline-block',
                padding: '5px 10px',
                margin: '5px',
                borderRadius: '12px',
                backgroundColor: typeColors[type.type.name] || "#B0B0B0", 
                color: 'white',
                fontWeight: 'bold',
              }}>{type.type.name}</li>
          ))}
        </ul></li>
            <li >Abilites: <ul>
              {data.abilities.map((ability, index) => (
                <li key={index} style={{
                padding: '5px 10px',
                margin: '5px',
                borderRadius: '12px',
                backgroundColor: "#B0B0B0",
                color: 'white',
                fontWeight: 'bold',}}>{ability.ability.name}</li>
              ))}</ul></li>
            



          </ul>
          <img  width="300" length="300"src={data.sprites.front_default} alt={data.name} />
        </>
      ) : (
        <p>No data to show</p>
      )}

      {}
      
      </div>

      
    </>  
  );
}
    

    

    



    
    
    
    
    
    
    
    
    
   



export default Poke


   
    