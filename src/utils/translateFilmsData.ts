import { Film, Pelicula } from "../types/types";

const filmTranslations: { [key: string]: keyof Pelicula } = {
  title: 'titulo',
  episode_id: 'id_episodio',
  opening_crawl: 'texto_apertura',
  director: 'director',
  producer: 'productor',
  release_date: 'fecha_estreno',
  characters: 'personajes',
  planets: 'planetas',
  starships: 'naves_estelares',
  vehicles: 'vehiculos',
  species: 'especies',
  created: 'creado',
  edited: 'editado',
  url: 'url'
};

export const translateFilmAttributes = (data: Film): Pelicula => {
  const translatedData: Partial<Pelicula> = {};
  
  Object.keys(data).forEach((key) => {
    const translatedKey = filmTranslations[key] as keyof Pelicula;
    if (translatedKey) {
      if (['personajes', 'planetas', 'naves_estelares', 'vehiculos', 'especies'].includes(translatedKey)) {
        (translatedData as any)[translatedKey] = data[key as keyof Film] as string[];
      } else if (translatedKey === 'id_episodio') {
        (translatedData as any)[translatedKey] = data[key as keyof Film] as number;
      } else {
        (translatedData as any)[translatedKey] = data[key as keyof Film] as string;
      }
    }
  });
  
  return translatedData as Pelicula;
};