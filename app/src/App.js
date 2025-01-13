import React, { useState, useEffect } from "react";
import { fetchLinks, fetchLinkDetails } from "./api";
import LinkList from "./components/linkList";
import LinkDetails from "./components/linkDetails";
import SaveLink from "./components/saveLink";

function App() {
  const [view, setView] = useState("home");
  const [links, setLinks] = useState([]);
  const [selectedLink, setSelectedLink] = useState(null);
  const [comments, setComments] = useState([]);
  const [tagFilter, setTagFilter] = useState("");

  useEffect(() => {
    if (view === "home") {
      fetchLinks(tagFilter).then(setLinks).catch(console.error);
    }
  }, [view, tagFilter]);

  const handleSelectLink = async (link) => {
    const { link: selectedLink, comments } = await fetchLinkDetails(link._id);
    setSelectedLink(selectedLink);
    setComments(comments);
    setView("details");
  };

  const handleBack = () => setView("home");

  const handleFilterSubmit = () => setView("home");

  return (
    <div>
      {view === "home" && (
        <LinkList
          links={links}
          tagFilter={tagFilter}
          onFilterChange={(e) => setTagFilter(e.target.value)}
          onFilterSubmit={handleFilterSubmit}
          onSelectLink={handleSelectLink}
        />
      )}
      {view === "details" && (
        <LinkDetails link={selectedLink} comments={comments} onBack={handleBack} />
      )}
      {view === "save" && <SaveLink onBack={handleBack} />}
      <button onClick={() => setView("save")}>Añadir enlace</button>
    </div>
  );
}

export default App;
