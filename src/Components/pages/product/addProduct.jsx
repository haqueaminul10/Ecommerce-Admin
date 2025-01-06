import { useState, useRef, useEffect } from 'react';
import '../../styles/addProduct.css';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { productSize, productColor } from './addProduct.json';
const AddProduct = () => {
  const initialProductDetails = {
    productName: '',
    productCategories: '',
    brandName: '',
    weight: '',
    gender: '',
    size: [],
    color: [],
    productDescription: '',
    quantity: '',
    tag: '',
    price: '',
    discountPrice: '',
  };
  const [images, setImages] = useState([]);
  const [isDragging, setIsDragging] = useState(false);
  const [productDetails, setProductDetails] = useState(initialProductDetails);
  const fileInputRef = useRef(null);

  const selectFiles = () => fileInputRef.current.click();

  const onFileSelect = (event) => {
    const files = Array.from(event.target.files);
    const validImages = files
      .filter((file) => file.type.startsWith('image/'))
      .filter((file) => !images.some((image) => image.name === file.name));

    const newImages = validImages.map((file) => ({
      name: file.name,
      url: URL.createObjectURL(file),
    }));

    setImages((prevImages) => [...prevImages, ...newImages]);
  };

  const deleteImage = (index) => {
    setImages((prevImages) => {
      const imageToRemove = prevImages[index];
      if (imageToRemove) URL.revokeObjectURL(imageToRemove.url);
      return prevImages.filter((_, i) => i !== index);
    });
  };

  const onDragOver = (event) => {
    event.preventDefault();
    setIsDragging(true);
  };

  const onDragLeave = () => setIsDragging(false);

  const onDrop = (event) => {
    event.preventDefault();
    setIsDragging(false);

    const files = Array.from(event.dataTransfer.files);
    const validImages = files
      .filter((file) => file.type.startsWith('image/'))
      .filter((file) => !images.some((image) => image.name === file.name));

    const newImages = validImages.map((file) => ({
      name: file.name,
      url: URL.createObjectURL(file),
    }));

    setImages((prevImages) => [...prevImages, ...newImages]);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setProductDetails({ ...productDetails, [name]: value });
  };

  const toogleSelectSize = (size) => {
    setProductDetails((prevDetails) => {
      const currentSize = prevDetails.size;
      if (currentSize.includes(size)) {
        return {
          ...prevDetails,
          size: currentSize.filter((s) => s !== size),
        };
      } else {
        return {
          ...prevDetails,
          size: [...currentSize, size],
        };
      }
    });
  };

  const toggleSelectColor = (color) => {
    setProductDetails((prevDetails) => {
      const currentColor = prevDetails.color;
      if (currentColor.includes(color)) {
        return {
          ...prevDetails,
          color: currentColor.filter((s) => s !== color),
        };
      } else {
        return {
          ...prevDetails,
          color: [...currentColor, color],
        };
      }
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const productData = {
      ...productDetails,
      images,
    };
    console.log(`📌 ~ handleSubmit ~ productData:`, productData);
    setProductDetails(initialProductDetails);
    setImages([]);
  };
  const handleCancel = () => {
    setProductDetails(initialProductDetails);
    setImages([]);
  };

  useEffect(() => {
    return () => {
      images.forEach((image) => {
        URL.revokeObjectURL(image.url);
      });
    };
  }, [images]);

  return (
    <div className='add-product-container content'>
      <form onSubmit={handleSubmit}>
        <section className='product-photo'>
          <h3 className='product-section-title'>Add Product Photo</h3>
          <hr />
          <div
            className='drag-area'
            onDragOver={onDragOver}
            onDragLeave={onDragLeave}
            onDrop={onDrop}
          >
            {isDragging ? (
              <span className='select'>Drop image here</span>
            ) : (
              <div>
                <div className='upload-icon'>
                  <CloudUploadIcon
                    sx={{ color: '#e6612a', fontSize: '60px' }}
                    onClick={selectFiles}
                  />
                </div>
                <div>
                  <span className='drag-drop-text'>
                    {' '}
                    Drag & Drop images here , or{'  '}
                  </span>

                  <span className='select clicktobrowse' onClick={selectFiles}>
                    Click To Browse
                  </span>
                </div>
              </div>
            )}

            <input
              type='file'
              name='file'
              multiple
              ref={fileInputRef}
              onChange={onFileSelect}
              accept='image/*'
            />
          </div>
          <div className='container'>
            {images.map((image, index) => (
              <div className='image' key={index}>
                <span
                  className='delete'
                  onClick={() => deleteImage(index)}
                  aria-label='Delete image'
                >
                  &times;
                </span>
                <img src={image.url} alt={image.name} />
              </div>
            ))}
          </div>
        </section>

        <section className='product-information'>
          <h3 className='product-section-title'>Product Information</h3>
          <hr />
          <div className='product-information-form'>
            <div className='form-row'>
              <div>
                <label htmlFor='productName' className='form-label'>
                  Product Name
                </label>
                <input
                  type='text'
                  placeholder='Items Name'
                  className='form-input'
                  name='productName'
                  value={productDetails.productName}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label htmlFor='productCategories' className='form-label'>
                  Product Categories
                </label>
                <select
                  name='productCategories'
                  id='productCategories'
                  value={productDetails.productCategories}
                  className='form-input'
                  onChange={handleInputChange}
                >
                  <option value='' hidden>
                    Choose a categories
                  </option>
                  <option value='mens'>Mens Collection</option>
                  <option value='womens'>Womens Collection</option>
                  <option value='child'>Children Collection</option>
                </select>
              </div>
            </div>
            <div className='form-row-2'>
              <div>
                <label htmlFor='brandName' className='form-label'>
                  Brand Name
                </label>
                <input
                  type='text'
                  placeholder='Brand Name'
                  className='form-input'
                  name='brandName'
                  value={productDetails.brandName}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label htmlFor='weight' className='form-label'>
                  Weight
                </label>
                <input
                  type='number'
                  name='weight'
                  value={productDetails.weight}
                  onChange={handleInputChange}
                  placeholder='In grm & kg'
                  className='form-input'
                />
              </div>
              <div>
                <label htmlFor='gender' className='form-label'>
                  Gender
                </label>
                <select
                  name='gender'
                  id='gender'
                  value={productDetails.gender}
                  onChange={handleInputChange}
                  className='form-input'
                >
                  <option value='' hidden>
                    Select Gender
                  </option>
                  <option value='men'>Men</option>
                  <option value='women'>Women</option>
                  <option value='other'>Others</option>
                </select>
              </div>
            </div>
            <div className='form-row'>
              <div>
                <label htmlFor='' className='form-label'>
                  Size :
                </label>
                <div>
                  {productSize &&
                    productSize.length > 0 &&
                    productSize.map((psize, index) => (
                      <span
                        key={index}
                        // className='size-button '
                        className={`size-button ${
                          productDetails.size.includes(psize) &&
                          'selected-size-button'
                        }`}
                        onClick={() => toogleSelectSize(psize)}
                      >
                        {psize}
                      </span>
                    ))}
                </div>
              </div>
              <div>
                <label htmlFor='' className='form-label'>
                  Colors :
                </label>
                <div className='color-buttons'>
                  {productColor &&
                    productColor.length > 0 &&
                    productColor.map((color, index) => (
                      <span
                        key={index}
                        className={`color-button ${
                          productDetails.color.includes(color)
                            ? 'selected-color-button'
                            : ''
                        }`}
                        title={color}
                        onClick={() => toggleSelectColor(color)}
                      >
                        <span
                          style={{
                            backgroundColor: color,
                          }}
                        ></span>
                      </span>
                    ))}
                </div>
              </div>
            </div>
            <div>
              <label htmlFor='productDescription' className='form-label'>
                Description
              </label>
              <textarea
                name='productDescription'
                id='productDescription'
                value={productDetails.productDescription}
                onChange={handleInputChange}
                placeholder='Short Description About The Product'
                className='product-descriptioin'
              />
            </div>
            <div className='form-row '>
              <div>
                <label htmlFor='quantity' className='form-label'>
                  Stock
                </label>
                <input
                  type='text'
                  name='quantity'
                  value={productDetails.quantity}
                  onChange={handleInputChange}
                  placeholder='Quantity'
                  className='form-input'
                />
              </div>
              <div>
                <label htmlFor='tag' className='form-label'>
                  Tag
                </label>
                <input
                  type='text'
                  className='form-input'
                  name='tag'
                  value={productDetails.tag}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </div>
        </section>

        <section className='product-price'>
          <h3 className='product-section-title'>Pricing Details</h3>
          <hr />
          <div className='product-information-form'>
            <div className='form-row'>
              <div>
                <label htmlFor='price' className='form-label'>
                  Price
                </label>
                <input
                  type='number'
                  placeholder='000'
                  className='form-input'
                  name='price'
                  value={productDetails.price}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label htmlFor='discountPrice' className='form-label'>
                  Discount Price
                </label>
                <input
                  type='number'
                  placeholder='000'
                  className='form-input'
                  name='discountPrice'
                  value={productDetails.discountPrice}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </div>
        </section>
        <section className='submit-button-part'>
          <div className='button-section'>
            <button className='create-button'>Create Product</button>
            <span className='cancel-button' onClick={handleCancel}>
              Cancel
            </span>
          </div>
        </section>
      </form>
    </div>
  );
};

export default AddProduct;
