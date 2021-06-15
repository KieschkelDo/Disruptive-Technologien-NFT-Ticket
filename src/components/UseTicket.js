import React, { Component } from 'react';
import RecipeReviewCard from './Card.js';
import Web3 from 'web3';
import Ticket from '../abis/Ticket.json';
import MainFeaturedPost from './Card2.js'

import Countdown from './Countdown2.js'
import test from '../test.gif';

const mainFeaturedPost = {
    title: 'Ticketname',
    description:
      "Standort, Sitzplatz etc.",
    image: 'https://source.unsplash.com/random',
    imgText: 'main image description',
  };

class UseTicket extends Component {
    
    render() {
    const currentDate = new Date();
    const year = (currentDate.getMonth() === 11 && currentDate.getDate() > 23) ? currentDate.getFullYear() + 1 : currentDate.getFullYear();
        return (
            <div>          
                <div style={{border: '22px solid white'}}></div>
                <MainFeaturedPost post={mainFeaturedPost} />
                
                <div style={{border: '2px solid black', textAlign: 'center'}}>
                <Countdown date={`${year}-12-24T00:00:00`} style={{
                    display: "flex"}}/>
                </div>

                <div style={{border: '22px solid white'}}>
                    <img src={test} alt="what" />
                </div>

                <div style={{border: '22px solid white'}}>
                <iframe src="https://open.spotify.com/embed/album/4yP0hdKOZPNshxUOjY0cZj" width="50%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                </div>               
                test
                test
                test
            </div>
        );
    }
}

export default UseTicket;