import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { runningProjects } from "../data";
import Typography from "@material-ui/core/Typography";
import ProjectCard from "./ProjectCard";

const useStyles = makeStyles((theme) => ({
}));

const RunningProjects = () => {
  const classes = useStyles();

  return (
    <section id="projects">
      <>
          <Typography component="h1" variant="h4" align="center">
            Running Projects!
          </Typography>
          <Typography variant="h6" color="textSecondary" align="center">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
      </>
      
      <ProjectCard data={runningProjects} />
    </section>
  )
}

export default RunningProjects;