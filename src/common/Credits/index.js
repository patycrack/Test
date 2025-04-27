import {
  FullName,
  PersonLink,
  Portrait,
  PortraitBackground,
  Role,
  Storage,
  Tile,
} from "./styled";

// Componente funcional que recibe datos de una persona (foto, nombre, rol, id) y genera su tarjeta enlazada
const Credits = ({ path, name, role, id }) => (
  <PersonLink
    key={name}
    to={`/people/${id}`}
  >
    <Tile>
      <PortraitBackground>
        {path ? ( // Si hay imagen disponible, la muestra; si no, deja el espacio vacío
          <Portrait
            isPath
            src={`https://image.tmdb.org/t/p/w500/${path}`}
          />
        ) : (
          <Portrait />
        )}
      </PortraitBackground>
      <Storage>
        <FullName>{name}</FullName> {/* Nombre de la persona */}
        <Role>{role}</Role> {/* Rol o personaje interpretado */}
      </Storage>
    </Tile>
  </PersonLink>
);

export default Credits; // Exporta el componente para usarlo en otros lugares

