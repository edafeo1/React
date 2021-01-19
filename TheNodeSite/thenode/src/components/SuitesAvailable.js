import React from 'react';
import Title from '../components/Title';
import Banner from '../components/Banner';

function SuitesAvailable() {
    return (
        <section>
            <article className="suites__available">
           
                <Banner 
                title=""
                Subtitle=""
                classss="suitesbanner"
                >
                    <Title title="Our Suites" className="title"></Title>
                     <p><strong className="strong">Lets Innovate</strong> at Our Node Innovation Centre Collingwood is a desk office suitable for a team of 12 people. </p>
                     
                     <h6>Divider Desks</h6>
                     <p>The room is furnished with chairs and divider desks This office is in the main open area of The Node Collingwood.</p>
                     <p className="space2"> 2 Divider Desks to fit 12 people comfortably</p>

                     <line className="line"></line>
                     <p>The <strong className="strong">Skyline Penthouse</strong> office space at The Node Innovation Centre Collingwood is an office suitable for team of 13 people. it is on the second floor of The Node.</p>
                     <p>The room is furnished with chairs and desks. This room has its entry and exit via the staircase.</p>
                     
                     <p>1 Divider Desk to fit up to 8 people</p>

                     <p className="space2">5 Sit Stand Desks to fit up to 5 people</p>

                     <line className="line"></line>
                 
                     <p>The <strong className="strong">Ocean Room</strong> at The Node Innovation Centre is a fully private office suitable for team of 15 people.</p>

                     <h6>Desks</h6>
                     <p>The room is furnished with chairs and desks. This room has its own seperate entry and exit secluded from the other suites. This suite is suitable for companies that want full privacy. suitable for call Centers.</p>

                     <p>1 Divider Desk to fit up to 8 People</p>

                     <p className="space2">Side Desk with privacy dividers to fit up to 7 people </p>

                     <line className="line"></line>

                     <p>The <strong className="strong">Private Penthouse </strong> room is furnished with chairs and desks, 6 sit/stand desks to fit 6 people. This suite is $800 per week.</p>

                     
                 
    
                
                </Banner>
            </article>
        </section>
    )
}

export default SuitesAvailable;
