const pokemon = require('pokemon');
const fetch = require('node-fetch');

function makeATeam(){
    newTeam = []
    for(i=0;i<6;i++){
        newTeam.push(pokemon.all()[Math.floor(Math.random()*809)])
    }
    return newTeam
};

function teamMoves(team){
    for(let i=0;i<team.length;i++){
        url = 'https://pokeapi.co/api/v2/pokemon/' + team[i].toLowerCase();
        fetch(url).then(response => response.json())
        .then(data => {
            let moves = []
            for(j=0;j<4;j++){
                moves.push(data.moves[Math.floor(Math.random()*data.moves.length)].move.name)
            }
            let teamSet = {
                name: data.name,
                ability: data.abilities[Math.floor(Math.random()*data.abilities.length)].ability.name,
                moves: moves,
                item: ''
            }
            return teamSet;
        })
    }
    
}

function chooseItem(){
        url = `https://pokeapi.co/api/v2/item/10`;
        fetch(url).then(response => response.json())
        .then(data => {
            console.log(data)
})
}
chooseItem()
teamMoves(makeATeam())
// ok so the overall plan is to eventually set up random teams for different formats