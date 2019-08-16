import Component from './Component.js';
import PokemonItem from './PokemonItem.js';

class PokemonList extends Component {
    
    onRender(dom) {
        const cats = this.props.cats;
    
        cats.forEach(cat => {
            const props = { cat: cat };
            const pokemonItem = new PokemonItem(props);
            const pokemonItemDOM = catItem.renderDOM();
            dom.appendChild(pokemonItemDOM);
        });
    }

    renderHTML() { /*html*/ `
        <ul class="all-pokemon">
        </ul>
        `;
    }
    
}

export default PokemonList;