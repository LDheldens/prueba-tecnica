export interface PaginatedResponse<T> {
    count: number;       
    next: string | null; 
    previous: string | null; 
    results: T[];       
}

export interface Planet {
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

export type PlanetsResponse = PaginatedResponse<Planet>;
// export type PeopleResponse = PaginatedResponse<Person>;
// export type FilmsResponse = PaginatedResponse<Film>;
