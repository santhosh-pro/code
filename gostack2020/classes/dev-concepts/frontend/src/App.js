import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import backgroundImage from './assets/backgroundImage.jpg';
import api from './service/api';

import './App.css';

function App() {

    const [ projects, setProject ] = useState([]);

    useEffect(() => {

        api.get('/projects')
        .then( response => {
            setProject( response.data );
        })

    }, []);

    async function handleAddProject() {

        //setProject( [...projects, `Novo projeto ${Date.now()}` ]);
        const response = await api.post( '/projects', {
            title: `Novo projeto ${Date.now()}`,
            owner: 'Ivano Carvalho'
        });

        const project = response.data;
        setProject( [...projects, project ]);
        
    }

    return (
        <>
            <Header title="Projects"/>
            <img width={300} src={backgroundImage} />
            <ul>
                { 
                    projects.map( project => {
                        return <li key={project.id}>{project.title}</li>
                    })
                }
            </ul>
            <button type="button" onClick={handleAddProject}>Adiconar projeto</button>
        </>
    );

    /*return (
        <Header title="Homepage">
            <ul>
                <li>Titulo1</li>
                <li>Titulo2</li>
                <li>Titulo3</li>
            </ul>
        </Header>
    )*/
}

export default App;