import { createSlice } from "@reduxjs/toolkit";

// Creación del slice para gestionar el estado de la lista de personas
const peopleSlice = createSlice({
    name: "peopleList", // Nombre del slice
    initialState: {
        status: "initial", // Estado inicial de la carga
        people: null, // Almacenará los resultados de personas
        query: null, // Consulta de búsqueda
        page: null, // Página actual
        totalResults: 0, // Número total de resultados
        totalPages: 0, // Total de páginas de resultados
    },
    reducers: {
        // Acción que indica que los datos están siendo cargados
        fetchPeople: (state) => {
            state.status = "loading";
        },
        // Acción que actualiza el estado con los datos obtenidos
        fetchPeopleSuccess: (state, { payload: people }) => {
            state.status = "success"; // Cambio a estado de éxito
            state.people = people.results; // Guardar los resultados de personas
            state.totalPages = people.total_pages; // Total de páginas
            state.totalResults = people.total_results; // Total de resultados
        },
        // Acción que indica que ocurrió un error al obtener los datos
        fetchPeopleError: (state) => {
            state.status = "error"; // Cambio a estado de error
        },
        // Acción que actualiza la consulta de búsqueda
        setQuery: (state, { payload: query }) => {
            state.query = query; // Actualizar la consulta
            state.status = "loading"; // Cambiar el estado a 'loading'
        },
        // Acción que actualiza la página actual
        setPage: (state, { payload: page }) => {
            state.page = page; // Actualizar la página
        }
    },
});

// Exportación de las acciones generadas automáticamente por el slice
export const {
    fetchPeople,
    fetchPeopleSuccess,
    fetchPeopleError,
    setQuery,
    setPage,
} = peopleSlice.actions;

// Función para seleccionar el estado completo de la lista de personas
const selectPeopleListState = (state) => state.peopleList;

// Seleccionadores para acceder a partes específicas del estado
export const selectStatus = (state) => selectPeopleListState(state).status;
export const selectPeople = (state) => selectPeopleListState(state).people;
export const selectPage = (state) => selectPeopleListState(state).page;
export const selectQuery = (state) => selectPeopleListState(state).query;
export const selectTotalResults = (state) => selectPeopleListState(state).totalResults;
export const selectTotalPages = (state) => selectPeopleListState(state).totalPages;

// Exportación del reductor del slice
export default peopleSlice.reducer;
