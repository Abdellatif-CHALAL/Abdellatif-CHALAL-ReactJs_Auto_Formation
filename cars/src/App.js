import React from 'react';
import MyCars from './Components/MyCars';
import './App.css';

class App extends React.Component {

    state = {
        titre: 'Mon Catalogue Voiture'
    }

    changeTitre = () => {
        console.log("onClick changeTitre");

        this.setState({
            titre: 'Titre est changé'
        })
        
        
    }
    
    static getDerivedStateFromProps(props, state) {
        console.log("getDerivedStateFromProps");
        console.log(state);
        return null;
    }
    
    shouldComponentUpdate(nextProps, nextState) {
        console.log("shouldComponentUpdate");
        return true;
    }

    
    render() {
        console.log("je suis dans le render");
        return ( 
            < div className = "App" >
                <button onClick={this.changeTitre}>changeTitre</button>
                <MyCars titre = { this.state.titre }/> 
            </div >
        );
    }

}



export default App;