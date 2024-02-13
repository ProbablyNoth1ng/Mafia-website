import React from "react";
import "../styles/Footer.scss";
import img from '../assets/footer.png'
export default function Footer(){
    return (
        <>
            <div className="footer__img_wrapper" id="links">
                    <img src={img} alt="" className="footer__img" />
                </div>
        
                        <footer  className="footer">
                            <div className="footer__column token_info">
                                <h2 className="footer__title title">MAFIA</h2>
                                <div className="footer__column_inner">
                                    <p className="plain_text">$MAFIA</p>
                                    <p className="plain_text">The world's first SPL22 token</p>
                                </div>
                            </div>
                            <div className="footer__column socials">
                                <h2 className="footer__title title">Socials</h2>
                                <div className="footer__column_inner">
                                    <a href="" className="link">twitter</a>
                                    <a href="" className="link">discord</a>
                                    <a href="" className="link">telegram</a>
                                </div>
                            </div>
                            <div className="footer__column resources">
                                <h2 className="footer__title title">Resources</h2>
                                <div className="footer__column_inner">
                                    <a href="" className="link">Birdeye</a>
                                    <a href="" className="link">Dexscreener</a>
                                    <a href="" className="link">FluxBeam</a>
                                </div>
                            </div>
                        </footer>
            </>


    )
}