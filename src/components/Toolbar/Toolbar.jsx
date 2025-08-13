import './Toolbar.css';

const Toolbar = () => {
  const handleDragStart = (e, type) => {
    e.dataTransfer.setData('component-type', type);
    e.dataTransfer.effectAllowed = 'copy';
  };

  return (
    <div className="toolbar">
      <h2>Components</h2>
      <div 
        className="toolbar-item" 
        draggable
        onDragStart={(e) => handleDragStart(e, 'text')}
      >
        Text Box
      </div>
      <div 
        className="toolbar-item" 
        draggable
        onDragStart={(e) => handleDragStart(e, 'image')}
      >
        Image
      </div>
      <div 
        className="toolbar-item" 
        draggable
        onDragStart={(e) => handleDragStart(e, 'button')}
      >
        Button
      </div>
      {/* Bonus Component */}
      <div 
        className="toolbar-item" 
        draggable
        onDragStart={(e) => handleDragStart(e, 'video')}
      >
        Video
      </div>
    </div>
  );
};

export default Toolbar;