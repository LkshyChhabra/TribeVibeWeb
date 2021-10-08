import React from 'react'
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Link } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

const img1 = require("../Assets/societies/mlsc_logo.png")
const img2 = require("../Assets/societies/BackslashLogo.png")
const img3 = require("../Assets/societies/FAPSLogo.png")
const img4 = require("../Assets/societies/MudraLogo.png")
const img5 = require("../Assets/societies/RotaractLogo.png")
const img6 = require("../Assets/societies/mlsc_logo.png")

// const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const glassMorphStyle = {
  background: "rgba( 255, 255, 255, 0.25 )",
  boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
  backdropFilter: "blur( 8px )",
  borderRadius: "10px",
  // border: "1px solid rgba( 255, 255, 255, 0.18 )"
}



const socities = [
  {
    key:1,
    delay:100,
    name: "Microsoft Student Learn Chapter",
    img: img1,
    link:"/societies/mlsc",
    content: "A Technical Society"
  },
  {
    key:2,
    delay:200,
    name: "Microsoft Student Learn Chapter",
    img: img2,
    link:"/societies/mlsc",
    content: "A Technical Society"
  },
  {
    key:3,
    delay:300,
    name: "Microsoft Student Learn Chapter",
    img: img3,
    link:"/societies/mlsc",
    content: "A Technical Society"
  },
  {
    key:4,
    delay:400,
    name: "Microsoft Student Learn Chapter",
    img: img4,
    link:"/societies/",
    content: "A Technical Society"
  },
  {
    key:5,
    delay:500,
    name: "Microsoft Student Learn Chapter",
    img: img5,
    link:"/societies/mlsc",
    content: "A Technical Society"
  },
  {
    key:6,
    delay:600,
    name: "Microsoft Student Learn Chapter",
    img: img6,
    link:"/societies/mlsc",
    content: "A Technical Society"
  }
]

const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          background: 'linear-gradient(180deg, rgba(71,18,107,1) 26%, rgba(100,17,173,1) 100%)',
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        },
      },
    },
  },
  typography: {
    "fontFamily": `'PT Serif', serif`,
    "fontWeightLight": 300,
    "fontWeightRegular": 400,
    "fontWeightMedium": 500
  },
  palette: {

    primary: {
      // light:"",
      main: "#7B2CBF"
    },
    secondary: {
      light:"#ffffff",
      main: "#E0AAFF"
    }
}});

export default function SocietyCard() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main>
        <Box   
          sx={{
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="lg">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="common.white"
              gutterBottom
            >
              Introducing, Societies in Derabassi..
            </Typography>
            <Typography variant="h5" align="center" color="common.white" paragraph>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia quasi iste quis explicabo vitae expedita numquam debitis, labore dolorem ipsa minima quae veritatis voluptatem pariatur!
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained">Tribe Vibe on Instagram</Button>
              <Link to="/">
                <Button color="secondary" variant="outlined">Back to homepage</Button>
              </Link>
            </Stack>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="lg">
          {/* End hero unit */}
          <Grid container spacing={6}>
            {socities.map((soc) => (
              <Grid item key={soc.key} xs={12} sm={6} md={4}
              >
                <ScrollAnimation animateIn="animate__fadeInUpBig" duration={1} animateOnce= {true} delay={soc.delay}>
                  <Card
                    sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                    style={glassMorphStyle}
                  >
                    <CardMedia
                      component="img"
                      sx={{
                        p:2
                      }}
                      image={soc.img}
                      alt="random"
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography gutterBottom variant="h5" component="h2" color="common.white">
                        { soc.name }
                      </Typography>
                      <Typography color="common.white">
                        { soc.content }
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Link to={soc.link}>
                        <Button color="secondary" size="small">View</Button>
                      </Link>
                      {/* <Button size="small">Edit</Button> */}
                    </CardActions>
                  </Card>
                </ScrollAnimation>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <Box sx={{ p: 6 }} component="footer">
        <Typography
          variant="subtitle1"
          align="center"
          color="common.white"
          component="p"
        >
          Made with &#10084; by seniors
        </Typography>
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}
