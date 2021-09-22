import React, { useState } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Link from '@material-ui/core/Link';
import Chip from '@material-ui/core/Chip';
import Grid from "@material-ui/core/Grid";


const useStyles = makeStyles((theme) => ({
    media: {
        height: "120px"
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
        margin: 0
    },
    cardHovered: {
        transform: "scale3d(1, 1.05, 1)"
      },
      eachProjectCard: {
        padding: theme.spacing(1),
        textAlign: "center",
        border: 'none',
        color: theme.palette.text.secondary,
        [theme.breakpoints.up('md')]: {
            marginLeft: '8%',
            marginRight: '8%'    
        }
    }
}));

const ProjectCard = (props) => {

    const [hoverCard, sethoverCard] = useState({
        raised:false,
        shadow:1,
      })

    const classes = useStyles();

    return (
        <Grid container className={classes.listProjects} spacing={5}>
            {props.data.map((project) =>
                <Grid item xs={12} sm={6} md={6} lg={4}>
                    <Card classes={{root: hoverCard.raised ? classes.cardHovered : ""}}
                    onMouseOver={()=>sethoverCard({ raised: true, shadow:3})} 
                    onMouseOut={()=>sethoverCard({ raised:false, shadow:1 })}
                    raised={hoverCard.raised} zdepth={hoverCard.shadow}
                    className={classes.eachProjectCard}
                    >
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

                            <Link href={project.link} target="_blank">
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
    );
}

export default ProjectCard;