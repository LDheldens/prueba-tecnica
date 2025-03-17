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

export type PlanetsResponse = PaginatedResponse<Planet>;
// export type PeopleResponse = PaginatedResponse<Person>;
// export type FilmsResponse = PaginatedResponse<Film>;
