import { useState, useRef, useEffect } from 'react';
import '../../styles/addProduct.css';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

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
      </form>
    </div>
  );
};

export default AddProduct;
