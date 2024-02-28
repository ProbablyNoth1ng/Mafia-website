import React,{ useState,useEffect } from 'react'
import {
  FullpageContainer,
  FullpageSection,
} from "@shinyongjun/react-fullpage";
import "@shinyongjun/react-fullpage/css";
import './styles/App.scss'

import Nav from "./components/Nav";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Soon from "./components/Soon";
import Tokenomics from "./components/Tokenomics";
import Mobile from "./pages/Mobiles";


function App() {
  const [activeIndex,setActiveIndex] = useState(0);
  const [isBlockedScroll,setIsBlockedScroll] = useState(true);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); 

  const handleDataFromChild = (data) => {
    setActiveIndex(data);
  };

  const handleDataFromHeader = (data) => {
    setIsBlockedScroll(data);
  };
  useEffect(() => {
    console.log(isBlockedScroll)
  },[isBlockedScroll])
  
  return (

      <div>
      {screenWidth > 700 ? (
          <>
                            <Nav sendDataToParent={handleDataFromChild} index={activeIndex}/>
                  <FullpageContainer
                        activeIndex={activeIndex}
                        setActiveIndex={setActiveIndex}
                        transitionDuration={1000}
                        
                      >
                        <FullpageSection>
                        <Header sendDataToParent={handleDataFromHeader}/>
                        </FullpageSection>
                
                        <FullpageSection>
                          <About />
                        </FullpageSection>
                
                        <FullpageSection>
                          <Tokenomics />
                        </FullpageSection>
                
                        <FullpageSection>
                          <Soon/>
                        </FullpageSection>
                
                        <FullpageSection  >
                          <Footer/>
                        </FullpageSection>
                      </FullpageContainer>
                      <div className="controller">
                        <button
                          type="button"
                          className={`${activeIndex === 0 ? "active" : ""}`}
                          onClick={() => setActiveIndex(0)}
                        >
                          
                        </button>
                        <button
                          type="button"
                          className={`${activeIndex === 1 ? "active" : ""}`}
                          onClick={() => setActiveIndex(1)}
                        >
                          
                        </button>
                        <button
                          type="button"
                          className={`${activeIndex === 2 ? "active" : ""}`}
                          onClick={() => setActiveIndex(2)}
                        >
                          
                        </button>
                        <button
                          type="button"
                          className={`${activeIndex === 3 ? "active" : ""}`}
                          onClick={() => setActiveIndex(3)}
                        ></button>
                                <button
                          type="button"
                          className={`${activeIndex === 4 ? "active" : ""}`}
                          onClick={() => setActiveIndex(4)}
                        ></button>
                      </div>
          </>
                ) : (
                  <Mobile/>
                )}
        
      </div>
         

   
   
    
  )
}

export default App;
