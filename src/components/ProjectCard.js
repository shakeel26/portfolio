import React, { useState, useEffect } from 'react';
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
        maxWidth: "100%"
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
        marginBottom: '5%',
        color: theme.palette.text.secondary
    }
}));


const ProjectCard = (props) => {

    const [hoverCard, sethoverCard] = useState({
        raised: false,
        shadow: 1,
        currentIndex: -1
    })
    const [isMobile, setIsMobile] = useState(false)

    const handleResize = () => {
        if (window.innerWidth < 600) {
            setIsMobile(true)
        } else {
            setIsMobile(false)
        }
      }

      useEffect(() => {
        window.addEventListener("resize", handleResize)
      })

    const classes = useStyles();


    return (
        <Grid container className={classes.listProjects} spacing={isMobile ? 0 : 4}>
            {props.data.map((project, index) =>
                <Grid item xs={12} sm={6} md={6} lg={4} key={index}>
                    <Card classes={{ root: hoverCard.currentIndex === index ? classes.cardHovered : "" }}
                        onMouseOver={() => sethoverCard({ raised: true, shadow: 3, currentIndex: index })}
                        onMouseOut={() => sethoverCard({ raised: false, shadow: 1, currentIndex: -1 })}
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