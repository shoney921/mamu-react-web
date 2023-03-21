import React from "react";
import { useParams } from "react-router-dom";

function ArtPage() {
  const { id } = useParams();
  return <h1> {id} detail art page</h1>;
}

export default ArtPage;
