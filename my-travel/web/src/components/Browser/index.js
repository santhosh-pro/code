import React, { useState, useEffect, useRef, useCallback } from 'react';
import DataGrid from '../DataGrid';
import { get } from '../../service/api';
import ObjectUtils from '../../utils/ObjectUtils';
import { withRouter } from 'react-router-dom';
import { ButtonFactory } from '../Button';

function Browser( props ) {

    const { urn, keyProps, specView } = props;
    const [ data, setData ] = useState([]);
    const [ keyProp, setKeyProp ] = useState();

    const customActions = useRef( props.customActions );
    const specColumns = useRef([]);

    const [ actions, setActions ] = useState(undefined);

	useEffect( () => {


		const fetchData = async () => {

            const response = await get( urn );
       
			let data = [];

			if ( response ) {
				data = response.data;
			}

            setData( data );
            setKeyProp( getKey );

		}

        fetchData ();

    }, [ urn ] );


    const setupActions = useCallback( () => {

        const actions = [ 
            { handler: handleClickEdit, className : "", iconName: "edit" },
            { handler: handleClickDelete, className : "", iconName: "delete" }
        ];

        if ( customActions.current ) {

            for ( let i = 0; i < customActions.current.length; i++) {

                const customAction = customActions.current[ i ];

                actions.push( customAction );

            }

        }

        setActions( actions );

    }, [customActions]);


    const setupColumns = useCallback( () => {

        const svOProps = specView.svOProps;

        const createSpecColumn = ( name, title, dataType, path, idData = '', idTitle = '' ) => {
            return { 
                name: name, 
                title: title,
                dataType: dataType,
                idData: idData,
                idTitle: idTitle,
                path: path 
            };
        }

        for ( let i = 0; i < svOProps.length; i++) {
    
            const prop = svOProps[ i ];

            const specColumn = createSpecColumn( prop.name, prop.label, prop.dataType, prop.path );
            
            specColumns.current.push( specColumn );
    
        }

    },[specView.svOProps]);


    useEffect( () => {

        setupColumns();
        setupActions();

    },[setupColumns,setupActions]);

    const getKey = ( item ) => {

        let key = '';
        let value = '';
        let prop = '';

        if ( keyProps && Array.isArray( keyProps ) ) {

            for ( let i = 0; i <= keyProps.length -1; i ++  ) {

                prop = keyProps[ i ];
                value = ObjectUtils.getPropertyValue( item, prop );
                key += `${value}`

            }

        } else {

            throw new Error( 'Inválid key prop' );
        }

        return key;

    }


    const handleClickEdit = ( event, item ) => {
        
        const keyProp = getKey( item );
        //const id = ObjectUtils.getPropertyValue( item, keyProp );
        props.history.push( `/${urn}/${keyProp}` );

    }


    const handleClickDelete = ( event, item ) => {

        const keyProp = getKey( item );
        const id = ObjectUtils.getPropertyValue( item, keyProp );

        alert( id );

    }
    
    const handleClickNew = event => {

        props.history.push(`/${urn}/new`);

    }

    const handleClickRefresh = async ( handler, className, iconName, param ) => {

        const response = await get( urn );
       
			let data = [];

			if ( response ) {
				data = response.data;
			}

			setData( data );

    }

    
   
    return (
        <div className="browser" >
            <div className="common-header">
                <label>
                    {props.title}
                </label>
            </div>
            <div className="toolbar-container">
                <div className="toolbar-buttons">
                {
                    createBtnAction( handleClickNew, '', 'add', null )
                }
                {
                    createBtnAction( handleClickDelete, '', 'delete', null )
                }
                {
                    createBtnAction( handleClickRefresh, '', 'refresh', null )
                }
                </div>
            </div>
            <DataGrid 
                data={data}
                keyProp={keyProp}
                specColumns={specColumns.current}
                actions={actions}
                showTitle={true}
            />
        </div>
    )

}

export default withRouter( Browser );


const createBtnAction = ( handler, className, iconName, param ) => {

    if ( handler )
        return ButtonFactory( 'normal', className, () => handler( handler, param ), iconName );
    else
        return undefined;

}