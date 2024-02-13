
import React, { useState,useEffect } from 'react';
import '../styles/Header.scss';
import video from '../assets/home.mp4'
export default function Header() {

    useEffect(() => {
        // callback function to call when event triggers
        const onPageLoad = () => {
          console.log('page loaded');
          document.querySelector('.header__video').insertAdjacentHTML('afterend','<div className="swap d-flex justify-content-center  " id="integrated-terminal"></div>')
        
          window.Jupiter.init({
            displayMode: "integrated",
            integratedTargetId: "integrated-terminal",
            endpoint: "https://mainnet.helius-rpc.com/?api-key=1d9c231c-925c-4f69-9d0e-f1a13c700e94",
            formProps: {
                fixedOutputMint: true,
                initialOutputMint: "BhGUQRspq34apPnGPwxajpCUD3KRxy2DUeNBsejn2zG5",
            }
            });
        };
    
        // Check if the page has already loaded
        if (document.readyState === 'complete') {
          onPageLoad();
        } else {
          window.addEventListener('load', onPageLoad, false);
          // Remove the event listener when component unmounts
          return () => window.removeEventListener('load', onPageLoad);
        }
      }, []);

    return (
        <>
        <header className="header" id='home'>
                <video  loop autoPlay muted className='header__video'>
                    <source src={video} type='video/mp4'/>
                </video>

        </header>
            
        </>
    )
}