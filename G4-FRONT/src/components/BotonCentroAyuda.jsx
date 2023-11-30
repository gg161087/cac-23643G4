import "./ContenidoCentroAyuda.css";

export const BotonCentroAyuda = ({ imagenSrc, altTexto, titulo, onClick, linkTo }) => {
  return (
    <a href={linkTo} className="boton-con-logo">
      <img
        src={imagenSrc}
        alt={altTexto}
        // className="boton"
        style={{ maxWidth: "100%", height: "auto" }}
        onClick={() => onClick(titulo)}
      />
    </a>
  );
};