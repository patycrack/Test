import axios from "axios";
import { apiLink } from "./apiLink";
import { apiKey } from "./apiKey";
import { apiLanguage } from "./apiLanguage";

// Función genérica para hacer llamadas GET a cualquier URL
const makeApiCall = async (url) => {
	const response = await axios.get(url);
	return await response.data;
};

// Trae los detalles de un actor/actriz usando su ID
export const getPersonDetails = async (id) => {
	return makeApiCall(`${apiLink}/person/${id}${apiKey}${apiLanguage}`);
};

// Trae las películas en las que un actor/actriz ha participado
export const getPersonCredits = async (id) => {
	return makeApiCall(`${apiLink}/person/${id}/movie_credits${apiKey}${apiLanguage}`);
};

// Trae una lista de películas populares con paginación
export const getMovies = async (page) => {
	return makeApiCall(`${apiLink}/movie/popular${apiKey}&page=${page}${apiLanguage}`);
};

// Trae todos los géneros de películas
export const getGenres = async () => {
	return makeApiCall(`${apiLink}/genre/movie/list${apiKey}`);
};

// Busca películas basándose en un texto ingresado
export const getMoviesByQuery = async (query, page) => {
	if (!query) {
		return;
	}
	return makeApiCall(`${apiLink}/search/movie${apiKey}${apiLanguage}&query=${query}&page=${page}`);
};

// Trae los detalles de una película usando su ID
export const getMovieDetails = async (id) => {
	return makeApiCall(`${apiLink}/movie/${id}${apiKey}${apiLanguage}`);
};

// Trae los créditos (reparto y equipo) de una película
export const getCredits = async (id) => {
	return makeApiCall(`${apiLink}/movie/${id}/credits${apiKey}${apiLanguage}`);
};

// Trae una lista de personas (actores/actrices) populares con paginación
export const getPeople = async (page) => {
	return makeApiCall(`${apiLink}/person/popular${apiKey}&page=${page}${apiLanguage}`);
};

// Busca personas basándose en un texto ingresado
export const getPeopleByQuery = async (query, page) => {
	if (!query) {
		return;
	}
	return makeApiCall(`${apiLink}/search/person${apiKey}${apiLanguage}&query=${query}&page=${page}`);
};

