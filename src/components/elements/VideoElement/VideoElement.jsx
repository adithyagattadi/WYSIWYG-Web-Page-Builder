import { useContext, useState } from 'react';
import { EditorContext } from '../../../context/EditorContext';
import './VideoElement.css';

const VideoElement = ({ component }) => {
  const { updateComponent, isPreviewMode, deleteComponent } = useContext(EditorContext);
  const [inputValue, setInputValue] = useState(component.props.url || '');

  const convertToEmbedUrl = (url) => {
    if (url.includes('youtube.com') || url.includes('youtu.be')) {
      const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
      const match = url.match(regExp);
      const videoId = (match && match[2].length === 11) ? match[2] : null;
      return videoId ? `https://www.youtube.com/embed/${videoId}` : url;
    }
    if (url.includes('vimeo.com')) {
      const regExp = /^.*(vimeo.com\/)((channels\/[A-z]+\/)|(groups\/[A-z]+\/videos\/))?([0-9]+)/;
      const match = url.match(regExp);
      const videoId = match ? match[5] : null;
      return videoId ? `https://player.vimeo.com/video/${videoId}` : url;
    }
    return url;
  };

  const handleUrlChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleUrlSubmit = () => {
    const embedUrl = convertToEmbedUrl(inputValue);
    updateComponent(component.id, { 
      url: embedUrl,
      width: component.props.width || '560px',
      height: component.props.height || '315px'
    });
  };

  const handlePropertyChange = (prop, value) => {
    updateComponent(component.id, { [prop]: value });
  };

  return (
    <div className="video-element">
      {component.props.url ? (
        <div className="video-container">
          <iframe
            width={component.props.width}
            height={component.props.height}
            src={component.props.url}
            title="Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          
          {!isPreviewMode && (
            <div className="video-controls">
              <div className="size-controls">
                <label>Width:</label>
                <input
                  type="text"
                  value={component.props.width}
                  onChange={(e) => handlePropertyChange('width', e.target.value)}
                  placeholder="e.g., 500px"
                />
                <label>Height:</label>
                <input
                  type="text"
                  value={component.props.height}
                  onChange={(e) => handlePropertyChange('height', e.target.value)}
                  placeholder="e.g., 300px"
                />
              </div>
              <div className="action-buttons">
                <button 
                  className="edit-btn"
                  onClick={() => updateComponent(component.id, { url: '' })}
                >
                  Change Video
                </button>
                <button 
                  className="delete-btn"
                  onClick={() => deleteComponent(component.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="video-input-container">
          <input
            type="text"
            placeholder="Paste YouTube or Vimeo URL"
            value={inputValue}
            onChange={handleUrlChange}
            onKeyPress={(e) => e.key === 'Enter' && handleUrlSubmit()}
          />
          <button 
            className="submit-btn"
            onClick={handleUrlSubmit}
          >
            Embed Video
          </button>
        </div>
      )}
    </div>
  );
};

export default VideoElement;