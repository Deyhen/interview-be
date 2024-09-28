export interface PopulationData {
  year: number;
  population: number;
}

export interface CountryInfoResponse {
  borders: string[];
  populationData: PopulationData[];
  flagUrl: string;
}
export interface BordersResponse {
  commonName: string;
  officialName: string;
  countryCode: string;
  region: string;
  borders: [string];
}
export interface FlagResponse {}
