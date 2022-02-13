import React from "react";
import "../header/styles.css";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    btnHeader:{
        '& > *': {
            margin: theme.spacing(1),
          },
    },
}));

export default function Header() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="menu"
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        News
                    </Typography>
                    <div className={classes.btnHeader}>
                        <Button variant="contained" className="btn-header">Juliana Muniz</Button>
                        <Button variant="contained" className="btn-header">DownTown</Button>
                        <Button variant="contained" className="btn-header">Cursos</Button>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
}
