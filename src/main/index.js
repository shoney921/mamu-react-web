import "./index.css";
import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { API_URL } from "../config/constants.js";
dayjs.extend(relativeTime);

function MainPage() {
  const [arts, setArts] = React.useState([]);
  React.useEffect(function() {
    axios
      .get(`${API_URL}/arts`)
      .then(function(result) {
        console.log(result);
        const arts = result.data.arts;
        setArts(arts);
      })
      .catch(function(error) {
        console.error("에러 발생 :", error);
      });
  }, []);

  return (
    <div>
      <div id="banner">
        <img src="images/banners/maum_banner2.png" alt="mamu banner" />
      </div>
      <h1>Art List</h1>
      <div id="art-list">
        {arts.map(function(art, index) {
          return (
            <div className="art-card">
              <Link className="art-link" to={`/arts/${art.id}`}>
                <div>
                  <img
                    className="art-img"
                    src={`${API_URL}/${art.imageUrl}`}
                    alt="art img"
                  />
                </div>
                <div className="art-contents">
                  <span className="artist-name">{art.artistName}</span>
                  <span className="art-name">{art.artName}</span>
                  <div className="art-date">
                    {dayjs(art.createdAt).fromNow()}
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MainPage;
