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
            <Button
              variant='contained'
              size='small'
              onClick={() => navigate('/products/add')}
            >
              Add Product
            </Button>
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
      <div className='productTableContainer'>
        <table className='productTable'>
          <thead className='tableheader'>
            <tr>
              <th>Id</th>
              <th>Product Name & size</th>
              <th>Price</th>
              <th>Category</th>
              <th>Rating</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>sada</td>
              <td>dsa</td>
              <td>ads</td>
              <td>asd</td>
              <td>
                <div className='productTableAction'>
                  <div>
                    <VisibilityIcon />
                  </div>
                  <div>
                    {' '}
                    <EditIcon />
                  </div>
                  <div>
                    {' '}
                    <DeleteIcon />
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductList;
