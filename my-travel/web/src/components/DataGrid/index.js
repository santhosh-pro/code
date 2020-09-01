import React, { useRef } from 'react';
import { ButtonFactory } from '../Button';
import ObjectUtils from '../../utils/ObjectUtils';

export default function DataGrid ( props ) {

    const { data, keyProp, specColumns, actions, showTitle } = props;
    const { onBeforeSelect, onAfterSelect } = props;

    const selectedRowData = useRef();

    const selectRowData = ( rowData, index ) => {

        if ( onBeforeSelect )
            onBeforeSelect( rowData, index );

        selectedRowData.current = rowData;

        if ( onAfterSelect )
            onAfterSelect( rowData, index );

    }

    const columnHeadingFactory = () => {

        let specColumn = undefined;
        let columnHeading = [];

        for ( let i = 0; i <= specColumns.length -1; i++ ) {

            specColumn = specColumns[i];           

            columnHeading.push(
                <th key={specColumn.name}>
                    {specColumn.title}
                </th>
            );     

        } 
        
        return columnHeading;
        
    }

    const rowDataFactory = item => {

        let specColumn = undefined;
        let cols = [];

        for ( let i = 0; i <= specColumns.length -1; i++ ) {

            specColumn = specColumns[i];

            const value = ObjectUtils.getPropertyValue( item, specColumn.path );

            /* 
                verifica os tipos de dados 
                para definir o className e id diferentes
                para atribuir diferente formatação
                no css e especifidades de cada tipo de valor
            */

            if ( specColumn.dataType === 'number' ) {

                cols.push( 
                    <td 
                        key={`${i}`} >
                        { value }
                    </td>
                );   

            } else if ( specColumn.dataType === 'string' ) {

                cols.push( 
                    <td 
                        key={`${i}`} >
                        { value }
                    </td>
                );   

            } else if (  specColumn.dataType === 'datetime' ) {

                cols.push( 
                    <td 
                        key={`${i}`} >
                        { value }
                    </td>
                );   

            }  else if (  specColumn.dataType === 'date' ) {

                cols.push( 
                    <td 
                        key={`${i}`} >
                        { value }
                    </td>
                );   

            } else {

                cols.push( 
                    <td 
                        key={`${i}`} >
                        { value }
                    </td>
                ); 

            }
            
        } 

        return cols;

    }

    const handleRowClick = ( e, item, index ) => {

        selectRowData( item, index );

    } 

    const createBtnAction = ( handler, className, iconName, param ) => {

        if ( handler )
            return ButtonFactory( 'small', className, () => handler( handler, param ), iconName );
        else
            return undefined;
    
    }

    const handleMouseMove = () => {

    }

    const handleMouseUp = () => {
         
    }

    return (

        <div className="data-grid" >
            <table className="table-data-grid" nMouseMove={handleMouseMove} onMouseUp={handleMouseUp}>
                <thead>
                    {   showTitle &&
                        <tr className="header-data-grid">
                            { columnHeadingFactory() }
                            { actions && <th key="actions" className="header-col-action-data-grid">Ações</th> }
                        </tr>
                    }
                </thead>
                <tbody>
                { data &&
                    data.map( ( item, index ) => (
                        
                        <tr key={ item[ keyProp ] }
                            className="row-data-data-grid"
                            onClick={ ( e )=>handleRowClick( e, item, index )}
                        > 
                            { rowDataFactory( item ) } 

                            <td>
                             
                                <div className="data-col-action-data-grid" >
                                    { actions &&
                                        actions.map( action => (

                                            createBtnAction( action.handler, action.className, action.iconName, item )

                                        ))
                                    }
                                </div>
                                
                            </td>

                        </tr>             
                    ))
                }
                </tbody>
            </table>
        </div>

    )

}