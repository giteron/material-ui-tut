import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import { makeStyles } from '@material-ui/core';


const useStyles = makeStyles({
  btn: {
    fontSize: 60,
    backgroundColor: 'violet',
    '&:hover': {
      backgroundColor: 'blue'
    }
  },
  title: {
    textDecoration: 'underline',
    marginBottom: 20
  }
});

export default function Create() {

  const classes = useStyles();

  return (
    <Container>
      <Typography
      // className={classes.title}
      variant="h6"
      color="textSecondary"
      component="h2"
      gutterBottom>
        Create a new note
      </Typography>

      <Button
      // className={classes.btn}
      onClick={() => console.log('you clicked me')}
      type="submit"
      color="secondary"
      variant="contained"
      endIcon={<KeyboardArrowRightIcon />}
      >
        Submit
      </Button>

      {/* <Button type="submit">Submit</Button>
      <Button 
      type="submit" 
      color="secondary" 
      variant="outlined"
      >Submit</Button>

      <ButtonGroup color="secondary" variant="contained">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup> */}
      {/* <br />
      <AcUnitOutlinedIcon />
      <AcUnitOutlinedIcon color="secondary" fontSize="large" />
      <AcUnitOutlinedIcon color="secondary" fontSize="small" />
      <AcUnitOutlinedIcon color="action" fontSize="small" />
      <AcUnitOutlinedIcon color="error" fontSize="small" />
      <AcUnitOutlinedIcon color="disabled" fontSize="small" /> */}

    </Container>
  )
}
