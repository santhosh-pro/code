import React from 'react';

import logoImg from '../../assets/image/logoImg.png';
import facebookIcon from '../../assets/image/icon/facebook.svg';
import instagramIcon from '../../assets/image/icon/instagram.svg';
import linkedinIcon from '../../assets/image/icon/linkedin.svg';

import './styles.css';

function Landing () {

    return (
       <div id="page-landing">
           <div id="page-landing-content" className="container">
                <header className="page-landing-header" >
                    <div className="top-bar-container">
                    </div>
                </header>
                <div className="logo-container" >
                    <img src={logoImg} alt="Exatidão Engenharia" />
                    <h2>EXATIDÃO ENGENHARIA</h2>
                </div>
                {/*
                <div className="social-network-icon-content">
                    <img src={facebookIcon} alt="Facebook" />
                    <img src={instagramIcon} alt="Instagran" />
                    <img src={linkedinIcon} alt="Linkedin" />
                </div>
                */}

           </div>
       </div>
    )

}

export default Landing;