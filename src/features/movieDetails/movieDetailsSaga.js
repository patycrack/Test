import { delay, takeLatest, call, put, select } from "redux-saga/effects"; 
import { getCredits, getMovieDetails } from "../../common/apiData/apiRequests"; 
import { loadingDelay } from "../../common/states/loadingDelay"; 
import {
  fetchCredits,
  fetchMovieDetails,
  fetchError,
  fetchMovieDetailsSuccess,
  selectMovieId,
  fetchCreditsSuccess,
} from "./movieDetailsSlice";

// Saga para manejar la solicitud de detalles de la película
function* fetchMovieDetailsHandler() {
  try {
    // Selecciona el ID de la película desde el estado global
    const id = yield select(selectMovieId);

    // Dispara la acción para obtener los créditos de la película
    yield put(fetchCredits());

    // Retrasa la ejecución para simular un efecto de carga (para propósitos de demostración)
    yield delay(loadingDelay); 

    // Llama a la API para obtener los detalles de la película con el ID seleccionado
    const movie = yield call(getMovieDetails, id);

    // Dispara la acción para indicar que los detalles de la película fueron obtenidos con éxito
    yield put(fetchMovieDetailsSuccess(movie));
  } catch (error) {
    // En caso de error, dispara la acción de error
    yield put(fetchError());
  }
}

// Saga para manejar la solicitud de créditos de la película
function* fetchCreditsHandler() {
  try {
    // Selecciona el ID de la película desde el estado global
    const id = yield select(selectMovieId);

    // Llama a la API para obtener los créditos de la película con el ID seleccionado
    const movie = yield call(getCredits, id);

    // Dispara la acción para indicar que los créditos de la película fueron obtenidos con éxito
    yield put(fetchCreditsSuccess(movie));
  } catch (error) {
    // En caso de error, dispara la acción de error
    yield put(fetchError());
  }
}

// Saga raíz que escucha las acciones y llama a los manejadores correspondientes
export function* movieDetailsSaga() {
  // Escucha la acción de obtener detalles de la película y ejecuta fetchMovieDetailsHandler
  yield takeLatest(fetchMovieDetails.type, fetchMovieDetailsHandler);

  // Escucha la acción de obtener créditos de la película y ejecuta fetchCreditsHandler
  yield takeLatest(fetchCredits.type, fetchCreditsHandler);
}
