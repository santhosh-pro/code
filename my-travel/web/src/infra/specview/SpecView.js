export const SpecViewType = {
    WINDOW: 'window',
    LAYOUT: 'layout',
    LAYOUT_LIST: 'layout_list',
    PROPERTY: 'property',
    PROPERTY_LIST: 'property_list',
    VIEW_LIST: 'view-list',
    DATA_VIEW: 'data-view',

    OBJECT: 'object',
    OBJECT_PROPERTY: 'object_property',
    LIST: 'list',
    GRID: 'grid'
}


export class SpecView {

    constructor( specViewName = '', specViewType ) {

        this.specViewName = specViewName;
        this.specViewType = specViewType;
   
    }

}

export class SpecViewList extends SpecView {

    constructor( name ) {

        super( name, SpecViewType.VIEW_LIST )
        this.list = [];

    }

    push( specView )  {

        specView.order = this.list.length;

        this.list.push(specView);
   
    }

    put( index ) {

        if ( this.list.length > 0 )
            return this.list[ index ];
    }

    size() {

        return this.list.length;
    
    }

    specByName( name ) {

        if ( this.list.length === 0 ) return;

        function isName( element, index, array ) {

            if ( element.name === name ) return element;

        }

        return this.list.find(isName);
        
    }

}