import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ConfirmationNumberIcon from '@material-ui/icons/ConfirmationNumber';
import UseTicket from './UseTicket.js';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    Height: "5%",
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function RecipeReviewCard({props}) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
        <CardHeader
        
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={props.name}
        subheader={props.date+" | "+props.location} 
      />
      <CardMedia
        className={classes.media}
        image={'https://gateway.pinata.cloud/ipfs/'+ props.ipfs_hash} style={{width: "100%"}}
        title="Paella dish"
      />
      <CardContent>
      <Typography component="h5" variant="h5">
            {props.artist}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {props.seat} | {props.price} €
          </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="ticket" component={Link} to={'/useTicket'}>
          <ConfirmationNumberIcon/>
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Ticket Disclaimer:</Typography>
          <Typography>
            The Ticket holder is admitted on condition, and by use of this ticket agrees that :

            this ticket constitutes a revocable license to enter the facility and observe the event for which this ticket grants admission ("Event")
            the holder is not allowed to transmit or aid in transmitting any information about the Event, including but not limited to, any picture, video, audio, or reproduction concerning the Event (including pre and post Event activities);
            the venue operator or event promoter may be exclusive owner of all copyrights and other proprietary rights to the Event and Event Information;
            the holder grants unrestricted rights to use the holder's likeness incidental to any broadcast, telecast, photograph taken, or other transmission or reproduction in connection with the Event or otherwise to the participating artists, promoters of the Event, and all entities affiliated with the Event, or their respective agents.

            This Ticket may not be used for advertising, promotion (including contests and sweepstakes) or other trade purposes without the express written consent of Cloudhax Sdn Bhd. This ticket may not be resold in violation of any federal, state, or local law or regulation. The license granted by this may be terminated upon :-

            breach of any of the preceding provisions or
            if the holder is deemed to be disorderly, intoxicated, use vulgar or abusive language or violate any other venue rule or regulation. Management of the facility reserves the right to inspect and/or search all persons, packages, bags entering the premises.

            WARNING! THE TICKET HOLDER BEARS THE RISK OF THE DANGERS INCIDENTAL TO THIS EVENT, whether occurring prior to, during, or after the Event including specifically (but not exclusively) the dangers of being struck by thrown or projected objects, atmospheric effects, strobe light usage, or loud noises. IF STRUCK OR ADVERSELY AFFECTED BY ANYTHING ASSOCIATED WITH EVENT, IMMEDIATELY CONTACT AN USHER FOR ASSISTANCE. All tickets sold are final and no refunds or exchanges are permitted UNLESS expressly permitted by policies of the organizer. Policies and procedures adopted by Ticket2u.com.my are subject to change at any time without notice.


            If the Ticket Customer illegally or wrongfully fails to pay any amounts due for any transactions entered into between Ticket2U and the Ticket Customer (including for any illegal or wrongful cancellation of a chargeback transaction initiated by the Ticket Customer with a payment gateway provider), the Ticket Customer shall owe all monies for the cancelled chargeback transaction, including statutory interest, on any and all outstanding amounts due and payable without a demand for payment or notice of default being required. If the Ticket Customer fails to pay any amount owed following a letter of demand for payment, Ticket2U may engage a third party collection agent or a law firm for the purposes of collection, in which case, in addition to the total amount owed, the Ticket Customer shall also be liable for all of our costs, expenses and charges for bringing against the Ticket Customer such legal action including any court and legal fees, collection agents or attorney's costs, and judicial interest as is prescribed by law. 
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}