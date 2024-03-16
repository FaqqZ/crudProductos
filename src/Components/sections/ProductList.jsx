import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import Producto from "./Producto"; 

const ProductList = () => {
    const [productos, setProductos] = useState([]);
    const API = import.meta.env.VITE_API;

    const getProductos = async () => {
        try {
            const response = await fetch(`${API}/productos`);
            const resJson = await response.json();
            setProductos(resJson);
        } catch (error) {
            console.error('error', error);
        }
    }

    useEffect(() => {
        getProductos();
    }, []);

    return (
        <div>
            <h2>SOY UNA LISTA DE PRODUCTOS</h2>

            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Titulo</th>
                        <th>Descripción</th>
                        <th>Categoría</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {productos.map((element) => {
                        return (
                            <Producto producto={element} key={element.id} />
                        );
                    })}
                </tbody>
            </Table>
        </div>
    );
};

export default ProductList;

