import * as actionTypes from '../../../constants/action-types';

const initialState = {
    first_name: "",
    last_name: "",
    restaurant_name:"",
    restaurant_location:"",
    email_id: "",
    password: "",
    error: null
}

const signupReducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.ADD_EMAIL:
            return {
                 ...state,
                 email_id: action.payload,
            }
        case actionTypes.ADD_PASSWORD:
            return {
                    ...state,
                    password: action.payload,
            }
        case actionTypes.ADD_FIRST_NAME:
            return {
                 ...state,
                 first_name: action.payload,
            }
        case actionTypes.ADD_LAST_NAME:
            return {
                    ...state,
                    last_name: action.payload,
            }
        case actionTypes.ADD_RESTAURANT_NAME:
            return {
                     ...state,
                    restaurant_name: action.payload,
            }
        case actionTypes.ADD_LOCATION_NAME:
            return {
                        ...state,
                        restaurant_location: action.payload,
            }
        case actionTypes.SET_SIGNUP_ERROR:
            return {
                    ...state,
                    error: action.payload,
            }
        default:
            return initialState;
    }
}

export default signupReducer;