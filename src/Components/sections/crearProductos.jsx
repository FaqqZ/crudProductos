import { Form, Button } from "react-bootstrap";
const crearProductos = () => {
  //Propiedades para productos: TITULO - DESCRIPCIÓN - CATEGORIA - además va a tener un ID único
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Desde submit')
  };
  return (
    <div className="container py-3 my-3">
      <div className="text-center">
        <h2>Crear Productos</h2>
      </div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="title">
          <Form.Label>Titulo</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese el título del producto"
            minLength={4}
            maxLength={20}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="description">
          <Form.Label>Descripción</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese una descripción"
            as="textarea"
            rows={3}
            minLength={4}
            maxLength={200}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="category">
          <Form.Label>Categoria</Form.Label>
          <select class="form-select" aria-label="Default select example">
            <option value="">Seleccione una categoría.</option>
            <option value="Bebidas">Bebidas</option>
            <option value="Alimentos">Alimentos</option>
            <option value="Limpieza">Limpieza</option>
          </select>
        </Form.Group>

        <Button variant="secondary" type="submit">
          Guardar
        </Button>
      </Form>
    </div>
  );
};

export default crearProductos;
