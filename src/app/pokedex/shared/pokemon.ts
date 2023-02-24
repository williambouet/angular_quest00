import { StatPokemon } from "./stat-pokemon";

export class Pokemon {
    constructor(
        public id?: number,
        public pokedexId?: number,
        public name?: string,
        public image?: string,
        public sprite?: string,
        public slug?: string,
        public stats?: StatPokemon,
    ) {

    }
}
