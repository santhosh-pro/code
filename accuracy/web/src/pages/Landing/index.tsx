import React, { useEffect, useState } from 'react';

import logoImg from '../../assets/image/logoImg.png';
import facebookIcon from '../../assets/image/icon/facebook.svg';
import instagramIcon from '../../assets/image/icon/instagram.svg';
import linkedinIcon from '../../assets/image/icon/linkedin.svg';
import menuIcon from '../../assets/image/icon/menu2.svg';

import './styles.css';

function Landing () {

    const [ menuVisbile, setMenuVisible ] = useState(false);
    
    return (
       <div id="page-landing">
           <div id="page-landing-content" className="container">
                <header className="page-landing-header" >
                    <div className="top-bar-container">
                        <div className="logo-container" >
                            <img src={logoImg} alt="Exatidão Engenharia" />
                            <h2>EXATIDÃO ENGENHARIA</h2>
                        </div>
                        <div className="menu-img-container">
                            <img src={menuIcon} alt="Menu" onClick={()=>setMenuVisible(!menuVisbile)} />  
                        </div>
                    </div>
                </header>
                {/*<label>&#9776;</label>*/ }
                { menuVisbile &&
                    <div className="menu-container" >
                        <nav className="navbar-menu">
                            <ul>
                                <li>
                                    <a href="#">Home</a>
                                </li>
                                <li>
                                    <a href="#">Quem Somos</a>
                                </li>
                                <li>
                                    <a href="#">Projetos</a>
                                </li>                            
                                <li>
                                    <a href="#">Casos de Sucesso</a>
                                </li>                            
                                <li>
                                    <a href="#">Clientes</a>
                                </li>                            
                                <li>
                                    <a href="#">Contato</a>
                                </li>
                            </ul>                        
                        </nav>
                    </div>
                }
            


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