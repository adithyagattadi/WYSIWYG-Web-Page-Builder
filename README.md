# WYSIWYG Page Builder

![Builder Screenshot](screenshot.png) <!-- Add a screenshot if available -->

A drag-and-drop web page builder inspired by WordPress and Wix, allowing users to create layouts with text, images, buttons, and video components.

## Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Component Structure](#component-structure)
- [Customization](#customization)
- [Troubleshooting](#troubleshooting)
- [License](#license)

## Features ✨
- **Drag-and-drop interface** for:
  - Text boxes
  - Images
  - Buttons 
  - Video embeds
- **Real-time property editing** panel
- **Preview mode** to view final output
- **Responsive design** works on all devices
- **Coming soon**: Export functionality

## Installation 💻

### Prerequisites
- Node.js (v14+)
- npm (v6+)

### Setup
1. Clone the repository:
```bash
git clone https://github.com/yourusername/wysiwyg-page-builder.git
cd wysiwyg-page-builder

2. Install dependencies:
```bash
npm install

3. Start development server:
```bash
npm start

The app will open in your browser at http://localhost:3000

## Usage 🖱️
### Adding Components
1. Drag elements from the left toolbar onto the canvas

2. Supported components:

Text
Image (with upload capability)
Button
Video (YouTube/Vimeo)

### Editing Properties
1. Click any component to select it

2. Adjust properties in the right panel:

Text: Font, size, color, alignment
Images: Size, alt text
Buttons: Text, colors, padding
Videos: URL, dimensions

### Preview Mode
Click "Toggle Preview" to see the final output

Click "Exit Preview" to continue editing

## Component Structure 🏗️

src/
├── components/
│   ├── Canvas/          # Main editing area
│   ├── Toolbar/         # Component palette
│   ├── PropertiesPanel/ # Right-side property editor
│   └── elements/        # Individual components
│       ├── TextElement/
│       ├── ImageElement/
│       ├── ButtonElement/
│       └── VideoElement/
├── context/             # State management
└── styles/              # Global styles

## Customization 🎨
### Adding New Components
1. Create new folder in src/components/elements/
2. Add to Toolbar.jsx
3. Update EditorContext.js

### Modifying Styles
Component-specific styles: Edit corresponding CSS files
Global styles: src/styles/

## Troubleshooting 🛠️
Issue	Solution
Can't drag components	1. Ensure react-dnd is installed
2. Restart development server
Properties panel not updating	1. Verify component is selected
2. Check browser console for errors
Video not embedding	1. Use only YouTube/Vimeo URLs
2. Ensure URL is in correct format
Styling issues	1. Clear browser cache
2. Verify CSS file imports

## License 📄
This project is licensed under the MIT License - see the LICENSE file for details.
# WYSIWYG-Web-Page-Builder
