import React from 'react'
import about2 from '../../../images/about-2.png'
import about3 from '../../../images/about-3.png'
import './HeroSection.css'
const HeroSection = () => {
    return (
        <>
            <div>
                <div className='videoSection'>
                    {/* <div className='videoLayer'>
                        <video autoPlay width="1920px" controls >
                            <source src={video} type="video/mp4" />
                        </video>
                    </div> */}
                    <div className='videoSectionUpperLayer'>
                        <div className='welcome-box'>
                            <p className='line-one'>WELCOME TO DR. NEHA'S CARE</p>
                            <p className='line-two'>Beauty & Skin care</p>
                            <p className='line-three'>starts with Dr. Neha</p>
                            <button className='shop-now-btn'>Shop Now <i className="fa-solid fa-basket-shopping"></i></button>
                        </div>
                        <div className='social-media-box'>
                            <button className='social-btn facebook-btn'>
                                <i className="fa-brands fa-facebook-f"></i>
                            </button>
                            <button className='social-btn linkedin-btn'>
                                <i className="fa-brands fa-linkedin-in"></i>
                            </button>
                            <button className='social-btn instagram-btn'>
                                <i className="fa-brands fa-instagram"></i>
                            </button>
                            <button className='social-btn youtube-btn'>
                                <i className="fa-brands fa-youtube"></i>
                            </button>



                        </div>

                    </div>
                </div>
                <div className='imagesSection'>
                    <img className='img1' src={about2} alt='about2' />
                    <img className='img2' src={about3} alt='about3' />
                    <div className='aboutSection'>
                        <p className='line-one'>Provide the Best</p>
                        <p className='line-two'>All-round Care for you!</p>
                        <div className='line-three-box'>
                            <p className='line-three'>Dr. Neha's products is an all-round beauty and skincare brand that offers to elevate your beauty to standards - One stop solution for all your cosmetics, skincare and grooming needs.</p>
                            <p className='line-three'>True to our name, we adhere to the highest standards for maintaining quality in all our products.</p>
                        </div>
                        <button className='know-more-btn'>
                            Know more
                            <i className="fa-solid fa-arrow-right"></i>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeroSection
