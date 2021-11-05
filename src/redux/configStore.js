import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { CarouselReducer } from "./reducers/CarouselReducer";
import { FilmReducer } from './reducers/FilmReducer';
const rootReducer = combineReducers({
    CarouselReducer,
    FilmReducer,
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store;