import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Barcode from 'react-barcode';
import EventIcon from '@material-ui/icons/Event';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import QR2 from '../img/dua/QR_2.PNG';

const useStyles = makeStyles((theme) => ({
  mainFeaturedTicket: {
    position: 'relative',
    backgroundColor: 'black',
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundSize: 'auto',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
  },
  mainFeaturedTicketContent: {
    position: 'relative',
    padding: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    },
  },
}));

export default function MainFeaturedTicket(props) {
  const classes = useStyles();
  console.log(props.ticket)
  

  return (
    <Paper className={classes.mainFeaturedTicket} style={{ backgroundImage: `url(https://i.imgur.com/bCkoR0q.png)` }} >
      {/* Increase the priority of the hero background image */}
      {<img style={{ display: 'none' }} src={`url(https://www.eventim.de/obj/media/DE-eventim/teaser/artworks/2021/the-weeknd-tickets-artwork.jpg)`} alt={"asdasd"} />}
      <div className={classes.overlay} />
      <Grid container>
        <Grid item md={6}>
          <div className={classes.mainFeaturedTicketContent}>
            <Typography variant="h3" color="inherit" gutterBottom>
               {props.ticket.name} 
            </Typography>
            <Typography variant="h5" color="inherit" paragraph>
               Artist: {props.ticket.artist} 
            </Typography>
            <Typography variant="h5" color="inherit" paragraph>
               Seat:  {props.ticket.seat} 
            </Typography>
            <Typography variant="h5" color="inherit" paragraph>
              <LocationOnIcon/> {props.ticket.location} 
            </Typography>
            <Typography variant="h5" color="inherit" paragraph>
            <EventIcon/> {props.ticket.date} 
            </Typography>        
            <div style={{ }}>
            <img src={QR2} height='150px'></img>
            </div>
          </div>
        </Grid>
      </Grid>
    </Paper>
  );
}

MainFeaturedTicket.propTypes = {
  ticket: PropTypes.object,
};