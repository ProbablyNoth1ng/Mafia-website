
import React, { useState } from 'react';
import '../styles/Soon.scss';
import video from '../assets/soon.mp4'
import cloud from '../assets/cloud.png'
export default function Soon() {
    $(function () {
        $(".soon__text").typed({
          strings:["Soon..."],
          typeSpeed: 100,
          backSpeed: 30,
          backDelay: 1500,
          showCursor: false,
          loop: true
        });
      });
    
    return (
        
        <>
        <div className="soon">
            
            <video className='soon_video' autoPlay loop muted>
                <source src={video} type='video/mp4'/>
                
            </video>
            <img src={cloud} alt="cloud" className='soon_cloud'/>
            <p className='soon__text plain_text'>SOON...</p>
        </div>
            
        </>
    )
}