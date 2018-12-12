import React from 'react';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const About = ({ match }) => {
    return (
        <Router>
            <div>
                <Grid container spacing={24}>
                    <Grid item xs={3}>
                        <ul>
                            <li>
                                <Typography variant="h6">
                                    <Link to={`${match.url}/Company`}>Company</Link>
                                </Typography>
                            </li>
                            <li>
                                <Typography variant="h6">
                                    <Link to={`${match.url}/Jobs`}>Jobs</Link>
                                </Typography>
                            </li>
                            <li>
                                <Typography variant="h6">
                                    <Link to={`${match.url}/Edit Jobs`}>Edit Jobs</Link>
                                </Typography>
                            </li>
                        </ul>
                    </Grid>
                    <Grid item xs={3}>
                        <Route path={`${match.path}/:topicId`} component={Topic} />
                        <Route exact path={match.path} render={() => <Typography variant="h6">About us!</Typography>} />
                    </Grid>
                </Grid>
            </div>
        </Router>
    );
}

function Topic({ match }) {
    return (
        <Typography variant="title">{match.params.topicId}</Typography>
    );
}

export default About;