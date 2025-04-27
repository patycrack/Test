import { call, delay, put, select, takeLatest } from "redux-saga/effects";
import { getPeople, getPeopleByQuery } from "../../common/apiData/apiRequests";
import { loadingDelay } from "../../common/states/loadingDelay";
import {
  fetchPeople,
  fetchPeopleError,
  fetchPeopleSuccess,
  selectPage,
  selectQuery,
  setPage,
} from "./peopleSlice";

// Función generadora que maneja la obtención de personas
function* fetchPeopleHandler() {
  try {
    yield delay(loadingDelay); // Retraso para simular el tiempo de carga

    // Obtengo los valores de la página y la consulta desde el estado
    const page = yield select(selectPage);
    const query = yield select(selectQuery);

    // Hago la llamada a la API dependiendo de si hay una consulta de búsqueda
    const people = yield !query
      ? call(getPeople, page) // Si no hay consulta, obtengo todas las personas para la página
      : call(getPeopleByQuery, query, page); // Si hay consulta, obtengo personas según la búsqueda

    // Despacho la acción de éxito con los resultados obtenidos
    yield put(fetchPeopleSuccess(people));
  } catch (error) {
    // Si ocurre un error, despachamos la acción de error
    yield put(fetchPeopleError());
  }
}

// Función que maneja las acciones asociadas a la obtención de personas
export function* peopleSaga() {
  // Escucha por las acciones 'fetchPeople' y 'setPage' para llamar al handler
  yield takeLatest([fetchPeople.type, setPage.type], fetchPeopleHandler);
}
