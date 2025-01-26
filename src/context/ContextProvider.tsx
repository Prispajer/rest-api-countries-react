import React, { createContext, useState } from "react";
import { ContextType, Country } from "../types/types";

export const Context = createContext<ContextType>({
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
  const [countries, setCountries] = useState<Country[]>([]);
  const [country, setCountry] = useState<Country[]>([]);
  const [inputValue, setInputValue] = useState<string>("");
  const [switchTheme, setSwitchTheme] = useState<boolean>(true);
  const [switchDropDown, setSwitchDropDown] = useState<boolean>(true);
  const [selectedRegion, setSelectedRegion] = useState<string>("All");
  const [filteredCountries, setFilteredCountries] = useState<Country[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

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
