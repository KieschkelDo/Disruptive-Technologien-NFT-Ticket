import React, { Component } from 'react';
import PropTypes from "prop-types";
import { withRouter } from "react-router";
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

class UseTicket extends React.Component {
    static propTypes = {
        match: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired
      }
    
    render() {
        const { match, location, history } = this.props;
        if (this.props.location.state == undefined){
            alert("No Ticket selected");
            return <div></div>
        }

        const ticket = this.props.location.state.ticket;
        return (
            <div>
                <div style={{border: '22px solid white'}}></div>
                <MainFeaturedPost ticket={ticket}/>
            </div>
        );
    }
}

export default withRouter(UseTicket);