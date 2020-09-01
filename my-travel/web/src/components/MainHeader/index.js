import React from 'react';

export default function MainHeader ( props ) {


    return (
      
        <header id="main-header">
        
            <div className="main-menu-logo-app">
                <strong>Enquete LuxFacta</strong>
            </div>
                
            <div className="user-logged">
                <div className="user-logged-name">
                    <p>Sarah Morita</p>
                    <p>Admin</p>
                </div>
                <div className="user-logged-picture">
                    <img src="https://randomuser.me/api/portraits/women/60.jpg" alt="" />
                </div>
            </div>

        </header>
       
    );

}