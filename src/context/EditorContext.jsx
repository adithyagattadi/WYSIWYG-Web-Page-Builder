import { createContext, useState } from 'react';

export const EditorContext = createContext();

export const EditorProvider = ({ children }) => {
  const [components, setComponents] = useState([]);
  const [selectedComponent, setSelectedComponent] = useState(null);
  const [isPreviewMode, setIsPreviewMode] = useState(false);
  const [canvasBgColor, setCanvasBgColor] = useState('#ffffff');

  const addComponent = (type) => {
    const newComponent = {
      id: Date.now().toString(),
      type,
      props: {
        ...defaultProps[type],
      },
    };
    setComponents([...components, newComponent]);
    setSelectedComponent(newComponent.id);
  };

  const updateComponent = (id, newProps) => {
    setComponents(
      components.map((comp) =>
        comp.id === id ? { ...comp, props: { ...comp.props, ...newProps } } : comp
      )
    );
  };

  const deleteComponent = (id) => {
    setComponents(components.filter((comp) => comp.id !== id));
    if (selectedComponent === id) {
      setSelectedComponent(null);
    }
  };

  const defaultProps = {
    text: {
      content: 'Edit this text',
      fontSize: '16px',
      color: '#000000',
      fontWeight: 'normal',
      fontStyle: 'normal',
      textAlign: 'left',
    },
    image: {
      src: '',
      alt: 'Image',
      width: '200px',
    },
    button: {
      text: 'Click me',
      backgroundColor: '#007bff',
      color: '#ffffff',
      fontSize: '14px',
      padding: '8px 16px',
    },
    // Bonus: Video component
    video: {
      url: '',
      width: '300px',
      height: '200px',
    },
  };

  return (
    <EditorContext.Provider
      value={{
        components,
        addComponent,
        updateComponent,
        deleteComponent,
        selectedComponent,
        setSelectedComponent,
        isPreviewMode,
        setIsPreviewMode,
        canvasBgColor,
        setCanvasBgColor,
      }}
    >
      {children}
    </EditorContext.Provider>
  );
};