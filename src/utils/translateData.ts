
import { Planet } from '../types/types';

const translations: { [key: string]: keyof Planet } = {
  name: 'nombre',
  rotation_period: 'periodo_de_rotacion',
  orbital_period: 'periodo_orbital',
  diameter: 'diametro',
  climate: 'clima',
  gravity: 'gravedad',
  terrain: 'terreno',
  surface_water: 'agua_superficial',
  population: 'poblacion',
  residents: 'residentes',
  films: 'peliculas',
  created: 'creado',
  edited: 'editado',
  url: 'url',
};


export const translatePlanetAttributes = (data: Planet): Planet => {
  const translatedData: Partial<Planet> = {};

  Object.keys(data).forEach((key) => {
    const translatedKey = translations[key];
    if (translatedKey) {
      if (translatedKey === 'residentes' || translatedKey === 'peliculas') {
        translatedData[translatedKey] = data[key as keyof Planet] as string[];
      } else {
        translatedData[translatedKey] = data[key as keyof Planet] as string;
      }
    }
  });

  return translatedData as Planet;
};