import { configureStore } from '@reduxjs/toolkit'
import { dataReducer } from '../ReactRedux/Reducer'
const store = configureStore({
    reducer: {
        add: dataReducer,
    }
});

export default store