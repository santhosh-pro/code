import React from 'react'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem () {

    return (
        <article className="teacher-item">
            <header>
                <img src="" />
                <div>
                    <strong>Ivano</strong>
                    <span>Quimica</span>
                </div>
            </header>

            <p>
                Texto
                <br /><br />
                text
            </p>

            <footer>
                <p>
                    Preco/Hora
                    <strong>
                        R$ 80,00
                    </strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whats App"></img>
                    Entrar em contato
                </button>
            </footer>
        </article>
    );
}

export default TeacherItem;