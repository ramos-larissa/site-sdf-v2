import React from "react";
import "../footer/styles.css";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import InstagramIcon from '@material-ui/icons/Instagram';

import LogoDF from  "../../assets/danceFlow.webp";
import LogoDown from  "../../assets/LogoDowntown.webp";


const useStyles = makeStyles({
    root: {
        minWidth: "100%",
        backgroundColor: "#212121",
        color: "white",
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
});

export default function Footer() {
    const classes = useStyles();

    return (
      
        <footer>
            <Card className={classes.root}>
                <CardContent className="container">
                <Typography variant="body2" component="p" className="content-left">
                    <img src={LogoDF}  className='img-logo-footer'/>
                    </Typography>
                    <Typography variant="body2" component="p" className="content-left">
                        <ul>
                            <li>
                                Rua Teste primeiro N:111 - Bairro Teste - SP
                            </li>
                            <li> Telefone: (11) 1 1111-1111 </li>
                            <p>
                              <InstagramIcon className="icon"/>
                              <InstagramIcon className="icon"/>
                              <InstagramIcon className="icon"/>
                            </p>
                        </ul>
                    </Typography>

                    <Typography variant="body2" component="p" className="content-right">
                    <img src={LogoDown} className='img-logo-footer' />
                    </Typography>

                    <Typography variant="body2" component="p" className="content-right">
                        <ul>
                            <li>
                                Rua Teste primeiro N:111 - Bairro Teste - SP
                            </li>
                            <li> Telefone: (11) 1 1111-1111 </li>
                            <p>
                              <InstagramIcon className="icon"/>
                              <InstagramIcon className="icon"/>
                              <InstagramIcon className="icon"/>
                            </p>
                        </ul>
                    </Typography>
                </CardContent>
            </Card>
        </footer>
    );
}
