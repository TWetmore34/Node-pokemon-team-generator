import React, { useState, useEffect } from 'react';
import PokeCard from './components/PokeCard';
import teamMoves from "./utils/TeamFunctions"

const App = () => {
    const [mons, setMons] = useState([]);
    const [testing, setTesting] = useState(true);

    async function setTest() {
      let list = await teamMoves()
      setMons(list)
      setTesting(false)
    }

    useEffect(() => {
      setTest();
    },[testing])


  return (
    <div className='row m-4'>
        {
          mons.map(mon => {
            return (
              <PokeCard key={mon.name} img={mon.img} name={mon.name} ability={mon.ability} moves={mon.moves} item={mon.item.name}  />
            )
          })
        }
    </div>
  )
}

export default App