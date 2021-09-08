import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { runningProjects } from "../data";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import ProjectCard from "./ProjectCard";


const useStyles = makeStyles((theme) => ({
  codeIconCard: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    listStyle: 'none',
    padding: theme.spacing(0.5),
    margin: 0,
    maxWidth: '450px',
    marginLeft: '40%',
  }
}));


const RunningProjects = () => {

  const classes = useStyles();

  return (
    <section id="projects">

      <div className={classes.codeIconCard}>
        <CardContent>
          <Typography component="h1" variant="h4">
            Running Projects!
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </div>
      

      <ProjectCard data={runningProjects} />


    </section>
  )
}

export default RunningProjects;