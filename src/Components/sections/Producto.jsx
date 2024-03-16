import { Button } from "react-bootstrap";

const Producto = ({ producto }) => { // Añade las llaves alrededor de producto para desestructurar el objeto
  return (
    <>
      <tr>
        <td>{producto.id}</td>
        <td>{producto.title}</td>
        <td>{producto.description}</td>
        <td>{producto.category}</td>
        <td className="d-flex justify-content-between">
            <Button type="button" variant="warning">
                Editar
            </Button>
            <Button type="button" variant="danger">
                Eliminar
            </Button>
        </td>
      </tr>
    </>
  );
};

export default Producto;
