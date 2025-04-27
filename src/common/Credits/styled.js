import { Link } from "react-router-dom";
import styled from "styled-components";
import profile from "../../common/images/profile.svg";

// Componente principal para cada tarjeta de actor/actriz
export const Tile = styled.article`
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.detailsTile.background}; // Fondo de la tarjeta
  box-shadow: ${({ theme }) => theme.boxShadow}; // Sombra de la tarjeta
  padding: 16px;
  gap: 8px;
  width: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoints.tiny}) {
    padding: 8px; // Menos padding en pantallas más pequeñas
  }
`;

// Fondo para el retrato, que usa una imagen de perfil por defecto
export const PortraitBackground = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  border-radius: 5px;
  background-image: url(${profile}); // Imagen de fondo predeterminada
  background-size: 35%;
  background-repeat: no-repeat;
  background-position: center;
  background-color: ${({ theme }) => theme.colors.detailsTile.backgroundImage}; // Fondo adicional
`;

// Retrato del actor/actriz. Si hay imagen, se carga, si no, muestra el fondo predeterminado.
export const Portrait = styled(({ isPath, ...props }) =>
  isPath ? <img {...props} alt="portrait" /> : <div {...props} />
)`
  width: 100%;
  border-radius: 5px;
  aspect-ratio: 2/3; // Proporción de imagen
`;

// Contenedor para el nombre y el rol del actor/actriz
export const Storage = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

// Nombre completo del actor/actriz
export const FullName = styled.p`
  margin: 0;
  font-weight: 500;
  font-size: 22px;
  line-height: 1.3;
  color: ${({ theme }) => theme.colors.primaryText};

  @media (max-width: ${({ theme }) => theme.breakpoints.tiny}) {
    font-size: 14px; // Tamaño de fuente más pequeño en pantallas pequeñas
  }
`;

// Rol o personaje interpretado por el actor/actriz
export const Role = styled.p`
  margin: 0;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.credits.role};

  @media (max-width: ${({ theme }) => theme.breakpoints.tiny}) {
    font-size: 13px; // Tamaño de fuente más pequeño en pantallas pequeñas
  }
`;

// Enlace que envuelve toda la tarjeta, redirigiendo a la página de detalles del actor/actriz
export const PersonLink = styled(Link)`
  display: flex;
  height: 100%;
  text-decoration: none;
  transition: transform 1s;

  &:hover {
    transform: scale(1.05); // Efecto de zoom al pasar el cursor sobre la tarjeta
  }
`;