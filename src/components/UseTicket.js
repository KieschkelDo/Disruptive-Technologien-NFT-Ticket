import React, { Component } from 'react';
import PropTypes from "prop-types";
import { withRouter } from "react-router";
import MediaCard from './Card3.js';
import Web3 from 'web3';
import Ticket from '../abis/Ticket.json';
import MainFeaturedPost from './Card2.js'
import Typography from '@material-ui/core/Typography';
import Countdown from './Countdown2.js'
import test from '../test.gif';
import test2 from '../Test.PNG'
import logo_wknd from '../Logo_Wknd.png'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';

const mainFeaturedPost = {
    title: 'Ticketname',
    description:
      "Standort, Sitzplatz etc.",
    image: 'https://www.eventim.de/obj/media/DE-eventim/teaser/artworks/2021/the-weeknd-tickets-artwork.jpg',
    imgText: 'main image description',
  };

class UseTicket extends React.Component {
    static propTypes = {
        match: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired
      }
    
    render() {
    const currentDate = new Date();
    const year = (currentDate.getMonth() === 11 && currentDate.getDate() > 23) ? currentDate.getFullYear() + 1 : currentDate.getFullYear();
        
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
                
                <div style={{border: '1px solid gainsboro', textAlign: 'center'}}>
                <Countdown date={`${year}-12-24T00:00:00`} style={{
                    display: "flex"}}/>
                </div>

                <hr></hr>
                <div style={{width:'800px', margin:'0 auto'}}>
                    <Typography variant="h5" align="center" color="textSecondary" paragraph>
                        Welcome to your personal Ticketroom! Everything in this room is connected to your ticket only.
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod 
                        tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                        <img src={logo_wknd}></img>
                    </Typography>
                </div>
                <hr></hr>

                <div style={{border: '22px solid white'}}>
                    <img src={test} alt="what" />
                </div>

                <div style={{border: '22px solid white', textAlign: 'right'}}>
                    <iframe src="https://open.spotify.com/embed/album/4yP0hdKOZPNshxUOjY0cZj" width="50%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                </div>      

                <div style={{border: '22px solid white'}}>
                    <img src={test2} alt="what" />
                </div>   

                <div style={{border: '22px solid white'}}>
                    <MediaCard justify="flex-end"></MediaCard>    
                </div>                   
            </div>
        );
    }
}

export default withRouter(UseTicket);