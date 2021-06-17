import { makeStyles } from '@material-ui/core';

export default makeStyles(() => ({
  root: {
    textAlign: 'center',
  },
  table: {
    borderCollapse: 'collapse',
    width: '95%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '50px',
    fontFamily: 'arial, sans-serif',
  },
  tableData: {
    border: '1px solid #dddddd',
    textAlign: 'left',
    padding: '8px',
  },
  'tr:nth-child(even)': {
    backgroundColor: '#dddddd',
  },
  heading: {
    textAlign: 'center',
    fontSize: '40px',
    fontWeight: 600,
    marginTop: '30px',
    textDecoration: 'underline',
    color: '#3a3a3a',
  },
}));
