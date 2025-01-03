import { useState, useRef, useEffect } from 'react';
import '../../styles/addProduct.css';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { productSize, productColor } from './addProduct.json';
const AddProduct = () => {
  const [images, setImages] = useState([]);
  const [isDragging, setIsDragging] = useState(false);
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

  useEffect(() => {
    return () => {
      images.forEach((image) => {
        URL.revokeObjectURL(image.url);
      });
    };
  }, [images]);

  return (
    <div className='add-product-container'>
      <form>
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
                <label htmlFor='' className='form-label'>
                  Product Name
                </label>
                <input
                  type='text'
                  placeholder='Items Name'
                  className='form-input'
                />
              </div>
              <div>
                <label htmlFor='categories' className='form-label'>
                  Product Categories
                </label>
                <select
                  name='categories'
                  id='categories'
                  className='form-input'
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
                <label htmlFor='' className='form-label'>
                  Brand Name
                </label>
                <input
                  type='text'
                  placeholder='Brand Name'
                  className='form-input'
                />
              </div>
              <div>
                <label htmlFor='' className='form-label'>
                  Weight
                </label>
                <input
                  type='text'
                  placeholder='In grm & kg'
                  className='form-input'
                />
              </div>
              <div>
                <label htmlFor='categories' className='form-label'>
                  Gender
                </label>
                <select
                  name='categories'
                  id='categories'
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
                      <button key={index} className='size-button'>
                        {psize}
                      </button>
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
                      <button
                        key={index}
                        className='color-button'
                        title={color}
                        style={{
                          borderColor: color === '#FFFFFF' ? '#ddd' : 'black',
                        }}
                      >
                        <span
                          style={{
                            backgroundColor: color,
                          }}
                        ></span>
                      </button>
                    ))}
                </div>
              </div>
            </div>
            <div>
              <label htmlFor='' className='form-label'>
                Description
              </label>
              <textarea
                name=''
                id=''
                placeholder='Short Description About The Product'
                className='product-descriptioin'
              />
            </div>
            <div className='form-row '>
              <div>
                <label htmlFor='' className='form-label'>
                  Stock
                </label>
                <input
                  type='text'
                  placeholder='Quantity'
                  className='form-input'
                />
              </div>
              <div>
                <label htmlFor='' className='form-label'>
                  Tag
                </label>
                <input type='text' className='form-input' />
              </div>
            </div>
          </div>
        </section>
      </form>
    </div>
  );
};

export default AddProduct;
