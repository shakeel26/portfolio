import React from "react";
import {
  createStyles,
  makeStyles,
} from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import { Icon } from 'semantic-ui-react'

const useStyles = makeStyles(() =>
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
    },
    cover: {
      width: 200,
    }
  })
);

const MediaControlCard = () => {
  const classes = useStyles();

  return (

    <Card className={classes.root}>
      <Icon className={classes.cover} graduation name="graduation cap" size='massive'/>
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
  );
}

export default MediaControlCard;