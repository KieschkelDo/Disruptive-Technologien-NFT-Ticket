import React, { Component } from 'react';
import RecipeReviewCard from './Card.js';
import Web3 from 'web3';
import Ticket from '../abis/Ticket.json';
import MainFeaturedPost from './Card2.js'

const mainFeaturedPost = {
    title: 'Ticketname',
    description:
      "Standort, Sitzplatz etc.",
    image: 'https://source.unsplash.com/random',
    imgText: 'main image description',
  };

class UseTicket extends Component {
    
    render() {
        return (
            <div>
                <div style={{border: '22px solid white'}}></div>
                <MainFeaturedPost post={mainFeaturedPost} />
                test
                test
                test
                test
            </div>
        );
    }
}

export default UseTicket;