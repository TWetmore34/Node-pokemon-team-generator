import React, { useState, useEffect } from 'react';
import PokeCard from './components/PokeCard';
import TeamSetup from "./utils/TeamFunctions"

const App = () => {
    const renderTeam = async () => {
        let team = new TeamSetup();
        let fullTeam = await team.teamMoves();
        return fullTeam
    }

    const [mons, setMons] = useState(renderTeam())

    const handleRender = () => {
        
        
    }


  return (
    <div className='row m-4'>
        {
        }
    </div>
  )
}

export default App