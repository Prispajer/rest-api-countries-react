import { Dispatch, SetStateAction } from "react";

export type Country = {
  name: {
    common: string;
    official: string;
  };
  population: number;
  region: string;
  subregion: string;
  capital: string[];
  flags: {
    svg: string;
  };
  tld: string[];
  currencies?: { [key: string]: { name: string; symbol: string } };
  languages?: { [key: string]: string };
  borders?: string[];
  cca3?: string;
} | null;

export interface ContextType {
  countries: Country[];
  setCountries: Dispatch<SetStateAction<Country[]>>;
  country: Country[];
  setCountry: Dispatch<SetStateAction<Country[]>>;
  inputValue: string;
  setInputValue: Dispatch<SetStateAction<string>>;
  switchTheme: boolean;
  setSwitchTheme: Dispatch<SetStateAction<boolean>>;
  switchDropDown: boolean;
  setSwitchDropDown: Dispatch<SetStateAction<boolean>>;
  selectedRegion: string;
  setSelectedRegion: Dispatch<SetStateAction<string>>;
  filteredCountries: Country[];
  setFilteredCountries: Dispatch<SetStateAction<Country[]>>;
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
}
