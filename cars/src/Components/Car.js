import React, { Component } from 'react'

class Car extends Component {

    render() {
        const colorInfo = this.props.color ? (this.props.color) : ('Neant');
        if (this.props.children) {
                    return (
                        <div style={{background: 'pink', width: '400px', padding: '10px', margin: "5px auto" }}>
                            <p> Marque: {this.props.children} </p>
                            <p> couleur: {colorInfo} </p>
                            <p> Age: {this.props.year} </p>
                        </div >
            );
                }else {
                    return null;
                }
    }
}

export default Car
