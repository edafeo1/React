import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import Title from '../components/Title';
import room1 from '../images/SkylinePenthouse2.jpg';
import room2 from '../images/SkylinePenthouse1.jpg';
import room3 from '../images/OceanRoom.jpg';


function MeetingRooms() {
    return (
        <section id="meetingrooms">
             <div className="featured-space">
<div className="space"></div>
<Title title="Meeting Rooms"/>

<Grid container spacing={11} justify="center">
    <Grid item component={Card}>
        <CardContent className="left">
            <img src={room1} alt=""  className="images"/>
        </CardContent>
    </Grid>

    <Grid item component={Card}>
        <CardContent className="left">
            <img src={room1} alt=""  className="images"/>
        </CardContent>
    </Grid>

    <Grid item component={Card}>
        <CardContent className="left">
            <img src={room1} alt=""  className="images"/>
        </CardContent>
    </Grid>

    <Grid item component={Card}>
        <CardContent className="left">
            <img src={room1} alt=""  className="images"/>
        </CardContent>
    </Grid>

    <Grid item component={Card}>
        <CardContent className="left">
            <img src={room1} alt=""  className="images"/>
        </CardContent>
    </Grid>

    <Grid item component={Card}>
        <CardContent className="left">
            <img src={room1} alt=""  className="images"/>
        </CardContent>
    </Grid>

    <Grid item component={Card}>
        <CardContent className="left">
            <img src={room1} alt=""  className="images"/>
        </CardContent>
    </Grid>

    <Grid item component={Card}>
        <CardContent className="left">
            <img src={room1} alt=""  className="images"/>
        </CardContent>
    </Grid>

    <Grid item component={Card}>
        <CardContent className="left">
            <img src={room1} alt=""  className="images"/>
        </CardContent>
    </Grid>

    <Grid item component={Card}>
        <CardContent className="left">
            <img src={room1} alt=""  className="images"/>
        </CardContent>
    </Grid>

    <Grid item component={Card}>
        <CardContent className="left">
            <img src={room1} alt=""  className="images"/>
        </CardContent>
    </Grid>

</Grid> 

</div>
        </section>
    )
}

export default MeetingRooms
