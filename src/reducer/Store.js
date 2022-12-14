import { legacy_createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { NavigationReducer } from "../reducer/NavigationReducer";
import { CarouselReducer } from "../reducer/CarouselReducer";
import { CourseReducer } from "../reducer/CourseReducer";
import { FooterReducer } from "../reducer/FooterReducer";
export const configureStore = () => {
    return legacy_createStore(combineReducers({
        NavigationReducer,
        CarouselReducer,
        CourseReducer,
        FooterReducer,
    }),
        composeWithDevTools()
    );
};