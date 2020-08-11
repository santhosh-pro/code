import React, { useEffect, useState } from 'react';

import logoImg from '../../assets/image/logoImg.png';
import facebookIcon from '../../assets/image/icon/facebook.svg';
import instagramIcon from '../../assets/image/icon/instagram.svg';
import linkedinIcon from '../../assets/image/icon/linkedin.svg';
import menuIcon from '../../assets/image/icon/menu2.svg';

import './styles.css';

function Landing () {

    const [ menuVisbile, setMenuVisible ] = useState(false);

    const handleClickMenu = () => {

        setMenuVisible(!menuVisbile)

    }
    useEffect ( () => {

        if ( menuVisbile ) {

            let el = document.getElementById( 'menu-container') as HTMLDivElement;
            //el.classList.toggle('open');// 
            el.style.height = "86vh";

            let li = document.getElementsByTagName( 'li' ) as HTMLCollectionOf<HTMLLIElement>;
            li[0].style.height = "3.5rem";
            li[1].style.height = "3.5rem";
            li[2].style.height = "3.5rem";
            li[3].style.height = "3.5rem";
            li[4].style.height = "3.5rem";
            li[5].style.height = "3.5rem";

        } else {

            let el = document.getElementById( 'menu-container') as HTMLDivElement;
            
            if ( el ) {
                el.style.height = "0";
            }
        }

    }, [menuVisbile])

    
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
                            <img src={menuIcon} alt="Menu" onClick={()=>handleClickMenu()} />  
                        </div>
                    </div>
                </header>
                {/*<label>&#9776;</label>*/ }
                { menuVisbile &&
                   
                        <nav id="menu-container" className="navbar-menu">
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