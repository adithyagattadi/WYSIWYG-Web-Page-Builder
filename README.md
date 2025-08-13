# WYSIWYG Page Builder

<img width="1470" height="797" alt="image" src="https://github.com/user-attachments/assets/63b94926-def3-48a7-9291-3d28f62121ad" />

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
```
2. Install dependencies:
```bash
npm install
```
4. Start development server:
```bash
npm start
```
The app will open in your browser at http://localhost:3000

## Usage 🖱️

### Adding Components
- Drag elements from the left toolbar onto the canvas
- Supported components:
  - Text
  - Image (with upload capability)
  - Button
  - Video (YouTube/Vimeo)
  
### Editing Properties
- Click any component to select it
- Adjust properties in the right panel:
  - Text: Font, size, color, alignment
  - Images: Size, alt text
  - Buttons: Text, colors, padding
  - Videos: URL, dimensions
 
### Preview Mode
- Click "Toggle Preview" to see the final output
- Click "Exit Preview" to continue editing
