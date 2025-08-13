import { useContext, useState } from 'react';
import { EditorContext } from '../../../context/EditorContext';
import './ButtonElement.css';

const ButtonElement = ({ component }) => {
  const { updateComponent, isPreviewMode } = useContext(EditorContext);
  const [isEditing, setIsEditing] = useState(false);
  const [buttonText, setButtonText] = useState(component.props.text);

  const handleTextChange = (e) => {
    setButtonText(e.target.value);
  };

  const saveChanges = () => {
    updateComponent(component.id, { text: buttonText });
    setIsEditing(false);
  };

  return (
    <div className="button-element">
      {isEditing && !isPreviewMode ? (
        <div className="button-edit-mode">
          <input
            type="text"
            value={buttonText}
            onChange={handleTextChange}
            onBlur={saveChanges}
            onKeyPress={(e) => e.key === 'Enter' && saveChanges()}
            autoFocus
          />
        </div>
      ) : (
        <button
          className="styled-button"
          style={{
            backgroundColor: component.props.backgroundColor,
            color: component.props.color,
            fontSize: component.props.fontSize,
            padding: component.props.padding,
          }}
          onClick={() => !isPreviewMode && setIsEditing(true)}
        >
          {component.props.text}
        </button>
      )}
    </div>
  );
};

export default ButtonElement;