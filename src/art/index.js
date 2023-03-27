import "./index.css";
import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../config/constants.js";
import dayjs from "dayjs";

function ArtPage() {
  const { id } = useParams();
  const [art, setArt] = React.useState(null);

  React.useEffect(function() {
    axios
      .get(`${API_URL}/arts/${id}`)
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
        <img src={`${API_URL}/${art.imageUrl}`} alt="art image" />
      </div>
      <div id="art-box">
        <div id="artName">{art.artName}</div>
        <div id="artistName">{art.artistName}</div>
        <div id="description">{art.description}</div>
        <div id="createAt">{dayjs(art.createdAt).format("YYYY-MM-DD")}</div>
      </div>
    </div>
  );
}

export default ArtPage;
