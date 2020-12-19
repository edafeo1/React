import React from 'react';
import Banner from '../components/Banner';
import Title from '../components/Title';
function Amenities() {
    return (
        <section >
            <Title title="amenities"></Title>
                <article className="amenities">



                    <div>
                    <ul className="amenities__left">
                         <li>7 Person Meeting Room</li>
                         <li>Fast WIFI</li>
                         <li>Kitchen</li>
                         <li>24/7 access</li>
                         <li>Print</li>
                         <li>Scan</li>
                         <li>Copy</li>
                         <li>Wheelchair accessible</li>
                         <li>Shower</li>
                         <li>Security</li>
                         <li>Cleaning</li>
                     </ul>
                    </div>

                    <div className="amenities__right">
                        icons 
                    </div>


                    
                </article>
        </section>
    )
}

export default Amenities;
