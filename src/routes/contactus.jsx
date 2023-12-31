import React from 'react'
import "../css/contactus.css"
import { MdOutlineCopyright } from "react-icons/md"
import { motion } from "framer-motion"
// import logo from "../assets/images/sit logo.png";
import Navabar from '../components/navbar/navabar'
function Contactus() {
  return (
    <section className='contact-page-main-container'>
      <div className="contact-page-hero-container">
        <Navabar />
        <div className="contact-page-heading-container">
        <div className="contact-wrapper">
        {/* this code is same as home.jsx */}
        <div className="contact-containers">
          <div className="contact-card-wrappers">
            <motion.div
              // animate={{y:"0px"}}
              // transition={{type:"tween",duration:1.25}}
              // initial={{y:"-9rem"}}
              className="contact-card-container contact1">
              <div className="contact-name">
                <p>Dr. Kiranmayi G.R.</p>
              </div>
              <div className="contact-details">
                <ul>
                  <li className='asp'>Associate Professor</li>
                  <li>Dept. of EIE</li>
                  <li>SIT, Tumkur</li>
                  <li className='decor asp'>+91 7892125780</li>
                  <li className='decor asp'>kiranmayi@sit.ac.in</li>
                </ul>
              </div>
            </motion.div>
            <motion.div
              // animate={{y:"0px"}}
              // transition={{type:"tween",duration:1.25}}
              // initial={{y:"-9rem"}} 
              className="contact-card-container contact2">
              <div className="contact-name">
                <p>Sridhara B A</p>
              </div>
              <div className="contact-details">
                <ul>
                  <li className='asp'>Associate Professor</li>
                  <li>Dept. of EEE</li>
                  <li>SIT, Tumkur</li>
                  <li className='decor asp'>+91 9243185619</li>
                  <li className='decor asp'>sridharaba@sit.ac.in</li>
                </ul>
              </div>
            </motion.div>

          </div>


        </div>
      </div>
        </div>
      </div>
      <div className='footer'>
        <MdOutlineCopyright className='copyright' />
        <h2>Copyrights by IEEE SIT SB</h2>
      </div>
    </section>
  )
}

export default Contactus