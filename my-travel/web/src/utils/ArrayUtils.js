import ObjectUtils from "./ObjectUtils";

export function removeItemInArray( array, key, value ) {

    const index = findElementIndex( array, key, value );

    if ( index === -1 ) 
        return;

    return array.splice( index, 1 );

}

export function replaceItemInArray( array, key, newItem ) {

    const value = newItem[key];

    const index = findElementIndex( array, key, value );

    if ( index === -1 ) 
        return;

    return array.splice( index, 1, newItem  );

}

export function findElementIndex( array, key, value ) {

    return array.findIndex( ( element ) => {

        return element[ key ] === value;

    });

}

export function findIndex( array, value ) {

    return array.findIndex( element => {

        return element === value;

    });

}

export function findElement( array, key, value ){

    return array.find( ( element ) => {

        let el = null;

        if ( element[key] === value ) {
            el = element;
            return el;
        }

        return el;

    });

} 

export function findElementByProps( array, props, values ) {   

    let equalProps = 0;
    let elements    = [];
    const qtyProps = props.length;    

    array.forEach( element => {
              
        for ( let i = 0; i <= props.length -1; i++ ) {

            const prop = props[i];
            const value = values[i];                      

            if ( element[ prop ] === value ) {

                equalProps = equalProps + 1;                
                
                if ( qtyProps === equalProps ) {

                    elements.push( element );
                    equalProps = 0;                   

                }

            }
            
        }        

    });

    return elements;

} 

export function filterElementsByProps( array, props, values ) {
   
    let elements    = [];
    const qtyProps = props.length;    

    array.forEach( element => {

        let equalProps = 0;
              
        for ( let i = 0; i <= props.length -1; i++ ) {

            const prop   = props[i];
            const value  = values[i]; 
            const eValue = ObjectUtils.getPropertyValue( element, prop ); 

            if ( eValue === undefined ) continue;

            let found = false;

            switch ( typeof eValue ) {

                case 'string' : found = eValue.toLowerCase().indexOf( value.toLowerCase() ) >= 0;
                    break;

                case 'number' : found = eValue.toString().toLowerCase().indexOf( value.toString().toLowerCase() ) >= 0;
                    break;
            
                default:
                    found = eValue === value;
                    break;
            }
            
            if ( found === true ) {

                equalProps = equalProps + 1;                
                
                if ( qtyProps === equalProps ) {

                    elements.push( element );               

                }

            }
            
        }        

    });

    return elements;

}

export function findObjectIndex( array, object ) {

    return array.findIndex( ( element ) => {

        return element === object;

    });

}

export function removeObject( array, object ) {

    const index = findObjectIndex( array, object );

    if ( index === -1 ) 
        return;

    return array.splice( index, 1 );

}

export function filterElement( array, object ) {

    return array.filter( ( element ) => {

        let found = false;
        const props = Object.keys( element );

        for ( var i = 0; i <= props.length -1; i++ ) {

            const propName = props[ i ];

            if ( propName === '__v' ) continue;

            const elePropValue = element[ propName ];
            const objPropValue = object[ propName ] ;

            if ( ( elePropValue !== undefined && elePropValue !== null ) &&
                 ( objPropValue !== undefined && objPropValue !== null ) ) {

                switch ( typeof elePropValue ) {

                    case 'string' : found = elePropValue.toLowerCase().indexOf( objPropValue.toLowerCase() ) >= 0;
                        break;

                    case 'number' : found = elePropValue.toString().toLowerCase().indexOf( objPropValue.toString().toLowerCase() ) >= 0;
                        break;
                
                    default:
                        found = elePropValue === objPropValue;
                        break;
                }

                if ( found === false ) break;

            }

        }

        return found;

    });

}