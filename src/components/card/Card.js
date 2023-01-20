import "../card/Card.css";
import image_profile from "../../static/imgae_perfil.png";
import { useEffect } from "react";
import { useState } from "react";
function Card({ name, url, public_repos, html_url, last_update }) {
  const [dateFormatted, setDateFormatted] = useState("");

  useEffect(() => {
    if (last_update)
      setDateFormatted(last_update.slice(0, 10).split("-").reverse().join("/"));
  }, [last_update]);

  return (
    <>
      <div className="card">
        <div className="cardInto">
          <div className="image">
            <img src={url ? url : image_profile} alt="img.avatar" />
          </div>
          <div className="description">
            {name && <h1 className="colorYellow">{name}</h1>}
            <div className="link">
              {html_url && (
                <a href={html_url} target="_blank">
                  To Visit
                </a>
              )}
            </div>
            <div>
              {last_update && (
                <span>
                  Last Update at:{" "}
                  <span className="colorYellow">{dateFormatted}</span>
                </span>
              )}
            </div>
            <div>
              {public_repos && (
                <p>
                  Repos: <span className="colorYellow">{public_repos}</span>
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
