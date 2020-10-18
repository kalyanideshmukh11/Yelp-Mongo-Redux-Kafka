
import { faSleigh } from '@fortawesome/free-solid-svg-icons';
import * as actionTypes from '../../../constants/action-types';


const initialState = {
    selectedRestaurant: null,
    restaurantDetails: null,
    restaurantImages:null,
    menuDetails: null,
    reviewDetails:null,
    placeOrderDetails:null,
    message :"",
    mode: false,
    save: false,
    imagemode:false,
    menumode:false,
    reviewmode:false,
}
 
const restPageReducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.SAVE_RESTAURANT_DETAILS:  
            return {
                ...state,
                restaurantDetails: action.payload
            }
        case actionTypes.CHANGE_MODE:
            return {
                ...state,
                mode: action.payload
            }
        case actionTypes.ENABLE_SAVE:
            return {
                ...state,
                save: action.payload
            }
         case actionTypes.SAVE_RESTAURANT_IMAGES:  
            return {
                ...state,
                restaurantImages: action.payload
            }
         case actionTypes.CHANGE_IMAGE_MODE:
                return {
                    ...state,
                    imagemode: action.payload
                }
        case actionTypes.SAVE_MENU_DETAILS:  
                return {
                    ...state,
                    menuDetails: action.payload
                }
             case actionTypes.CHANGE_MENU_MODE:
                    return {
                        ...state,
                        menumode: action.payload
                    }
            case actionTypes.SAVE_REVIEW_DETAILS:  
            return {
                ...state,
                reviewDetails: action.payload
            }
            case actionTypes.CHANGE_REVIEW_MODE:
                return {
                    ...state,
                    reviewmode: action.payload
                }
            case actionTypes.CHANGE_MESSAGE:
                    return {
                        ...state,
                        message: action.payload
                    }
            case actionTypes.SAVE_PLACE_ORDER_DETAILS:  
                    return {
                        ...state,
                        placeOrderDetails: action.payload
                    }
                    
                    
        default:
            return initialState;
    }
}

export default restPageReducer;