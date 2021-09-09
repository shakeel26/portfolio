import React from 'react';
import { about } from '../data';
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
      <Grid container spacing={10} className={classes.root}>
        {about.map((about) =>
          <Grid item xs={12} md={6} lg={6}>
            <CardContent className={classes.content}>
              <Typography component="h5" variant="h5">
                {about.title}
              </Typography>
              <Typography>
                {about.description}

              </Typography>
            </CardContent>

            <div className={classes.buttons}>
              <Link href="#contact" color="inherit">
                <Button variant="contained">
                  Contact
                </Button>
              </Link>

              <Link href="#projects" className={classes.button2} color="inherit">
                <Button variant="contained" >
                  Previous work
                </Button>
              </Link>
            </div>

          </Grid>
        )}

        <Grid item xs={12} md={6} lg={6}>
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