import React from 'react'
import './footer.css'

const Footer = () => {
    return (
        <div>
            <div className='footer'>
                <div className='footer-content'>
                    <div className='upper-footer'>

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
