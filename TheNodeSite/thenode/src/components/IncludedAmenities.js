import React from 'react'
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import Title from './Title';
import room1 from '../images/SkylinePenthouse2.jpg';
import room2 from '../images/SkylinePenthouse1.jpg';
import room3 from '../images/OceanRoom.jpg';


function IncludedAmenities() {
    return (

        <section>
            <Title title="Included Amenities"/>
            <div className="space2"></div>
             <div className="featured-space">
             
             

<Grid container spacing={9} justify="center">

    <Grid item component={Card}>
        <CardContent className="left">
        <Typography varient="h5">Free WIFI</Typography>
        </CardContent>
    </Grid>

    <Grid item component={Card}>
        <CardContent className="left">
        <Typography varient="h5">Free Printing and Scanning</Typography>
            <Typography color="textSecondary">(Fair Use applies)</Typography>
        </CardContent>
    </Grid>

    <Grid item component={Card}>
        <CardContent className="left">
        <Typography varient="h5">24/7 Access to the space</Typography>
        </CardContent>
    </Grid>

    <Grid item component={Card}>
        <CardContent className="left">
        <Typography varient="h5">Kitchen Facilities</Typography>
        </CardContent>
    </Grid>

    <Grid item component={Card}>
        <CardContent className="left">
        <Typography varient="h5">Work Pods and quiet areas</Typography>
        </CardContent>
    </Grid>

    <Grid item component={Card}>
        <CardContent className="left">
        <Typography varient="h5">Shower Facilites</Typography>
        </CardContent>
    </Grid>

    <Grid item component={Card}>
        <CardContent className="left">
        <Typography varient="h5">Secure Access Via Keycard or mobile</Typography>
        </CardContent>
    </Grid>

    <Grid item component={Card}>
        <CardContent className="left">
        <Typography varient="h5">Flexible terms: Pay per month</Typography>
        </CardContent>
    </Grid>

    <Grid item component={Card}>
        <CardContent className="left">
        <Typography varient="h5">professional Meeting rooms</Typography>
        </CardContent>
    </Grid>

</Grid> 

</div>
        </section>
        

    )
}

export default IncludedAmenities;
