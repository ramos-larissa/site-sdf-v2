import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Footer from "../../components/footer";
import Header from "../../components/header";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Banner1 from "../../assets/aurora.jpg";
import Banner2 from "../../assets/img1.jpg";
import Banner3 from "../../assets/img2.jpg";
import LogoDF from "../../assets/danceFlow.webp";
import LogoDown from "../../assets/LogoDowntown.webp";

import "../home/styles.css";

const useStyles = makeStyles((theme) => ({
    root: {
        minWidth: "100%",
        backgroundColor: "white",
        color: "black",
    },
    bullet: {
        display: "inline-block",
        margin: "0 2px",
        transform: "scale(0.8)",
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    cardPaper: {
        display: "flex",
        flexWrap: "wrap",
        "& > *": {
            margin: theme.spacing(1),
            width: theme.spacing(16),
            height: theme.spacing(16),
        },
    },
}));

export default function Home() {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    return (
        <>
            <Header />
            <div className="card-log">
                <img src={LogoDF} className="img-logo" />
                <img src={LogoDown} className="img-logo" />
            </div>
            <div>
                <Carousel infiniteLoop={true} autoPlay={true}>
                    <div>
                        <img src={Banner1} />
                    </div>
                    <div>
                        <img src={Banner2} />
                    </div>
                    <div>
                        <img src={Banner3} />
                    </div>
                </Carousel>
            </div>

            <div className="card-courses">
            <h1>Cursos Online</h1>
     <div className={classes.cardPaper}>
    
      <Paper elevation={3}>
      <h1>Cursos Online</h1>
      </Paper>
      <Paper elevation={3}>
      <h1>Cursos Online</h1>
      </Paper>
      <Paper elevation={3}>
      <h1>Cursos Online</h1>
      </Paper>
      <Paper elevation={3}>
      <h1>Cursos Online</h1>
      </Paper>
    </div>
            </div>
            <Footer />
        </>
    );
}
