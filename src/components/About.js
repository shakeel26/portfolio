import React from 'react';
import { about } from '../data';
import { makeStyles } from "@material-ui/core/styles";
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Image from './header__bg.png';

const useStyles = makeStyles(theme => ({
  root: {
    // marginTop: '%',
    backgroundImage: `url(${Image})`,
      background: 'grey'
  },
  cover: {
  },
  coverPhoto: {
    alignItems: 'right',
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
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
  }
}))

const About = () => {
  const classes = useStyles();

  return (
    <section id="about">
      <Grid container spacing={0} className={classes.root}>
        {about.map((about, index) =>
          <Grid item xs={12} md={6} lg={6} key={index}>
            <CardContent className={classes.content}>
              <Typography component="h2" variant="h2">
                {about.title}
              </Typography>
              <Typography variant="h6" > {about.location} </Typography>
              <Typography variant="h5">
                {about.description}

              </Typography>
            </CardContent>

            <div className={classes.buttons}>
              <Link href="#contact" color="inherit" underline="none">
                <Button variant="contained">
                  Contact
                </Button>
              </Link>

              <Link href="#projects" className={classes.button2} color="inherit" underline="none">
                <Button variant="contained" >
                  Previous work
                </Button>
              </Link>
            </div>

          </Grid>
        )}

          <Grid item xs={12} md={6} lg={6} className={classes.coverPhoto}>
            <img
              className={classes.cover}
              src={process.env.PUBLIC_URL + '/set-programmer-icon.webp'}
              alt="cover coding"
            />
          </Grid>

      </Grid>
    </section>
  )
}

export default About;