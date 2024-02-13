
import React, { useState,useEffect } from 'react';
import '../styles/Nav.scss';
import music from '../assets/midnight-forest-184304.mp3';





export default function Nav({ sendDataToParent }) {
  const [clicked, setClicked] = useState(false);
  const [playing,setPlaying] = useState(false)
  const [audio] = useState(new Audio(music));


  function navClick(e){
    updateMenu()
    let link = e.target.id;
    switch(link){
        case "home_link":
          sendDataToParent(0);
          break;
        case "about_link":
          sendDataToParent(1);
          break;
        case "tokenomics_link":
          sendDataToParent(2);
          break;
        case "footer_link":
          sendDataToParent(4);
          break;

    }
  }

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
      playing ? audio.play() : audio.pause();
    },
    [playing]
  );

  const updateMenu = () => {
    setClicked(!clicked);
    if (!clicked) {
      document.body.classList.add('scrollBlock');
    } else {
      document.body.classList.remove('scrollBlock');
    }
  };

  return (
    <div className={`bg ${clicked ? 'opened' : ''}`} >
      <nav className="nav">
        <a href="#home" className="logo link ">MAFIA</a>
        <div className="nav__links">
          <a href="#" className={`nav__link link  ${clicked ? 'visible' : ''}`} id="home_link" onClick={navClick}>Home</a>
          <a href="#" className={`nav__link link  ${clicked ? 'visible' : ''}`} id="about_link" onClick={navClick}>About</a>
          <a href="https://www.bozo.finance/bridge/MAFIA" className={`nav__link link ${clicked ? 'visible' : ''}`} onClick={navClick}>Bridge</a>
          <a href="#" className={`nav__link link  ${clicked ? 'visible' : ''}`} id="tokenomics_link" onClick={navClick}>Tokenomics</a>
          <a href="#" className={`nav__link link  ${clicked ? 'visible' : ''}`} id="footer_link" onClick={navClick}>Links</a>
        </div>
        <div className={`burger_Menu ${clicked ? 'opened' : ''}` } onClick={updateMenu}>
          <span></span>
        </div>
        <div className="sound"><i class={`music fa-solid ${playing ? 'fa-volume-high' : 'fa-volume-xmark' }`} onClick={toggle}></i></div>
      </nav>
    </div>
  );
}
