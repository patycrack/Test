import { Fragment } from "react";
import { Tag, Tags } from "../Tags"; 
import {
  Rate,
  RateBox,
  SmallText,
  Star,
  TextBox,
} from "../../features/movieDetails/MovieDetailsPage/Movie/Rating/index"; 
import {
  Container,
  Content,
  Description,
  Image,
  ImageBackground,
  Properties,
  Property,
  PropertyText,
  Title,
  Year,
} from "./styled"; 
import { useLocation } from "react-router-dom"; // Usamos "useLocation" para determinar si estamos en una página de persona o película.

const DetailsTile = ({
  poster,
  title,
  release,
  production,
  dateBirth,
  placeBirth,
  genres,
  vote,
  votes,
  description,
}) => {
  const location = useLocation(); // Determinamos la ruta actual.

  return (
    <Container>
      {/* Fondo de imagen adaptado dependiendo de si es persona o película */}
      <ImageBackground
        person={location.pathname.includes("people") ? true : false}
      >
        {poster ? (
          <Image
            isPoster
            src={`https://image.tmdb.org/t/p/w500/${poster}`} // Cargamos el póster si está disponible
          />
        ) : (
          <Image />
        )}
      </ImageBackground>

      <Content>
        <Title>{title}</Title>
        {release && <Year>{release.slice(0, 4)}</Year>} {/* Año de estreno */}

        <Properties>
          {/* Mostrar los países de producción */}
          {production && (
            <Property>
              <PropertyText entitled>Production:</PropertyText>
              {production.map((country, index, countries) => (
                <Fragment key={index}>
                  <PropertyText $big key={country.name}>{country.name}</PropertyText>
                  <PropertyText $small key={country.iso_3166_1}>{country.iso_3166_1}</PropertyText>
                </Fragment>
              ))}
            </Property>
          )}

          {/* Mostrar la fecha de estreno */}
          {release && (
            <Property>
              <PropertyText entitled>Release date:</PropertyText>
              <PropertyText>{release}</PropertyText>
            </Property>
          )}

          {/* Mostrar fecha y lugar de nacimiento si es una persona */}
          {dateBirth && (
            <Property>
              <PropertyText entitled>Date of birth:</PropertyText>
              <PropertyText>{dateBirth}</PropertyText>
            </Property>
          )}
          {placeBirth && (
            <Property>
              <PropertyText entitled>Place of birth:</PropertyText>
              <PropertyText>{placeBirth}</PropertyText>
            </Property>
          )}
        </Properties>

        {/* Mostrar géneros de la película */}
        {genres && (
          <Tags details>
            {genres.map((genre) => (
              <Tag key={genre.id}>{genre.name}</Tag>
            ))}
          </Tags>
        )}

        {/* Mostrar calificación si está disponible */}
        {vote > 0 && votes && (
          <RateBox tile>
            <Star $mini />
            <TextBox>
              <Rate tile>{vote.toFixed(1)}</Rate> {/* Muestra la calificación */}
              <SmallText tile $big>/ 10</SmallText>
              <SmallText tile>{votes} votes</SmallText>
            </TextBox>
          </RateBox>
        )}

        {/* Descripción de la película o persona */}
        <Description big>{description}</Description>
      </Content>

      <Description small>{description}</Description> {/* Descripción en formato pequeño */}
    </Container>
  );
};

export default DetailsTile;
