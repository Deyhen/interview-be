import { Request, Response } from 'express';
import {
  getAvailableCountries,
  getCountryInfo,
} from '../services/countries.service';

export const getCountries = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const countries = await getAvailableCountries();
    res.status(200).json(countries);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching countries' });
  }
};

export const getCountry = async (req: Request, res: Response) => {
  try {
    const countryCode = req.params.country;
    const countryInfo = await getCountryInfo(countryCode);

    res.status(200).json(countryInfo);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching country data' });
  }
};
