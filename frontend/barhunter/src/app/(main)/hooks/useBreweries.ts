import { useQuery } from "@tanstack/react-query";
import { fetchBreweries } from "../api/breweries";
import { Brewery } from "../types";

export const useBreweries = (perPage = 10, state?: string) => {
  return useQuery<Brewery[]>({
    queryKey: ["breweries", perPage, state],
    queryFn: () => fetchBreweries(perPage, state),
  });
};
