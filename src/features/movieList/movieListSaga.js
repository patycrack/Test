import { delay, call, put, takeLatest, select } from "redux-saga/effects";
import {
  getMovies,
  getMoviesByQuery,
} from "../../common/apiData/apiRequests"; // Importa las funciones para obtener las películas
import { loadingDelay } from "../../common/states/loadingDelay"; // Importa la constante de delay para simular carga
import {
  fetchMovies,
  fetchMoviesError,
  fetchMoviesSuccess,
  selectPage,
  selectQuery,
  setPage,
  setQuery,
} from "./movieListSlice"; // Importa las acciones y selectores del slice de movieList

// Saga para manejar la carga de películas
function* fetchMoviesHandler() {
  try {
    yield delay(loadingDelay); // Simula un retraso en la carga para mostrar un loader

    const page = yield select(selectPage);  // Obtiene el número de página desde el estado
    const query = yield select(selectQuery);  // Obtiene la query de búsqueda desde el estado

    // Llama a la API dependiendo de si hay una búsqueda o no
    const movies = yield !query
      ? call(getMovies, page) // Si no hay búsqueda, obtiene todas las películas
      : call(getMoviesByQuery, query, page); // Si hay búsqueda, obtiene películas filtradas por la query

    yield put(fetchMoviesSuccess(movies));  // Despacha la acción de éxito con las películas obtenidas
  } catch (error) {
    yield put(fetchMoviesError());  // Si ocurre un error, despacha la acción de error
  }
}

export function* movieListSaga() {
  yield takeLatest(
    [fetchMovies.type, setQuery.type, setPage.type],
    fetchMoviesHandler
  );
}
