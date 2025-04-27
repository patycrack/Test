import { createSlice } from "@reduxjs/toolkit";

// Creación del slice para manejar el estado de la lista de películas
const movieListSlice = createSlice({
  name: "movieList",
  initialState: {
    status: "initial", // Estado inicial de la carga
    movies: null, // Almacena los resultados de la búsqueda de películas
    query: null, // Almacena la consulta de búsqueda
    page: null, // Almacena la página actual
    totalResults: 0, // Almacena el total de resultados de la búsqueda
    totalPages: 0, // Almacena el total de páginas disponibles
  },
  reducers: {
    // Acción para iniciar la carga de películas
    fetchMovies: (state) => {
      state.status = "loading"; // Cambia el estado a 'loading' mientras se buscan las películas
    },
    // Acción que maneja el éxito de la solicitud de películas
    fetchMoviesSuccess: (state, { payload: movies }) => {
      state.status = "success"; // Cambia el estado a 'success' cuando las películas son obtenidas
      state.movies = movies.results; // Almacena los resultados de las películas
      state.totalPages = movies.total_pages; // Almacena el total de páginas
      state.totalResults = movies.total_results; // Almacena el total de resultados
    },
    // Acción que maneja el error de la solicitud de películas
    fetchMoviesError: (state) => {
      state.status = "error"; // Cambia el estado a 'error' si algo sale mal al obtener las películas
    },
    // Acción para actualizar la consulta de búsqueda y reiniciar el estado a 'loading'
    setQuery: (state, { payload: query }) => {
      state.query = query; // Establece la consulta de búsqueda
      state.status = "loading"; // Cambia el estado a 'loading' cuando se cambia la consulta
    },
    // Acción para actualizar la página actual
    setPage: (state, { payload: page }) => {
      state.page = page; // Establece el número de página actual
    }
  },
});

// Exportación de las acciones para usarlas en otras partes de la aplicación
export const {
  fetchMovies,
  fetchMoviesSuccess,
  fetchMoviesError,
  setQuery,
  setPage,
} = movieListSlice.actions;

// Función selectora para acceder al estado del slice 'movieList'
const selectMovieListState = (state) => state.movieList;

// Selectores para acceder a propiedades específicas del estado
export const selectStatus = (state) => selectMovieListState(state).status;
export const selectMovies = (state) => selectMovieListState(state).movies;
export const selectPage = (state) => selectMovieListState(state).page;
export const selectQuery = (state) => selectMovieListState(state).query;
export const selectTotalResults = (state) => selectMovieListState(state).totalResults;
export const selectTotalPages = (state) => selectMovieListState(state).totalPages;

// Exporta el reducer para integrarlo en el store de Redux
export default movieListSlice.reducer;
