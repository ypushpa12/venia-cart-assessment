import React from 'react';
import '../Style/Footer.scss';
import { FaInstagram } from "react-icons/fa"
import { FiFacebook, FiTwitter } from "react-icons/fi"
import { Link } from "react-router-dom";


function Footer() {
    return (
        <>
            <div class="container">
                <div class="foot">
                    <div class="aem-Grid aem-Grid--12">
                        <div class="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--12">
                            <div className='footer_account'>
                                <h6>Account</h6>
                                <ul className="footer_account_one">
                                    <li><Link to="/signin">Sign In</Link></li>
                                    <li><Link to="/signup">Register</Link></li>
                                    <li><a href="">Order Status</a> </li>
                                </ul>
                            </div>
                        </div>

                        <div class="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--12">
                            <div className='footer_about'>
                                <h6>About Us</h6>
                                <ul className="footer_aboutus">
                                    <li><a href="">Our Story</a></li>
                                    <li><a href="">Careers</a> </li>
                                </ul>
                            </div>
                        </div>
                        <div class="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--12">
                            <div className='footer_help'>
                                <h6>Help</h6>
                                <ul className="footer_help_one">
                                    <li><a href="">Contact Us</a></li>
                                    <li><a href="">Order Status</a> </li>
                                    <li><a href="">Returns</a> </li>
                                </ul>
                            </div>
                        </div>
                        <div class="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--12">
                            <div className='footer_follow'>
                                <h6>Follow Us!</h6>
                                <p>Lorem ipsum dolor sit amet,
                                    consectetur adipiscing elit,
                                    sed do eiusmod tempor incididunt ut labore et dolore.</p>
                            </div>
                            <div class="social-links">
                                <a href='#'><FaInstagram /></a> &nbsp;&nbsp;
                                <a href='#'><FiFacebook /></a> &nbsp;&nbsp;
                                <a href='#'><FiTwitter /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <div className='container'>
                <div class="aem-Grid aem-Grid--12 footerdesktop">
                    <div class="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--12">
                        <div className="footone">
                            <h5>venia</h5>
                        </div>
                    </div>
                    <div class="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12">
                        <div className='footerp'>
                            <p>© Company Name Address Ave, City Name, State ZIP</p>
                        </div>
                    </div>
                    <div class="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--12">
                        <div className='footer_terms'>
                            <a href="" class="">
                                <p>Terms of Use</p>
                            </a>
                            <a href="" class="">
                                <p>Privacy Policy</p>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="aem-Grid aem-Grid--12 footerphone">
                    <div class="aem-GridColumn  aem-GridColumn--phone--12">
                        <div className='footer_termsphone'>
                            <a href="" class="">
                                <p>Terms of Use</p>
                            </a>
                            <a href="" class="">
                                <p>Privacy Policy</p>
                            </a>
                        </div>
                    </div>
                    <div class="aem-GridColumn  aem-GridColumn--phone--12">
                        <div className='footerphone'>
                            <p className="">© Company Name <br />Address Ave, City Name, State ZIP </p>

                        </div>
                    </div>
                    <div class="aem-GridColumn  aem-GridColumn--phone--12">
                        <div className="footone">
                            <h5>venia</h5>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Footer