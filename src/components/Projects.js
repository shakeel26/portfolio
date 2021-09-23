import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { projects } from "../data";
import ProjectCard from './ProjectCard';
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  
}));

const Projects = () => {
  const classes = useStyles();

  return (
    <section id="projects">
      <>
          <Typography component="h1" variant="h4" align="center">
            Apps have built!
          </Typography>
          <Typography variant="body2" color="textSecondary" align="center">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
      </>

     <ProjectCard data={projects} />

    </section>
  )
}

export default Projects;