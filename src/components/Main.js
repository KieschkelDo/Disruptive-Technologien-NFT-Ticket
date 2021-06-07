import React, { Component } from 'react';

class Main extends Component {
    render() {
        return (
            <div>
        <div className="container-fluid mt-5">
        <div style={{border: '30px solid white'}}></div>
        <p class="text-center">Welcome to our Ethereum-based Ticket Merchant Showcase.</p>
        <p class="text-center">This was implemented as part of the "Disruptive Technologien" Module - SS21.</p>
        <p class="text-center">We have not implemented any RBAC, which would be necessary in a productive setup.</p>
        <p class="text-center">This should only be seen as a very minimal MVP.</p>  
        <div style={{border: '30px solid white'}}></div>
        <hr/>
        </div>
            </div>
        );
    }
}

export default Main;