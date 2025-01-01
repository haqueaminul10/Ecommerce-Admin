import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import '../../styles/productList.css';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
const ProductList = () => {
  const navigate = useNavigate();
  return (
    <div className='productListContainer'>
      <div className='productListHeader'>
        <h2>All Product List</h2>

        <div className='productListHeaderRight'>
          <div>
            <button
              onClick={() => navigate('/products/add')}
              className='addButtonProduct'
            >
              Add Product
            </button>
          </div>
          <div className='selectionList'>
            <label htmlFor='product'></label>
            <select name='product' id='product'>
              <option value='this week'>This week</option>
              <option value='this month'>This month</option>
              <option value='this year'>This year</option>
            </select>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default ProductList;
