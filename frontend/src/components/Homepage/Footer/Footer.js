import React from 'react'
import './footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div>
            <div className='footer'>
                <div className='footer-content'>
                    <div className='upper-footer'>

                        {/* my account */}
                        <div>
                            <div>
                                <h1>My Account</h1>
                            </div>
                            <div>
                                <ul>
                                    <li>
                                        <Link to='/'>Account</Link>
                                    </li>
                                    <li>
                                        <Link to='/'>Order Status</Link>
                                    </li>
                                    <li>
                                        <Link to='/blogs'>Blogs</Link>
                                    </li>
                                </ul>
                            </div>

                        </div>

                        {/* help */}
                        <div>
                            <div>
                                <h1>Help</h1>
                            </div>
                            <div>
                                <ul>
                                    <li>
                                        <Link to='/term-of-use'>Term & Conditions</Link>
                                    </li>
                                    <li>
                                        <Link to='/privacy-policy'>Privacy Policy</Link>
                                    </li>
                                    <li>
                                        <Link to='/shipping-policy'>Shipping Policy</Link>
                                    </li>
                                    <li>
                                        <Link to='/return-policy'>Return Policy</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* company */}
                        <div>
                            <div>
                                <h1>Company</h1>
                            </div>
                            <div>
                                <ul>
                                    <li>
                                        <Link to='/term-of-use'>Term & Conditions</Link>
                                    </li>
                                    <li>
                                        <Link to='/privacy-policy'>Privacy Policy</Link>
                                    </li>
                                    <li>
                                        <Link to='/shipping-policy'>Shipping Policy</Link>
                                    </li>
                                    <li>
                                        <Link to='/return-policy'>Return Policy</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>


                        {/* Contact us */}
                        <div>
                            <div>
                                <h1>Contact Us</h1>
                            </div>
                            <div>
                                <ul>
                                    <li>
                                        <Link to='/'>Dr. Neha Karade | Gangotri Hospital, Arya Nagar, In front of Kelabadi Mandir, | Durg | Chhattisgarh</Link>
                                    </li>
                                    <li>
                                        <Link to='/privacy-policy'>drnehahaircare@gmail.com</Link>
                                    </li>
                                    <li>
                                        <Link to='/shipping-policy'>+919907127379</Link>
                                    </li>
                                    <li>
                                        <Link to='/return-policy'>Return Policy</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Follow */}
                        <div>
                            <div>
                                <h1>Follow</h1>
                            </div>
                            <div>
                                <ul>
                                    <li>
                                        <Link to='/'>Dr. Neha Karade | Gangotri Hospital, Arya Nagar, In front of Kelabadi Mandir, | Durg | Chhattisgarh</Link>
                                    </li>
                                    <li>
                                        <Link to='/privacy-policy'>drnehahaircare@gmail.com</Link>
                                    </li>
                                    <li>
                                        <Link to='/shipping-policy'>+919907127379</Link>
                                    </li>
                                    <li>
                                        <Link to='/return-policy'>Return Policy</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='lower-footer'>
                        <p>@ 2024 Dr. Neha's - All Rights Reserved.</p>
                        <p>Powered by {companyName}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer

const companyName = "Ethereal Corporate Network Private Limitate"
