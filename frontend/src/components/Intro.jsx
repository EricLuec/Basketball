import React from 'react';
import './MyComponent.css'; // Stil-Datei für CSS
import icon from 'public/euler.jpg'; // Importiere das Icon-Bild

function MyComponent() {
  return (
    <div className="my-component">
      <img src={icon} alt="Icon" className="icon" />
      <h1 className="title">Fetter Text</h1>
      <p className="description">Ein kleiner Text</p>
    </div>
  );
}

export default MyComponent;
