import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { validarCategoria } from "../../helpers/validation";
import clsx from 'clsx';
import * as Yup from 'yup'
import { useFormik } from "formik";
const crearProductos = () => {
  //Propiedades para productos: TITULO - DESCRIPCIÓN - CATEGORIA - además va a tener un ID único
  //const [title, setTitle] = useState("");
  //const [description, setDescription] = useState("");
  //const [category, setCategory] = useState("");

const ProductoSchema = Yup.object().shape(
  {
  title: Yup.string().min(4,'Mínimo 4 carácteres').max(20,'Máximo 20 carácteres').required('El titulo es requerido.'),
  description: Yup.string().max(200,'Máximo 200 carácteres').required('La descripción es requerida.'),
  category: Yup.string().required('La categoria es requerida')
  }
  )

  const initialValues = {
    title: "",
    description: "",
    category: ""
  }

  const  formik=useFormik({
    initialValues: initialValues,
    validationSchema: ProductoSchema,
    validateOnBlur:true,
    validateOnChange:true,
    onSubmit: (values) => {
      console.log(values);
    }
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Desde submit");
    const newProd = {
      title: title,
      description: description,
      category: category,
    };
    console.log("Nuevo producto:", newProd);
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
            //value={title}
            //onChange={(e) => setTitle(e.target.value)}
            name='title'
            {...formik.getFieldProps('title')}
            className={clsx('form-control',
            {
              'is-invalid':formik.touched.title && formik.errors.title
            },{
              'is-valid':formik.touched.title &&!formik.errors.title
            })}
          />

          {formik.touched.title && formik.errors.title && (
            <div className="mt-2 text-danger fw-bolder">
              <span role="alert">{formik.errors.title}</span>
            </div>
          )}
          
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
            // value={description}
            // onChange={(e) =>setDescription(e.target.value)}
            named='description'
            {...formik.getFieldProps('description')}
            className={clsx('form-control',
            {
              'is-invalid':formik.touched.description && formik.errors.description
            },{
              'is-valid':formik.touched.description &&!formik.errors.description
            })}
          />
        </Form.Group>

        {formik.touched.description && formik.errors.description &&(
            <div className="mt-2 text-danger fw-bolder">
              <span role="alert">{formik.errors.description}</span>
            </div>
          )}

        <Form.Group className="mb-3" controlId="category">
          <Form.Label>Categoria</Form.Label>
          <select
            class="form-select"
            aria-label="Default select example"
            /*value={category}
            onChange={(e) =>{
                validarCategoria(e.target.value);
                let resultado = validarCategoria(e.target.value);
                console.log('resultado de validar:',resultado)
                setCategory(e.target.value)}}

                className={clsx("form-select", {
                  "is-valid": validarCategoria(category)},
                  {
                    "!is-invalid": validarCategoria(category)
                  })}
            */>
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
