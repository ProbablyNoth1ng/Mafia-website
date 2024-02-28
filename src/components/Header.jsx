
import React, { useState,useEffect } from 'react';
import '../styles/Header.scss';
import video from '../assets/home.mp4'

export default function Header({sendDataToParent}) {

    useEffect(() => {
        // callback function to call when event triggers
        const onPageLoad = () => {
          console.log('page loaded');
          document.querySelector('.swap__container').insertAdjacentHTML('afterbegin','<div className=" "  id="integrated-terminal"></div>')
        
          window.Jupiter.init({
            displayMode: "integrated",
            strictTokenList: false,
            integratedTargetId: "integrated-terminal",
            endpoint: "https://mainnet.helius-rpc.com/?api-key=1d9c231c-925c-4f69-9d0e-f1a13c700e94",
            formProps: {
                fixedOutputMint: true,
                initialOutputMint: "BhGUQRspq34apPnGPwxajpCUD3KRxy2DUeNBsejn2zG5",
            },
            // buttonClassName:"p-3",
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
        // document.querySelector('div .py-5').classList.add('p-3')

      }, []);

      function enter(){
        sendDataToParent(false)
        console.log('entered')
      }
      function out(){
        sendDataToParent(true)
        console.log("out")
      }


    return (
        <>
        <header className="header" id='home'>
                <video   loop autoPlay muted className='header__video'>
                    <source src={video} type='video/mp4'/>
                </video>
                <div className="swap__container swap d-flex justify-content-center" onMouseEnter={enter} onMouseOut={out}>

                </div>
        </header>
            
        </>
    )
}