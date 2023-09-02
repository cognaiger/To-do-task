import * as actionTypes from '../action/type'
export const todoReducers = (state = [], action) => {
    switch (action.type) {
        case actionTypes.ADDNEW_TODO:
            return [action.payload,...state]
        case actionTypes.GET_ALLTASKS:
            return action.payload
        case actionTypes.DELETE_TASK:
            return state.filter(task => task._id != action.payload._id)
        default: 
        return state;
    }
}