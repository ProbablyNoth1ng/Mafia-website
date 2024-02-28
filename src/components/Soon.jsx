
import React, { useState } from 'react';
import '../styles/Soon.scss';
import video from '../assets/soon.mp4'
import cloud from '../assets/cloud.png'
export default function Soon() {
  
    
    return (
        
        <>
        <div className="soon">
            
            <video className='soon_video' autoPlay loop muted>
                <source src={video} type='video/mp4'/>
                
            </video>
            
        </div>
            
        </>
    )
}