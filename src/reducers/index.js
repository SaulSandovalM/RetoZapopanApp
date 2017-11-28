import {combineReducers} from 'redux';
import proyectosReducer from './proyectosReducer';
import filterReducer from './filterReducer';
import dataReducer from'./dataReducer';

const rootReducer = combineReducers({
    proyectos: proyectosReducer,
    filter: filterReducer,
    dataReducer
});

export default rootReducer;
