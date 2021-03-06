import React, { Component } from 'react';
import PropTypes from "prop-types";
import { withRouter } from "react-router";
import MediaCard from './MediaCard.js';
import Web3 from 'web3';
import Ticket from '../abis/Ticket.json';
import MainFeaturedPost from './Card2.js';
import MainFeaturedTicket from './Card2.1.js';
import Typography from '@material-ui/core/Typography';
import Countdown from './Countdown2.js';
import Grid, { GridSpacing } from '@material-ui/core/Grid';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import Wknd_Poster from '../img/wknd/Wknd_Poster.PNG';
import Wknd_Poster1 from '../img/wknd/Wknd_Poster1.jpg';
import Wknd_Poster2 from '../img/wknd/Wknd_Poster2.jpg';
import Wknd_Collage from '../img/wknd/Wknd_Collage.png';
import Wknd_Shop from '../img/wknd/Wknd_Shop1.jpg';
import Wknd_Shop1 from '../img/wknd/Wknd_Shop2.png';
import Wknd_gif from '../img/wknd/Wknd_gif.gif';
import Wknd_gif1 from '../img/wknd/Wknd_gif2.gif';
import Wknd_gif2 from '../img/wknd/Wknd_gif3.gif';
import Wknd_Social from '../img/wknd/Wknd_Social.PNG';
import Wknd_Social1 from '../img/wknd/Wknd_Social1.PNG';
import Wknd_Social2 from '../img/wknd/Wknd_Social2.PNG';
import Wknd_Social3 from '../img/wknd/Wknd_Social3.PNG';
import Wknd_Social4 from '../img/wknd/Wknd_Social4.PNG';
import Wknd_Social5 from '../img/wknd/Wknd_Social5.PNG';
import Wknd_Social6 from '../img/wknd/Wknd_Social6.PNG';
import Wknd_Social7 from '../img/wknd/Wknd_Social7.PNG';
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
import DuaSocial from '../img/dua/Dua_Social.PNG';
import DuaSocial2 from '../img/dua/Dua_Social2.PNG';
import DuaSocial3 from '../img/dua/Dua_Social3.PNG';
import DuaSocial4 from '../img/dua/Dua_Social4.PNG';
import DuaSocial5 from '../img/dua/Dua_Social5.PNG';
import DuaSocial6 from '../img/dua/Dua_Social6.PNG';
import DuaSocial7 from '../img/dua/Dua_Social7.PNG';
import logo_dua from '../img/dua/Dua_Lipa1.png';
import White from '../img/White.PNG';
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
        var ticketname = this.props.location.state.ticket.name;
        
        var dmy = ticket.date.split("/");
        var dateformat = new Date(dmy[2], dmy[1] - 1, dmy[0]);
        return (
            <div>      
                {ticketname === 'Dua Lipa - Hotter Than Hell Tour ' ? 
                <div>          
                <div style={{border: '22px solid white'}}></div>
                <MainFeaturedTicket ticket={ticket}/>
                
                <div style={{border: '1px solid gainsboro', textAlign: 'center'}}>
                <Countdown date={`${dmy[2]}-${dmy[1]}-${dmy[0]}T00:00:00`} style={{
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
                    <img src={White} alt="White" style={{border: "20px solid white", width: '22%'}}/>
                    <img src={DuaSocial3} alt="Instagram Dua Lipa" style={{border: "10px solid white", width: '28%'}}/>
                    
                    <img src={DuaSocial4} alt="Instagram Dua Lipa" style={{border: "10px solid white"}}/>
                    <img src={DuaSocial5} alt="Instagram Dua Lipa" style={{border: "10px solid white"}}/>
                    <img src={DuaSocial6} alt="Instagram Dua Lipa" style={{border: "10px solid white"}}/>


                    <img src={DuaSocial7} alt="Instagram Dua Lipa" style={{border: "10px solid white", width: '28%'}}/>
                    <img src={White} alt="White" style={{border: "20px solid white"}}/>
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

                : 
                <div>
                
                <div style={{border: '22px solid white'}}></div>
                 <MainFeaturedPost ticket={ticket}/>
                
                <div style={{border: '1px solid gainsboro', textAlign: 'center'}}>
                <Countdown date={`${dmy[2]}-${dmy[1]}-${dmy[0]}T00:00:00`} style={{
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

                <div style={{border: '22px solid white', textAlign: 'center'}}>
                    <img src={Wknd_Poster} alt="Poster" width="600px" height="800" style={{border: "10px solid white"}}/>
                    <img src={Wknd_Poster1} alt="Poster" width="600px" height="800" style={{border: "10px solid white"}}/>
                    <img src={Wknd_Poster2} alt="Poster" width="600px" height="800" style={{border: "10px solid white"}}/>
                </div>

                <div style={{border: '22px solid white', textAlign: 'center'}}>
                    <iframe src="https://open.spotify.com/embed/album/4yP0hdKOZPNshxUOjY0cZj" width="1800" height="400" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                </div>

                <div style={{border: '22px solid white', textAlign: 'center'}}>
                    <img src={Wknd_Collage} alt="Wknd" style={{border: "10px solid white"}}/>
                 
                </div>

                <hr></hr>
                <Typography variant="overline" color="#212121" paragraphy fontSize="12">
                    Shop
                </Typography>

                <div style={{border: '22px solid white', textAlign: 'center'}}>
                    <img src={Wknd_Shop} alt="Wknd" width="25%" style={{border: "20px solid white", marginRight: "40px"}}/>
                    <img src={White} alt="White" />
                    <Button variant="outlined" color="secondary" onClick={() => {
                        window.open('https://shop.theweeknd.com') }}>
                        <Typography variant="h5" align="center" color="secondary">
                        Shop 
                        </Typography>
                    </Button>
                    <img src={White} alt="White" />
                    <img src={Wknd_Shop1} alt="Wknd" width="550px" height= "400px" style={{border: "10px solid white"}}/>
                </div>   


                <hr></hr>
                <Typography variant="overline" color="#212121" paragraphy fontSize="12">
                    Social
                </Typography>

                <div style={{border: '22px solid white', textAlign: 'center'}}>
                    <img src={Wknd_Social6} alt="Tweet"style={{border: "29px solid white"}}/>
                    <img src={Wknd_gif} alt="Wknd_gif" style={{border: "10px solid white", width: '620px'}}/>
                    <img src={Wknd_Social7} alt="Tweet" style={{border: "10px solid white"}}/>


                    <img src={Wknd_Social1} alt="Tweet" style={{border: "10px solid white"}}/>
                    
                    <img src={Wknd_Social2} alt="Tweet" style={{border: "10px solid white"}}/>
                    <img src={Wknd_gif2} alt="Wknd_gif" style={{border: "10px solid white"}}/>
                    <img src={Wknd_Social5} alt="Tweet" style={{border: "10px solid white"}}/>
                    <img src={Wknd_Social3} alt="Tweet" style={{border: "10px solid white"}}/>
                    <img src={Wknd_Social4} alt="Tweet" style={{border: "10px solid white"}}/>

                    <img src={Wknd_gif1} alt="Wknd_gif" style={{border: "10px solid white", width: '620px'}}/>
                    <img src={Wknd_Social} alt="Tweet" style={{border: "10px solid white"}}/>

                </div>   

                <hr></hr>
                <Typography variant="overline" color="#212121" paragraphy fontSize="12">
                    Event
                </Typography>

                <div style={{width:'800px', margin:'0 auto', border:"100px solid white"}}>
                    <Typography variant="h5" align="center" color="textSecondary" paragraph> 
                        Once your on-venue experience is over, you will find many pictures, videos and other memories in this section.
                        This section is once again completely unique and is connected to your Ticket-Token only.
                    </Typography> 
                </div> 
                </div>                  
                }    
                
            </div>
        );
    }
}

export default withRouter(UseTicket);