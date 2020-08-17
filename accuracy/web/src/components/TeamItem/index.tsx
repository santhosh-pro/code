import React from 'react';
import Employee from './Employee';

import './styles.scss';


const TeamItem: React.FC<Employee> = ( props ) => {

    return (
        <article className="team-item">
            <header>
                <img src={props.photo} alt="Cargo" />
                <div>
                    <strong>{props.name}</strong>
                    <span>{props.office}</span>
                </div>
            </header>

            <p>
                {props.descrition}    
                <br /><br />
                {props.resume}
            </p>
            {/*
            <footer>
            </footer>
            */}
        </article>
    )
}

export default TeamItem;