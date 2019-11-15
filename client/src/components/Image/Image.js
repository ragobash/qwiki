import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    '& > * + *': {
      padding: '15',
    },
  },
  square: {
    width: '100%',
    heigth: '100%',
    backgroundColor: 'red'
  }
});

export default function VariantAvatars() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Avatar variant="square" src="https://via.placeholder.com/300" className={classes.square}>
      </Avatar>
    </div>
  );
}
