import React from "react";
import { ContextType, Country } from "../types/types";

export const Context = React.createContext<ContextType>({
  countries: [],
  setCountries: () => {},
  country: [],
  setCountry: () => {},
  inputValue: "",
  setInputValue: () => {},
  switchTheme: true,
  setSwitchTheme: () => {},
  switchDropDown: true,
  setSwitchDropDown: () => {},
  selectedRegion: "All",
  setSelectedRegion: () => {},
  filteredCountries: [],
  setFilteredCountries: () => {},
  isLoading: false,
  setIsLoading: () => {},
});

export const ContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [countries, setCountries] = React.useState<Country[]>([]);
  const [country, setCountry] = React.useState<Country[]>([]);
  const [inputValue, setInputValue] = React.useState<string>("");
  const [switchTheme, setSwitchTheme] = React.useState<boolean>(true);
  const [switchDropDown, setSwitchDropDown] = React.useState<boolean>(true);
  const [selectedRegion, setSelectedRegion] = React.useState<string>("");
  const [filteredCountries, setFilteredCountries] = React.useState<Country[]>(
    []
  );
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const contextValues: ContextType = {
    countries,
    setCountries,
    country,
    setCountry,
    inputValue,
    setInputValue,
    switchTheme,
    setSwitchTheme,
    switchDropDown,
    setSwitchDropDown,
    selectedRegion,
    setSelectedRegion,
    filteredCountries,
    setFilteredCountries,
    isLoading,
    setIsLoading,
  };

  return <Context.Provider value={contextValues}>{children}</Context.Provider>;
};
