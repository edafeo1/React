import React from 'react'
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import Title from './Title';
import room1 from '../images/SkylinePenthouse2.jpg';
import room2 from '../images/SkylinePenthouse1.jpg';
import room3 from '../images/OceanRoom.jpg';


function FeaturedSpace() {
    return (

        <section>
             <div className="featured-space">

<Title title="Featured space"/>

<Grid container spacing={3} justify="center">
    <Grid item component={Card}>
        <CardContent className="left">
        <Typography varient="h5">Lets Innovate! $800 / week</Typography>
            <img src={room1} alt=""  className="images"/>
            <Typography color="textSecondary">Up to 200 Desks</Typography>
            <Typography variant="body2"> 2 Divider Desks to fit up to 12 people 
            <ul>
                <li>Free Wifi</li>
                <li>Free Printing and Scanning (fair use Applies)</li>
                <li>24/7 Access to The Node</li>
                <li>Kitchen Facilities</li>
                <li>Work Pods are quiet Areas</li>
                <li>Shower Facilities</li>
                <li>Secure Access via Keycard or mobile</li>
                <li>Large Open Floor Plan</li>
                <li>Professional meeting Rooms</li>
            </ul>
            </Typography>
        </CardContent>
    </Grid>

    <Grid item component={Card}>
     <CardContent>
     <Typography varient="h5">Lets Innovate! $800 / week</Typography>
            <img src={room2} alt="" className="images"/>
            <Typography color="textSecondary">Up to 200 Desks</Typography>
            <Typography variant="body2"> 2 Divider Desks to fit up to 12 people 
            <ul>
                <li>Free Wifi</li>
                <li>Free Printing and Scanning (fair use Applies)</li>
                <li>24/7 Access to The Node</li>
                <li>Kitchen Facilities</li>
                <li>Work Pods are quiet Areas</li>
                <li>Shower Facilities</li>
                <li>Secure Access via Keycard or mobile</li>
                <li>Large Open Floor Plan</li>
                <li>Professional meeting Rooms</li>
            </ul>
            </Typography>
        </CardContent>
    </Grid>

    <Grid item component={Card}>
    <CardContent>
    <Typography varient="h5">Lets Innovate! $800 / week</Typography>
            <img src={room3} alt="" className="images"/>
            <Typography color="textSecondary">Up to 200 Desks</Typography>
            <Typography variant="body2"> 2 Divider Desks to fit up to 12 people 
            <ul>
                <li>Free Wifi</li>
                <li>Free Printing and Scanning (fair use Applies)</li>
                <li>24/7 Access to The Node</li>
                <li>Kitchen Facilities</li>
                <li>Work Pods are quiet Areas</li>
                <li>Shower Facilities</li>
                <li>Secure Access via Keycard or mobile</li>
                <li>Large Open Floor Plan</li>
                <li>Professional meeting Rooms</li>
            </ul>
            </Typography>
        </CardContent>
    </Grid>

</Grid> 

</div>
        </section>
        

    )
}

export default FeaturedSpace
