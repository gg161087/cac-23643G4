import "./Institucional.css";
import Logo from "../assets/logo/logo2.png";

const ContenidoInstitucional = () => {
  return (
    <div className="contenido-institucional">
      <img
        src={Logo}
        alt="Logo Argonauta"
        className="logo-empresa"
      />
      <div className="parrafos-institucionales">
        <p>
          Somos una empresa que comercializa tecnología, artículos para el hogar
          y motocicletas, fundada en 1980 en la provincia de Chaco (Argentina).
          El crecimiento ininterrumpido nos permitió contar en la actualidad con
          más de 100 sucursales distribuidas en 17 provincias del país.
        </p>
        <p>
          Nuestra visión estratégica y clara, nos posicionó como la empresa
          número uno en el Norte Argentino y de allí crecer al resto del país.
          Para mantener esta posición, continuamos con la estrategia de
          expansión respaldada en las bases de nuestra misión, la cual es
          compartida y sostenida por toda la organización. El compromiso de
          todas las personas que componemos <span className="span1">Itechnology</span> es continuar superándonos
          para brindar cada vez más y mejores servicios a nuestros clientes. La
          identificación de los colaboradores con nuestros objetivos y valores,
          ha permitido el crecimiento mutuo: nuestro equipo está conformado por
          2.000 colaboradores, quienes son parte del crecimiento sostenido de la
          Empresa en los 36 años de trayectoria.
        </p>
      
      </div>
      <div className="vision-mision-valores">
        <h2 className="titulo">Visión y Misión</h2>
        <p>
          <strong>Visión:</strong> ser una empresa con liderazgo nacional,
          focalizada especialmente en la satisfacción de nuestros clientes.
        </p>
        <p>
          <strong>Misión:</strong> somos una empresa nacional que vende
          productos y servicios con el fin de mejorar la calidad de vida de
          nuestros clientes y colaboradores, garantizando compromiso, confianza
          y calidad.
        </p>
        <h2 className="titulo">Nuestros Valores</h2>
        <ul>
          <li>Lideramos con el ejemplo.</li>
          <li>Ponemos pasión en lo que hacemos.</li>
          <li>Valoramos las personas.</li>
          <li>Nos orientamos al cliente.</li>
          <li>Nos comprometemos con los resultados.</li>
          <li>Trabajamos en equipo.</li>
          <li>Actuamos con integridad.</li>
          <li>Nos comprometemos con la comunidad.</li>
        </ul>
      </div>
    </div>
  );
};

export default ContenidoInstitucional;
