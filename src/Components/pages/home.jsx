import { Container, Row } from "react-bootstrap";
import { useState, useEffect } from "react";
import Axios from "axios";

import CardProductos from "../sections/CardProductos";
const home = () => {
  const [productos, setProductos] = useState([]);
  const API = import.meta.env.VITE_API;

  const getProductos = async () => {
    try {
      const response = await Axios.get(`${API}/productos`);
      console.log("response axios", response);
      setProductos(response.data);
    } catch (error) {
      console.error("error", error);
    }
  };

  useEffect(() => {
    getProductos();

    return () => {
      setProductos([]);
    };
  }, []);

  return (
    <div>
      <div className="text-center">
        <h1>Desde home</h1>
        <h2>Catálogo de Productos</h2>
      </div>

      <div className="d-flex my-5">
        <Container>
          <Row>
            {productos.map((element, index) => {
              return <CardProductos producto={element} key={index} />;
            })}
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default home;
