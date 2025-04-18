"use client";

import { Card, Slide } from "../components";
import { useBreweries } from "./hooks/useBreweries";

export default function Home() {
  // TODO: Evaluar caso de error
  const { data: allBreweries, isLoading } = useBreweries(10);
  const { data: californiaBreweries } = useBreweries(5, "california");

  return (
    <div>
      <h1 className="text-3xl p-4 font-bold text-white">Todas las opciones</h1>
      <div className="max-w-full overflow-hidden p-4">
        {isLoading && (
          <div className="flex flex-no-wrap gap-4 overflow-x-hidden">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="w-64 h-48 bg-gray-300 animate-pulse rounded-lg shadow-md m-2 shrink-0"
              ></div>
            ))}
          </div>
        )}
        <Slide>
          {allBreweries &&
            allBreweries.map((item) => <Card key={item.id} {...item} />)}
        </Slide>
      </div>
      <h1 className="text-3xl p-4 font-bold text-white">
        Opciones en California
      </h1>

      <div className="max-w-full overflow-hidden p-4">
        {isLoading && (
          <div className="flex flex-no-wrap gap-4 overflow-x-hidden">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="w-64 h-48 bg-gray-300 animate-pulse rounded-lg shadow-md m-2 shrink-0"
              ></div>
            ))}
          </div>
        )}
        <Slide>
          {californiaBreweries &&
            californiaBreweries.map((item) => <Card key={item.id} {...item} />)}
        </Slide>
      </div>
    </div>
  );
}
