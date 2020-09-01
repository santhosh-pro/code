import { 
    SpecViewObjectProperty, 
    SpecViewObjectPropertyString, 
    SpecViewObjectPropertyEnum, 
    SpecViewObjectPropertyBoolean, 
    SpecViewObjectPropertyObject,
    SpecViewObjectPropertyObjectList, 
    SpecViewObjectPropertyObjectLink, 
    SpecViewObjectPropertyObjectGrid,
    SpecViewObjectPropertyDate,
    SpecViewObjectPropertyDateTime,
    SpecViewObjectPropertyMultiSelect,
    SpecViewObjectPropertyNumber,
    SpecViewObjectPropertyObjectRef,
    SpecViewObjectPropertyText,
    SpecViewObjectPropertyColor,
    SpecViewObjectPropertyLocate,
    SpecViewObjectPropertyInputSearch,
    SpecViewObjectPropertyLookupGrid,
    SpecViewObjectPropertyStaticText,
    SpecViewObjectPropertyStaticNumber,
} from "./SpecViewObjectProp";

import { SpecViewType } from './SpecView';
import { findElement } from '../../utils/ArrayUtils';

export class SpecDataView {

    constructor( objectName, title, specViewType, path = '' ) {

        this.objectName = objectName;
        this.title = title ? title : objectName;
        this.specViewType = specViewType;
        this.links = [];
        this.svOProps =  [];
        this.path = path;

        this.onCreate = undefined;
        this.onAfterCreate = undefined;

    }

    findProp( propName ) {

        if ( propName && propName.length > 0 ) {

            return findElement( this.svOProps, 'name', propName );

        }
        
    }

    addSVObjectProp( svOProp ) {

        this.svOProps.push( svOProp );

        return svOProp;

    }

    createSVObjectProp ( 
        name, path, label, type, propertyType, isRequired = false, minlenght = 2, maxlenght = 100 
        ) {

        let svOProp = new SpecViewObjectProperty( 
            name, path, label , type, propertyType, isRequired, minlenght, maxlenght 
        );

        this.svOProps.push( svOProp );

        return svOProp;

    }   

    addString ( name, label, isRequired = false, minlenght = 2, maxlenght = 100 ) {

        const path = `${this.objectName}.${name}`;

        const names = name.split( '.' );
        const propName = names[ names.length -1 ];

        let svOProp = new SpecViewObjectPropertyString( 
            propName, path, label, isRequired, minlenght, maxlenght 
        );

        this.svOProps.push( svOProp );

        return svOProp;

    }
    
    addStringMask ( 
        name, path, label, mask, isRequired = false, minlenght = 2, maxlenght = 100
        ) {

        let svOProp = new SpecViewObjectPropertyString( 
            name, path, label, isRequired, minlenght, maxlenght 
        );

        svOProp[ 'mask' ] = mask;
        this.svOProps.push( svOProp );

        return svOProp;

    }  
    
    addFederalDoc ( name, path, label, isRequired = false ) {
       
        let svOProp = new SpecViewObjectPropertyString( 
            name, path, label, isRequired, 14, 14 
        ); 

        this.svOProps.push( svOProp );

        return svOProp;

    }

    addStaticText ( 
        name, path, label, isRequired = false, minlenght = 2, maxlenght = 100
        ) {

        let svOProp = new SpecViewObjectPropertyStaticText( 
            name, path, label, isRequired, minlenght, maxlenght 
        );

        this.svOProps.push( svOProp );

        return svOProp;

    }  

    addStaticNumber ( 
        name, path, label, isRequired = false, minlenght = 2, maxlenght = 100
        ) {

        let svOProp = new SpecViewObjectPropertyStaticNumber( 
            name, path, label, isRequired, minlenght, maxlenght 
        );

        this.svOProps.push( svOProp );

        return svOProp;

    }      

    addColor ( 
        name, path, label, values = [], isRequired = false
        ) {

        let svOProp = new SpecViewObjectPropertyColor( 
            name, path, label, values, isRequired
        );

        this.svOProps.push( svOProp );

        return svOProp;

    }      

    addText ( 
        name, path, label, isRequired = false, minlenght = 2, maxlenght = 100
        ) {

        let svOProp = new SpecViewObjectPropertyText( 
            name, path, label, isRequired, minlenght, maxlenght 
        );

        this.svOProps.push( svOProp );

        return svOProp;

    }  

    addObjectRef( 
        name, path, label, urn, key, description, isRequired = false 
        ) {

        let svOProp = new SpecViewObjectPropertyObjectRef(
            name, path, label, urn, key, description, isRequired
        );

        this.svOProps.push( svOProp );

        return svOProp;

    }

    addInputLocate( 
        name, path, label, urn, key, codeInSchema, codeInObject, codeDataType, description, params = [], pathCmpSubst, isRequired = false 
        ) {

        let svOProp = new SpecViewObjectPropertyLocate(
            name, path, label, urn, key, codeInSchema, codeInObject, codeDataType, description, params, pathCmpSubst, isRequired
        );
        
        this.svOProps.push( svOProp );

        return svOProp;

    }

    addInputSearch( 
        name, path, label, urn, key, fieldLookup, description, fieldsReturn = [], isRequired = false 
        ) {

        let svOProp = new SpecViewObjectPropertyInputSearch(
            name, path, label, urn, key, fieldLookup, description, fieldsReturn, isRequired
        );

        this.svOProps.push( svOProp );

        return svOProp;

    }

    addLookupGrid ( 
        name, path, label, isRequired = false, minlenght = 2, maxlenght = 100
        ) {

        let svOProp = new SpecViewObjectPropertyLookupGrid( 
            name, path, label, isRequired, minlenght, maxlenght 
        );

        this.svOProps.push( svOProp );

        return svOProp;

    }       

    addNumber ( 
        name, path, label, isRequired = false, minlenght = 2, maxlenght = 100
        ) {

        let svOProp = new SpecViewObjectPropertyNumber( 
            name, path, label, isRequired, minlenght, maxlenght 
        );

        this.svOProps.push( svOProp );

        return svOProp;

    }      

    addDate ( 
        name, path, label, isRequired = false
        ) {

        let svOProp = new SpecViewObjectPropertyDate( 
            name, path, label, isRequired
        );

        this.svOProps.push( svOProp );

        return svOProp;

    }    
    
    addDateTime ( 
        name, path, label, isRequired = false
        ) {

        let svOProp = new SpecViewObjectPropertyDateTime( 
            name, path, label, isRequired
        );

        this.svOProps.push( svOProp );

        return svOProp;

    }        

    addBoolean ( 
        name, path, label = ''
        ) {

        let svOProp = new SpecViewObjectPropertyBoolean( 
            name, path, label 
        );

        this.svOProps.push( svOProp );

        return svOProp;

    }     

    addEnum ( 
        name, path, label, values, isRequired = false 
        ) {

        let svOProp = new SpecViewObjectPropertyEnum( 
            name, path, label, values, isRequired
        );

        this.svOProps.push( svOProp );

        return svOProp;

    }      

    addMultiSelect(
        name, path, label, values, valuesDefault =[], isRequired = false 
        ) {

        let svOProp = new SpecViewObjectPropertyMultiSelect( 
            name, path, label, values, valuesDefault, isRequired
        );

        this.svOProps.push( svOProp );

        return svOProp;

    }
        
    addObject( 
        name, path, label, specDTVObject, isRequired = false 
    ) {

        let svOProp = new SpecViewObjectPropertyObject( 
            name, path, label, specDTVObject, isRequired
        );

        this.svOProps.push( svOProp );
        
        return svOProp;
        
    }

    addObjectList( 
        name, path, label, specDTVObject, isRequired = false  
    ) {

        let svOProp = new SpecViewObjectPropertyObjectList( 
            name, path, label, specDTVObject, isRequired
        );

        this.svOProps.push( svOProp ); 
        
        return svOProp;
        
    }

    addObjectGrid( 
        name, path, label, propDesc, labelDesc, itemName, specDTVObject, isRequired = false 
    ) {

        let svOProp = new SpecViewObjectPropertyObjectGrid( 
            name, path, label, propDesc, labelDesc, itemName, specDTVObject, isRequired
        );

        this.svOProps.push( svOProp ); 
        
        return svOProp;
        
    }    


    addObjectLink(
        name, path, linkName, label, specDTVObject, objectPropertyType, isRequired = false 
    ) {

        let svOProp = new SpecViewObjectPropertyObjectLink( 
            name, path, linkName, label, specDTVObject, objectPropertyType, isRequired
        );

        const link = {
            linkName: linkName,
            specDTVObject: specDTVObject,
        }

        this.svOProps.push( svOProp );
        this.links.push( link );

        return svOProp;

    }

}

export class SpecDataViewList extends SpecDataView {

    constructor( objectName, title, itemName, propDesc, labelDesc, path, required = true, noDuplicateFields = [], editable = true ) {

        super( objectName, title, SpecViewType.LIST, path  );

        this.itemName  = itemName;
        this.labelDesc = labelDesc ? labelDesc : labelDesc;
        this.propDesc  = propDesc;
        this.editable  = editable;
        this.required  = required;
        this.noDuplicateFields = noDuplicateFields;

        this.onBeforeCreateItem = undefined;
        this.onCreateItem = undefined;
        this.onAfterCreateItem = undefined;

        this.onBeforeSelectItem = undefined;
        this.onSelectItem = undefined;
        this.onAfterSelectItem = undefined;

        this.onBeforeFocusItem = undefined;
        this.onFocusItem = undefined;
        this.onAfterFocusItem = undefined;

    }

}

export class SpecDataViewGrid extends SpecDataView {

    constructor( objectName, title, specViewType, itemName, propDesc, labelDesc, path, editable = true ) {

        super( objectName, title, specViewType, path  );

        this.itemName  = itemName;
        this.labelDesc = labelDesc ? labelDesc : labelDesc;
        this.propDesc  = propDesc;
        this.editable  = editable;

    }

}

