'use client';
import {configureStore} from '@reduxjs/toolkit';
import rootReducer from './reducers';

// const store = configureStore({
//     reducer: rootReducer,
// });
//
// export default store;

// Load state from local storage if available
// const loadState = () => {
//     try {
//         const serializedState = localStorage.getItem('expenses');
//         if (serializedState === null) {
//             return undefined;
//         }
//         return JSON.parse(serializedState);
//     } catch (error) {
//         return undefined;
//     }
// };
//
// // Save state to local storage
// const saveState = (state) => {
//     try {
//         const serializedState = JSON.stringify(state);
//         localStorage.setItem('expenses', serializedState);
//     } catch (error) {
//         // Handle save errors
//     }
// };
//
// const persistedState = loadState();
//
// const store = configureStore({
//     reducer: rootReducer,
//     preloadedState: persistedState,
// });
//
// // Subscribe to store updates and save state to local storage
// store.subscribe(() => {
//     saveState(store.getState());
// });
//
// export default store;

// store.js


import { persistStore } from 'redux-persist';

const store = configureStore({
    reducer: rootReducer,
});

const persistor = persistStore(store);

export { store, persistor };

