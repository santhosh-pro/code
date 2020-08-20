import React, { useEffect, useState } from 'react';

import './styles.scss';

interface MenuProps {
    visible        : boolean;
    homeRef        : any;
    teamRef        : any;
    whoAreRef      : any;
    projectRef     : any;
    portfolioRef   : any;
    successCaseRef : any;
    customerRef    : any;
    contactRef     : any;
}

const scrollToRef = (ref : any) => window.scrollTo(0, ref.current.offsetTop)  

const Menu : React.FC<MenuProps> = ( props ) => {

    const [ visible, setVisible ] = useState<boolean>( props.visible );

    useEffect( () => {

        setVisible( props.visible );

    }, [props.visible]);

    useEffect ( () => {

        if ( visible ) {

            let el = document.getElementById( 'menu-container') as HTMLDivElement;
            el.style.height = "100vh";

            let page = document.getElementById( 'page-landing') as HTMLElement;
            page.style.overflow = "none";

            let li = document.getElementsByTagName( 'li' );
            li[0].style.height = "3.5rem";
            li[1].style.height = "3.5rem";
            li[2].style.height = "3.5rem";
            li[3].style.height = "3.5rem";
            li[4].style.height = "3.5rem";
            li[5].style.height = "3.5rem";
            li[6].style.height = "3.5rem";
            li[7].style.height = "3.5rem";

        } else {

            let el = document.getElementById( 'menu-container') as HTMLElement;
            
            if ( el ) {
                el.style.height = "0";
            }
        }

    }, [visible]);

    const executeScroll = ( menuRef : any ) => {
        scrollToRef( menuRef );
        setVisible( false );
    }

    return (
        <>
            { 
                visible &&

                <nav id="menu-container" className="container">
                    <ul>
                        <li>
                            <span onClick={()=>executeScroll( props.homeRef )} >Home</span>
                        </li>
                        <li>
                            <span>Quem Somos</span>
                        </li>
                        <li>
                            <span onClick={()=>executeScroll( props.teamRef )} >Equipe</span>
                        </li>  
                        <li>
                            <span onClick={()=>executeScroll( props.projectRef )} >Projetos</span>
                        </li>                                                                     
                        <li>
                            <span>Portifólio</span>
                        </li>      
                        <li>
                            <span>Casos de Sucesso</span>
                        </li>               
                        <li>
                            <span onClick={()=>executeScroll( props.customerRef )} >Clientes</span>
                        </li>                            
                        <li>
                            <span>Contato</span>
                        </li>
                    </ul> 
                </nav> 
            }
        </>

    );
        
}

export default Menu;