import React from "react"
import "../styles/Mobile.scss";
import tg from '../assets/tg.png'
import tensor from '../assets/tensor.png'
import twt from '../assets/twt.png'
export default function Mobile(){
    return (
        <>  
            <div className="Mobile">
                    <p className="title ">Mobile version coming soon</p>
                    <p className="title">Stay tuned</p>
                    <div className="links">
                        <a href="https://twitter.com/mafiaspl20" className="link" >  <img src={twt} alt="" className="imgg"/></a>
                        <a href="t.me/mafiaspl20" className="link">   <img src={tg} alt="" className="imgg"/></a>
                        <a href="https://www.tensor.trade/trade/mafia_spl22"  className="link">  <img src={tensor} alt="" className="imgg"/></a>
                   
                  
                   
                    </div>
            </div>
        </>
    )
}