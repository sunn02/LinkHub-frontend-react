import React from "react";

const LinkList = ({ links, onSelectLink, onFilterChange, tagFilter, onFilterSubmit }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Filtrar por etiqueta"
        value={tagFilter}
        onChange={onFilterChange}
      />
      <div>
        {links.length ? (
          links.map((link) => (
            <div key={link._id}>
              <p><strong>Título:</strong> {link.title}</p>
              <p><strong>URL:</strong> <a href={link.url} target="_blank" rel="noopener noreferrer">{link.url}</a></p>
              <p><strong>Descripción:</strong> {link.description}</p>
              <p><strong>Etiquetas:</strong> {link.tags?.join(", ") || "Sin etiquetas"}</p>
              <button onClick={() => onSelectLink(link)}>Ver detalles</button>
            </div>
          ))
        ) : (
          <p>No se encontraron enlaces.</p>
        )}
      </div>
    </div>
  );
};

export default LinkList;
