import React from 'react';
import Project from './Project';

import './styles.scss';

const ProjectItem: React.FC<Project> = ( props ) => {

    return (
        <article className="project-item">
            <header>
                <img src={props.photo} alt="Projeto" />
                <div>
                    <strong>{props.name}</strong>
                    <span>Localidade: {props.local}</span>
                    <br />
                    <span>{props.year} {`${props.km}km`}</span>
                </div>
            </header>

            <p>
                {props.resume} 
                <a href="/" >Saiba mais...</a>
            </p>
            
            {/*
            <footer>
            </footer>
            */}
        </article>
    )
}

export default ProjectItem;