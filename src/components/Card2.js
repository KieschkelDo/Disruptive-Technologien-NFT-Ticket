import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Barcode from 'react-barcode';

const useStyles = makeStyles((theme) => ({
  mainFeaturedTicket: {
    position: 'relative',
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,.3)',
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
    <Paper className={classes.mainFeaturedTicket} style={{ backgroundImage: `url(https://source.unsplash.com/random)` }}>
      {/* Increase the priority of the hero background image */}
      {<img style={{ display: 'none' }} src={`url(https://source.unsplash.com/random)`} alt={"asdasd"} />}
      <div className={classes.overlay} />
      <Grid container>
        <Grid item md={6}>
          <div className={classes.mainFeaturedTicketContent}>
            <Typography component="h1" variant="h3" color="inherit" gutterBottom>
            {props.ticket.name} 
            </Typography>
            <Typography variant="h5" color="inherit" paragraph>
               {props.ticket.artist} 
            </Typography>
            <Typography variant="h5" color="inherit" paragraph>
            {props.ticket.location} 
            </Typography>
            <Typography variant="h5" color="inherit" paragraph>
               {props.ticket.seat} 
               </Typography>
               <Typography variant="h5" color="inherit" paragraph>
               {props.ticket.price} 
               </Typography>
               <Barcode value={Math.random().toString(36).substring(2)}/>
          </div>
        </Grid>
      </Grid>
    </Paper>
  );
}

MainFeaturedTicket.propTypes = {
  ticket: PropTypes.object,
};