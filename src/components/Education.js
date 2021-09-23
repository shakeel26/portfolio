import React from "react";
import Grid from "@material-ui/core/Grid";

import {
  createStyles,
  makeStyles,
} from "@material-ui/core/styles";
import Divider from '@material-ui/core/Divider';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import { Icon } from 'semantic-ui-react'

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      display: "flex"
    },
    details: {
      display: "flex",
      flexDirection: "column"
    },
    content: {
      flex: "1 0 auto"
    }
  })
);

const Education = () => {
  const classes = useStyles();

  return (
    <>
      <Typography component="h1" variant="h4" align="center">
        Education
      </Typography>
      <Grid container spacing={0}>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Card className={classes.root} spacing={5} >
            <Icon className={classes.cover} graduation name="graduation cap" size='massive' />
            <div className={classes.details}>
              <CardContent className={classes.content}>
                <Typography component="h5" variant="h5">
                  <Link href="https://www.uibk.ac.at/" target="_blank"> Leopold-Franzens Universität Innsbruck</Link>
                </Typography>
                <Typography variant="h7">
                  MSc Computer Science
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  2018 - 2021
                </Typography>
              </CardContent>
            </div>
          </Card>
        </Grid>
        <Divider />
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Card className={classes.root}>
            <Icon graduation name="graduation cap" size='massive' />
            <div className={classes.details}>
              <CardContent className={classes.content}>
                <Typography component="h5" variant="h5">
                  <Link href="https://www.comsats.edu.pk/" target="_blank"> COMSATS University Islamabad</Link>
                </Typography>
                <Typography variant="h7">
                  BSc Computer Science
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  2010 - 2014
                </Typography>
              </CardContent>
            </div>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}

export default Education;