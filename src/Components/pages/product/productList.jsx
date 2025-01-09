import { useNavigate } from 'react-router-dom';
import '../../styles/productList.css';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { productList } from './addProduct.json';

const ProductList = () => {
  console.log(`📌 ~ productList:`, productList);

  const navigate = useNavigate();
  return (
    <div className='product-list-container content'>
      <section className='list-product-header'>
        <h3>All Product List</h3>
        <div>
          <button className='add-product-button'>Add Product</button>
          <select
            name='product-filter'
            id='product-filter'
            className='product-list-filter'
          >
            {/* <label htmlFor='product-filter'></label> */}
            <option value='this day'>This Day</option>
            <option value='this week'>This week</option>
            <option value='this month'>This month</option>
            <option value='this year'>This year</option>
          </select>
        </div>
      </section>
      <hr />
    </div>
  );
};

export default ProductList;
