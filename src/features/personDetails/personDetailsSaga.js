import { delay, takeLatest, call, put, select } from "redux-saga/effects";
import {
  getPersonCredits,
  getPersonDetails,
} from "../../common/apiData/apiRequests";
import { loadingDelay } from "../../common/states/loadingDelay";
import {
  fetchCredits,
  fetchPersonDetails,
  fetchError,
  fetchPersonDetailsSuccess,
  selectPersonId,
  fetchCreditsSuccess,
} from "./personDetailsSlice";

// Manejador de la acción fetchPersonDetails
function* fetchPersonDetailsHandler() {
  try {
    // Obtener el ID de la persona desde el estado
    const id = yield select(selectPersonId);

    // Despachar la acción fetchCredits para obtener los créditos de la persona
    yield put(fetchCredits());
    
    // Simulación de un retraso para la demostración del loader
    yield delay(loadingDelay);

    // Obtener los detalles de la persona desde la API
    const person = yield call(getPersonDetails, id);

    // Despachar la acción para almacenar los detalles de la persona en el estado
    yield put(fetchPersonDetailsSuccess(person));
  } catch (error) {
    // En caso de error, despachar la acción fetchError
    yield put(fetchError());
  }
}

// Manejador de la acción fetchCredits
function* fetchPersonCreditsHandler() {
  try {
    // Obtener el ID de la persona desde el estado
    const id = yield select(selectPersonId);

    // Obtener los créditos de la persona desde la API
    const person = yield call(getPersonCredits, id);

    // Despachar la acción para almacenar los créditos en el estado
    yield put(fetchCreditsSuccess(person));
  } catch (error) {
    // En caso de error, despachar la acción fetchError
    yield put(fetchError());
  }
}

// Función que ejecuta los watchers para las acciones de fetch
export function* personDetailsSaga() {
  // Ejecutar el manejador fetchPersonDetailsHandler cuando la acción fetchPersonDetails sea disparada
  yield takeLatest(fetchPersonDetails.type, fetchPersonDetailsHandler);
  
  // Ejecutar el manejador fetchPersonCreditsHandler cuando la acción fetchCredits sea disparada
  yield takeLatest(fetchCredits.type, fetchPersonCreditsHandler);
}

