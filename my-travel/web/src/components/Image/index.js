import React from 'react';

export default function Image( props ) {

    const { pathImage } = props;

    return (

        <img src={pathImage} alt="" />

    );

}