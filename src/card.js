import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import image from './images/bgimage.jpeg';
import image1 from './images/image.jpeg';

const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      background:`url(${image})`,
    color:'white'
    },
    details: {
      display: 'flex',
      flexDirection: 'column',
    },
    content: {
      flex: '1 0 auto',
      fontFamily:'Times New Roman'
    },
    cover: {
      width: 151,
      height:'auto'
    },
   
    playIcon: {
      height: 38,
      width: 38,
    },
  }));
  


export const AboutCard=function AboutCard(){

    const classes = useStyles();
    const theme = useTheme();
  
    return (
      <Card className={classes.root}>
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography component="h4" variant="h4" style={{fontFamily:'Times New Roman'}}>
             Web Developer.  
            </Typography>
            <Typography component="p" variant="p" style={{fontFamily:'Times New Roman'}}>
            Based in Mumbai. I Code & Design things for web.
            </Typography>
            <Typography component="p" variant="p" style={{fontFamily:'Times New Roman'}}>
            Framework Agnostic: React js, Django, Angular...  
            </Typography>
          </CardContent>
          
        </div>
      </Card>
    );



}