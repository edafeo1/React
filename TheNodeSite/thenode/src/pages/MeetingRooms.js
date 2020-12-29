import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import Title from '../components/Title';
import room1 from '../images/SkylinePenthouse2.jpg';
import room2 from '../images/SkylinePenthouse1.jpg';
import room3 from '../images/OceanRoom.jpg';
import room4 from '../images/Node-4.jpg';
import room5 from '../images/Node-5.jpg';
import room6 from '../images/Node-6.jpg';
import room7 from '../images/Node-1.jpg';
import room8 from '../images/Node-2.jpg';
import room9 from '../images/Node-1.jpg';
import room10 from '../images/Lets-innovate.jpg';
import room11 from '../images/Node-Entry.jpg';



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
            <img src={room2} alt=""  className="images"/>
        </CardContent>
    </Grid>

    <Grid item component={Card}>
        <CardContent className="left">
            <img src={room3} alt=""  className="images"/>
        </CardContent>
    </Grid>

    <Grid item component={Card}>
        <CardContent className="left">
            <img src={room4} alt=""  className="images"/>
        </CardContent>
    </Grid>

    <Grid item component={Card}>
        <CardContent className="left">
            <img src={room5} alt=""  className="images"/>
        </CardContent>
    </Grid>

    <Grid item component={Card}>
        <CardContent className="left">
            <img src={room6} alt=""  className="images"/>
        </CardContent>
    </Grid>

    <Grid item component={Card}>
        <CardContent className="left">
            <img src={room7} alt=""  className="images"/>
        </CardContent>
    </Grid>

    <Grid item component={Card}>
        <CardContent className="left">
            <img src={room8} alt=""  className="images"/>
        </CardContent>
    </Grid>

    <Grid item component={Card}>
        <CardContent className="left">
            <img src={room9} alt=""  className="images"/>
        </CardContent>
    </Grid>

    <Grid item component={Card}>
        <CardContent className="left">
            <img src={room10} alt=""  className="images"/>
        </CardContent>
    </Grid>

    <Grid item component={Card}>
        <CardContent className="left">
            <img src={room11} alt=""  className="images"/>
        </CardContent>
    </Grid>

</Grid> 

</div>
        </section>
    )
}

export default MeetingRooms
