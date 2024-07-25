// import {compose,legacy_createStore,applyMiddleware} from 'redux';
// import logger from 'redux-logger';
// import { rootReducer } from './root-reducer';
// import { persistStore,persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
// import { thunk } from 'redux-thunk';


// const middleWares= [
//     process.env.NODE_ENV !='production' && logger,
//     thunk,
// ].filter(Boolean);

// const composedEnhancers=compose(applyMiddleware(...middleWares))


// const persistConfig={
//     key:'root',
//     storage,
//     whitelist:['cart']
// }

// const persistedReducer=persistReducer(persistConfig,rootReducer)

// export const store =legacy_createStore(persistedReducer,undefined,composedEnhancers)

// export const persistor =persistStore(store)

//Commenting the above part  of code now we are going to use redux -Saga 
//which is a middleware library which comes after the reducers in the data flow making 
//the changes to be rendered exact 

import {compose,legacy_createStore,applyMiddleware} from 'redux';
import logger from 'redux-logger';
import { rootReducer } from './root-reducer';
import { persistStore,persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
// import { thunk } from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';

import { rootSaga } from './root-saga';


const sagaMiddleware=createSagaMiddleware();

const middleWares= [
    process.env.NODE_ENV !=='production' && logger,
    sagaMiddleware,
].filter(Boolean);

const composedEnhancers=compose(applyMiddleware(...middleWares))


const persistConfig={
    key:'root',
    storage,
    whitelist:['cart']
}


const persistedReducer=persistReducer(persistConfig,rootReducer)

export const store =legacy_createStore(persistedReducer,undefined,composedEnhancers)

sagaMiddleware.run(rootSaga)


export const persistor =persistStore(store)