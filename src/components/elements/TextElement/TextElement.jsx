import { useContext, useState } from 'react';
import { EditorContext } from '../../../context/EditorContext';
import './TextElement.css';

const TextElement = ({ component }) => {
  const { updateComponent, isPreviewMode } = useContext(EditorContext);
  const [isEditing, setIsEditing] = useState(false);
  const [content, setContent] = useState(component.props.content);

  const handleBlur = () => {
    updateComponent(component.id, { content });
    setIsEditing(false);
  };

  return (
    <div
      className="text-element"
      style={{
        fontSize: component.props.fontSize,
        color: component.props.color,
        fontWeight: component.props.fontWeight,
        textAlign: component.props.textAlign,
        fontStyle: component.props.fontStyle,
      }}
      onClick={() => !isPreviewMode && setIsEditing(true)}
    >
      {isEditing && !isPreviewMode ? (
        <textarea
          autoFocus
          value={content}
          onChange={(e) => setContent(e.target.value)}
          onBlur={handleBlur}
          style={{
            width: '100%',
            height: '100%',
            border: 'none',
            outline: 'none',
            resize: 'none',
            fontSize: component.props.fontSize,
            color: component.props.color,
            fontWeight: component.props.fontWeight,
            textAlign: component.props.textAlign,
            fontStyle: component.props.fontStyle,
            backgroundColor: 'transparent',
          }}
        />
      ) : (
        <div dangerouslySetInnerHTML={{ __html: content }} />
      )}
    </div>
  );
};

export default TextElement;