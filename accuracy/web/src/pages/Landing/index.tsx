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

import TeamItem from '../../components/TeamItem';
import ProjectItem from '../../components/ProjectItem';

import Employee from '../../components/TeamItem/Employee';
import Project from '../../components/ProjectItem/Project';

import './styles.scss';
import Customer from '../../components/CustomerItem/Customer';
import CustomerItem from '../../components/CustomerItem';

function Landing () {

    const [ menuVisbile, setMenuVisible ] = useState(false);
    const [ employees, setEmployess ] = useState<Employee[]>([]);
    const [ projects, setProjects ] = useState<Project[]>([]);
    const [ customers, setCustomers ] = useState<Customer[]>([]);

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

            var employee : Employee = {
                name : name,
                office : office,
                photo : photo,
                descrition : description,
                resume : resume
            }

            return employee;

        }

        let emps : Array<Employee> = [
            newEmployee( 
                'Luis Carvalho', 
                'Diretor Exectivo', 
                'https://randomuser.me/api/portraits/men/1.jpg',
                'Entusiasta das melhores tecnologias para projetos de enhenharia civil', 
                'Com 30 anos de experiência ....Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
            ),
            newEmployee( 
                'Gabriel Dias', 
                'Desenhista', 
                'https://randomuser.me/api/portraits/men/2.jpg',
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit', 
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
            ),
            newEmployee( 
                'Guilherme Camurça', 
                'Projetista', 
                'https://randomuser.me/api/portraits/men/10.jpg',
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit', 
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
            ),
            newEmployee( 
                'Aroldo José', 
                'Engenheiro', 
                'https://randomuser.me/api/portraits/men/30.jpg',
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit', 
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
            ),
            newEmployee( 
                'Jéssica Lima', 
                'Gerente Administrativa', 
                'https://randomuser.me/api/portraits/women/30.jpg',
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit', 
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
            )

        ];

        setEmployess( emps );

        let projs : Array<Project> = [
            {
                name : 'Muralha da China',
                local : 'China',
                photo : 'https://portalbr.akamaized.net/brasil/uploads/2017/03/28143936/shutterstock_310861286.jpg',
                descrition : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
                resume : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                year : '2018',
                km : '5500'
            },
            {
                name : 'Ponte Golden Gate',
                local : 'São Francisco',
                photo : 'https://media.gazetadopovo.com.br/haus/2019/03/golden-gate-bridge-dusk-1024x506-8393f9f0.jpg',
                descrition : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
                resume : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                year : '2019',
                km : '4500'
            }, 
            {
                name : 'Rodovia Castelo Branco',
                local : 'São Paulo',
                photo : 'http://www.viaoeste.com.br/resources/media/news/large/20190116_c5212061533343d2a52271549b79bcd3_11-viadutos-da-serra-de-botucatu-sp-280-rodovia-castello-branco-km-205-foto-ccr-spvias-credito-digna-imagem-clovis-ferreira.JPG',
                descrition : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
                resume : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                year : '2020',
                km : '5550'
            }

        ];

        setProjects( projs );


        let custs : Array<Customer> = [
            {
                name : "Divided",
                logo : "https://geekpublicitario.com.br/wp-content/uploads/2020/03/logo-united-coronavirus-geek-publicitario-1024x426.jpg"
            },
            {
                name : "Gonçalves Rodrigues",
                logo : "http://logotiposdeempresas.com.br/wp-content/uploads/2015/03/logotipo_engenharia.png"
            },
            {
                name : "CGR",
                logo : "https://static.wixstatic.com/media/0aa8f1_a648c4109df342878672a0bd991be973~mv2.png/v1/fill/w_149,h_76,al_c,usm_0.66_1.00_0.01/Logo%20horizontal-03.png"
            }
        ];

        setCustomers( custs );
        
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
                   
                        <nav id="menu-container" className="container">
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
                            { 
                                employees &&
                                    employees.map( ( employee : Employee ) => {
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

                    <section className="page-landing-project">
                        <div id="project">
                            <div className="project-title" >
                                <strong>Projetos</strong>
                            </div>
                            { 
                                projects &&
                                    projects.map( ( project : Project ) => {
                                        return <ProjectItem 
                                                    name={project.name} 
                                                    photo={project.photo}
                                                    local={project.local} 
                                                    descrition={project.descrition}
                                                    resume={project.resume} 
                                                    year={project.year}
                                                    km={project.km}
                                                />
                                    })
                           }
                        </div>
                    </section>

                    <section className="page-landing-customer">
                        <div id="customer">
                            <div className="customer-title" >
                                <strong>Clientes</strong>
                            </div>
                           
                            <CustomerItem />
                           
                        </div>
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