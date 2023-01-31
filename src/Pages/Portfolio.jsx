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
      style={{
        backgroundImage: `url(${BackgroundGif})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "100vh",
      }}
    >
      <div className="gifcards">
        <img
          src={Gif1}
          alt="gif1"
          onClick={() =>
            redirectToSite("https://github.com/oyassine1999/E-Commerce")
          }
        />
        <img
          src={Gif2}
          alt="gif2"
          onClick={() => redirectToSite("http://site2.com")}
        />
        <img
          src={Gif3}
          alt="gif3"
          onClick={() => redirectToSite("http://site3.com")}
        />
        <img
          src={Gif4}
          alt="gif4"
          onClick={() => redirectToSite("http://site4.com")}
        />
      </div>
    </div>
  );
}
