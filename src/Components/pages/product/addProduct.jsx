import '../../styles/addProduct.css';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
const AddProduct = () => {
  return (
    <div className='addproductContainer'>
      <div className='productImageSection'>
        <h3 className='productPhotoTitle'>Add Product Photo</h3>

        <hr />
        <section className='drag-area-container'>
          <div className='drag-area'>
            <div className='icon'>
              <CloudUploadIcon
                sx={{ color: '#e6612a', fontSize: '60px' }}
                className='select'
              />
            </div>
            <div className='text'>
              <span className='select'>Drop your images here, or </span>
              <span className='select mark'> click to browse</span>
              <input type='file' multiple className='file' />
            </div>
          </div>
        </section>
      </div>

      <div className='productInfoSection'>
        <h3 className='productInfoTitle'>Product Information</h3>
        <hr />

        <section className='productInfoForm'>
          <div className='formRow'>
            <div className='input-div'>
              <p className='input-label'>Product Name</p>
              <input
                type='text'
                placeholder='Items Name'
                className='addProductInput'
              />
            </div>
            <div className='input-div'>
              <p>Product Categories</p>
              <label htmlFor='categories'></label>
              <select name='categories' id='categories'>
                <option value='mens'>Mens</option>
                <option value='womens'>Womens</option>
                <option value='child'>Children</option>
              </select>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AddProduct;
