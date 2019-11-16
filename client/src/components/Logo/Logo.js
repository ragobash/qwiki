import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    '& > * + *': {
      marginLeft: 16,
    },
  },
  square: {
    width: '100%',
    heigth: '100%',
    backgroundColor: '#000000'
  }
});

export default function VariantAvatars() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Avatar variant="square" src="./images/logocolor.png" className={classes.square}>
      </Avatar>
    </div>
  );
}
