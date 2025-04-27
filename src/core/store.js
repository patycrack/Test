import { configureStore } from "@reduxjs/toolkit"; 
import createSagaMiddleware from "@redux-saga/core"; 
import movieListReducer from "../features/movieList/movieListSlice"; 
import movieDetailsReducer from "../features/movieDetails/movieDetailsSlice"; 
import peopleListReducer from "../features/peopleList/peopleSlice"; 
import personDetailsReducer from "../features/personDetails/personDetailsSlice"; 
import genresSliceReducer from "../common/apiData/genres/genresSlice" 
import saga from "./saga";

// Crear el middleware de Saga para gestionar efectos secundarios
const sagaMiddleware = createSagaMiddleware();

// Configuración del store de Redux
const store = configureStore({
    reducer: {
        // Reducers que gestionan el estado para las distintas secciones de la aplicación
        movieList: movieListReducer,        
        movieDetails: movieDetailsReducer,  
        peopleList: peopleListReducer,      
        personDetails: personDetailsReducer, 
        genres: genresSliceReducer,         
    },
    // Middleware para manejar efectos secundarios asincrónicos como las llamadas a la API
    middleware: [sagaMiddleware],
});

// Iniciar el middleware de Saga
sagaMiddleware.run(saga);

export default store;
