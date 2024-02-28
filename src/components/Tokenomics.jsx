import React,{useState,useEffect} from "react";
import "../styles/Tokenomics.scss";
import img from "../assets/tokenomic.png"
import car from "../assets/car.png"

  
export default function Tokenomics(){
    const [rendered, setRendered] = useState(false);

    

    return (
     
        <section className="tokenomics " id="tokenomics" >
            <div className="tokenomics__image_container">
                <img src={img} alt="man" className="tokenomics__man" />
                <img src={car} alt="car" className="tokenomics__car"/>
            </div>
            <div className="tokenomics__text_container_wrapper">
                <div className="tokenomics__text_container">
                    <h2 className="tokenomics__title title">Tokenomics Overview</h2>
                    <div className="tokenomics__blocks">
                        <div className="tokenomics__block">
                            <h2 className="number title"  data-countup-number="888,888">888,000</h2>
                            <p className="sTitle tokemics__block_subtitle">Total $MAFIA Supply</p>
                        </div>
                        <div className="tokenomics__block">
                            <h2 className="number title"  data-countup-number="888">888</h2>
                            <p className="sTitle tokemics__block_subtitle">Total NFT Supply</p>
                        </div>
                        <div className="tokenomics__block">
                            <h2 className="number title"  data-countup-number="950">950</h2>
                            <p className="sTitle tokemics__block_subtitle">Tokens Allocated per NFT  </p>
                        </div>
                        <div className="tokenomics__block">
                            <span><h2 className="number title"  data-countup-number="5">5%</h2> </span>
                            <p className="sTitle tokemics__block_subtitle">NFT to Token Swap Tax</p>
                        </div>
                    </div>
                
                </div>
            </div>
           
        </section>

    )
}