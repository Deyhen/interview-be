import { Router } from 'express';
import { getCountries, getCountry } from '../controllers/countries.controller';

const CountriesRouter: Router = Router();

CountriesRouter.get('', getCountries);
CountriesRouter.get('/:country', getCountry);

export default CountriesRouter;
