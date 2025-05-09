import styled, { css } from "styled-components"; 
import notFound from "../images/camera.svg"; // Imagen por defecto cuando no hay póster.
import personNotFound from "../images/profile.svg"; // Imagen por defecto para personas no encontradas.

export const Container = styled.div`
  // Contenedor principal con diseño de grid para la página de detalle.
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 40px;
  padding: 40px;
  background-color: ${({ theme }) => theme.colors.detailsTile.background};
  box-shadow: ${({ theme }) => theme.boxShadow};

  // Responsividad: se ajusta para pantallas pequeñas.
  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    grid-template-areas:
      "image content content"
      "description description description";
    grid-template-rows: auto 1fr;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 26px;
    gap: 26px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    padding: 16px;
    gap: 16px;
  }
`;

export const ImageBackground = styled.div`
  // Estilo de fondo para la imagen (póster o perfil) con opción de imagen por defecto.
  display: flex;
  justify-content: center;
  align-self: center;
  width: 312px;
  max-height: 464px;
  border-radius: 5px;
  background-image: url(${({ person }) => person ? personNotFound : notFound});
  background-size: 35%;
  background-repeat: no-repeat;
  background-position: center;
  background-color: ${({ theme }) => theme.colors.detailsTile.backgroundImage};

  // Responsividad: se ajusta para pantallas más pequeñas.
  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    grid-area: image;
    width: 248px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 164px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tiny}) {
    width: 114px;
  }
`;

export const Image = styled(({ isPoster, ...props }) =>
  isPoster ? <img {...props} alt="poster" /> : <div {...props} />
)`
  width: 100%;
  aspect-ratio: 2/3; // Proporción de la imagen para el póster.
  border-radius: 5px;
`;

export const Content = styled.div`

  display: flex;
  flex-direction: column;
  padding: 8px 0 8px;
  gap: 24px;
  color: ${({ theme }) => theme.colors.detailsTile.primaryText};

  // Responsividad para pantallas más pequeñas.
  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    gap: 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    grid-area: content;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    gap: 8px;
  }
`;

export const Title = styled.h1`
  // Estilo para el título de la película o persona.
  margin: 0;
  font-weight: 600;
  font-size: 36px;
  line-height: 1.2;

  // Responsividad: ajuste de tamaño para pantallas pequeñas.
  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    font-size: 32px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 24px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    font-size: 22px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tiny}) {
    font-size: 16px;
  }
`;

export const Year = styled.p`
  // Estilo para el año de estreno de la película.
  margin: 0;
  font-weight: 400;
  font-size: 22px;
  line-height: 1.2;

  // Responsividad: ajuste de tamaño para pantallas móviles.
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 18px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    font-size: 13px;
  }
`;

export const Properties = styled.div`
  // Contenedor para las propiedades de la película (por ejemplo, producción, fecha de estreno, etc.).
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Property = styled.div`
  // Estilo de cada propiedad (por ejemplo, nombre del país de producción).
  display: flex;
  flex-wrap: wrap;
`;

export const PropertyText = styled.p`
  // Estilo para los textos de las propiedades (como producción, fecha de estreno, etc.).
  margin: 0;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.2;

  // Responsividad: ajuste de tamaño para pantallas móviles.
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    font-size: 12px;
  }

  ${({ $big }) =>
    $big &&
    css`
      @media (max-width: ${({ theme }) => theme.breakpoints.tiny}) {
        display: none;
      }
    `}

  ${({ $small }) =>
    $small &&
    css`
      display: none;

      @media (max-width: ${({ theme }) => theme.breakpoints.tiny}) {
        display: block;
      }
    `}

  ${({ entitled }) =>
    entitled &&
    css`
      color: ${({ theme }) => theme.colors.detailsTile.secondaryText};
      margin-right: 8px;

      @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
        display: none;
      }
    `}
`;

export const Description = styled.p`
  // Estilo para la descripción de la película o persona.
  margin: 0;
  font-weight: 400;
  font-size: 20px;
  line-height: 1.6;

  // Responsividad: ajuste de tamaño para pantallas móviles.
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    font-size: 14px;
  }

  ${({ big }) =>
    big &&
    css`
      @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
        display: none;
      }
    `}

  ${({ small }) =>
    small &&
    css`
      display: none;

      @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
        display: block;
      }
    `}
`;

