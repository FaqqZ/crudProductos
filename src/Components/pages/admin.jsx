import ProductList from '../sections/ProductList'
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
const admin = () => {
    const navigate = useNavigate();
    return (
        <div>
            <div className='container my-3 py-3'>
                <Button variant='primary' onClick={()=>{navigate('/crear-productos')}}>Crear producto</Button>
            </div>
            <ProductList />
        </div>
    );
};

export default admin;