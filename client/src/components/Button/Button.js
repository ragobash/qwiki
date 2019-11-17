import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
}));

export default function OutlinedButtons(props) {
  const classes = useStyles();

  return (
    <div>
      <Button onClick={props.onClick} sectionType='HEADING' variant="outlined" color="primary" className={classes.button}>
        Heading
      </Button>
      <Button onClick={props.onClick} sectionType='IMAGE' variant="outlined" color="primary" className={classes.button}>
        Image
      </Button>
      <Button onClick={props.onClick} sectionType='PARAGRAPH' variant="outlined" color="primary" className={classes.button}>
        Paragraph
      </Button>
    </div>
  );
}