import { SpecView, SpecViewType } from "./SpecView";

export const ObjectPropertyType = {
    OBJECT: 'object',
    LIST: 'list',
    COMMON: 'common',
    GRID: 'grid'
}


export class SpecViewObjectProperty extends SpecView {

    constructor( name, path, label, dataType, propertyType, isRequired = false, minLength = 2, maxLength = 100 ) {

        super( name, SpecViewType.PROPERTY );
        
        this.name = name;
        this.label = label ? label : name ;
        this.path = path;
        this.dataType = dataType;
        this.propertyType = propertyType;
        this.specDTVObject = undefined;
        this.isRequired = isRequired;
        this.order = 0;   

        this.onChange = undefined;  
        this.onBeforeChange = undefined;
        this.onAfterChange = undefined; 

        this.onBeforeUpdateState = undefined;
        this.onAfterUpdateState = undefined;

        this.onInput = undefined;  
        this.onBeforeInput = undefined;
        this.onAfterInput = undefined; 

        this.onFocus = undefined;  
        this.onBeforeFocus = undefined;
        this.onAfterFocus = undefined;

        this.onBlur = undefined;
        this.onBeforeBlur = undefined;
        this.onAfterBlur = undefined;

    }

}

export class SpecViewObjectPropertyString extends SpecViewObjectProperty {

    constructor( name, path, label, isRequired, minLength = 2, maxLength = 100 ) {

        super( name, path, label, 'string', ObjectPropertyType.COMMON,  isRequired );

        this.minLength = minLength;
        this.maxLength = maxLength;   


    }

}

export class SpecViewObjectPropertyStringMask extends SpecViewObjectProperty {

    constructor( name, path, label, mask, isRequired, minLength = 2, maxLength = 100 ) {

        super( name, path, label, 'string', ObjectPropertyType.COMMON,  isRequired );

        this.minLength = minLength;
        this.maxLength = maxLength; 
        this.mask      = mask;  

    }

}

export class SpecViewObjectPropertyStaticText extends SpecViewObjectProperty {

    constructor( name, path, label, isRequired, minLength = 2, maxLength = 100 ) {

        super( name, path, label, 'static-text', ObjectPropertyType.COMMON,  isRequired );

        this.minLength = minLength;
        this.maxLength = maxLength;   


    }

}

export class SpecViewObjectPropertyStaticNumber extends SpecViewObjectProperty {

    constructor( name, path, label, isRequired, minLength = 2, maxLength = 100 ) {

        super( name, path, label, 'static-number', ObjectPropertyType.COMMON,  isRequired );

        this.minLength = minLength;
        this.maxLength = maxLength; 

    }

}

export class SpecViewObjectPropertyText extends SpecViewObjectProperty {

    constructor( name, path, label, isRequired, minLength = 2, maxLength = 100 ) {

        super( name, path, label, 'text', ObjectPropertyType.COMMON,  isRequired );

        this.minLength = minLength;
        this.maxLength = maxLength;   


    }

}


export class SpecViewObjectPropertyNumber extends SpecViewObjectProperty {

    constructor( name, path, label, isRequired, minLength = 1, maxLength = 100 ) {

        super( name, path, label, 'number', ObjectPropertyType.COMMON,  isRequired );

        this.minLength = minLength;
        this.maxLength = maxLength;   


    }

}

export class SpecViewObjectPropertyObjectRef extends SpecViewObjectProperty {

    constructor( name, path, label, urn, key, description, isRequired )  {

        super( name, path, label, 'objectRef', ObjectPropertyType.COMMON, isRequired );

        this.urn = urn;
        this.key = key;
        this.description = description;
       
    }

}

export class SpecViewObjectPropertyLocate extends SpecViewObjectProperty {

    constructor( name, path, label, urn, key, codeInSchema, codeInObject, codeDataType, description, params, pathCmpSubst, isRequired )  {

        super( name, path, label, 'locate', ObjectPropertyType.COMMON, isRequired );

        this.urn = urn;
        this.key = key;        
        this.codeInSchema = codeInSchema;
        this.codeInObject = codeInObject;
        this.description = description;
        this.pathCmpSubst = pathCmpSubst;
        this.codeDataType = codeDataType;
        this.params = params;
       
    }

}

export class SpecViewObjectPropertyInputSearch extends SpecViewObjectProperty {

    constructor( name, path, label, urn, key, fieldLookup, description, fieldsReturn, isRequired )  {

        super( name, path, label, 'input-search', ObjectPropertyType.COMMON, isRequired );

        this.urn = urn;
        this.key = key;
        this.description = description;
        this.fieldsReturn = fieldsReturn;
        this.fieldLookup = fieldLookup;
       
    }

}

export class SpecViewObjectPropertyLookupGrid extends SpecViewObjectProperty {

    constructor( name, path, label, urn, key, description, isRequired )  {

        super( name, path, label, 'lookupGrid', ObjectPropertyType.COMMON, isRequired );

        this.urn = urn;
        this.key = key;
        this.description = description;
       
    }

}


export class SpecViewObjectPropertyDate extends SpecViewObjectProperty {

    constructor( name, path, label, isRequired ) {

        super( name, path, label, 'date', ObjectPropertyType.COMMON,  isRequired );

    }

}

export class SpecViewObjectPropertyDateTime extends SpecViewObjectProperty {

    constructor( name, path, label, isRequired ) {

        super( name, path, label, 'datetime', ObjectPropertyType.COMMON,  isRequired );

    }

}

export class SpecViewObjectPropertyBoolean extends SpecViewObjectProperty {

    constructor( name, path, label = '' ) {

        super( name, path, label, 'boolean', ObjectPropertyType.COMMON );

    }

}

export class SpecViewObjectPropertyEnum extends SpecViewObjectProperty {

    constructor( name, path, label, values, isRequired ) {
        
        super( name, path, label, 'enum', ObjectPropertyType.COMMON, isRequired );

        this.values = values;

    }

}

export class SpecViewObjectPropertyMultiSelect extends SpecViewObjectProperty {

    constructor( name, path, label, values, valuesDefault, isRequired ) {
        
        super( name, path, label, 'multi-select', ObjectPropertyType.COMMON, isRequired );

        this.values = values;
        this.valuesDefault = valuesDefault;

    }

}

export class SpecViewObjectPropertyColor extends SpecViewObjectProperty {

    constructor( name, path, label, values, isRequired ) {

        super( name, path, label, 'color-palette', ObjectPropertyType.COMMON,  isRequired );

        this.values = values;

    }

}




export class SpecViewObjectPropertyObject extends SpecViewObjectProperty {
    
    constructor( name, path, label, specDTVObject, isRequired = false ) {

        super( name, path, label, 'object', ObjectPropertyType.OBJECT, isRequired );

        this.specDTVObject = specDTVObject;

    }

}

export class SpecViewObjectPropertyObjectList extends SpecViewObjectProperty {

    constructor( name, path, label, specDTVObject, isRequired = false ) {

        super( name, path, label, 'object', ObjectPropertyType.LIST, isRequired );

        this.specDTVObject = specDTVObject;

    }

}


export class SpecViewObjectPropertyObjectGrid extends SpecViewObjectProperty {

    constructor( name, path, label, propDesc, labelDesc, itemName, specDTVObject, isRequired = false ) {

        super( name, path, label, 'object', ObjectPropertyType.GRID, isRequired );

        this.specDTVObject = specDTVObject;
        this.propDesc = propDesc;
        this.labelDesc = labelDesc ? labelDesc : propDesc;
        this.itemName = itemName;

    }

}

export class SpecViewObjectPropertyObjectLink extends SpecViewObjectProperty {

    constructor( name, path, link, label, specDTVObject, objectPropertyType, isRequired = false ) {

        super( name, path, label, 'object-link', objectPropertyType, isRequired );

        this.specDTVObject = specDTVObject;
        this.link = link;

    }

}