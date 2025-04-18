"use client";

import { Slide } from "./components";

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-white mb-6">Todas las opciones</h1>
      <div className="max-w-full overflow-hidden">
        <Slide>
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="bg-blue-200 p-4 rounded-xl shadow">
              Card {i}
            </div>
          ))}
        </Slide>
      </div>
      <h1 className="text-3xl font-bold text-white mb-6">
        Opciones en California
      </h1>
    </div>
  );
}
