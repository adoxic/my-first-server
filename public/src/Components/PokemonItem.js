import Component from './Component.js';
import pokemon from '../../pokedex/pokedex-data.js';

const singlePokemon = pokemon[1];

class PokemonItem extends Component {
    sortStats(singlePokemon) {
        //check if SA is highest
        if(singlePokemon.special_attack > singlePokemon.special_defense && singlePokemon.special_attack > singlePokemon.attack && singlePokemon.special_attack > singlePokemon.speed && singlePokemon.special_attack > singlePokemon.defense && singlePokemon.special_attack > singlePokemon.hp) {
            return 'special attack';
        }
        //check if SD is highest
        if(singlePokemon.special_defense > singlePokemon.attack && singlePokemon.special_defense > singlePokemon.speed && singlePokemon.special_defense > singlePokemon.defense && singlePokemon.special_defense > singlePokemon.hp) {
            return 'special defense';
        }
        //check if Attack is highest
        if(singlePokemon.attack > singlePokemon.speed && singlePokemon.attack > singlePokemon.defense && singlePokemon.attack > singlePokemon.hp) {
            return 'attack';
        }
        //check if Speed is highest
        if(singlePokemon.speed > singlePokemon.defense && singlePokemon.speed > singlePokemon.hp) {
            return 'speed';
        }
        //check if Defense is highest else HP is highest
        if(singlePokemon.defense > singlePokemon.hp) {
            return 'defense';
        } else {
            return 'hp';
        }
    }
    

    renderHTML() {
        const bestStat = this.sortStats(singlePokemon);
        return /*html*/`
    <li>
        <div class="pokemon">
            <img src="${singlePokemon.url_image}" alt="${singlePokemon.pokemon}">
            <div class="name-type">
                <p>${singlePokemon.pokemon}</p>
                <p>${singlePokemon.type_1}</p>
                <p class="hidden">${singlePokemon.type_2}</p>
                <p>Base total: ${singlePokemon.special_attack + singlePokemon.special_defense + singlePokemon.attack + singlePokemon.defense + singlePokemon.speed + singlePokemon.hp}</p>
                <p>Best Stat: ${bestStat}</p>
            </div>
        </div>
</li>
    `;
    }
}


export default PokemonItem;