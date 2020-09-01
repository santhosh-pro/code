import { SpecView, SpecViewType } from "./SpecView";
import { findElement  } from '../../utils/ArrayUtils';
import { SpecDataView } from "./SpecDataView";

export const LayoutType = {
    SINGLE: 1,
    DUPLE: 2,
    TRIPLE: 3,
    QUADRUPLE: 4,
    INLINE: 0,
}

export class SpecViewLayout extends SpecView {

    constructor ( specDTV = undefined ) {

        if ( specDTV ) {

            super( specDTV.objectName, SpecViewType.LAYOUT );

            this.name = specDTV.objectName;
            this.objectName = specDTV.objectName;
            this.specDTV = specDTV;
            //this.ObjectPropList = propList; 
            this.title = specDTV.title ? specDTV.title : specDTV.objectName;

        } else {

            super( '', SpecViewType.LAYOUT );

        }

        this.layoutType = LayoutType.SINGLE;
        this.headerVisible = true;
        this.specViews = [];

    }

    findLayout = objectName => {

        return findElement( this.specViews, 'name', objectName );

    }

    addLayout = ( layout, headerVisible = true ) => {

        const isLayout = ( ( layout instanceof SpecViewLayout ) === true );
       
        if ( isLayout ) {

            layout.headerVisible = headerVisible;
            this.specViews.push( layout );

        } else {

            throw new Error( `addDataView expects to receive SpecViewLayout.` );

        }

    }

    addDataView = dataView => {

        const isSpecDTV = ( ( dataView instanceof SpecDataView ) === true );
       
        if ( isSpecDTV  ) {

            this.specViews.push( dataView );

        } else {

            throw new Error( `addDataView expects to receive SpecDataView` );

        }

    }    

}