import { Form, Button } from "react-bootstrap";
import clsx from "clsx";
import * as Yup from "yup";
import { useFormik } from "formik";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
const crearProductos = () => {
  //Propiedades para productos: TITULO - DESCRIPCIÓN - CATEGORIA - además va a tener un ID único

  const API = import.meta.env.VITE_API;
  //utilizamos useNavigate de React Router Dom
  const navigate = useNavigate();
  //inicio config FORMIK
  const ProductoSchema = Yup.object().shape({
    title: Yup.string()
      .min(4, "Mínimo 4 carácteres")
      .max(20, "Máximo 20 carácteres")
      .required("El titulo es requerido."),
    description: Yup.string()
      .max(200, "Máximo 200 carácteres")
      .required("La descripción es requerida."),
    category: Yup.string().required("La categoria es requerida"),
  });

  const initialValues = {
    title: "",
    description: "",
    category: "",
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: ProductoSchema,
    validateOnBlur: true,
    validateOnChange: true,
    onSubmit: (values) => {
      console.log("Valores de formik", values);
      Swal.fire({
        title: "¿Estás seguro de crear éste producto?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Guardar",
      }).then(async (result) => {
        if (result.isConfirmed) {
          try {
            const response = await fetch(`${API}/productos`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(values),
            });
            //console.log("STATUS", response);
            console.log(response.status);
            if (response.status === 201) {
              formik.resetForm();
              Swal.fire({
                title: "Producto creado con éxito!",
                icon: "success",
              });
            }
          } catch (error) {
            console.log("ERROR--->", error);
          }
        }
      });
    },
  });
  //fin formik config
  return (
    <div className="container py-3 my-3">
      <Button
        variant="danger"
        onClick={() => {
          navigate(-1);
        }}
      >
        Volver al inicio
      </Button>
      <div className="text-center">
        <h2>Crear Productos</h2>
      </div>
      <Form onSubmit={formik.handleSubmit}>
        <Form.Group className="mb-3" controlId="title">
          <Form.Label>Titulo</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese el título del producto"
            minLength={4}
            maxLength={20}
            name="title"
            {...formik.getFieldProps("title")}
            className={clsx(
              "form-control",
              {
                "is-invalid": formik.touched.title && formik.errors.title,
              },
              {
                "is-valid": formik.touched.title && !formik.errors.title,
              }
            )}
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
            named="description"
            {...formik.getFieldProps("description")}
            className={clsx(
              "form-control",
              {
                "is-invalid":
                  formik.touched.description && formik.errors.description,
              },
              {
                "is-valid":
                  formik.touched.description && !formik.errors.description,
              }
            )}
          />
        </Form.Group>

        {formik.touched.description && formik.errors.description && (
          <div className="mt-2 text-danger fw-bolder">
            <span role="alert">{formik.errors.description}</span>
          </div>
        )}

        <Form.Group className="mb-3" controlId="category">
          <Form.Label>Categoria</Form.Label>
          <select
            type="form-select"
            aria-label="Default select example"
            className={clsx("form-select", {
              "is-valid": formik.touched.category && !formik.errors.category,
              "is-invalid": formik.touched.category && formik.errors.category,
            })}
            {...formik.getFieldProps("category")}
          >
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
