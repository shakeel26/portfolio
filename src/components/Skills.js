import React from "react";
import { skills } from "../data";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles(() => ({

  listSkills: {
    display: "inline-flex",
    justifyContent: 'center',
    // flexWrap: 'wrap',
    // listStyle: 'none',
    margin: 0,
    marginLeft: '30%'
  },
  skillIcon: {
    width: '100px'
  },
  skillsHeading: {
    alignContent: 'center',
    textDecorationLine: 'underline'
  }
}));


const Skills = () => {

  const classes = useStyles();

  return (
    <section id="skills">

      <Typography className={classes.skillsHeading} component="h1" variant="h4" align="center">
        Skills & Technologies
      </Typography>

      <Grid container xs={6} spacing={0} className={classes.listSkills}>
        {skills.map((skill) =>
          <Grid item xs={6} sm={3} md={6} lg={2}>
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