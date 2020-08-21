import React, { Component } from 'react';

import './styles.scss';

class Customer extends Component {

    constructor () {

        super();

        this.state = {
            name : ''
        }

    }

    hangleChange = ( e ) => {

        this.setState({
            name : e.target.value
        });

    }


    componentWillMount() {
        console.log('componentWillMount');
        
    }

    componentDidMount() {
        console.log('componentDidMount');
    }

    componentWillUpdate() {
        console.log('componentWillUpdate');
    }
    
    componentDidUpdate() {
        console.log('componentDidUpdate');
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
    }


    render () {

        return (

            <div action="" id="page-customer">
                <div id="page-customer-content" className="container" >
                    
                    <header className="page-header">
                        <span>Customer</span>
                    </header>
                
                    <div type="text" className="input-block">
                        <label>                            
                            Nome
                        </label>
                        <input 
                            type="text" 
                            className="input-customer-name"
                            onChange={(e)=>this.hangleChange(e)} 
                            value={this.state.name} 
                        />
                    </div>


                </div>

            </div>

        )

    }

}

export default Customer;

