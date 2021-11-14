import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { CarouselReducer } from "./reducers/CarouselReducer.js";
import { FilmReducer } from './reducers/FilmReducer.js';
import { CinemaReducer } from './reducers/CinemaReducer.js';
import { UserManageReducer } from "./reducers/UserManageReducer.js";
import { TicketReducer } from "./reducers/TicketReducer.js";
import { LoadingReducer } from "./reducers/LoadingReducer.js";
const rootReducer = combineReducers({
    CarouselReducer,
    FilmReducer,
    CinemaReducer,
    UserManageReducer,
    TicketReducer,
    LoadingReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store;