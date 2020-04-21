import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    height: '150px',
  },
  cardMedia: {
    paddingTop: '92.25%', // 16:9
  },
}));

const ig = require("../img/ig.png");
const tiktok = require("../img/tiktok.png");
const fb = require("../img/fb.png");
const snap = require("../img/snap.png");
const email = require("../img/email.png");
const text = require("../img/text.png");
const twitter = require("../img/twitter.png");
const yt = require("../img/yt.png");
const web = require("../img/web.png");
const spotify = require("../img/spotify.png");
const whatsapp = require("../img/whatsapp.png");
const venmo = require("../img/venmo.png");
const linked = require("../img/linked.png");
const sc = require("../img/sc.png");


const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function Album() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />

      <main>
        {/* Hero unit */}
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={2}>

            <Grid item xs={6}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image={ig}
                  title="Image title"
                />

              </Card>
            </Grid>

            <Grid item xs={6}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image={tiktok}
                  title="Image title"
                />
              </Card>
            </Grid>

            <Grid item xs={6}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image={fb}
                  title="Image title"
                />

              </Card>
            </Grid>

            <Grid item xs={6}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image={snap}
                  title="Image title"
                />

              </Card>
            </Grid>

            <Grid item xs={6}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image={yt}
                  title="Image title"
                />

              </Card>
            </Grid>

            <Grid item xs={6}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image={text}
                  title="Image title"
                />

              </Card>
            </Grid>

            <Grid item xs={6}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image={email}
                  title="Image title"
                />

              </Card>
            </Grid>

            <Grid item xs={6}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image={twitter}
                  title="Image title"
                />

              </Card>
            </Grid>

            <Grid item xs={6}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image={web}
                  title="Image title"
                />

              </Card>
            </Grid>

            <Grid item xs={6}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image={spotify}
                  title="Image title"
                />

              </Card>
            </Grid>

            <Grid item xs={6}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image={venmo}
                  title="Image title"
                />

              </Card>
            </Grid>

            <Grid item xs={6}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image={whatsapp}
                  title="Image title"
                />

              </Card>
            </Grid>

            <Grid item xs={6}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image={sc}
                  title="Image title"
                />

              </Card>
            </Grid>

            <Grid item xs={6}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image={linked}
                  title="Image title"
                />

              </Card>
            </Grid>

          </Grid>
        </Container>
      </main>
    </React.Fragment>
  );
}
