import { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const Map = ({ ubicacion }) => {
  useEffect(() => {
    // Configuración del mapa
    const map = L.map("map").setView([ubicacion.lat, ubicacion.lng], 13);

    // Capa del mapa (puedes cambiar la URL del mapa según tus necesidades)
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(
      map
    );

    // Marcador en la ubicación
    L.marker([ubicacion.lat, ubicacion.lng]).addTo(map);
  }, [ubicacion]);

  return <div id="map" style={{ height: "300px" }}></div>;
};

export default Map;
