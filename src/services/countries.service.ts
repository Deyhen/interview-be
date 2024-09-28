import { Request, Response } from 'express';
import axios from 'axios';
import * as dotenv from 'dotenv';
import {
  BordersResponse,
  CountryInfoResponse,
  PopulationData,
} from '../Models/country.model';

dotenv.config();

export const getAvailableCountries = async () => {
  const response = await axios.get(
    `${process.env.NAGER_API_URL}/v3/AvailableCountries`
  );
  return response.data;
};


export const getCountryInfo = async (countryCode: string) => {
  const bordersResponse: BordersResponse = (
    await axios.get(
      `${process.env.NAGER_API_URL}/v3/CountryInfo/${countryCode}`
    )
  ).data;

  const borders: string[] = bordersResponse.borders;
  const populationResponse = (
    await axios.post(
      `${process.env.CONTRIESNOW_API_URL}/v0.1/countries/population`,
      {
        country: bordersResponse.commonName,
      }
    )
  ).data;

  const populationData: PopulationData[] =
    populationResponse.data.populationCounts;

  const flagResponse = (
    await axios.post(
      `${process.env.CONTRIESNOW_API_URL}/v0.1/countries/flag/images`,
      {
        country: bordersResponse.commonName,
      }
    )
  ).data;

  const flagUrl: string = flagResponse.data.flag;

  const countryInfo: CountryInfoResponse = {
    borders,
    populationData,
    flagUrl,
  };

  return countryInfo;
};
