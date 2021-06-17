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
    name: 'Beginners',
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
    name: 'Web Development',
  },
  {
    idx: 2,
    name: 'Data Science',
  },
  {
    idx: 3,
    name: 'Machine Learning',
  },
  {
    idx: 4,
    name: 'App Development',
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    width: '90%',
    // zIndex: 5,
    display: 'flex',
    flexWrap: 'wrap',
    overflowX: 'hidden',
    gap: '15px',
    margin: 'auto 90px',
  },

  main: {
    width: '20%',
    border: '1px solid black',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  options: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
    justifyContent: 'center',
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

  return (
    <div className={classes.root}>
      <div>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>Level</Typography>
          </AccordionSummary>
          <AccordionDetails className={classes.options}>
            {level.map((el) => (
              <div>
                <Checkbox
                  // defaultChecked
                  checked={checked.indexOf(el.name) !== -1}
                  onChange={() => handleChange(el.name)}
                  inputProps={{ 'aria-label': 'uncontrolled-checkbox' }}
                />
                <span>{el.name} </span>
              </div>
            ))}
          </AccordionDetails>
        </Accordion>
      </div>

      <div>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>Subject</Typography>
          </AccordionSummary>
          <AccordionDetails className={classes.options}>
            {subject.map((el) => (
              <div>
                <Checkbox
                  // defaultChecked
                  checked={checked.indexOf(el.name) !== -1}
                  onChange={() => handleChange(el.name)}
                  inputProps={{ 'aria-label': 'uncontrolled-checkbox' }}
                />
                <span>{el.name} </span>
              </div>
            ))}
          </AccordionDetails>
        </Accordion>
      </div>

      <div>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>Skills</Typography>
          </AccordionSummary>
          <AccordionDetails className={classes.options}>
            {level.map((el) => (
              <div>
                <Checkbox
                  // defaultChecked
                  checked={checked.indexOf(el.name) !== -1}
                  onChange={() => handleChange(el.name)}
                  inputProps={{ 'aria-label': 'uncontrolled-checkbox' }}
                />
                <span>{el.name} </span>
              </div>
            ))}
          </AccordionDetails>
        </Accordion>
      </div>

      <div>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>Duration</Typography>
          </AccordionSummary>
          <AccordionDetails className={classes.options}>
            {level.map((el) => (
              <div>
                <Checkbox
                  // defaultChecked
                  checked={checked.indexOf(el.name) !== -1}
                  onChange={() => handleChange(el.name)}
                  inputProps={{ 'aria-label': 'uncontrolled-checkbox' }}
                />
                <span>{el.name} </span>
              </div>
            ))}
          </AccordionDetails>
        </Accordion>
      </div>

      <div>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>Partner</Typography>
          </AccordionSummary>
          <AccordionDetails className={classes.options}>
            {level.map((el) => (
              <div>
                <Checkbox
                  // defaultChecked
                  checked={checked.indexOf(el.name) !== -1}
                  onChange={() => handleChange(el.name)}
                  inputProps={{ 'aria-label': 'uncontrolled-checkbox' }}
                />
                <span>{el.name} </span>
              </div>
            ))}
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}
