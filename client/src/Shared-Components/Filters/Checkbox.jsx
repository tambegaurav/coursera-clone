import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { AccordionDetails, Checkbox } from '@material-ui/core';

const level = [
  {
    idx: 1,
    name: 'Beginner',
  },
  {
    idx: 2,
    name: 'Intermediate',
  },
  {
    idx: 3,
    name: 'Advanced',
  },
];

const subject = [
  {
    idx: 1,
    name: 'Web dev',
  },
  {
    idx: 2,
    name: 'Computer Science',
  },
  {
    idx: 3,
    name: 'Information Technology',
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    display: 'flex',
    gap: '20px',
  },
  main: {
    width: '20%',

    border: '1px solid black',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function Filters(props) {
  const classes = useStyles();
  const [checked, setChecked] = React.useState([]);
  const handleChange = (name) => {
    const currentIndex = checked.indexOf(name);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(name);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
    // eslint-disable-next-line react/prop-types
    props.handleFilter(newChecked);
  };

  // console.log(checked);
  return (
    <div className={classes.root}>
      <Accordion className={classes.main}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Level</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {level.map((el) => (
            <>
              <Checkbox
                // defaultChecked
                checked={checked.indexOf(el.name) !== -1}
                onChange={() => handleChange(el.name)}
                inputProps={{ 'aria-label': 'uncontrolled-checkbox' }}
              />
              <span>{el.name} </span>
            </>
          ))}
        </AccordionDetails>
      </Accordion>

      <Accordion className={classes.main}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Subject</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {subject.map((el) => (
            <>
              <Checkbox
                // defaultChecked
                checked={checked.indexOf(el.name) !== -1}
                onChange={() => handleChange(el.name)}
                inputProps={{ 'aria-label': 'uncontrolled-checkbox' }}
              />
              <span>{el.name} </span>
            </>
          ))}
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
