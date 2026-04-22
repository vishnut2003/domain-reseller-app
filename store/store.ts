import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
    persistReducer,
    createMigrate,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

// Slices
import CartSlice from "./slices/cart";

const rootReducer = combineReducers({
    cart: CartSlice,
});

const migrations = {
    // eslint-disable-next-line
    1: (state: any) => {
        if (!state?.cart || !Array.isArray(state.cart?.items)) {
            return { ...state, cart: { items: [] } };
        }
        return state;
    },
};

const persistConfig = {
    key: "root",
    storage,
    version: 1,
    whitelist: [
        "cart",
    ],
    migrate: createMigrate(migrations, { debug: false }),
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const makeStore = () =>
    configureStore({
        reducer: persistedReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                serializableCheck: {
                    ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
                },
            }),
    });

// Types
export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];