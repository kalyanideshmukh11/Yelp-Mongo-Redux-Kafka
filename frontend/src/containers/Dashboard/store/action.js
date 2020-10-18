import * as actionTypes from '../../../constants/action-types';

export const saveRestaurants = (payload) => {
    return { type: actionTypes.SAVE_RESTAURANTS, payload}
};

export const returnRestaurants = (payload) => {
    return { type: actionTypes.RETURN_RESTAURANTS, payload}
};

export const controlModal = (payload) => {
    return { type: actionTypes.CONTROL_MODAL, payload}
};
