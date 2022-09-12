import React from 'react'
import './FooterStyles.css'
import { FaFacebook,FaInstagram,FaLinkedin,FaMailBulk,FaPhone,FaSearchLocation,FaTiktok } from 'react-icons/fa'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-container'>
                <div className='left'>
                    <div className='location'>
                        <FaSearchLocation size={20} style={{ color: '#4CD4CB', marginRight: '2rem' }} />
                        <div>
                            <p>Gerard Willemotlaan 30.</p>
                            <h4>Gent, Belgium</h4>
                        </div>
                    </div>
                    <div className='phone'>
                        <h4><FaPhone size={20} style={{ color: '#4CD4CB', marginRight: '2rem' }} /> +32456180134</h4>
                    </div>
                    <div className='email'>
                        <h4><FaMailBulk size={20} style={{ color: '#4CD4CB', marginRight: '2rem' }} /> pascal@vexo-oh.com</h4>
                    </div>
                </div>
                <div className='right'>
                    <h4>About the company</h4>
                    <p>"Vexo-oh is an app created by Pascal Musabyimana. 
                        The goal of the app is to be the First dual-camera swipe app. 
                        Where people can swipe pictures that were taken that day to avoiding superficiality and stress of uploading the 'perfect' pictures."</p>
                    <div className='social'>
                        <FaFacebook size={30} style={{ color: '#4CD4CB', marginRight: '1rem' }} />
                        <FaLinkedin size={30} style={{ color: '#4CD4CB', marginRight: '1rem' }} />
                        <FaTiktok size={30} style={{ color: '#4CD4CB', marginRight: '1rem' }} />
                        <FaInstagram size={30} style={{ color: '#4CD4CB', marginRight: '1rem' }} />
                        <FaMailBulk size={30} style={{ color: '#4CD4CB', marginRight: '1rem' }} />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Footer