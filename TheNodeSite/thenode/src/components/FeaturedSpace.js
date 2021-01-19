import React from 'react'
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import Title from './Title';
import room1 from '../images/Lets-innovate.jpg';
import room2 from '../images/SkylinePenthouse1.jpg';
import room3 from '../images/OceanRoom.jpg';
import room4 from '../images/PrivatePenthouse.jpg';


function FeaturedSpace() {
    return (

        <section>
             <div className="featured-space">

<Title title="Featured space"/>

<Grid container spacing={4} justify="center">
    <Grid item component={Card}>
        <CardContent className="left">
        <Typography className="grid-text" color="textSecondary">(25 Square Meters, 12 Chairs)</Typography>
        <Typography className="grid-title" varient="h5">Lets Innovate! $850 / week ex. GST</Typography>
            <img src={room1} alt=""  className="images"/>
            <Typography className="grid-text" color="textSecondary">Up to 12 Desks</Typography>
            <Typography variant="body2"> 2 Divider Desks to fit up to 12 people 
            <ul className="space3">
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
            <p className="feature-p">Enquire Today</p>
            </Typography>
        </CardContent>
    </Grid>

    <Grid item component={Card}>
     <CardContent>
     <Typography className="grid-text" color="textSecondary">(29 Square Meters, 13 Chairs)</Typography>
     <Typography className="grid-title" varient="h5">Skyline Penthouse $900 / week ex. GST</Typography>
            <img src={room2} alt="" className="images"/>
            <Typography className="grid-text" color="textSecondary">Up to 13 Desks</Typography>
            <Typography variant="body2"> 1 Divider Desks to fit up to 8 people 
            <Typography variant="body2">5 Sit Stand Desks to fit up to 5 people</Typography>
            <ul className="space3">
                <li>Free Wifi</li>
                <li>Free Printing and Scanning (fair use Applies)</li>
                <li>24/7 Access to The Node</li>
                <li>Kitchen Facilities</li>
                <li>Work Pods are quiet Areas</li>
                <li>Shower Facilities</li>
                <li>Secure Access via Keycard or mobile</li>
                <li>Professional meeting Rooms</li>
            </ul>
            <p className="feature-p">Enquire Today</p>
            </Typography>
        </CardContent>
    </Grid>

    <Grid item component={Card}>
    <CardContent>
    <Typography className="grid-text" color="textSecondary">(29 Square Meters, 15 Chairs)</Typography>
    <Typography varient="h5">The Ocean Room Private Suite $1200 / week ex. GST</Typography>
            <img src={room3} alt="" className="images"/>
            <Typography color="textSecondary">Up to 15 Desks</Typography>
            <Typography variant="body2"> 1 Divider Desks to fit up to 8 people 
            <Typography variant="body2"> 7 Side Desks with privacy dividers to fit up to 7 people </Typography>
            <Typography variant="body2"> Fully Private Office Suite With Seperate Entry/Exit</Typography>
            <ul className="space3">
                <li>Free Wifi</li>
                <li>Free Printing and Scanning (fair use Applies)</li>
                <li>24/7 Access to The Node</li>
                <li>Kitchen Facilities</li>
                <li>Work Pods are quiet Areas</li>
                <li>Shower Facilities</li>
                <li>Secure Access via Keycard or mobile</li>
                
                <li>Professional meeting Rooms</li>
            </ul>
            <p className="feature-p">Enquire Today</p>
            </Typography>
        </CardContent>
    </Grid>

    <Grid item component={Card}>
        <CardContent className="left">
        <Typography className="grid-text" color="textSecondary">(22 Square Meters, 6 Chairs)</Typography>
        <Typography className="grid-title" varient="h5">Private Penthouse Suite $800 / week ex. GST</Typography>
            <img src={room4} alt=""  className="images"/>
            <Typography className="grid-text" color="textSecondary">Up to 6 Desks</Typography>
            <Typography variant="body2"> 6 Sit/Stand Desks to fit up to 6 people 
            <ul className="space3">
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
            <p className="feature-p">Enquire Today</p>
            </Typography>
        </CardContent>
    </Grid>

</Grid> 

</div>
        </section>
        

    )
}

export default FeaturedSpace
