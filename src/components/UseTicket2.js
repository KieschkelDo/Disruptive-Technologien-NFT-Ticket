import React, { Component } from 'react';
import PropTypes from "prop-types";
import { withRouter } from "react-router";
import MediaCard from './MediaCard.js';
import Web3 from 'web3';
import Ticket from '../abis/Ticket.json';
import Grid, { GridSpacing } from '@material-ui/core/Grid';
import MainFeaturedPost from './Card2.1.js'
import Typography from '@material-ui/core/Typography';
import Countdown from './Countdown2.js'
import Dua1 from '../img/dua/Dua1.jpg';
import Dua2 from '../img/dua/Dua2.jpg';
import Dua3 from '../img/dua/Dua3.jpg';
import Dua4 from '../img/dua/Dua4.jpg';
import Dua5 from '../img/dua/Dua5.jpg';
import Dua6 from '../img/dua/Dua6.jpg';
import Dua7 from '../img/dua/Dua7.jpg';
import Dua8 from '../img/dua/Dua8.jpg';
import Dua9 from '../img/dua/Dua9.jpg';
import DuaFan2 from '../img/dua/DuaFan2.jpg';
import DuaFan3 from '../img/dua/DuaFan3.jpg';
import DuaFan4 from '../img/dua/DuaFan4.jpg';
import DuaFan5 from '../img/dua/DuaFan5.jpg';
import DuaFan6 from '../img/dua/DuaFan6.png';
import DuaFan7 from '../img/dua/DuaFan7.jpg';
import DuaSocial from '../img/dua/Dua_Social.PNG'
import DuaSocial2 from '../img/dua/Dua_Social2.PNG'
import logo_dua from '../img/dua/Dua_Lipa1.png'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

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
                        This is a space that gathers all of your memories of the event. 
                        Everything in this space is connected to your Ticket-Token only and can only be accesed as long as 
                        the Ticket-Token is connected to your wallet. Enjoy!
                        <img src={logo_dua} width= '480px'></img>
                    </Typography>
                </div>
                <hr></hr>
                <Typography variant="overline" color="#212121" paragraphy fontSize="12">
                    Media
                </Typography>

                <div style={{border: '22px solid white'}}>
                    <img src={Dua1} alt="Concert1" width="50%" style={{border: "10px solid white"}}/>
                    <img src={Dua2} alt="Concert2" width="50%" style={{border: "10px solid white"}}/>
                </div>
                
                <div style={{border: '22px solid white', textAlign: 'center'}}>
                    <img src={Dua3} alt="Concert3" width="33%" style={{border: "10px solid white"}}/>
                    <img src={Dua5} alt="Concert5" width="33%" style={{border: "10px solid white"}}/>
                    <img src={Dua4} alt="Concert4" width="33%" style={{border: "10px solid white"}}/>              
                </div>

                <div style={{border: '22px solid white'}}>
                    <img src={Dua6} alt="Concert6" width="50%" style={{border: "10px solid white"}}/>
                    <img src={Dua7} alt="Concert7" width="50%" style={{border: "10px solid white"}}/>
                </div>

                <div style={{border: '22px solid white'}}>
                    <img src={Dua8} alt="Concert8" width="50%" style={{border: "10px solid white"}}/>
                    <img src={Dua9} alt="Concert9" width="50%" style={{border: "10px solid white"}}/>
                </div>

                <div style={{border: '22px solid white', textAlign: 'center'}}>
                <iframe src="https://open.spotify.com/embed/album/0nRVAnU410D5nOyVWCadJh" width="80%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media" align="center"></iframe>
                </div>
                <div style={{border: '22px solid white', textAlign: 'center'}}>
                <KeyboardArrowDownIcon/>
                </div>
                
                <hr></hr>
                <Typography variant="overline" color="#212121" paragraphy fontSize="12">
                    Social
                </Typography>

                <div style={{border: '22px solid white'}}>
                    <img src={DuaSocial} alt="Instagram Dua Lipa" style={{border: "20px solid white"}}/>
                    <img src={DuaSocial2} alt="Instagram Dua Lipa" style={{border: "10px solid white"}}/>
                </div>   

                <hr></hr>
                <Typography variant="overline" color="#212121" paragraphy fontSize="12">
                    Event
                </Typography>
                <Grid container 
                      direction="row"
                      justify="center"
                      alignItems="flex-start">
                    <Grid item xs>
                    <div style={{border: '22px solid white ',}}>
                        <MediaCard img={DuaFan2}/>     
                    </div>  
                    </Grid>
                    <Grid item xs>
                    <div style={{border: '22px solid white'}}>
                        <MediaCard img={DuaFan5}/>    
                    </div>   
                    </Grid>  
                    <Grid item xs>
                    <div style={{border: '22px solid white'}}>
                        <MediaCard img={DuaFan4}/>    
                    </div>   
                    </Grid>  
                </Grid>     
                <Grid container 
                      direction="row"
                      justify="center"
                      alignItems="flex-start">
                    <Grid item xs>
                    <div style={{border: '22px solid white ',}}>
                        <MediaCard img={DuaFan3}/>     
                    </div>  
                    </Grid>
                    <Grid item xs>
                    <div style={{border: '22px solid white'}}>
                        <MediaCard img={DuaFan6}/>    
                    </div>   
                    </Grid>  
                    <Grid item xs>
                    <div style={{border: '22px solid white'}}>
                        <MediaCard img={DuaFan7}/>    
                    </div>   
                    </Grid>  
                </Grid>             
            </div>
        );
    }
}

export default withRouter(UseTicket);