import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';



const useStyles = makeStyles(theme => ({
  root: {
    marginTop: '5%',
  },
  cover: {
    alignItems: 'right',
  },
  content: {
    flex: '1 0 auto',
    marginTop: '5%',
    marginLeft: '8%',
  },
  buttons: {
    marginLeft: '10%'
  },
  button2: {
    marginLeft: '4%'
  },


}))

const About = () => {
  const classes = useStyles();

  return (
    <section id="about">
      <Grid container spacing={3} className={classes.root}>
        <Grid item xs={6}>
          <CardContent className={classes.content}>
            <Typography component="h5" variant="h5">
              Shakeel here !
            </Typography>
            <Typography>
              Mac Miller             Mac Miller
              Mac Miller
              Mac Millerv
              Mac Miller
              Mac Miller
              Mac Miller             Mac Miller
              Mac Miller
              Mac Millerv
              Mac Miller
              Mac Miller
              Mac Miller             Mac Miller
              Mac Miller
              Mac Millerv
              Mac Miller
              Mac Miller
              Mac Miller             Mac Miller
              Mac Miller
              Mac Millerv
              Mac Miller
              Mac Miller
            </Typography>
          </CardContent>

          <div className={classes.buttons}>
            <Link href="#">
              <Button variant="contained" color="primary">
                Contact
              </Button>
            </Link>

            <Link href="#projects" className={classes.button2}>
              <Button variant="contained" color="primary">
                Previous work
              </Button>
            </Link>
          </div>

        </Grid>

        <Grid item xs={6}>
          <img
            className={classes.cover}
            src="./set-programmer-icon.webp"
            alt="cover coding"
          />
        </Grid>
      </Grid>
    </section>
  )
}

export default About;