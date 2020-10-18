import * as actionTypes from '../../../constants/action-types';

export const saveOrderDetails = (payload) => {
    return { type: actionTypes.SAVE_ORDER_DETAILS, payload }
};

export const changeMode = (payload) => {
    return { type: actionTypes.CHANGE_MODE, payload }
};

export const enableSave = (payload) => {
    return { type: actionTypes.ENABLE_SAVE, payload }
};

export const returnOrders = (payload) => {
    return { type: actionTypes.RETURN_ORDERS, payload }
};