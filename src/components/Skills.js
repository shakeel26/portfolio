import React from "react";
import { skills } from "../data";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Link from '@material-ui/core/Link';
import Chip from '@material-ui/core/Chip';
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({

  listProjects: {
    display: "inline-flex",
    justifyContent: 'center',
    flexWrap: 'wrap',
    listStyle: 'none',
    padding: theme.spacing(0.5),
    margin: 0,
    marginLeft: '30%'
  },
  skillIcon: {
    width: '100px'
    },
  skillsHeading: {
    justifyContent: 'center'
  }
}));


function Skills() {


  const classes = useStyles();

  return (
    <section id="skills">

      <div className={classes.skillsHeading}>
        <Typography component="h1" variant="h4">
          I have built!
        </Typography>
      </div>


      <Grid container xs={6} spacing={2} className={classes.listProjects}>
        {skills.map((skill) =>
          <Grid item xs={6} sm={3} md={6} lg={2} className={classes.listSkills}>
              <img
              className={classes.skillIcon}
                src={skill.image}
                alt={skill.title}
              />
          </Grid>
        )}
      </Grid>
    </section>
  )
}
export default Skills;