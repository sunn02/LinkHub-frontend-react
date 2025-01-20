import React, { useState } from "react";
import { saveLink } from "../api";

const SaveLink = ({ onBack }) => {
  const [newLink, setNewLink] = useState({ title: "", url: "", description: "", tags: "" });

  const handleSave = async () => {
    if (!newLink.title || !newLink.url) {
      alert("Por favor, ingresa un título y una URL.");
      return;
    }

    const tags = newLink.tags
      .split(",")
      .map((tag) => tag.trim())
      .filter((tag) => tag.length > 0);

    const linkData = { ...newLink, tags };

    try {
      await saveLink(linkData);
      console.log("Enlace guardado exitosamente.");
      onBack();
    } catch (error) {
      alert(`Error al guardar el enlace: ${error.message}`);
    }
  };

  return (
    
    <div>
    <div>
      <input
        type="text"
        placeholder="Título del enlace"
        value={newLink.title}
        onChange={(e) => setNewLink({ ...newLink, title: e.target.value })}
      />
      <input
        type="url"
        placeholder="URL del enlace"
        value={newLink.url}
        onChange={(e) => setNewLink({ ...newLink, url: e.target.value })}
      />
      <input
        type="text"
        placeholder="Descripción del enlace"
        value={newLink.description}
        onChange={(e) => setNewLink({ ...newLink, description: e.target.value })}
      />
      <input
        type="text"
        placeholder="Etiquetas (separadas por comas)"
        value={newLink.tags}
        onChange={(e) => setNewLink({ ...newLink, tags: e.target.value })}
      />
      <button onClick={handleSave}>Guardar enlace</button>
    </div>
      <button onClick={onBack}>Volver</button>
    </div>
  );
};

export default SaveLink;
