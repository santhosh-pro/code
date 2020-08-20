import React from 'react';

import facebookIcon from '../../assets/image/icon/facebook.svg';
import instagramIcon from '../../assets/image/icon/instagram.svg';
import linkedinIcon from '../../assets/image/icon/linkedin.svg';

import './styles.scss';

export default function SocialNet () {

    return (

        <div className="social-network-content">
            <img src={facebookIcon} alt="Facebook" />
            <img src={instagramIcon} alt="Instagran" />
            <img src={linkedinIcon} alt="Linkedin" />
        </div>

    );

}