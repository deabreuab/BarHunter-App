import { Card, Slide } from "../components";

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl p-4 font-bold text-white">Todas las opciones</h1>
      <div className="max-w-full overflow-hidden p-4">
        <Slide>
          {[1, 2, 3, 4].map((i) => (
            <Card key={i} />
          ))}
        </Slide>
      </div>
      <h1 className="text-3xl p-4 font-bold text-white">
        Opciones en California
      </h1>

      <div className="max-w-full overflow-hidden p-4">
        <Slide>
          {[1, 2, 3].map((i) => (
            <Card key={i} />
          ))}
        </Slide>
      </div>
    </div>
  );
}
