import { useContext, useRef } from 'react';
import { EditorContext } from '../../../context/EditorContext';
import './ImageElement.css';

const ImageElement = ({ component }) => {
  const { updateComponent, isPreviewMode } = useContext(EditorContext);
  const fileInputRef = useRef(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        updateComponent(component.id, { src: event.target.result });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="image-element">
      {component.props.src ? (
        <img
          src={component.props.src}
          alt={component.props.alt}
          style={{ width: component.props.width }}
        />
      ) : (
        <div className="image-placeholder">
          <span>No Image</span>
        </div>
      )}
      {!isPreviewMode && (
        <>
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleImageUpload}
            accept="image/*"
            style={{ display: 'none' }}
          />
          <button
            className="upload-button"
            onClick={() => fileInputRef.current.click()}
          >
            Upload Image
          </button>
        </>
      )}
    </div>
  );
};

export default ImageElement;