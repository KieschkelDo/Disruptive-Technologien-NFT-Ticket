import React, { Component } from 'react';
import PropTypes from "prop-types";
import { withRouter } from "react-router";
import MediaCard from './MediaCard.js';
import Web3 from 'web3';
import Ticket from '../abis/Ticket.json';
import MainFeaturedPost from './Card2.js'
import Typography from '@material-ui/core/Typography';
import Countdown from './Countdown2.js'
import test from '../img/wknd/test.gif';
import test2 from '../img/wknd/Test.PNG'
import logo_wknd from '../img/wknd/Logo_Wknd.png'
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
                        Welcome to your personal Ticketroom! 
                        This is a space that gathers all of your anticipation and memories of the event. 
                        Everything in this space is connected to your Ticket-Token only and can only be accesed as long as 
                        the Ticket-Token is connected to your wallet. Enjoy!
                        <img src={logo_wknd}></img>
                    </Typography>
                </div>
                <hr></hr>
                <Typography variant="overline" color="#212121" paragraphy fontSize="12">
                    Media
                </Typography>

                <div style={{border: '22px solid white'}}>
                    <img src={test} alt="what" />
                </div>

                <div style={{border: '22px solid white', textAlign: 'right'}}>
                    <iframe src="https://open.spotify.com/embed/album/4yP0hdKOZPNshxUOjY0cZj" width="50%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                </div>

                <hr></hr>
                <Typography variant="overline" color="#212121" paragraphy fontSize="12">
                    Social
                </Typography>

                <div style={{border: '22px solid white'}}>
                    <img src={test2} alt="what" />
                </div>   

                <hr></hr>
                <Typography variant="overline" color="#212121" paragraphy fontSize="12">
                    Event
                </Typography>

                <div style={{border: '22px solid white'}}>
                    <MediaCard justify="flex-end"></MediaCard>    
                </div>                   
            </div>
        );
    }
}

export default withRouter(UseTicket);