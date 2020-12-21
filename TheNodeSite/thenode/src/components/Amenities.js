import React from 'react';
import Banner from '../components/Banner';
import Title from '../components/Title';
import WifiIcon from '@material-ui/icons/Wifi';
import KitchenIcon from '@material-ui/icons/Kitchen';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import PrintIcon from '@material-ui/icons/Print';
import ScannerIcon from '@material-ui/icons/Scanner';
import AccessibleIcon from '@material-ui/icons/Accessible';
import BathtubIcon from '@material-ui/icons/Bathtub';
import SecurityIcon from '@material-ui/icons/Security';
function Amenities() {
    return (
<section id="amenities">

<Title title="Amenities" className="title"></Title>



   <Banner 
    title=""
    Subtitle=""
    classss="amenities-banner"
    >
                         <p>7 Person Meeting Room</p>
                         <p>Fast WIFI</p>
                         <p>Kitchen</p>
                         <p>24/7 access</p>
                         <p>Print</p>
                         <p>Scan</p>
                         <p>Copy</p>
                         <p>Wheelchair accessible</p>
                         <p>Shower</p>
                         <p>Security</p>
                         <p>Cleaning</p>

        <div>
            
        </div>

    </Banner>

   


   






</section>
    )
}

export default Amenities;


