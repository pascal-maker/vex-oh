import React from 'react';
import './DownloadStyles.css'

import { Link, Routes } from 'react-router-dom';
import vexoimage from './vexoimage.jpg';
import { FaCamera } from 'react-icons/fa';


const Download = () => {
    return (
        <div className='download'>
            <div className= 'left'>
                <h1>Download</h1>
                <p>We hope when while downloading vexo-oh you will discover a new and exciting way of meeting people.</p>
                <Link to='/Contact us'><button className= 'btn'>Contact</button></Link>
                <div className= 'right'>
                    <div className= 'img-container'>
                        <div className= 'image-stack top'>
                            <img src={vexoimage} className = 'vexoimage'  alt= ''/>

                            </div>
                            <div className= 'image-stack bottom'>
                            <img src={FaCamera} className = 'vexoimage2'  alt= ''/>

                    </div>
                    </div>

                </div>
            </div>
        </div>
    )
    }