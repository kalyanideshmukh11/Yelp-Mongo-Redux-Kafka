import * as actionTypes from '../../../constants/action-types';

export const addRestaurantName = (payload) => {
    return { type: actionTypes.ADD_RESTAURANT_NAME, payload}
};

export const addRestaurantEmail = (payload) => {
    return { type: actionTypes.ADD_RESTAURANT_EMAIL, payload}
};

export const addRestaurantPassword = (payload) => {
    return { type: actionTypes.ADD_RESTAURANT_PASSWORD, payload}
};
export const setRestaurantError = (payload) => {
    return { type: actionTypes.SET_RESTAURANT_ERROR, payload }
};
export const addFirstName = (payload) => {
    return { type: actionTypes.ADD_FIRST_NAME, payload}
};

export const addLastName = (payload) => {
    return { type: actionTypes.ADD_LAST_NAME, payload}
};

export const addSignupEmail = (payload) => {
    return { type: actionTypes.ADD_SIGNUP_EMAIL, payload}
};

export const addSignupPassword = (payload) => {
    return { type: actionTypes.ADD_SIGNUP_PASSWORD, payload}
};

export const setSignupError = (payload) => {
    return { type: actionTypes.SET_SIGNUP_ERROR, payload }
};

export const addLocationName = (payload) => {
    return { type: actionTypes.ADD_LOCATION_NAME, payload}
};

