import React, {useEffect} from 'react'
import './footer.scss'
import backgroundVideo from '../../Assets/backgroundVideo(2).mp4'
import {FiSend} from 'react-icons/fi'
import {MdOutlineTravelExplore} from 'react-icons/md'
import {AiFillYoutube, AiOutlineTwitter, AiFillInstagram} from 'react-icons/ai'
import {FaTripadvisor} from 'react-icons/fa'
import {FiChevronRight} from 'react-icons/fi'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Footer = () =>{
 
  // HOOK TO ADD AOS(ANIMATION ON SCROLL)
useEffect(() =>{
  Aos.init({duration: 2000})
  
    }, [])

  return (
    <section className='footer'>
      <div className="videoDiv">
    <video src={backgroundVideo} loop autoPlay muted type="backgroundVideo(2)/mp4"></video>
      </div>

      <div className="secContent container">
        <div className="contactDiv flex">

          <div data-aos="fade-up" className="text">
            <small>KEEP IN TOUCH</small>
            <h2>Travel with us</h2>
          </div>

          <div data-aos="fade-up" className="inputDiv flex">
            <input type="text" placeholder="Enter Email Address"/>
            <button data-aos="fade-up" className="btn flex" type="submit">
              SEND <FiSend className="icon"/>
            </button>
          </div>
        </div>

        <div className="footerCard flex">
          <div className="footerIntro flex">
            <div className="logoDiv">
            {/* eslint-disable-next-line */}
              <a href="#" className='logo flex'>
                <MdOutlineTravelExplore className="icon"/>
                Travel.
                </a>
            </div>

            <div data-aos="fade-up" className="footerParagraph">
             Travel and Tour is a physical change in some favourite experience. Your tour can be either 
             for study purpose or can be helping events or family celebrating events.
             For any kinds of travel and tour you are interested in, we are fully prepared!
            </div>

            <div data-aos="fade-up" className="footerSocials">
              <AiOutlineTwitter className="icon"/>
              <AiFillYoutube className="icon"/>
              <AiFillInstagram className="icon"/>
              <FaTripadvisor className="icon"/>
            </div>
          </div>


          <div className="footerLinks grid">

            {/* GROUP ONE */}

            <div data-aos="fade-up" data-aos-duration="3000" className="linkGroup">
              <span className="groupTitle">
                OUR AGENCY
              </span>

              <li className="footerList flex">
                <FiChevronRight className="icon"/>
                Services
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon"/>
                Insurance
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon"/>
                Agency
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon"/>
                Tourism
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon"/>
                Payment
              </li>
            </div>

            {/* GROUP TWO */}
            <div data-aos="fade-up" data-aos-duration="4000" className="linkGroup">
              <span className="groupTitle">
               PARTNERS
              </span>

              <li className="footerList flex">
                <FiChevronRight className="icon"/>
                Bookings
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon"/>
                Rentcars
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon"/>
                HostelWorld
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon"/>
                Trivago
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon"/>
                TripAdvisor
              </li>
            </div>

              {/* GROUP THREE */}
              <div data-aos="fade-up" data-aos-duration="5000" className="linkGroup">
              <span className="groupTitle">
                LAST MINUTE
              </span>

              <li className="footerList flex">
                <FiChevronRight className="icon"/>
                London
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon"/>
                California
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon"/>
               Indonesia
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon"/>
                Europe
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon"/>
               Oceanic
              </li>
            </div>

          </div>

          <div className="footerDiv flex">
          <small>TRAVEL AND TOUR BOOKINGS</small>
          <small>BOOK NOW</small>
          <small> WE ARE AVAILABLE 24/7 </small>
          </div> 
          </div>
          </div>
    </section>
  )
}


export default Footer;




