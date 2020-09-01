import { SpecView, SpecViewType } from './SpecView';

export const DataType = {
    string: 'string',
    number: 'number',
    boolean: 'boolean',
    date: 'date',
    datetime: 'datetime',
}

export class SpecViewProp extends SpecView {

    constructor( name, label, type, isRequired, minLength, maxLength ) {

        super( name, SpecViewType.PROPERTY  );

        this.name = name;
        this.label = label;
        this.type = type;
        this.isRequired = isRequired;
        this.minLength = minLength;
        this.maxLength = maxLength;   
        this.order = 0;   
        this.onChange = undefined;
        this.onInput = undefined;
        this.onBlur = undefined;
        this.onFocus = undefined;

    }

}

export class SpecViewPropList extends SpecView {

    constructor( name ){
        super( name, SpecViewType.PROPERTY_LIST )
        this.list = [];
    }

    push(specViewProp) {
        specViewProp.order = this.list.length;
        this.list.push( specViewProp );
    }

    put(index) {
        if ( this.list.length > 0 )
            return this.list[ index ];
    }

    size() {
        return this.list.length;
    }

    propByName(name) {

        if ( this.list.length === 0 ) return;

        function isName( element, index, array ) {
            if (element.name === name ) return element;
        }

        return this.list.find(isName);
        
    }

    valueByName(name) {

        const prop = this.propByName(name);
        if ( !prop ) return undefined;

        return prop.value;

    }

}