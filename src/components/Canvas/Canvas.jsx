import { useContext } from 'react';
import { EditorContext } from '../../context/EditorContext';
import ButtonElement from '../elements/ButtonElement/ButtonElement';
import ImageElement from '../elements/ImageElement/ImageElement';
import TextElement from '../elements/TextElement/TextElement';
import VideoElement from '../elements/VideoElement/VideoElement';
import './Canvas.css';

const Canvas = () => {
  const {
    components,
    addComponent,
    selectedComponent,
    setSelectedComponent,
    isPreviewMode,
    canvasBgColor
  } = useContext(EditorContext);

  const handleDrop = (e) => {
    e.preventDefault();
    const type = e.dataTransfer.getData('component-type');
    addComponent(type);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const renderComponent = (component) => {
    switch (component.type) {
      case 'text':
        return <TextElement component={component} />;
      case 'image':
        return <ImageElement component={component} />;
      case 'button':
        return <ButtonElement component={component} />;
      case 'video':
        return <VideoElement component={component} />;
      default:
        return null;
    }
  };

  return (
    <div 
      className="canvas"
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      style={{ backgroundColor: canvasBgColor }}
      onClick={() => setSelectedComponent(null)}
    >
      {components.map((component) => (
        <div
          key={component.id}
          onClick={(e) => {
            e.stopPropagation();
            setSelectedComponent(component.id);
          }}
          className={`canvas-component ${
            selectedComponent === component.id && !isPreviewMode ? 'selected' : ''
          }`}
        >
          {renderComponent(component)}
        </div>
      ))}
    </div>
  );
};

export default Canvas;