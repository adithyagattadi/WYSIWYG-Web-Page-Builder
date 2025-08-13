import { useContext } from 'react';
import { EditorContext } from '../../context/EditorContext';
import './PropertiesPanel.css';

const PropertiesPanel = () => {
  const {
    components,
    selectedComponent,
    updateComponent,
    deleteComponent,
    isPreviewMode,
    setIsPreviewMode,
    canvasBgColor,
    setCanvasBgColor,
  } = useContext(EditorContext);

  const selectedComp = components.find((c) => c.id === selectedComponent);

  const handlePropertyChange = (propName, value) => {
    updateComponent(selectedComponent, { [propName]: value });
  };

  return (
    <div className="properties-panel">
      <h2>Properties</h2>

      {!selectedComp ? (
        <div className="canvas-properties">
          <h3>Canvas Properties</h3>
          <div className="property-group">
            <label>Background Color</label>
            <input
              type="color"
              value={canvasBgColor}
              onChange={(e) => setCanvasBgColor(e.target.value)}
            />
          </div>
          <button
            className="preview-toggle"
            onClick={() => setIsPreviewMode(!isPreviewMode)}
          >
            {isPreviewMode ? 'Exit Preview' : 'Preview Mode'}
          </button>
        </div>
      ) : selectedComp.type === 'text' ? (
        <div className="text-properties">
          <h3>Text Properties</h3>
          <div className="property-group">
            <label>Font Size</label>
            <select
              value={selectedComp.props.fontSize}
              onChange={(e) => handlePropertyChange('fontSize', e.target.value)}
            >
              <option value="12px">Small</option>
              <option value="16px">Medium</option>
              <option value="24px">Large</option>
              <option value="32px">Extra Large</option>
            </select>
          </div>
          <div className="property-group">
            <label>Text Color</label>
            <input
              type="color"
              value={selectedComp.props.color}
              onChange={(e) => handlePropertyChange('color', e.target.value)}
            />
          </div>
          <div className="property-group">
            <label>Text Align</label>
            <select
              value={selectedComp.props.textAlign}
              onChange={(e) => handlePropertyChange('textAlign', e.target.value)}
            >
              <option value="left">Left</option>
              <option value="center">Center</option>
              <option value="right">Right</option>
            </select>
          </div>
          <div className="property-group">
            <label>Font Style</label>
            <div className="style-buttons">
              <button
                className={`style-button ${
                  selectedComp.props.fontWeight === 'bold' ? 'active' : ''
                }`}
                onClick={() =>
                  handlePropertyChange(
                    'fontWeight',
                    selectedComp.props.fontWeight === 'bold' ? 'normal' : 'bold'
                  )
                }
              >
                Bold
              </button>
              <button
                className={`style-button ${
                  selectedComp.props.fontStyle === 'italic' ? 'active' : ''
                }`}
                onClick={() =>
                  handlePropertyChange(
                    'fontStyle',
                    selectedComp.props.fontStyle === 'italic' ? 'normal' : 'italic'
                  )
                }
              >
                Italic
              </button>
            </div>
          </div>
          <button
            className="delete-button"
            onClick={() => deleteComponent(selectedComponent)}
          >
            Delete Component
          </button>
        </div>
      ) : selectedComp.type === 'image' ? (
        <div className="image-properties">
          <h3>Image Properties</h3>
          <div className="property-group">
            <label>Image URL</label>
            <input
              type="text"
              value={selectedComp.props.src}
              onChange={(e) => handlePropertyChange('src', e.target.value)}
              placeholder="Enter image URL"
            />
          </div>
          <div className="property-group">
            <label>Alt Text</label>
            <input
              type="text"
              value={selectedComp.props.alt}
              onChange={(e) => handlePropertyChange('alt', e.target.value)}
              placeholder="Alternative text"
            />
          </div>
          <div className="property-group">
            <label>Width</label>
            <input
              type="text"
              value={selectedComp.props.width}
              onChange={(e) => handlePropertyChange('width', e.target.value)}
              placeholder="e.g., 200px or 50%"
            />
          </div>
          <button
            className="delete-button"
            onClick={() => deleteComponent(selectedComponent)}
          >
            Delete Component
          </button>
        </div>
      ) : selectedComp.type === 'button' ? (
        <div className="button-properties">
          <h3>Button Properties</h3>
          <div className="property-group">
            <label>Button Text</label>
            <input
              type="text"
              value={selectedComp.props.text}
              onChange={(e) => handlePropertyChange('text', e.target.value)}
            />
          </div>
          <div className="property-group">
            <label>Background Color</label>
            <input
              type="color"
              value={selectedComp.props.backgroundColor}
              onChange={(e) =>
                handlePropertyChange('backgroundColor', e.target.value)
              }
            />
          </div>
          <div className="property-group">
            <label>Text Color</label>
            <input
              type="color"
              value={selectedComp.props.color}
              onChange={(e) => handlePropertyChange('color', e.target.value)}
            />
          </div>
          <div className="property-group">
            <label>Font Size</label>
            <select
              value={selectedComp.props.fontSize}
              onChange={(e) => handlePropertyChange('fontSize', e.target.value)}
            >
              <option value="12px">Small</option>
              <option value="14px">Medium</option>
              <option value="16px">Large</option>
            </select>
          </div>
          <div className="property-group">
            <label>Padding</label>
            <input
              type="text"
              value={selectedComp.props.padding}
              onChange={(e) => handlePropertyChange('padding', e.target.value)}
              placeholder="e.g., 8px 16px"
            />
          </div>
          <button
            className="delete-button"
            onClick={() => deleteComponent(selectedComponent)}
          >
            Delete Component
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default PropertiesPanel;