import * as actionTypes from '../../../constants/action-types';

const initialState = null;

const logoutReducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.AUTH_LOGOUT:
            localStorage.removeItem('token');
            return state;
        default:
            return initialState;
    }
}

export default logoutReducer;