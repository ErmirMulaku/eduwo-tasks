import { apiRequest } from "./Api";
export interface City {
  id: number;
  wikiDataId: string;
  latitude: number;
  longitude: number;
  population: number;
  region: string;
  type: string;
  city: string;
  country: string;
  countryCode: string;
}
export interface Link {
  rel: string;
  href: string;
}
export interface MetaData {
  currentOffset: number;
  totalCount: number;
}
export interface GeoCitiesInput {
  limit: number;
  offset: number;
}
export interface GeoCitiesResponse {
  data: City[];
  links: Link[];
  metadata: MetaData;
}
export const getCities = async (data: GeoCitiesInput) =>
  apiRequest<GeoCitiesInput, GeoCitiesResponse>(
    "get",
    "v1/geo/cities?limit=5&offset=0"
  );
