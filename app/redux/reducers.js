'use client';
const initialState = {
    expenses: [],
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_EXPENSES': // this is the action name
            return {
                ...state, // this is the previous state
                expenses: action.payload, // this is the data
            };
        default:
            return state;
    }
};

export default rootReducer;

