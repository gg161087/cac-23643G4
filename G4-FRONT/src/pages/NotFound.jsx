import { Link } from "react-router-dom"

export const NotFound = () => {
    return (
        <div style={{ padding: "1rem" }}>
            <h1>404 ROUTE NOT FOUND</h1>
            <Link to="/">VOLVER AL INICIO</Link>
        </div>
    )
};
