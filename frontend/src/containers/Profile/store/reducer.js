import * as actionTypes from '../../../constants/action-types';
import user from '../../../assets/user.png';

const initialState = {
    basicDetails: null,
    aboutme:[],
    mode: false,
    save: false,
    profile_pic: user,
    ammode:false,
    bdmode:false,
}
 
const profileReducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.SAVE_BASIC_DETAILS:
            return {
                ...state,
                basicDetails: action.payload,                
            }
        case actionTypes.SAVE_ABOUTME_INFO:
            return {
                ...state,
                aboutme: action.payload,
            }
        case actionTypes.CHANGE_MODE:
            return {
                ...state,
                mode: action.payload
            }
        case actionTypes.CHANGE_ABOUTME_MODE:
            return {
                    ...state,
                    ammode: action.payload
            }
        case actionTypes.CHANGE_BASICDETAILS_MODE:
                return {
                        ...state,
                        bdmode: action.payload
                }
        case actionTypes.ENABLE_SAVE:
            return {
                ...state,
                save: action.payload
            }
        case actionTypes.SAVE_PROFILE_PIC:
            return {
                ...state,
                profile_pic: action.payload
            }
        default:
            return initialState;
    }
}

export default profileReducer;