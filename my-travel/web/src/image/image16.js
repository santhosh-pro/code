import Load16 from '../image/16/gif/loader16d.gif';
import Apply16 from '../image/16/apply.png';
import List16 from '../image/16/list.png';
import Edit16 from '../image/16/edit.png';
//import Edit16 from '../image/16/Modify.png';
import Delete16 from '../image/16/delete.png';
import Remove16 from '../image/16/remove.png';
import Add16 from '../image/16/add.png';
import CheckList16 from '../image/16/check-list.png';
import Printer16 from '../image/16/printer.png';
import Movement16 from '../image/16/movement.png';
import Position16 from '../image/16/position.png';
import Separation16 from '../image/16/separation.png';
import Viewer16 from '../image/16/viewer.png';
import Binoculars16 from '../image/16/binoculars.png';

export const ImageLoad16 = Load16;
export const ImageApply16 = Apply16;
export const ImageList16 = List16;
export const ImageEdit16 = Edit16;
export const ImageDelete16 = Delete16;
export const ImageRemove16 = Remove16;
export const ImageAdd16 = Add16;
export const ImageCheckList16 = CheckList16;
export const ImagePrinter16 = Printer16;
export const ImageMovement16 = Movement16;
export const ImagePosition16 = Position16;
export const ImageSeparation16 = Separation16;
export const ImageViewer16 = Viewer16;
export const ImageBinoculars16 = Binoculars16

export function GetImage16( name ) {

    switch ( name ) {
        case 'loader'     : return ImageLoad16;        
        case 'apply'      : return ImageApply16;        
        case 'list'       : return ImageList16;        
        case 'delete'     : return ImageDelete16;        
        case 'edit'       : return ImageEdit16;        
        case 'add'        : return ImageAdd16;        
        case 'remove'     : return ImageRemove16;        
        case 'check-list' : return ImageCheckList16;        
        case 'printer'    : return ImagePrinter16;    
        case 'movement'   : return ImageMovement16;    
        case 'position'   : return ImagePosition16;   
        case 'separation' : return ImageSeparation16;   
        case 'viewer'     : return ImageViewer16;
        case 'binoculars' : return ImageBinoculars16;
        default           : return null;
    }
    
}






