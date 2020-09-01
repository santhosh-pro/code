import Add24 from '../image/24/add-circle-outline-black.png';
//import Add24 from '../image/24/Add.png';
import Back24 from '../image/24/arrow-back-black.png';
import Cancel24  from '../image/24/Cancel-bw.png';
import Edit24 from '../image/24/create-black.png';
//import Edit24 from '../image/24/Modify.png';
import Delete24 from '../image/24/remove_circle_outline_black.png';
//import Delete24 from '../image/24/delete.png';
import Exit24 from '../image/24/Exit.png';
import Info24 from '../image/24/Info.png';
import Load24 from '../image/24/Load.png';
import Refresh24 from '../image/24/refresh-black.png';
import Next24 from '../image/24/Next.png';
import Print24 from '../image/24/Print.png';
import Profile24 from '../image/24/Profile.png';
import Save24 from '../image/24/save-black.png';
import Search24 from '../image/24/search.svg';
import Warning24 from '../image/24/Warning.png';
import Undo24 from '../image/24/undo-black.png';
import Remove24 from '../image/24/remove-black.png';
import AddG24 from '../image/24/add-black.png';
import Close24 from '../image/24/close-black.png';
//import MenuCRM24 from  './svg/crm-black.svg';  
//import MenuProduct24 from './svg/box-black.svg'; 
//import MenuAddressing24 from './svg/map-black.svg'; 
//import MenuGoodsMovement24 from './svg/forklift-black.svg';
//import MenuAccessControl24 from './svg/access-control-black.svg';


export const ImageAdd24 = Add24;
export const ImageBack24 = Back24;
export const ImageCancel24 = Cancel24;
export const ImageEdit24 = Edit24;
export const ImageDetele24 = Delete24;
export const ImageExit24 = Exit24;
export const ImageInfo24 = Info24;
export const ImageLoad24 = Load24;
export const ImageRefresh24 = Refresh24;
export const ImageNext24 = Next24;
export const ImagePrint24 = Print24;
export const ImageProfile24 = Profile24;
export const ImageSave24 = Save24;
export const ImageSearch24 = Search24;
export const ImageWarning24 = Warning24;
export const ImageUndo24 = Undo24;
export const ImageRemove24 = Remove24;
export const ImageAddG24 = AddG24;
export const ImageClose24 = Close24;
//export const ImageMenuCRM24 = MenuCRM24;
//export const ImageMenuProduct24 = MenuProduct24;
//export const ImageMenuAddressing24 = MenuAddressing24;
//export const ImageMenuGoodsMovement24 = MenuGoodsMovement24;
//export const ImageMenuAccessControl24 = MenuAccessControl24;



export function GetImage24( name ) {

    switch ( name ) {
        case 'add'                  : return ImageAdd24;
        case 'arrow-back'           : return ImageBack24;
        case 'cancel'               : return ImageCancel24;
        case 'edit'                 : return ImageEdit24;
        case 'delete'               : return ImageDetele24;
        case 'exit'                 : return ImageExit24;
        case 'info'                 : return ImageInfo24;
        case 'load'                 : return ImageLoad24;
        case 'refresh'              : return ImageRefresh24;
        case 'next'                 : return ImageNext24;
        case 'print'                : return ImagePrint24;
        case 'profile'              : return ImageProfile24;
        case 'save'                 : return ImageSave24;
        case 'search'               : return ImageSearch24;
        case 'warning'              : return ImageWarning24;
        case 'undo'                 : return ImageUndo24;
        case 'remove-black'         : return ImageRemove24;
        case 'add-black'            : return ImageAddG24;
        case 'close-black'          : return ImageClose24;
       // case 'menu-crm'             : return ImageMenuCRM24;
       // case 'menu-product'         : return MenuProduct24;
      //  case 'menu-addressing'      : return MenuAddressing24;
      //  case 'menu-goods-movement'  : return MenuGoodsMovement24;
     //   case 'menu-access-control'  : return MenuAccessControl24;

        default           : return null;
    }
    
}






