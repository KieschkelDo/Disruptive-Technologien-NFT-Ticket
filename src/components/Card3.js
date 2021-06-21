import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import ShareIcon from '@material-ui/icons/Share';

const useStyles = makeStyles({
  root: {
    maxWidth: 500,
  },
  media: {
    height: 300,
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://www.swp.de/imgs/07/7/9/9/3/6/5/2/3/tok_4d38eba1aed48e3aa29b51711bb20f30/w1200_h675_x942_y257_eacd06790b0f3705.jpeg"
          title="Contemplative Reptile"
        />
      </CardActionArea>
      <CardActions>
        <Button size="small" >
          <InstagramIcon/>
        </Button>
        <Button size="small" >
          <TwitterIcon/>
        </Button>
        <Button size="small" >
          <ShareIcon/>
        </Button>
      </CardActions>
    </Card>
  );
}