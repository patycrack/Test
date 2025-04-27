import { createSlice } from "@reduxjs/toolkit";

// Definición del slice para manejar los detalles de la persona
const personDetailsSlice = createSlice({
  name: "personDetails", // Nombre del slice
  initialState: {
    status: "initial", // Estado inicial
    personDetails: null, // Detalles de la persona
    personId: null, // ID de la persona
    credits: null, // Créditos de la persona
  },
  reducers: {
    // Acción para indicar que se están cargando los detalles de la persona
    fetchPersonDetails: (state) => {
      state.status = "loading";
    },
    // Acción que actualiza el estado con los detalles de la persona después de una solicitud exitosa
    fetchPersonDetailsSuccess: (state, { payload: personDetails }) => {
      state.status = "success";
      state.personDetails = personDetails;
    },
    // Acción para indicar que hubo un error durante la carga de los detalles
    fetchError: (state) => {
      state.status = "error";
    },
    // Acción para establecer el ID de la persona
    setPersonId: (state, { payload: id }) => {
      state.personId = id;
    },
    // Acción para indicar que se están cargando los créditos de la persona
    fetchCredits: (state) => {
      state.status = "loading";
    },
    // Acción que actualiza el estado con los créditos de la persona después de una solicitud exitosa
    fetchCreditsSuccess: (state, { payload: credits }) => {
      state.credits = credits;
    },
  },
});

// Exportación de las acciones generadas por el slice
export const {
  fetchPersonDetails,
  fetchError,
  fetchPersonDetailsSuccess,
  setPersonId,
  fetchCredits,
  fetchCreditsSuccess,
} = personDetailsSlice.actions;

// Selector para obtener el estado de la persona desde el estado global
const selectPersonDetailsState = (state) => state.personDetails;

// Selectores para obtener información específica del estado
export const selectStatus = (state) => selectPersonDetailsState(state).status;
export const selectPersonDetails = (state) =>
  selectPersonDetailsState(state).personDetails;
export const selectPersonId = (state) =>
  selectPersonDetailsState(state).personId;
export const selectCredits = (state) => selectPersonDetailsState(state).credits;

// Exportación del reductor para manejar las acciones en el store
export default personDetailsSlice.reducer;
