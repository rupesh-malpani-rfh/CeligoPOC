import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Paper from '@material-ui/core/Paper';

import Home from './appbar/Home';
import Signin from './appbar/Signin';
import About from './appbar/About';

const styles = theme => ({
    root: {
      ...theme.mixins.gutters(),
      paddingTop: theme.spacing.unit * 2,
      paddingBottom: theme.spacing.unit * 2,
    },
  });

const App = (props) => {
    const { classes } = props;
    return (

        <Router>
            <div>
                <div className="appBar">
                    <AppBar position="static">
                        <Typography variant="h6">
                            <Link to="/" component={Home}>Home</Link>
                        </Typography>
                        <Typography variant="h6">
                            <Link to="/signin" component={Signin}>Signin</Link>
                        </Typography>
                        <Typography variant="h6">
                            <Link to="/about" component={About}>About</Link>
                        </Typography>
                    </AppBar>
                </div>
                <Paper className={classes.root} elevation={1}>
                    <Route path="/" exact component={Home} />
                    <Route path="/signin" exact component={Signin} />
                    <Route path="/about" exact component={About} />
                </Paper>
            </div>
        </Router>

    );
}

export default withStyles(styles)(App);