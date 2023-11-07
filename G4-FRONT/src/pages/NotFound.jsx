import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <main style={{ padding: "1rem" }}>
      <h1>404 ROUTE NOT FOUND</h1>
      <Link to="/">VOLVER AL INICIO</Link>
    </main>
  );
};
