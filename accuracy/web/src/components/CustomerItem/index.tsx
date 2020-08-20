import React from 'react';

import './styles.scss';

function CustomerItem () {

    return(
        <article className="customer-item">
            <header>
                <img src={"https://shoppingdiadema.com/wp-content/uploads/2018/07/logo-shopping-diadema-retina.png"} alt="Logo Cliente" />
                <img src={"https://geekpublicitario.com.br/wp-content/uploads/2020/03/logo-united-coronavirus-geek-publicitario-1024x426.jpg"} alt="Logo Cliente" />
                <img src={"https://static.wixstatic.com/media/0aa8f1_a648c4109df342878672a0bd991be973~mv2.png/v1/fill/w_149,h_76,al_c,usm_0.66_1.00_0.01/Logo%20horizontal-03.png"} alt="Logo Cliente" />
                {/*
                    customers &&
                        customers.map( ( customer : Customer ) => {
                            return <img src={customer.logo} alt="Logo Cliente" />
                        }) 
                    */  }
                {/*<div>
                    <strong>{props.name}</strong>
                </div>*/}
            </header>

            {/*
            <footer>
            </footer>
            */}
        </article>
    );

}

export default CustomerItem;