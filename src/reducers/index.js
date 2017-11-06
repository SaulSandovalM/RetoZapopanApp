import {combineReducers} from 'redux';
import proyectosReducer from './proyectosReducer';

const rootReducer = combineReducers({
    proyectos:proyectosReducer
});
export default rootReducer;