export interface PaginatedResponse<T> {
    count: number;       
    next: string | null; 
    previous: string | null; 
    results: T[];       
}

// Planet Types
export interface Planet {
  name: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: string;
  population: string;
  residents: string[];
  films: string[];
  created: string;
  edited: string;
  url: string;
};

export interface Planeta {
    nombre: string;
    periodo_de_rotacion: string;
    periodo_orbital: string;
    diametro: string;
    clima: string;
    gravedad: string;
    terreno: string;
    agua_superficial: string;
    poblacion: string;
    residentes: string[];
    peliculas: string[];
    creado: string;
    editado: string;
    url: string;
}


//Films Types
export interface Film {
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: string;
  characters: string[];
  planets: string[];
  starships: string[];
  vehicles: string[];
  species: string[];
  created: string;
  edited: string;
  url: string;
}

export interface Pelicula {
  titulo: string;
  id_episodio: number;
  texto_apertura: string;
  director: string;
  productor: string;
  fecha_estreno: string;
  personajes: string[];
  planetas: string[];
  naves_estelares: string[];
  vehiculos: string[];
  especies: string[];
  creado: string;
  editado: string;
  url: string;
}

//People types
export interface Character {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: string[];
  species: string[];
  vehicles: string[];
  starships: string[];
  created: string;
  edited: string;
  url: string;
}

export interface Personaje {
  nombre: string;
  altura: string;
  masa: string;
  color_cabello: string;
  color_piel: string;
  color_ojos: string;
  anio_nacimiento: string;
  genero: string;
  planeta_natal: string;
  peliculas: string[];
  especies: string[];
  vehiculos: string[];
  naves_estelares: string[];
  creado: string;
  editado: string;
  url: string;
}


export type PlanetsResponse = PaginatedResponse<Planet>;
export type PlanetasResponse = PaginatedResponse<Planeta>;
export type FilmsResponse = PaginatedResponse<Film>;
export type PeliculasResponse = PaginatedResponse<Pelicula>;
export type PeopleResponse = PaginatedResponse<Character>;
export type PersonajeResponse = PaginatedResponse<Personaje>;
