// import type { Route } from "./+types/home";

export function meta({}: {}) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <div className="App">
      <div className="container">
        <h1 className="title">Currículo Fácil</h1>
        <div className="subtitle">Crie seu currículo de forma simples e profissional</div>
      </div>
    </div>
  );
}
