import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CodeIcon from '@material-ui/icons/Code';
import { projects } from "../data";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Link from '@material-ui/core/Link';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles((theme) => ({
  media: {
    height: "100px"
  },
  iconCode: {
    width: '40%',
    height: '40%'
  },
  codeIconCard: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    listStyle: 'none',
    padding: theme.spacing(0.5),
    margin: 0,
  },
  chip: {
    margin: theme.spacing(0.5),
  },
  listTech: {
    display: 'flex',
    justifyContent: 'left',
    flexWrap: 'wrap',
    listStyle: 'none',
    padding: theme.spacing(0.5),
    margin: 0,
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

      <Card item xs={12} className={classes.codeIconCard}>
        <CardContent className={classes.content}>
          <Typography>
            <CodeIcon fontSize='large' className={classes.iconCode} />
          </Typography>
          <Typography component="h1" variant="h4">
            I have built!
          </Typography>
        </CardContent>
      </Card>

      <Grid container xs={12} className={classes.listProjects} spacing={10}>

        {projects.map((project) =>
          <Grid item xs={12} sm={6} md={6} lg={4}>
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

                <Typography component="ul" className={classes.listTech}>

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