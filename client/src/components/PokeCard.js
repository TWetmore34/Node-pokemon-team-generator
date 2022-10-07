import React from 'react'
const PokeCard = ({name, ability, moves, item}) => {
  return (
    <div className="card col-4 p-4">
      <img className='card-img-top' src='https://picsum.photos/200'></img>
      <h3 className='card-header'>Pokemon name</h3>
      <div className='row'>
      <ul className='card-text col-6'>
        <li>move1</li>
        <li>move2</li>
        <li>move3</li>
        <li>move4</li>
      </ul>
      <p className='col-6'>held item</p>
      </div>
    </div>
  )
}

export default PokeCard