import React from 'react';
import Banner from '../components/Banner';
import Title from '../components/Title';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';

function UpcomingEvents() {
    return (
        <section id="events">
                        <Banner 
 title=""
 Subtitle=""
 classss="amenities-banner"
 >
     <Title title="Events" className="title"></Title>

<Grid container spacing={4} justify="center">
    <Grid item component={Card}>
        <CardContent className="left">
        <Typography className="grid-text" color="textSecondary">Event:</Typography>
        <Typography className="grid-title" varient="h5">Date:</Typography>

            <Typography className="grid-text" color="textSecondary">Location:</Typography>
            <Typography variant="body2">Time: </Typography>
        </CardContent>
    </Grid>

    <Grid item component={Card}>
        <CardContent className="left">
        <Typography className="grid-text" color="textSecondary">Event:</Typography>
        <Typography className="grid-title" varient="h5">Date:</Typography>

            <Typography className="grid-text" color="textSecondary">Location:</Typography>
            <Typography variant="body2">Time: </Typography>
        </CardContent>
    </Grid>

    <Grid item component={Card}>
        <CardContent className="left">
        <Typography className="grid-text" color="textSecondary">Event:</Typography>
        <Typography className="grid-title" varient="h5">Date:</Typography>

            <Typography className="grid-text" color="textSecondary">Location:</Typography>
            <Typography variant="body2">Time: </Typography>
        </CardContent>
    </Grid>

    <Grid item component={Card}>
        <CardContent className="left">
        <Typography className="grid-text" color="textSecondary">Event:</Typography>
        <Typography className="grid-title" varient="h5">Date:</Typography>

            <Typography className="grid-text" color="textSecondary">Location:</Typography>
            <Typography variant="body2">Time: </Typography>
        </CardContent>
    </Grid>


    </Grid>


 </Banner>
        </section>
    )
}

export default UpcomingEvents
