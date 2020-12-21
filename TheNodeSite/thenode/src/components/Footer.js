import React from 'react';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

function Footer() {
    return (
        <footer>

        <div className="row">
        <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open"><ExpandLessIcon/></i></a></div>
           <div className="twelve columns">
              <ul className="social-links">
 
              </ul>
   
              <ul>
               <li>Created With Love ♥️</li>
              </ul>
   
              <ul className="copyright">
                 <li>&copy; 2020 TheNode. all rights reserved </li>
                 <li>Design by <a title="Styleshout" href="https://ofegoedafe.netlify.app/">edafe</a></li>
              </ul>
   
           </div>
           
        </div>
     </footer>
    )
}

export default Footer
