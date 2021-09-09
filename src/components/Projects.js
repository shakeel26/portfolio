import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { projects } from "../data";
import ProjectCard from './ProjectCard';
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  codeIconCard: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    listStyle: 'none',
    padding: theme.spacing(0.5),
    margin: 0,
    maxWidth: '450px'
  }
}));


const Projects = () => {

  const classes = useStyles();

  return (
    <section id="projects">
      <div className={classes.codeIconCard}>
          <Typography component="h3" variant="h5">
            Apps have built!
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
      </div>

      <ProjectCard data={projects} />

    </section>
  )
}

export default Projects;