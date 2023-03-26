import "./index.css";
import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function ArtPage() {
  const { id } = useParams();
  const [art, setArt] = React.useState(null);

  React.useEffect(function() {
    axios
      .get(`http://localhost:8080/arts/${id}`)
      .then(function(result) {
        console.log(result);
        setArt(result.data.art);
      })
      .catch(function(error) {
        console.error("에러 발생 :", error);
      });
  }, []);

  if (art === null) {
    return <h1>상품 정보를 받고 있습니다...</h1>;
  }

  return (
    <div>
      <div id="image-box">
        <img src={"/" + art.imageUrl} alt="art image" />
      </div>
      <div id="art-box">
        <div id="artName">{art.artName}</div>
        <div id="artistName">{art.artistName}</div>
        <div id="createAt">2023.03.14</div>
        <div id="description">{art.description}</div>
      </div>
    </div>
  );
}

export default ArtPage;
