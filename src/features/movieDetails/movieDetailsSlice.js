import { createSlice } from "@reduxjs/toolkit";

const movieDetailsSlice = createSlice({
  name: "movieDetails",  // Nombre del slice para identificarlo en el store
  initialState: {
    status: "initial",  // Estado inicial de la carga
    movieDetails: null,  // Detalles de la película
    movieId: null,  // ID de la película
    credits: null,  // Créditos de la película
  },
  reducers: {
    fetchMovieDetails: (state) => {
      state.status = "loading";  // Cambia el estado a 'loading' cuando se inicie la carga de detalles
    },
    fetchMovieDetailsSuccess: (state, { payload: movieDetails }) => {
      state.status = "success";  // Cambia el estado a 'success' cuando se obtienen los detalles de la película
      state.movieDetails = movieDetails;  // Almacena los detalles de la película
    },
    fetchError: (state) => {
      state.status = "error";  // Cambia el estado a 'error' si ocurre un problema en la carga
    },
    setMovieId: (state, { payload: id }) => {
      state.movieId = id;  // Almacena el ID de la película para su posterior consulta
    },
    fetchCredits: (state) => {
      state.status = "loading";  // Cambia el estado a 'loading' cuando se inicie la carga de créditos
    },
    fetchCreditsSuccess: (state, { payload: credits }) => {
      state.credits = credits;  // Almacena los créditos de la película una vez cargados
    },
  },
});

// Exporta las acciones generadas por createSlice para usarlas en otros componentes
export const {
  fetchMovieDetails,
  fetchError,
  fetchMovieDetailsSuccess,
  setMovieId,
  fetchCredits,
  fetchCreditsSuccess,
} = movieDetailsSlice.actions;

// Selector principal para acceder al estado del slice de 'movieDetails'
const selectMovieDetailsState = (state) => state.movieDetails;

// Selectores específicos para acceder a partes del estado
export const selectStatus = (state) => selectMovieDetailsState(state).status;
export const selectMovieDetails = (state) =>
  selectMovieDetailsState(state).movieDetails;
export const selectMovieId = (state) => selectMovieDetailsState(state).movieId;
export const selectCredits = (state) => selectMovieDetailsState(state).credits;

// Exporta el reducer del slice, que se usará para modificar el estado en el store
export default movieDetailsSlice.reducer;
