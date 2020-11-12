import React, { Component } from 'react';
import Car from './Car';

class MyCars extends Component {

    

    state = {
        voitures: [
            { name: "Ford", color: "red", annee: "2029" },
            { name: "Mercedes", color: "black", annee: "2020" },
            { name: "Audi", color: "green", annee: "2011" }
        ]
    }

    addAge = () => {
        const updatState = this.state.voitures.map((param) => {
            return param.annee += 1;
        })

        this.setState({
            updatState
        })
    }
    minsAge = () => {
        const updatState = this.state.voitures.map((param) => {
            return param.annee -= 1;
        })

        this.setState({
            updatState
        })
    }
   

    render() {
        const year = new Date().getFullYear();
        return ( 
        <div className = "MayCars" >
            <h1 > { this.props.titre } </h1>  
            <button onClick = { this.minsAge } > Age -1 </button>
            <button onClick = { this.addAge } > Age +1 </button>
            <Car year = { year - this.state.voitures[0].annee + ' ans' } color = { this.state.voitures[0].color } > { this.state.voitures[0].name } </Car> 
            <Car year = { year - this.state.voitures[1].annee + ' ans' } color = { this.state.voitures[1].color } > { this.state.voitures[1].name } </Car> 
            <Car year = { year - this.state.voitures[2].annee + ' ans' } color = { this.state.voitures[2].color } >  { this.state.voitures[2].name } </Car>
        </div> 
        );
    }
}


export default MyCars;