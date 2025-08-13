import './App.css';
import Canvas from './components/Canvas/Canvas';
import PropertiesPanel from './components/PropertiesPanel/PropertiesPanel';
import Toolbar from './components/Toolbar/Toolbar';
import { EditorProvider } from './context/EditorContext';

function App() {
  return (
    <EditorProvider>
      <div className="app">
        <div className="main-content">
          <Toolbar />
          <Canvas />
          <PropertiesPanel />
        </div>
        <div className="status-bar">
          <span>WYSIWYG Page Builder</span>
          <span>Drag and drop to build your page</span>
        </div>
      </div>
    </EditorProvider>
  );
}

export default App;
