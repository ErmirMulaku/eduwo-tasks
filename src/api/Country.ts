import { apiRequest } from "./Api";
import objectToQueryString from "../lib/helpers/objectToQueryString";
export interface Country {
  Name: string;
  Alpha2Code: string;
  Alpha3Code: string;
  NativeName: string;
  Region: string;
  SubRegion: string;
  Latitude: string;
  Longitude: string;
  Area: number;
  NumericCode: number;
  NativeLanguage: string;
  CurrencyCode: string;
  CurrencyName: string;
  CurrencySymbol: string;
  Flag: string;
  FlagPng: string;
}

export interface GetCountriesInput {
  pRegion?: string;
  pName?: string;
}
export type GetCountriesResponse = {
  isSuccess: boolean;
  UserMessage: null | string;
  TechnicalMessage: string | null;
  TotalCount: number;
  Response: Array<Country>;
};

export const getCountries = async (data: GetCountriesInput) =>
  apiRequest<undefined, GetCountriesResponse>(
    "get",
    `v1/Country/getCountries?${objectToQueryString({ ...data })}`
  );
