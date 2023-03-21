import "./index.css";
import React from "react";
import axios from "axios";

function MainPage() {
  const [arts, setArts] = React.useState([]);
  React.useEffect(function () {
    axios
      .get(
        "https://aacfac5b-039c-4e19-8f27-16a1ac1d8255.mock.pstmn.io/art-list"
      )
      .then(function (result) {
        console.log(result);
        const arts = result.data;
        setArts(arts);
      })
      .catch(function (error) {
        console.error("에러 발생 :", error);
      });
  }, []);

  return (
    <div>
      <div id="header">
        <div id="header-area">
          <img src="images/icons/mamulogo2.png" alt="mamu logo" />
        </div>
      </div>
      <div id="body">
        <div id="banner">
          <img src="images/banners/maum_banner2.png" alt="mamu banner" />
        </div>
        <h1>Art List</h1>
        <div id="art-list">
          {arts.map(function(art, index) {
            return (
              <div className="art-card">
                <div>
                  <img className="art-img" src={art.imageUrl} alt="art img" />
                </div>
                <div className="art-contents">
                  <span className="artist-name">{art.artistName}</span>
                  <span className="art-name">{art.artName}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div id="footer"></div>
    </div>
  );
}

export default MainPage;
