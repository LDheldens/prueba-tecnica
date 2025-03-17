
const BASE_URL = 'https://swapi.py4e.com/api/';
import { PlanetsResponse } from "../types/types";

export const getFilms = async (page:number) => {
  const response = await fetch(`${BASE_URL}/films/?page=${page}`);
  const data = await response.json();
  return data;
};

export const getPlanets = async (page:number):Promise<PlanetsResponse> => {
  const response = await fetch(`${BASE_URL}/planets/?page=${page}`);
  console.log(`${BASE_URL}/planets/?page=${page}`)
  const data = await response.json();
  return data;
};

export const getPeople = async (page:number, search:string = '') => {
  let url = `${BASE_URL}/people/?page=${page}`;
  if (search) {
    url += `&search=${encodeURIComponent(search)}`;
  }

  const response = await fetch(url);
  
  const data = await response.json();
  return data;
};

export const getPersonById = async (id: string) => {
  const response = await fetch(`${BASE_URL}/people/${id}/`);
  const data = await response.json();
  return data;
};

export const getPlanetById = async (url: string) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export const getFilmById = async (url: string) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};