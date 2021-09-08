import React, { useState } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import ListItem from "@material-ui/core/ListItem";
import TextField from '@material-ui/core/TextField';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Button from '@material-ui/core/Button';
import CardContent from "@material-ui/core/CardContent";


const useStyles = makeStyles((theme) => ({
  textArea: {
    width: '658px',
    border: 'none'
  }
}));


function Contact() {

  const classes = useStyles();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", name, email, message }),
    })
      .then(() => alert("Message sent!"))
      .catch((error) => alert(error));
  }


  return (

    <section id="contact" className="relative">

<div className={classes.codeIconCard}>
        <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
            Get In Touch !
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum
            suscipit officia aspernatur veritatis. Asperiores, aliquid?
            Email me at <a href="mailto:someone@example.com" target="_top">someone@example.com</a>
            or call at <a href="tel:+436607553781" target="_top">06607553781</a>
          </Typography>
        </CardContent>
      </div>

      <Grid container xs={12} spacing={10}>

        <Grid item xs={12} sm={6} md={6} lg={6}>

          <iframe
            width="100%"
            height="100%"
            title="map"
            className="absolute inset-0"
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
            style={{ filter: "opacity(0.7)" }}
            src="https://www.google.com/maps/embed/v1/place?q=Hans-Untermüller-Straße+8,+6020+Innsbruck&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
          />

        </Grid>

        <Grid item xs={12} sm={6} md={6} lg={6}>

        

          <form
            netlify
            name="contact"
            onSubmit={handleSubmit}>

            <Grid container xs={12} spacing={10}>
              <Grid item xs={12} sm={6} md={6} lg={6}>
                <Typography variant="h6" component="h6">
                  Name
                </Typography>
                <TextField required id="standard-basic" label="Full Name" onChange={(e) => setName(e.target.value)} />
              </Grid>

              <Grid item xs={12} sm={6} md={6} lg={6}>
                <Typography variant="h6" component="h6">
                  Email
                </Typography>
                <TextField required id="standard-basic" label="Your Email" onChange={(e) => setEmail(e.target.value)} />
              </Grid>
            </Grid>

            <Typography gutterBottom variant="h6" component="h6">
              Message
            </Typography>

            <TextareaAutosize
            required
              className={classes.textArea}
              minRows={4}
              id="standard-basic"
              aria-label="maximum height"
              placeholder="Write your thougts."
              onChange={(e) => setMessage(e.target.value)}
            />

            <Typography gutterBottom variant="h6" component="h6">
              <Button type="submit" variant="contained" color="primary">
                Send!
              </Button>
              </Typography>
          </form>
        </Grid>

      </Grid>
    </section>
  )
}

export default Contact;