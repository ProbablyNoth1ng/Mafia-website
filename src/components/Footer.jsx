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
                                <h2 className="footer__title title">$MAFIA</h2>
                                <div className="footer__column_inner frs">
                                  
                                    <p className="plain_text frs">The world's first SPL22 token</p>
                                    <p className="plain_text">Be. With. MAFIA.</p>
                                    <a href="https://solscan.io/token/BhGUQRspq34apPnGPwxajpCUD3KRxy2DUeNBsejn2zG5" className="link">Contract Address </a>
                                </div>
                            </div>
                            <div className="footer__column socials">
                                <h2 className="footer__title title">Socials</h2>
                                <div className="footer__column_inner">
                                <a href="t.me/mafiaspl20" className="link ">telegram chat</a>
                                    <a href="https://twitter.com/mafiaspl20" className="link ">twitter</a>
                                    <p  className="link ">discord</p>
                                  
                                </div>
                            </div>
                            <div className="footer__column resources">
                                <h2 className="footer__title title">Resources</h2>
                                <div className="footer__column_inner ">
                                    <a href="https://dexscreener.com/solana/BhGUQRspq34apPnGPwxajpCUD3KRxy2DUeNBsejn2zG5" className="link ">Dexscreener</a>
                                    <a href="https://fluxbeam.xyz/app/swap" className="link ">FluxBeam</a>
                                    <a href="https://birdeye.so/token/BhGUQRspq34apPnGPwxajpCUD3KRxy2DUeNBsejn2zG5?chain=solana" className="link ">Birdeye</a>
                                </div>
                            </div>
                        </footer>
            </>


    )
}