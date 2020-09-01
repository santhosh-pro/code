import React, { useEffect, useState } from 'react';

import { ObjectView } from './styles';
import { ObjectContent } from './styles';
import { Layout } from './styles';
import { LayoutTitle } from './styles';
import { LayoutContent } from './styles';
import { ObjectLayout } from './styles';
import { Input, InputData, InputLabel } from './styles';
import { ObjectEditor } from './styles';
import { ObjectEditorHeader } from './styles';
import { ToolBarContainer, ToolBarButtons } from './styles';
import { ObjectList, ObjectListMaster, ObjectListDetail, ObjectListToolBar, ObjectListContent, ObjectListSeparator } from './styles';

import WInput from '../../components/Input';

import { ButtonFactory } from '../../components/Button';
import { findObjectIndex } from '../../utils/ArrayUtils';
import ObjectUtils from '../../utils/ObjectUtils';
import DataGrid from '../../components/DataGrid';
import { get } from '../../service/api';

function EditObject( props ) {

    const [ dataObject, setDataObject ] = useState(null);

    useEffect( () => {

        const fecth = async () => {

            const response = await get( 'actor/1' );

            if ( response ) {

                setDataObject( response.data );

            }

        }

        fecth();

    }, []);

    const handleClickBack = event => {

       

    }

    const handleClickSave = event => {

       console.log( dataObject );

    }

    /**
     * Updates the state of the object being used in the component.
     * @param {*} e - HTML DOM Events
     * @param {*} currentObject - Current object that has changed
     */

    const updateState = ( e, currentObject ) => {

        try {

            const value = normalizeValue( e.target );
            const path = e.target.id;

            let newDataObject = Object.assign( {}, currentObject );

            ObjectUtils.setPropertyValue( newDataObject, e.target.id, value );

            setDataObject( newDataObject );

        } catch ( err ) {

            throw err;

        }

    }

    const handleChange = ( e, newValue ) => {

        e.persist();

        updateState( e, dataObject );

    }

    // ObjectList

    const [ address, setAddress ] = useState(null);
    const [ index, setIndex ] = useState(0);

    const handleSelect = ( ...params ) => {

        setAddress( params[ 0 ] );
        setIndex( params[ 1 ]);

    }

    const addItemList = () => {

        const address =  { 
            id: 0, 
            street : '', 
            number : '' 
        }

        let newDataObject = Object.assign( {}, dataObject );

        newDataObject.person.addresses.unshift( address );

        setDataObject( newDataObject );

        const element = document.getElementById( `actor.person.addresses.${0}.address` );
    
        setIndex( 0 );
        selectRow( 0 );
        
        if ( element )
            element.focus();

    }

    const removeItemList = () => {

        if ( index >= 0 ) {

            let newDataObject = Object.assign( {}, dataObject );

            newDataObject.person.addresses.splice( index, 1 );

            setDataObject( newDataObject );

            if ( newDataObject.person.addresses.length > 0 ) {

                if ( index > 0 )
                    setIndex( index - 1 );

            }

        }

    }

    const evenLineColor = '#fff9f9';
    const oddLineColor = '#ffffff';
    const selectedLineColor = '#ffff00';

    const selectRow = rowNumber =>  {

        let isRowEven = false;
    
        var htmlCollection = document.getElementsByClassName('row-data-data-grid');

        for ( let i = 0; i < htmlCollection.length; i++ ) {

            let row = htmlCollection[ i ];

            isRowEven = i % 2 === 0; // check if the index is an even number

            if ( isRowEven ) 
                row.style.background = evenLineColor;
            else    
                row.style.background = oddLineColor;

            if ( rowNumber === i )            
                row.style.background = selectedLineColor;
            
        } 

    }

    //****** */

    return (
            <ObjectEditor>
                <ObjectEditorHeader>
                    <label>
                        Cliente
                    </label>
                </ObjectEditorHeader>

                <ToolBarContainer>
                    <ToolBarButtons>                    
                        {
                            createBtnAction( handleClickBack, '', 'arrow-back', null )
                        }               
                        {
                            createBtnAction( handleClickSave, '', 'save', null )
                        }
                    </ToolBarButtons>
                </ToolBarContainer>
            
                <ObjectView>
                    <ObjectContent>
                        <LayoutContent columns={2}>
                            <Layout>
                                <LayoutTitle>
                                    <label>Dados Pessoais</label>
                                    <hr/>
                                </LayoutTitle>
                                <ObjectLayout columns={2}>  
                                    { dataObject && 
                                        <>  
                                            <WInput
                                                value={dataObject.person.federalDoc}
                                                spec={ { path : 'actor.person.federalDoc', label : 'CNPJ'  } }
                                                onChange={handleChange}
                                            />
                                            <WInput
                                                value={dataObject.person.fullName}
                                                spec={ { path : 'actor.person.fullName', label : 'Razão Social'  } }
                                                onUpdateState={handleChange}
                                            />
                                            {/*
                                            <Input>
                                                <InputLabel htmlFor="actor.person.fullName">
                                                    Razão Social
                                                </InputLabel>
                                                <InputData
                                                    id="actor.person.fullName"
                                                    value={dataObject.person.fullName}
                                                    onChange={(e)=>handleChange(e)}
                                                />
                                            </Input>
                                            <Input>
                                                <InputLabel htmlFor="actor.person.phone.residencial" >
                                                    CNPJ
                                                </InputLabel>
                                                <InputData
                                                    id="actor.person.federalDoc"
                                                    value={dataObject.person.federalDoc}
                                                    onChange={(e)=>handleChange(e)}
                                                />
                                            </Input>
                                            <Input>
                                                <InputLabel htmlFor="actor.person.stateDoc">
                                                    RG
                                                </InputLabel>
                                                <InputData
                                                    id="actor.person.stateDoc"
                                                    value={dataObject.person.stateDoc}
                                                />
                                            </Input>
                                            */}
                                        </>
                                    }
                                </ObjectLayout>
                            </Layout>
                            <Layout>
                                <LayoutTitle>
                                    <label>Dados</label>
                                    <hr/>
                                </LayoutTitle>
                                <ObjectLayout columns={1}>   
                                { dataObject && 
                                        <>  
                                            {/*<Input>
                                                <InputLabel htmlFor="actor.person.fullName">
                                                    Razão Social
                                                </InputLabel>
                                                <InputData
                                                    id="actor.person.fullName"
                                                    value={dataObject.person.fullName}
                                                />
                                            </Input>
                                            <Input>
                                                <InputLabel htmlFor="actor.person.federalDoc" >
                                                    CNPJ
                                                </InputLabel>
                                                <InputData
                                                    id="actor.person.federalDoc"
                                                    value={dataObject.person.federalDoc}
                                                />
                                            </Input>
                                            <Input>
                                                <InputLabel htmlFor="actor.person.stateDoc">
                                                    RG
                                                </InputLabel>
                                                <InputData
                                                    id="actor.person.stateDoc"
                                                    value={dataObject.person.stateDoc}
                                                />
                                            </Input>*/}
                                        </>
                                    }
                                </ObjectLayout>
                            </Layout>
                        </LayoutContent>
                    
                        <LayoutContent columns={1} >
                            <Layout>
                                <LayoutTitle>
                                    <label>Dados Pessoais</label>
                                    <hr/>
                                </LayoutTitle>
                                <ObjectLayout columns={2} color="white" >   
                                { dataObject && 
                                        <>  
                                            {/*<Input>
                                                <InputLabel htmlFor="actor.person.fullName">
                                                    Razão Social
                                                </InputLabel>
                                                <InputData
                                                    id="actor.person.fullName"
                                                    value={dataObject.person.fullName}
                                                />
                                            </Input>
                                            <Input>
                                                <InputLabel htmlFor="actor.person.federalDoc" >
                                                    CNPJ
                                                </InputLabel>
                                                <InputData
                                                    id="actor.person.federalDoc"
                                                    value={dataObject.person.federalDoc}
                                                />
                                            </Input>
                                            <Input>
                                                <InputLabel htmlFor="actor.person.stateDoc">
                                                    RG
                                                </InputLabel>
                                                <InputData
                                                    id="actor.person.stateDoc"
                                                    value={dataObject.person.stateDoc}
                                                />
                                            </Input>*/}
                                        </>
                                    }
                                </ObjectLayout>
                            </Layout>
                        </LayoutContent> 

                        <LayoutContent  columns={1}>
                            <Layout>
                                <LayoutTitle>
                                    <label>Endereços</label>
                                    <hr/>
                                </LayoutTitle>
                                <ObjectList columns={1} color="black" >
                                    <ObjectListToolBar>
                                        <ToolBarButtons>                    
                                        {
                                            createBtnAction( addItemList, '', 'add-black', null )
                                        }               
                                        {
                                            createBtnAction( removeItemList, '', 'remove-black', null )
                                        }
                                        </ToolBarButtons>

                                    </ObjectListToolBar>
                                    <ObjectListContent>
                                        <ObjectListMaster>
                                            { dataObject &&
                                            <DataGrid 
                                                data={dataObject.person.addresses}
                                                keyProp={'id'}
                                                specColumns={[{
                                                        name: "street", 
                                                        title: "",
                                                        dataType: "string",
                                                        path: "address.street", 
                                                        idData: "",
                                                        idTitle: ""
                                                }]}
                                                onAfterSelect={handleSelect}
                                                showTitle={false}
                                                //actions={actions}
                                            />}
                                        </ObjectListMaster>
                                        <ObjectListSeparator>
                                                <div/>
                                        </ObjectListSeparator>
                                        <ObjectListDetail>
                                            <Layout>
                                                <ObjectLayout columns={2} color="white" >   
                                                { dataObject && dataObject.person.addresses.length > 0 &&
                                                        <>  
                                                            <Input>
                                                                <InputLabel htmlFor={`actor.person.addresses.${index}.street`}>
                                                                    Rua
                                                                </InputLabel>
                                                                <InputData
                                                                    id={`actor.person.addresses.${index}.street`}
                                                                    value={dataObject.person.addresses[index].street}
                                                                    onChange={(e)=>handleChange(e)}
                                                                />
                                                            </Input>
                                                            <Input>
                                                                <InputLabel htmlFor={`actor.person.addresses.${index}.number`} >
                                                                    Number
                                                                </InputLabel>
                                                                <InputData
                                                                    id={`actor.person.addresses.${index}.number`}
                                                                    value={dataObject.person.addresses[index].number}
                                                                    onChange={(e)=>handleChange(e)}
                                                                />
                                                            </Input>     
                                                                                                                                
                                                        </>
                                                }
                                                </ObjectLayout>
                                            </Layout>
                                        </ObjectListDetail>
                                    </ObjectListContent>
                                   
                                </ObjectList>
                            </Layout>
                        </LayoutContent>

                    </ObjectContent>
                </ObjectView>
            </ObjectEditor>
    )



}

export default EditObject;


const createBtnAction = ( handler, className, iconName, param ) => {

    if ( handler )
        return ButtonFactory( 'normal', className, () => handler( handler, param ), iconName );
    else
        return undefined;

}

const normalizeValue = ( field ) => {

    var value = null;
   
    switch ( field.type ) {

        case 'number':

            value = field.value;

            if ( Number.isInteger( value ) ) {

                value = parseInt( value, 0 );

            } else {

                value = parseFloat( value );

            }

            break;

        case 'checkbox':
            value = field.checked;
            break;
        default:
            value = field.value;
            break;

    }

    return value;

}

const getPaths = ( field ) => {

    const id = field.id;

    if ( id.length === 0 ) {
        throw new Error( 
            'HTML element without id. It will not be possible to update the state of this property. ' 
        );
    }

    return id.split( '.' ); 

}