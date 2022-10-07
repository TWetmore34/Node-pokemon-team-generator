const fetch = require('node-fetch');
const fs = require('fs');

async function teamMoves(){
    let items = await fs.readFileSync("itemList.json", "utf-8");
    items = JSON.parse(items);
    let team = []
    for(let i=0;i<6;i++){
        let url = 'https://pokeapi.co/api/v2/pokemon/' + Math.floor(Math.random() * 905);
        let unparsed = await fetch(url);
        let data = await unparsed.json()
        let moves = []
        for(j=0;j<4;j++){
            moves.push(data.moves[Math.floor(Math.random()*data.moves.length)].move.name)
        }
        let teamSet = {
            name: data.name,
            ability: data.abilities[Math.floor(Math.random()*data.abilities.length)].ability.name,
            moves: moves,
            item: items[Math.floor(Math.random() * items.length)]
        }
        team.push(teamSet);
    }
    return team
    
}
// let resp = true
// let notStr = []

// async function chooseItem(num){
//         let url = `https://pokeapi.co/api/v2/item/${num}`;
//         try {
//             let data = await fetch(url)
//             let readable = await data.json()
//             notStr.push(readable.name)
//             fs.writeFileSync("itemList.json", JSON.stringify(notStr), (err) => {
//                 if (err) throw err
//             })
//         }
//         catch(err) {
//             resp = false
//             if (err) throw err
//         }
// }

const makeATeam = async () => {
    let team  = await teamMoves();
    console.log(team)
}

makeATeam()