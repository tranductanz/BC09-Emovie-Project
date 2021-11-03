import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { CarouselReducer } from "./reducers/CarouselReducer";

const rootReducer = combineReducers({
    CarouselReducer,
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store;