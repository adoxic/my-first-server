import Component from '../Components/Component.js';
import Header from '../Components/Header.js';
import PokemonList from '../Components/PokemonList.js';
import PokemonItem from '../Components/PokemonItem.js';

class App extends Component {
    onRender() {
        const header = new Header;
        const headerDOM = header.renderDOM();
        dom.prepend(headerDOM);

        
    }
}

export default App;