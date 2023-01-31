import React from "react";
import Gif1 from "./assets/gif1.gif";
import Gif2 from "./assets/gif2.gif";
import Gif3 from "./assets/gif3.gif";
import Gif4 from "./assets/gif4.gif";
import BackgroundGif from "./assets/background.gif";

export default function Portfolio() {
  const redirectToSite = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{
        backgroundImage: `url(${BackgroundGif})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "100vh",
      }}
    >
      <div className="card-deck text-center">
        <div className="card mb-4">
          <img
            className="card-img-top gif-card"
            src={Gif1}
            alt="gif1"
            onClick={() =>
              redirectToSite("https://github.com/oyassine1999/E-Commerce")
            }
          />
        </div>
        <div className="card mb-4">
          <img
            className="card-img-top gif-card"
            src={Gif2}
            alt="gif2"
            onClick={() =>
              redirectToSite("https://github.com/oyassine1999/Employee-Tracker")
            }
          />
        </div>
        <div className="card mb-4">
          <img
            className="card-img-top gif-card"
            src={Gif3}
            alt="gif3"
            onClick={() =>
              redirectToSite(
                "https://github.com/oyassine1999/Read-me-generator."
              )
            }
          />
        </div>
        <div className="card mb-4">
          <img
            className="card-img-top gif-card"
            src={Gif4}
            alt="gif4"
            onClick={() =>
              redirectToSite(
                "https://github.com/oyassine1999/Team-Profile-Generator"
              )
            }
          />
        </div>
      </div>
    </div>
  );
}