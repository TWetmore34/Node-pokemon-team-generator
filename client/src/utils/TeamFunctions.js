module.exports = class TeamSetup {
    constructor() {
        this.mons = [];
    }
    async teamMoves(){
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
                item: await this.chooseItem()
            }
            if (this.mons.length < 6) {
                this.mons.push(teamSet);
            }
        }
        return this.mons
        
    }

    async chooseItem(){
        let num = Math.floor(Math.random() * 526)
        let url = `https://pokeapi.co/api/v2/item/${num}`;
        try {
            let data = await fetch(url)
            let readable = await data.json()
            return readable;
        }
        catch(err) {
            if (err) throw err
        }
    }
}