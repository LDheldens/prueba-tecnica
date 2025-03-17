import { Character, Personaje } from "../types/types";

const characterTranslations: { [key: string]: keyof Personaje } = {
    name: 'nombre',
    height: 'altura',
    mass: 'masa',
    hair_color: 'color_cabello',
    skin_color: 'color_piel',
    eye_color: 'color_ojos',
    birth_year: 'anio_nacimiento',
    gender: 'genero',
    homeworld: 'planeta_natal',
    films: 'peliculas',
    species: 'especies',
    vehicles: 'vehiculos',
    starships: 'naves_estelares',
    created: 'creado',
    edited: 'editado',
    url: 'url'
  };

export const translateCharacterAttributes = (data: Character): Personaje => {
    const translatedData: Partial<Personaje> = {};
  
    Object.keys(data).forEach((key) => {
      const translatedKey = characterTranslations[key] as keyof Personaje;
      if (translatedKey) {
        if (['peliculas', 'especies', 'vehiculos', 'naves_estelares'].includes(translatedKey)) {
          (translatedData as any)[translatedKey] = data[key as keyof Character] as string[];
        } else {
          (translatedData as any)[translatedKey] = data[key as keyof Character] as string;
        }
      }
    });
  
    return translatedData as Personaje;
};