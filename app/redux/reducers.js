'use client';


import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const expensesReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_EXPENSES':
            return action.payload;
        default:
            return state;
    }
};

const rootReducer = combineReducers({
    expenses: expensesReducer,
});

const persistConfig = {
    key: 'root',
    storage,
};

export default persistReducer(persistConfig, rootReducer);


