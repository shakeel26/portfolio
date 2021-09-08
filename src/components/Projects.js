import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { projects } from "../data";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Link from '@material-ui/core/Link';
import Chip from '@material-ui/core/Chip';


const useStyles = makeStyles((theme) => ({
  media: {
    height: "100px"
  },
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
  },
  chip: {
    margin: theme.spacing(0.5),
  },
  listProjects: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    listStyle: 'none',
    padding: theme.spacing(0.5),
    margin: 0,
  }
}));


function Projects() {

  const classes = useStyles();


  return (
    <section id="projects">

      <div className={classes.codeIconCard}>
        <CardContent>
          <Typography component="h1" variant="h4">
            I have built!
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </div>

      <Grid container xs={12} className={classes.listProjects} spacing={10}>
        {projects.map((project) =>
          <Grid item xs={12} sm={6} md={6} lg={5}>
            <Card>
              <CardMedia
                className={classes.media}
                image={project.image}
                title={project.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {project.title}
                </Typography>

                <Typography variant="subtitle1" color="textPrimary">
                  {project.subtitle}
                </Typography>

                <Typography variant="body2" color="textSecondary" component="p">
                  {project.description}
                </Typography>

                <Link href={project.link}>
                  {project.link}
                </Link>

                <Typography component="ul" className={classes.listProjects}>
                  {project.tech.map((element) =>
                    <Chip
                      label={element}
                      className={classes.chip}
                    />
                  )}

                </Typography>
              </CardContent>
            </Card>
          </Grid>
        )}
      </Grid>

    </section>
  )
}

export default Projects;