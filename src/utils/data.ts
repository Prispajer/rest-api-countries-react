import { Country } from "../types/types";

export const fetchData = async (url: string) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Couldn't fetch any data in API");
    } else {
      const data = await response.json();
      return data;
    }
  } catch (error) {
    throw new Error(`There was problem while fetching the API: ${error}`);
  }
};

export function filterByRegion<T extends Country>(
  array: T[],
  region: string
): T[] {
  return array.filter((country: Country) => country?.region === region);
}

export function filterByName<T extends Country>(
  array: T[],
  value: string
): T[] {
  if (!array || array.length === 0) return [];
  return array.filter((country) =>
    country?.name.common.toLowerCase().includes(value.toLowerCase())
  );
}
