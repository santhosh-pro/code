export default class ObjectUtils {

    static findProp = ( object, propPath ) => {

        let prop = undefined;
        let propName = '';

        if ( propPath && propPath.length > 0 ) {
    
            const propPaths = propPath.split('.');
    
            if ( propPaths.length > 0 ) {
    
                prop = object;

                for ( let i = 1; i <= propPaths.length - 1; i++ ) { 

                    propName = propPaths[ i ];

                    prop = prop[ propName ];
                    
                   if ( prop === undefined ) {
                         throw new Error( `Property ${propName} not found in object ${propPath}.`);
                   }
    
                }

            }
    
        }

        return prop;

    }

    static getLastPathName ( propPath ) {

        let propName = undefined;
        
        if ( propPath ) {

            const props = propPath.split( '.' );           
    
            if ( props.length > 1 ) {
                
                propName = props[ props.length - 1 ];

            } else {

                propName = propPath; 
                
            }

           return propName;

        }                


    }

    static getPropertyValue( object, path ) {
       
        let value = undefined;
        
        if ( path && path.length > 0 ) {

            const props = path.split( '.' );
            value = object;

            if ( !value ) return undefined;

            if ( props.length > 1 ) {
                
                let name = '';

                for ( let i = 1; i < props.length; i++ ) {

                    name = props[ i ];
                    value =  value[ name ];

                    if ( !value ) return undefined;

                    if ( Array.isArray( value ) === true ) {

                        const index = parseInt( props[ i + 1 ] );

                        let obj = value[ index ];

                        const newProps = props.slice( i+2, props.length );
                        let newPath = newProps.toString();
                        newPath = newPath.replace( ',', '.' );

                        return this.getPropertyValue( obj, newPath );
                        
                    }  else if ( typeof value === 'object' ) {

                        const newProps = props.slice( i+1, props.length );
                        let newPath = newProps.toString();
                        newPath = newPath.replace( ',', '.' );

                        this.getPropertyValue( value, newPath ); 

                    }  

                }

            } else {

                value = object[ path ]; 
                
            } 

            return value;

        }

    }

    static setPropertyValue( object, path, propValue ) {
       
        let value = undefined;
        
        if ( path && path.length > 0 ) {

            const props = path.split( '.' );
            value = object;

            if ( !value ) return undefined;

            if ( props.length > 1 ) {
                
                let name = '';

                for ( let i = 1; i < props.length; i++ ) {

                    name = props[ i ];
                    value =  value[ name ];

                    if ( Array.isArray( value ) === true ) {

                        const index = parseInt( props[ i + 1 ] );

                        let obj = value[ index ];

                        const newProps = props.slice( i+2, props.length );
                        let newPath = newProps.toString();
                        newPath = newPath.replace( ',', '.' );

                        return this.setPropertyValue( obj, newPath, propValue );
                        
                    }  else if ( typeof value === 'object' ) {

                        console.log( 'sadsads')

                        const newProps = props.slice( i+1, props.length );
                        let newPath = newProps.toString();
                        newPath = newPath.replace( ',', '.' );

                        this.setPropertyValue( value, newPath, propValue ); 

                    } else {

                        object[ name ] = propValue; 

                    }

                }
    
            } else {

                object[ path ] = propValue; 
                
            } 

        }

    }

}