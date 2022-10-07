import React, {useState, useEffect} from 'react'
const PokeCard = ({name, ability, moves, item, img}) => {
  const [evSpread, setEVSpread] = useState([]);
  const [trigger, setTrigger] = useState(true);
  const [natures, setNatures] = useState([
    "hardy", "lonely", "brave", "adamant", "naughty", "bold", "docile", "relaxed", "impish", "lax", "timid", "hasty", "serious", "jolly", "naive", "modest", "mild", "quiet", "bashful", "rash", "calm", "gentle", "sassy", "careful", "quirky"
  ])

  useEffect(() => {
    setEVs();
    setTrigger(false)
  },[trigger])

  // handles EV object
  const setEVs = () => {
    // total evs and max per stat
    let totalRemaining = 510
    let randLimit = totalRemaining <= 252 ? totalRemaining : 252;
    let evSpread = {
      HP: 0,
      Atk: 0,
      SAtk: 0,
      Def: 0,
      SDef: 0,
      Spd: 0
    }
    let list = Object.keys(evSpread);
    while(totalRemaining > 0) {
      if (list.length > 0) {

        let randEntry = Math.floor(Math.random() * list.length)
        let evChoice = list[randEntry];

        list.splice(randEntry, 1);

        let evNum = evChoice > 252 ? 0 : Math.floor(Math.random() * randLimit);
        evSpread[evChoice] += evNum;
        totalRemaining -= evNum;
      } else {
        list = Object.keys(evSpread);
      } 
    }
    setEVSpread(evSpread)
  }

  function handleEVRender() {
    let testArr = []
    for (let ev in evSpread){
      testArr.push(
        <li>{ev}: {evSpread[ev]}</li>
      )
    }
    return testArr
  }

  return (
    <div className="card col-4 p-4">
      <img className='card-img-top' src={img}></img>
      <h3 className='card-header'>{name}</h3>
      <div className='row card-text'>
      <ul className=' col-6'>
        Move Set
        {
          moves.map(move => (
            <li>{move}</li>
          ))
        }
      </ul>
      <ul className='col-6'>
        {
          handleEVRender()
        }
      </ul>
      <p className='col-3'>item: {item}</p>
      <p className='col-3'>ability: {ability}</p>
      <p className='col-3'>nature: {natures[Math.floor(Math.random() * natures.length)]}</p>
      </div>
    </div>
  )
}

export default PokeCard