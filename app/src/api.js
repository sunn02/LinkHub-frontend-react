const API_URL = "http://localhost:3005";

const handleHTTPError = async (response) => {
  if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);
  return response.json();
};

export const fetchLinks = async (tagFilter = "") => {
  const url = tagFilter ? `${API_URL}/links/tags/${tagFilter}` : `${API_URL}/links`;
  const response = await fetch(url);
  return await handleHTTPError(response);
};

export const fetchLinkDetails = async (linkId) => {
  const link = await fetch(`${API_URL}/links/${linkId}`).then(handleHTTPError);
  const comments = await fetch(`${API_URL}/comments/${linkId}`).then(handleHTTPError);
  return { link, comments };
};

export const saveLink = async (linkData) => {
  const response = await fetch(`${API_URL}/links`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(linkData),
  });
  return await handleHTTPError(response);
};

export const voteLink = async (linkId) => {
  const response = await fetch(`${API_URL}/links/vote/${linkId}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ vote: 1 }),
  });
  return await handleHTTPError(response);
};

export const commentLink = async (linkId, content) => {
  const response = await fetch(`${API_URL}/comments/${linkId}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ content }),
  });
  return await handleHTTPError(response);
};
