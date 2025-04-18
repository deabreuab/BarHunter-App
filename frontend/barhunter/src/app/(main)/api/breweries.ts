import { Brewery } from "../types";

export const fetchBreweries = async (
  perPage = 10,
  state?: string
): Promise<Brewery[]> => {
  let url = `https://api.openbrewerydb.org/v1/breweries?per_page=${perPage}`;
  if (state) url += `&by_state=${state}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error("Error al obtener datos");
  return res.json();
};

export const fetchBrewery = async (id: string): Promise<Brewery> => {
    const res = await fetch(`https://api.openbrewerydb.org/v1/breweries/${id}`);
    if (!res.ok) throw new Error("Error al obtener datos");
    return res.json();
};