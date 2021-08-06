
import Count from './Count';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import Scrollbtn from './Scrollbtn';

const labels = {
  0.5: 'Useless',
  1: 'Useless+',
  1.5: 'Poor',
  2: 'Poor+',
  2.5: 'Ok',
  3: 'Ok+',
  3.5: 'Good',
  4: 'Good+',
  4.5: 'Excellent',
  5: 'Excellent+',
};

const useStyles = makeStyles({
  root: {
      height:200,
      marginLeft:20,
      padding:20,
      justifyContent:20,
    width: 400,
    display: 'flex',
    alignItems: 'center',
  },
  rate:{
      padding:20
  }
});

export default function HoverRating() {
  const [value, setValue] = React.useState(2);
  const [hover, setHover] = React.useState(-1);
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <h1 className="rate">Give us a Rating</h1>
      <Rating className="star"
        name="hover-feedback"
        value={value}
        precision={0.5}
        onChange={(event, newValue) => {
            if(value===5){
                alert("Thank You for loving Us !😍")
            }
          setValue(newValue);
        }}
        
        onChangeActive={(event, newHover) => {
          setHover(newHover);
        }}
        
      />
      
      
      {value !== null && <Box ml={2}>{labels[hover !== -1 ? hover : value]}</Box>}
     
      <Scrollbtn/>
     
    </div>
  );
}

