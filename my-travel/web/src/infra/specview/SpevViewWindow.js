import { SpecView, SpecViewType } from "./SpecView";

export default class SpecViewWindow extends SpecView {

    constructor( name, SVLayouts, data ) {

        super( name, SpecViewType.WINDOW );
        this.SVLayouts = SVLayouts;
        this.data = data;

    }

}