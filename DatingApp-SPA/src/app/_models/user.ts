import { Photo } from './photo';

export interface User {
    id: number;
    username: string;
    sexe: string;
    age: number;
    alias: string;
    dateCreation: Date;
    derniereConnexionn: Date;
    descrioption?: string;
    interets?: string;
    recherche?: string;
    ville?: string;
    pays?: string;
    urlPhoto?: string;
    photos?: Photo[];

}
