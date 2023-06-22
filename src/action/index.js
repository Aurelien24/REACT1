/*export const getTatoo = () => {
    console.log('action ' + 'GET_TATOO')
    return {
        type: 'GET_TATOO',
    }
}

export const addTatoo = (tatoo) => {
    return {
        type: 'ADD_TATOO',
        tatoo
    }
}*/

import { createAction } from '@reduxjs/toolkit';

export const addTatoo = createAction('tatoo/addTatoo');
export const getTatoo = createAction('tatoo/getTatoo');
export const deleteTatoo = createAction('tatoo/deleteTatoo');