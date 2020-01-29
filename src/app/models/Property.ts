import { propertyType } from './PropertyType';

export interface Property {
    id: number;
    name: string;
    bedrooms: number;
    parking: number;
    views: number;
    description: string;
    type: propertyType;
    yearBuilt: number;
    sqfeet: number;
}
  