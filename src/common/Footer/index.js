import Button from "./Button";
import { Counter, Span, Wrapper } from "./styled"; 
import { useQueryParameter, useReplaceQueryParameter } from "../../core/queryParameters";

const Footer = ({ totalPages }) => {
  // Obtengo el número de página actual desde los parámetros de la URL o asumo la página 1
  const queryparam = +useQueryParameter("page");
  const page = queryparam ? queryparam : 1;
  
  // Defino el número máximo de páginas, limitando a 500
  const lastPageNumber = totalPages > 500 ? 500 : totalPages;

  // Función para actualizar el parámetro de la URL con la nueva página
  const replaceQueryParameter = useReplaceQueryParameter();
  const setPage = (page) => {
    replaceQueryParameter({ key: "page", value: page });
  };

  // Funciones de navegación de páginas
  const firstPage = () => setPage(1);
  const nextPage = () => { if (page < lastPageNumber) setPage(page + 1); };
  const prevPage = () => { if (page !== 1) setPage(page - 1); };
  const lastPage = () => setPage(lastPageNumber);

  return (
    <Wrapper>
      {/* Botones de navegación entre páginas */}
      <Button disabled={page === 1} onClick={firstPage} title="First" mobile="true" />
      <Button disabled={page === 1} onClick={prevPage} title="Previous" />
      <Counter>
        Page <Span>{page}</Span> of <Span>{lastPageNumber}</Span>
      </Counter>
      <Button disabled={page === lastPageNumber} onClick={nextPage} rotate title="Next" />
      <Button disabled={page === lastPageNumber} onClick={lastPage} rotate title="Last" mobile="true" />
    </Wrapper>
  );
};

export default Footer;
