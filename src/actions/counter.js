import { ADD, MINUS } from './../constants/counter'

// add
export const add = () => {
    return {
        type: ADD
    }
};

// minus
export const minus = () => {
    return {
        type: MINUS
    }
};

// 异步 action
export function asyncAdd() {
    return dispatch => {
        setTimeout(() => {
            dispatch(add())
        }, 2000);
    }
}
