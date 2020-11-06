import * as actionTypes from '../../../constants/action-types';

const initialState = {
    first_name: "",
    last_name: "",
    name:"",
    location:"",
    email: "",
    password: "",
    error: null
}

const signupReducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.ADD_SIGNUP_EMAIL:
            return {
                 ...state,
                 email: action.payload,
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
                    name: action.payload,
            }
        case actionTypes.ADD_RESTAURANT_EMAIL:
                return {
                         ...state,
                        email: action.payload,
                }
        case actionTypes.ADD_LOCATION_NAME:
            return {
                        ...state,
                        location: action.payload,
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