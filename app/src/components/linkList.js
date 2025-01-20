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
              <p><strong> {link.title}</strong></p>
              <p> <a href={link.url} target="_blank" rel="noopener noreferrer">{link.url}</a></p>
              <p> {link.description}</p>
              <p><strong>Tags:</strong> {link.tags?.join(", ") || "Sin etiquetas"}</p>
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
