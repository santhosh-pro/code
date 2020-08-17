import React, { useEffect, useState } from 'react';

import logoImg from '../../assets/image/logoImg.png';
import facebookIcon from '../../assets/image/icon/facebook.svg';
import instagramIcon from '../../assets/image/icon/instagram.svg';
import linkedinIcon from '../../assets/image/icon/linkedin.svg';
import menuIcon from '../../assets/image/icon/menu2.svg';

import projectImg from '../../assets/image/info-menu/project.jpg';
import whoWeAreImg from '../../assets/image/info-menu/WhoWeAre.jpeg';
import successCaseImg from '../../assets/image/info-menu/SuccessCase.png';
import teamImg from '../../assets/image/info-menu/team.jpg';

import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

import './styles.scss';
import TeamItem from '../../components/TeamItem';
import Employee from '../../components/TeamItem/Employee';

function Landing () {

    const [ menuVisbile, setMenuVisible ] = useState(false);
    const [ employees, setEmployess ] = useState([]);

    const handleClickMenu = () => {

        setMenuVisible(!menuVisbile)

    }

    useEffect ( () => {

        if ( menuVisbile ) {

            let el = document.getElementById( 'menu-container') as HTMLDivElement;
            el.style.height = "100vh";

            let page = document.getElementById( 'page-landing') as HTMLElement;
            page.style.overflow = "none";

            let li = document.getElementsByTagName( 'li' ) as HTMLCollectionOf<HTMLLIElement>;
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

    }, [menuVisbile]);


    useEffect( () => {

        function newEmployee( name : string, office : string, photo : string, description : string, resume : string )  : Employee {

            var employee : Employee = new Employee();

            employee.descrition = "";

            return employee;

        }

        let emp  = newEmployee( 'Luis Carvalho', 
                                'Diretor Exectivo', 
                                'https://randomuser.me/api/portraits/men/1.jpg',
                                'Entusiasta das melhores tecnologias para projetos de enhenharia civil', 
                                'Com 30 anos de experiência ....Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' )

        console.log( emp );

        let emps : Array<Employee>;
      //  emps.push( emp );

        /*
        let emps : Array<EmployeeProps>;
        emps.push( 

            newEmployee( 'Luis Carvalho', 
                         'Diretor Exectivo', 
                         'https://randomuser.me/api/portraits/men/1.jpg',
                         'Entusiasta das melhores tecnologias para projetos de enhenharia civil', 
                         'Com 30 anos de experiência ....Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' )
        
            
        );

        setEmployess( emps );*/

    },[]);
    
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
                                    <a href="#">Equipe</a>
                                </li>  
                                <li>
                                    <a href="#">Projetos</a>
                                </li>                                                                     
                                <li>
                                    <a href="#">Portifólio</a>
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

                <main>
                    <section className="page-landing-section">
                        
                        <div className="page-landing-spotlight">
                            <AliceCarousel autoPlay autoPlayInterval={3000} buttonsDisabled={true}>
                               
                                <div>            
                                    <img src={whoWeAreImg} className="sliderimg" />  
                                    <span>
                                        Quem somos: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                        <a href="" >Saiba mais...</a>
                                    </span>  
                                </div>   
                                <div>
                                    <img src={teamImg} className="sliderimg" /> 
                                    <span>
                                        Equipe: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                        <a href="" >Conheça nossa equipe...</a>
                                    </span>   
                                </div> 
                                <div>
                                    <img src={projectImg} className="sliderimg" />   
                                    <span>
                                        Projetos: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                        <a href="" >Saiba mais...</a>
                                    </span>         
                                </div> 
                                <div>
                                    <img src={successCaseImg} className="sliderimg" /> 
                                    <span>
                                        Casos de sucesso: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                        <a href="" >Saiba mais...</a>
                                    </span>   
                                </div>
                                
                            </AliceCarousel>
                        </div> 

                    </section>

                    <section className="page-landing-team">
                        <div id="team">
                            <div className="team-title" >
                                <strong>Nossa Equipe</strong>
                            </div>
                            {/*
                            <TeamItem 
                                name={'Luis Carlos'} 
                                photo={'https://randomuser.me/api/portraits/men/1.jpg'}
                                office={'Diretor Executivo'} 
                                descrition={'Entusiasta das melhores tecnologias para projetos de enhenharia civil'}
                                resume={'Com 30 anos de experiência ....Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'} 
                            />
                            <TeamItem 
                                name={'Guilerme Camurça'} 
                                photo={'https://randomuser.me/api/portraits/men/7.jpg'}
                                office={'Diretor Executivo'} 
                                descrition={'Entusiasta das melhores tecnologias para projetos de enhenharia civil'}
                                resume={'Com 30 anos de experiência ....Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'} 
                            />
                            */}
                            { 
                                employees &&
                                    employees.map( ( employee : EmployeeProps ) => {
                                        return <TeamItem 
                                                    name={employee.name} 
                                                    photo={employee.photo}
                                                    office={employee.office} 
                                                    descrition={employee.descrition}
                                                    resume={employee.resume} 
                                                />
                                    })
                            }

                        </div>
                    </section>

                    <section className="page-landing-section">
                        <h1>
                            teste
                        </h1>
                    </section>
                    <section className="page-landing-section">
                        <h1>
                            teste
                        </h1>
                    </section>
                    <section className="page-landing-section">
                        <h1>
                            teste
                        </h1>
                    </section>
                    <section className="page-landing-section">
                        <h1>
                            teste
                        </h1>
                    </section>

                </main>
            
                <footer className="page-landing-footer">
                    <div className="social-network-content">
                        <img src={facebookIcon} alt="Facebook" />
                        <img src={instagramIcon} alt="Instagran" />
                        <img src={linkedinIcon} alt="Linkedin" />
                    </div>
                </footer>

           </div>
       </div>
    )

}

export default Landing;