import React, { useState } from "react";
import { voteLink, commentLink, fetchLinkDetails } from "../api";

const LinkDetails = ({ link, comments, onBack, setComments, setLink }) => {
  const [newComment, setNewComment] = useState("");

  const handleCommentSubmit = async () => {
    if (!newComment.trim()) {
      alert("Debes escribir un comentario.");
      return;
    }

    try {
      await commentLink(link._id, newComment);
      setNewComment("");
      const updatedLinkDetails = await fetchLinkDetails(link._id);
      setComments(updatedLinkDetails.comments);

    } catch (error) {
      alert(`Error al enviar el comentario: ${error.message}`);
    }
  };

  const handleVote = async () => {
    try {
      const updatedLink = await voteLink(link._id);
      setLink((prevLink) => ({ ...prevLink, votes: updatedLink.votes }));
    } catch (error) {
      alert(`Error al votar: ${error.message}`);
    }
  };

  return (
    <div>
      <h2>Detalles</h2>
      <p><strong>Votos:</strong> {link.votes}</p>
      <button onClick={handleVote}>Votar</button>
      <div>
        <h3>Comentarios</h3>
        {comments.length ? (
          comments.map((comment) => (
            <div key={comment._id}>
              <p>{comment.content}</p>
              {/* <p><strong>Fecha:</strong> {new Date(comment.createdAt).toLocaleString()}</p> */}
            </div>
          ))
        ) : (
          <p>No hay comentarios para mostrar.</p>
        )}
        <textarea
          placeholder="Escribe tu comentario aquí"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        <button onClick={handleCommentSubmit}>Enviar comentario</button>
      </div>
      <button onClick={onBack}>Volver</button>
    </div>
  );
};

export default LinkDetails;
