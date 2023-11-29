const BotonCentroAyuda = ({ imagenSrc, altTexto, titulo, onClick, linkTo }) => {
  return (
    <a href={linkTo} className="boton-con-logo">
      <img
        src={imagenSrc}
        alt={altTexto}
        className="boton"
        onClick={() => onClick(titulo)}
      />
    </a>
  );
};

export default BotonCentroAyuda;
